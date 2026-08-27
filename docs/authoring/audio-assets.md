# 音频资产

> 人工录音用于听力课、长短语与对话。单词与短表达保留运行时 TTS，不为每个词捆绑独立录音。音频是 Lesson 的可发布依赖，必须在发布前完成 manifest 校验。

![音频目录结构 + manifest 三色状态（绿 / 黄 / 红）](/images/authoring/audio-tree.svg)

![生成听力音频对话框（实际运行截图：voice / model / speed / force 选项）](/images/authoring/_real/10-generate-audio.png)

## 格式规范

| 属性 | 要求 |
| --- | --- |
| 容器 | MP3 |
| 采样率 | 44.1 kHz |
| 声道 | 单声道优先；接受立体声 |
| 比特率 | ≥ 128 kbps |
| 前后静音 | 各 ≤ 0.3 s |
| 峰值 | 不得削波（true peak ≤ -1 dBTP） |
| 响度 | 与相邻素材差异 ≤ 2 LUFS |

不满足以上规范的素材可能在客户端解码失败、播放抖动或与 TTS 资源响度失衡。

## 路径结构

```text
assets/sounds/<lang>/
├── listening/             # 普通人工对话录音
├── bgm/                   # 听力节目背景音
├── debut/                 # 听力课 `debut` 阶段素材
├── fin/                   # 听力课 `fin` 阶段素材
└── lessons/<lesson_id>/   # 该 Lesson 专用素材
```

文件名必须与 Lesson JSON 中 `audioAsset` 的标识符一致，并以 `.mp3` 结尾。**禁止**仅添加文件而不更新引用；**禁止**仅添加引用而不提交文件。发布前由 manifest 校验保证引用闭合。

## 录音要求

- 母语者或达到流利程度的说话者。
- 环境噪声低且稳定（SNR ≥ 40 dB）。
- 麦克风距离 10–20 cm，控制爆破音。
- 自然、清晰、面向学习者的语速。
- 不使用夸张语调或戏剧化表演。
- 不含未经许可的音乐或第三方内容。
- 段落之间保留 0.5–1.0 s 自然间隔。

## 替换生成音频

人工录音可覆盖同 ID 的 TTS 生成文件。提交说明中标记替换关系：

```text
- 替换 audioAsset: tr/listening/l-u1-greetings-intro/main
  原: TTS (espeak-ng tr)
  新: 人工录音 / 文件: assets/sounds/turkish/listening/l-u1-greetings-intro/main.mp3
  授权: CC-BY-SA 4.0 / 作者张三
```

ID 保持不变。Lesson JSON 无需因音质替换而修改。`tool/gui` 的发布流程会重新扫描 `assets/sounds` 并刷新 manifest。

## Manifest 校验

```bash
python tool/course_cli.py audio-manifest --output /tmp/manifest.csv
```

输出 CSV 字段：

| 列 | 含义 |
| --- | --- |
| `lang` | 语言代码 |
| `audioAsset` | JSON 中引用的标识符 |
| `expected_path` | 期望文件路径 |
| `exists` | `true` / `false` |
| `size_bytes` | 文件大小 |
| `duration_s` | 实际时长 |
| `loudness_lufs` | 响度 |
| `peak_dbtp` | true peak |
| `kind` | `tts_generated` / `human_recorded` / `missing` |

发布门禁：**禁止**存在 `exists=false` 的引用。所有 `kind=missing` 必须先补录或删除引用。

## 录音 QA 清单

发布前逐项核对：

- [ ] 资产在 manifest 中存在。
- [ ] JSON 引用与文件名严格一致（大小写敏感）。
- [ ] 文件可在目标设备解码（`ffmpeg -i <file>` 验证）。
- [ ] 响度与相邻素材差异 ≤ 2 LUFS。
- [ ] 无超长静音（> 0.5 s 的内部静音需剪辑）。
- [ ] 听力题具有重播按钮与必要文本边界。
- [ ] 高频段无金属感、底噪稳定。
- [ ] 同一段素材在 Android / iOS / Web 三端均可正常播放。

## 授权

