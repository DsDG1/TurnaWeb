# 故障排查

排查顺序固定为：确认入口、确认平台、确认数据所有者、读取可见错误、执行最小复现。不要先清除应用数据。

## 启动

### 应用停留在启动页

1. 检查课程 JSON 是否通过校验。
2. 检查内容版本与数据库 schema。
3. 检查可用存储空间。
4. 读取 seed 或 migration 错误。
5. 仅在已有备份时考虑清除派生缓存。

### Web 主站打开成文档站

使用 `npm run dev` 输出的 `Open the Turna site at ...` 地址。不要使用 docs 内部端口。根路径 `/` 是产品主站，`/docs/` 是文档站。

## 课程

| 症状 | 可能原因 | 操作 |
| --- | --- | --- |
| Lesson 不显示 | 先修未满足或 section 文件未加载 | 检查依赖 ID 和文件指针 |
| 修改内容未出现 | `index.json` version 未增加 | 增加版本并重新导入 |
| 题目空白 | 未注册 runtimeType 或字段缺失 | 运行 validate 与 lint |
| 音频不播放 | 资产缺失或 TTS 不可用 | 检查 manifest、引擎和语言包 |

## 复习

| 症状 | 检查 |
| --- | --- |
| 无到期项目 | 系统时钟、due、课程 scope、筛选规则 |
| 项目无限重复 | 当日重学配置、评分事务、失败计数 |
| 评分后回退 | 数据库写入错误或并发撤销 |
| 间隔异常 | 目标保持率、最大间隔、调度所有者 |

## Anki

### 导入失败

确认文件为 `.apkg`、Official runtime 可用、ABI 匹配、存储足够。`.colpkg` 在 Android 与 iOS 生产路径中同样 fail-closed。

### 卡片空白

检查模板字段、媒体与 JavaScript。不要直接开放网络作为第一处理步骤——卡片网络本就是硬阻断，无法放开。另外注意：「预渲染失败记录」已不存在，预渲染缓存路径早已放弃，不要再找这一项。

### Official 卡无法复习

检查 source owner 和 scheduler runtime。Official owner 不得降级到 Turna SRS。

## AI

1. 执行连接测试。
2. 检查 base URL、key 和模型名。
3. 使用最小纯文本请求。
4. 再测试 JSON 请求。
5. 检查预算、超时与输出解析错误。

生成课程失败时保留草稿和验证报告，不手工把不完整 JSON 写入课程目录。

## 系统健康

严重页面中的建议是只读诊断。可先启用安全模式，再导出脱敏报告。清空日志不会自动恢复健康分数；必须确认已处理问题。

## Web 与 docs 开发

```bash
npm install
npm --prefix docs install
npm run dev
```

启动器自动选择两个空闲端口。只访问输出的主站地址。构建失败时分别执行：

```bash
npx tsc -b --pretty false
npm test
npm run docs:build
```

## 升级前证据

- 错误全文或脱敏报告。
- 平台与版本。
- 最小复现步骤。
- 数据来源与 owner。
- 是否在安全模式下复现。
- 最近修改的设置或课程版本。

## 相关文档

- [设置系统](/guide/settings)
- [测试与质量门禁](/developer/testing)
- [常见问题](/guide/faq)
