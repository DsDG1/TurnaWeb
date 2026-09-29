# 导入 Anki 牌组

本页描述 Official-first 导入。Android arm64 与 iOS 走同一条生产路径。

::: warning 验收状态
Official Anki 当前口径是**「验收 NO-GO；迁移中」**：Android 写侧仅在真机以 **debug 构建**验证过，生产 bundle 完整用户流尚未验证；iOS 侧为模拟器 E2E。不得宣称「迁移完成」或「Android 可正常使用」。
:::

::: warning 只支持 .apkg
生产导入输入是 `.apkg`。选择 `.colpkg` 会得到明确的不支持提示与人工引导（需先在桌面 Anki 重新导出为 `.apkg`）；内存示例牌组不属于生产导入合同。
:::

## 导入前检查

- 保留原始牌组文件作为备份。
- 确认文件可以在桌面 Anki 中打开。
- 检查可用存储空间，媒体牌组需要额外空间。

## 执行路径

```text
选择 .apkg
  -> 解析导入元数据
  -> 生成一次 AnkiImportExecutionPlan（选文件时冻结，后续步骤不重读开关）
  -> 写入 Official Collection
  -> 建立课程投影
  -> 注册 sourceId 与复习入口
```

向导分五步：选文件 → 解析 → 预览 → 执行 → 完成（失败态保留返回步骤）。

![Anki 导入五步向导：输入边界 / 所有权 / notetype 投影](/images/guide/anki-import-flow.svg)

生产 Android 不同时写入 Legacy NoteStore 和 Turna Anki SRS。正式卡片由 Official Collection 持有，正式评分由 Official scheduler 处理。

## 导入预览

预览页展示：

- **牌组树**（deck tree）与每组真实卡数（含后代累计）——不是今日到期数。
- **notetype 识别结果**：证据驱动识别器（`lib/application/anki_import/recognition/`）按 notetype 级判定，给出每种 notetype 的投影建议；可逐个确认或跳过。
- 需要人工映射时（`needsMapping`），进入映射页手工指定字段角色。

字段识别用词表（`field_roles.dart`）按字段名匹配角色，例如：

- 单元标签：`unit`、`chapter`、`单元`、`章`
- 课时标签：`lesson`、`topic`、`课`、`节`
- 正面：`front`、`question`、`正面`、`题目`、`题干` 等
- 背面：`back`、`answer`、`背面`、`答案` 等

> `解析` 不属于背面（response）角色，它绑定到额外说明（extra）角色，以免与答案字段混淆。完整词表见 `recognition/lexicon/field_roles.dart`。

## Notetype 投影目标

每种 notetype 可映射为以下投影（`OfficialAnkiProjectionKind`）：

`showWord`（词条卡）、`flip`（翻卡）、`multipleChoice`、`multiSelect`、`listenPick`（听音选择）、`typeAnswer`（键入答案）、`fillBlank`（cloze/填空）、`translate`（翻译）、`canonicalLink`（链接到规范资源条目）。

操作顺序：

1. 检查自动识别结果。
2. 检查 front / back 字段索引。
3. 查看首张 note 的文本预览。
4. 必要时手动覆盖。

## 调度状态

导入会携带原牌组的调度状态。官方导入 saga 与导入服务都以 `withScheduling: true` 调用引擎（引擎签名里该参数默认值同样是 `true`），因此卡片按原牌组的到期与间隔进入 Official 复习，而不是作为新卡重来。

无论哪条路径，排期状态都由 Official scheduler 持有 —— 不回退到 Turna FSRS。

## 失败处理

导入失败时不要重复快速点击导入。先检查错误发生在解析、Official runtime、媒体复制还是课程投影阶段。媒体复制可 best-effort；Collection 写入失败必须明确回滚或标记失败。

## 相关文档

- [Anki 集成](/guide/anki)
- [卡片渲染与网络隔离](/guide/anki-rendering)
- [故障排查](/guide/troubleshooting#anki)