提交者必须：

- 拥有录音版权或有效授权。
- 允许项目长期、免版税地随 Turna 分发。
- 不含未授权背景音乐或第三方素材。
- 在 `release-notes` 中标注授权协议（CC-BY / CC-BY-SA / 自有版权等）。

无授权文件在 `lint` 中被标红，发布门禁阻断。

## 听力课三段式

```text
listeningPhases:
  - kind: debut  → 预听 / 激活背景知识
  - kind: main   → 主音频 / 训练目标结构
  - kind: fin    → 收束 / 后测衔接
```

`debut` / `main` / `fin` 三段独立音频资产，对应 Pre-listening / While-listening / Post-listening 教学框架。主音频支持叠加场景背景音（来自 `bgm/`）以训练环境噪音中的语音感知能力。

## 生成听力音频（MiniMax TTS）

工具栏 **「生成听力音频」** 按钮（`app.py::_on_generate_audio`）扫描当前课程所有 `listeningPhases` 与 `audioAsset` 引用，调 MiniMax TTS 生成缺失的 MP3。

### 预览

打开对话框前先调 `generate_audio_client.preview_generation(course_dir, settings)`：

```json
{
  "total": 12,                    // 全课程需生成的 audioAsset 数
  "existing": 3,                  // 已存在 MP3 的数量
  "sounds_dir": "<repo>/assets/sounds/turkish"
}
```

`sounds_dir_for(course_dir, settings)` 在设置里可被覆盖（QSettings `audio/sounds_root`）。`total - existing` 即本次要生成的项数；用户可在对话框内选 `force=true` 强制重生成。

### 对话框字段

`GenerateAudioDialog`（`tool/gui/src/dialogs/generate_audio_dialog.py:33`）暴露：

| 字段 | 类型 | 约束 |
| --- | --- | --- |
| `voice_id` | 枚举 | MiniMax voice 列表，默认 `male-qn-qingse` |
| `model` | 枚举 | `speech-01` / `speech-02` |
| `speed` | float | [0.5, 2.0]，默认 1.0 |
| `force` | bool | 强制重生成已存在的 MP3 |
| `api_key` | string | **仅当前会话内存**；关闭即清空，不入 QSettings |

### 异步 Worker

`GenerateAudioWorker`（`tool/gui/src/backend/generate_audio_worker.py`）在线程中执行：

```text
preview.entries ──► 逐条 fetch ──► MiniMax TTS API
                                  │
                                  ▼
                            保存至 sounds_dir
                                  │
                                  ▼
                            progress(done, total)
```

| 信号 | payload | 用途 |
| --- | --- | --- |
| `progress(done, total)` | int × 2 | 更新 `QProgressDialog` 与 `job_tray` 进度条 |
| `finished_ok(generated, skipped, total)` | int × 3 | 完成后弹信息框；telemetry 写 `tts.generate` |
| `failed(msg)` | str | 失败时弹告警；telemetry 写 `tts.generate_failed` |

`job_tray`（`tool/gui/src/widgets/job_tray.py`）在生成时于工具栏右侧显示「正在生成听力音频…」小指示，结束时自动收尾。`QProgressDialog` 提供「取消」按钮，触发 `worker.cancel()`，已生成文件保留。

Telemetry 事件：

```python
telemetry.record_event("tts.open",        payload={"total":N, "existing":M, "sounds_dir":...})
telemetry.record_event("tts.generate",     payload={"generated":K, "skipped":S, "total":N})
telemetry.record_error(RuntimeError(msg), context={"event":"tts.generate_failed"})
```

## 与 GUI 工具栏的对应

| GUI 操作 | 影响 |
| --- | --- |
| 发布 | 触发 `sound-manifest` + `validate`；列出缺失资产 |
| 总览 / 资源库 | 不直接编辑音频；只读引用 |
| 教材导入 | 提取的对话不自动生成音频；标记待补录 |
| 设置 → AI → 音频生成 | 配置 TTS 服务；`api_key` 仅内存 |
| 生成听力音频（工具栏） | 调 `preview_generation` + `GenerateAudioWorker` 异步生成；job_tray 显示进度 |

