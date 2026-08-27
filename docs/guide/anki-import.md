# 导入 Anki 牌组

本页描述 Android 生产路径中的 Official-first 导入。导入对象是 `.apkg`。`.colpkg` 和内存示例牌组不属于当前生产导入合同。

## 导入前检查

- 保留原始牌组文件作为备份。
- 确认文件可以在桌面 Anki 中打开。
- 检查可用存储空间，媒体牌组需要额外空间。
- 复杂模板默认不获得网络访问权限。
- 大于 2,000 张卡片的牌组可能进入 Lite 组织模式。

## 执行路径

```text
选择 .apkg
  -> 解析导入元数据
  -> 生成一次 AnkiImportExecutionPlan
  -> 写入 Official Collection
  -> 建立课程投影
  -> 注册 sourceId 与复习入口
```

生产 Android 不同时写入 Legacy NoteStore 和 Turna Anki SRS。正式卡片由 Official Collection 持有，正式评分由 Official scheduler 处理。

## 组织预览

智能组织尝试从字段与标签中读取以下信息：

- Unit、Chapter、Section、单元、章。
- Lesson、Topic、Subunit、课、节。
- `unit::`、`chapter:`、`单元::` 等标签。

字段优先于标签。无有效元数据时使用 deck 名和稳定分块。关闭智能组织后，应保留旧的确定性分组行为。

## Notetype 映射

导入预览可将 notetype 映射到：

`ankiCard`、`wordEntry`、`expression`、`fillBlank`、`typeAnswer`、`listenPick`、`cloze`、`multipleChoice`、`multiSelect`。

操作顺序：

1. 检查自动识别类型。
2. 检查 front / back 字段索引。
3. 查看首张 note 的文本预览。
4. 必要时手动覆盖。
5. 配置 AI 时可请求批量识别；AI 输出仍需人工确认。

## Full 与 Lite

| 模式 | 默认条件 | 课程投影 |
| --- | --- | --- |
| Full | 少于 2,000 卡 | 生成完整 Section、Unit、Lesson |
| Lite | 至少 2,000 卡 | 生成轻量 Section shell，正式复习走保真路径 |

阈值用于限制课程树规模，不改变牌组中的卡片总数。

## 调度继承

导入预览可以提供三种策略：

- 保留 Anki 调度。
- 保留复习历史并建立 Turna FSRS 状态。
- 全部作为新卡。

Official 生产路径应优先保持 Official 所有权。策略页必须显示受影响卡片数与历史条数。

## 失败处理

导入失败时不要重复快速点击导入。先检查错误发生在解析、Official runtime、媒体复制还是课程投影阶段。媒体复制可 best-effort；Collection 写入失败必须明确回滚或标记失败。

## 相关文档

- [Anki 集成](/guide/anki)
- [卡片渲染与网络隔离](/guide/anki-rendering)
- [故障排查](/guide/troubleshooting#anki)
