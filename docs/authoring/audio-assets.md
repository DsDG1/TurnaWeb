# 音频资产

> 听力课的音频分两类：引用单词/表达 id 的走**运行时 TTS**（不落盘），具名听力素材落在 `assets/sounds/<lang>/listening/<asset>.mp3`。具名素材是 Lesson 的可发布依赖，发布前用 `audio-manifest` 校验引用闭合。

![音频目录结构 + manifest 状态色（present / missing）](/images/authoring/audio-tree.svg)

![生成听力音频对话框（实际运行截图：voice / model / speed / force 选项）](/images/authoring/_real/10-generate-audio.png)

## `audioAsset` 的两种取值

| 取值 | 解析 | 落盘 |
| --- | --- | --- |
| 词/表达 id（如 `w-merhaba`） | 运行时 TTS 朗读该词条 | 不落盘 |
| 具名素材（如 `s1-dialogue-a`） | `assets/sounds/<lang>/listening/<asset>.mp3` | 必须存在 |

`audioAssets` 数组同理，可混入 `anki://<importId>/<file>`（导入的 Anki 媒体，由应用内 Anki 目录解析，不受 manifest 校验）。

## 目录结构

```text
assets/sounds/<lang>/
└── listening/
    ├── <asset>.mp3        # 具名听力素材（生成或人工录音，平铺）
    ├── bgm/               # 混音用背景音素材池（bgmA.mp3 …）
    ├── debut/             # 混音用开场素材池（debutA.mp3 …）
    └── fin/               # 混音用收束素材池（finA.mp3 …）
```

- 具名素材的文件名 = `audioAsset` 标识符 + `.mp3`。
- `bgm/`、`debut/`、`fin/` 是 `tool/mix_listening_a1.py` 的混音素材池，不通过 `audioAsset` 引用。

::: warning 引用与文件必须成对提交
**禁止**仅添加文件而不更新引用；**禁止**仅添加引用而不提交文件。后者在 manifest 中直接标 `missing` 并阻断发布。
:::

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

## 录音要求

- 母语者或达到流利程度的说话者。
- 环境噪声低且稳定（SNR ≥ 40 dB）。
- 麦克风距离 10–20 cm，控制爆破音。
- 自然、清晰、面向学习者的语速。
- 不使用夸张语调或戏剧化表演。
- 不含未经许可的音乐或第三方内容。
- 段落之间保留 0.5–1.0 s 自然间隔。

## Manifest 校验

```bash
python tool/course_cli.py audio-manifest --course-dir assets/courses/turkish --output manifest.csv
```

只统计「具名听力素材」——词/表达 id 引用与 `anki://` 前缀自动跳过。输出 CSV 列：

| 列 | 含义 |
| --- | --- |
| `asset_id` | JSON 中引用的标识符 |
| `type` | 固定 `listening` |
| `referenced_by` | 引用位置（`section/unit/lesson`） |
| `status` | `present`（`listening/<asset>.mp3` 存在）/ `missing` |

发布门禁：**禁止**存在 `status=missing` 的引用 —— 先补录或删除引用。

## 替换生成音频

人工录音可覆盖同 ID 的 TTS 生成文件。提交说明中标记替换关系：

```text
- 替换 audioAsset: s1-dialogue-a
  原: TTS (MiniMax speech-2.8-hd)
  新: 人工录音 / 文件: assets/sounds/turkish/listening/s1-dialogue-a.mp3
  授权: CC-BY-SA 4.0 / 作者张三
```

ID 保持不变，Lesson JSON 无需因音质替换而修改。

## 生成听力音频（MiniMax TTS）

工具栏 **「生成听力音频」** 扫描当前课程所有听力课的 `listeningPhases`，对有 `transcript` 的 phase 调 MiniMax TTS 生成缺失的 MP3。底层脚本是 `tool/generate_audio.py`（子命令 `all` / `list` / `speak`），GUI 以子进程方式调用并显式传 `--course-dir` / `--sounds-dir`。

### 预览

打开对话框前先调 `generate_audio_client.preview_generation(course_dir, settings)` 返回 `{total, existing}` —— `total` 是可生成的 phase 数（缺 `audioAsset` 或 `transcript` 的不计入），`existing` 是已存在 MP3 的数量。

### 对话框字段

`GenerateAudioDialog`（`tool/gui/src/dialogs/generate_audio_dialog.py`）暴露：

| 字段 | 类型 | 约束 / 默认 |
| --- | --- | --- |
| `voice_id` | 可编辑下拉 | 内置常见 MiniMax 音色（`female-tianmei` 等）；默认 `female-tianmei` |
| `model` | 自由文本 | 默认 `speech-2.8-hd` |
| `speed` | float | [0.5, 2.0]，默认 **0.9** |
| `force` | bool | 强制重生成已存在的 MP3（默认关，保护人工录音） |
| `api_key` | string | **仅当前会话内存**；关闭即清空，不入 QSettings |

`voice_id` / `model` / `speed` / `force` 持久化到 QSettings（`tts/*`）；`api_key` 永不落盘。

### 执行

`GenerateAudioWorker`（`tool/gui/src/application/audio_worker.py`）在线程中跑子进程，逐条生成并回报进度；`job_tray` 在工具栏右侧显示「正在生成听力音频…」，`QProgressDialog` 提供取消（已生成文件保留）。失败项记 telemetry，需在设置 → 操作日志查看明细后人工处置 —— 没有自动 fallback 链，失败即跳过。

## 授权

提交者必须：

- 拥有录音版权或有效授权。
- 允许项目长期、免版税地随 Turna 分发。
- 不含未授权背景音乐或第三方素材。
- 在 `release-notes` 中标注授权协议（CC-BY / CC-BY-SA / 自有版权等）。

## 录音 QA 清单

发布前逐项核对：

- [ ] 资产在 manifest 中 `status=present`。
- [ ] JSON 引用与文件名严格一致（大小写敏感）。
- [ ] 文件可在目标设备解码（`ffmpeg -i <file>` 验证）。
- [ ] 响度与相邻素材差异 ≤ 2 LUFS。
- [ ] 无超长静音（> 0.5 s 的内部静音需剪辑）。
- [ ] 听力题具有重播按钮与必要文本边界。
- [ ] 高频段无金属感、底噪稳定。

## 故障与处置

| 现象 | 根因 | 处置 |
| --- | --- | --- |
| 客户端无法播放 | 编解码或采样率异常 | `ffprobe` 检查并重导出 |
| 响度跳跃 | 录音条件不一致 | 在 DAW 中归一化至 -16 LUFS |
| 引用了不存在的文件 | 删除录音未联动 | manifest 标 `missing`；删除引用或补录 |
| 客户端解码抖动 | MP3 VBR 极端设置 | 重导出为 CBR 192 kbps |

## 相关文档

- [音频、TTS 与朗读](/guide/audio-and-tts)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [课程目录约定](/authoring/course-layout)
- [发布检查表](/authoring/release-checklist)
- [校验与 Lint](/authoring/validation)