## AI 能力

音频资产是 Lesson 唯一的外部依赖，其生成由 MiniMax TTS 驱动，AI 仅在「选 voice / 选 model / 失败降级」三处介入。

### AI 听力音频生成

`GenerateAudioDialog`（`tool/gui/src/dialogs/generate_audio_dialog.py:33`）的字段与 AI 决策路径：

| 字段 | 决策 |
| --- | --- |
| `voice_id` | 由 `get_voice_list()` 拉取 MiniMax voice 列表（`tool/gui/src/backend/generate_audio_client.py`）；默认 `male-qn-qingse` |
| `model` | `speech-01` / `speech-02`；模型不同 → 音质、语速上限、并发限制不同 |
| `speed` | [0.5, 2.0]，默认 1.0；超出范围由对话框拦截 |
| `force` | 强制重生成已存在的 MP3；默认关（保留人工录音） |
| `api_key` | **仅当前会话内存**；关闭即清空，不入 QSettings |

`preview_generation(course_dir, settings)` 返回 `{total, existing, sounds_dir}`，AI 不参与 — 该步骤只算需要生成的项数。

### AI 选 voice 的依据

`Settings` 暴露「按节难度自动选 voice」开关（`QSettings/audio/auto_select_voice`，默认关）：

| 节难度 | voice 类别 | 示例 |
| --- | --- | --- |
| A1 / A2 | 慢速清晰 | `male-qn-jingying` |
| B1 | 中性 | `male-qn-qingse` |
| B2 / C1 | 自然流利 | `male-qn-badao` |

自动选 voice 仅在 `voice_id` 留空时生效；用户手动指定时优先。

### AI 音频失败模式

`GenerateAudioWorker` 内部 fallback chain：

```text
voice_id 失效（4xx）  ──► fallback voice（同 model）
   │
   ▼
model 不支持（404）   ──► fallback model（speech-02 → speech-01）
   │
   ▼
网络失败（超时 / 5xx）──► 重试 ai_retry_max 轮（指数退避）
   │
   ▼
仍失败               ──► 跳过该 phase 仅保留文本（listeningPhases[].audioAsset=null）
                       + telemetry.record_error("tts.generate_failed")
                       + 状态栏提示「该 phase 音频未生成，发布前请补录或保留 TTS fallback」
```

任何 fallback 都写入 `telemetry.record_error(exc, context={"event":"tts.generate_failed", "voice_id":..., "model":...})`，可在设置 → 操作日志查看。

### AI 自动选 voice 对体积的影响

按节难度自动选 voice 时，由于 voice 模型与采样率差异，单文件大小波动约 ±15%。Section 累计音频超 60 MB 时 lint 标黄，发布门禁不阻断但移动端首屏包体检查会失败。

更多 TTS 失败降级链与 telemetry 事件见 [AI 课程生成](/authoring/ai-course-generation#15-设置与运维)。

## 性能与体积

| 限制 | 阈值 |
| --- | --- |
| 单文件大小 | ≤ 4 MB |
| 单 Section 累计音频 | ≤ 60 MB |
| 客户端首包压缩比 | ≤ 35% |
| 单 Lesson 引用音频数 | ≤ 12 |

超过阈值在 `lint` 中标黄。CI 不阻断发布，但移动端首屏包体检查会失败。

## 故障与处置

| 现象 | 根因 | 处置 |
| --- | --- | --- |
| 客户端无法播放 | 编解码或采样率异常 | `ffprobe` 检查并重导出 |
| 响度跳跃 | 录音条件不一致 | 在 DAW 中归一化至 -16 LUFS |
| 引用了不存在的文件 | 删除录音未联动 | manifest 标红；删除引用或补录 |
| 客户端解码抖动 | MP3 VBR 极端设置 | 重导出为 CBR 192 kbps |

## 相关文档

- [音频、TTS 与朗读](/guide/audio-and-tts)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [课程目录约定](/authoring/course-layout)
- [发布检查表](/authoring/release-checklist)
- [校验与 Lint](/authoring/validation)
