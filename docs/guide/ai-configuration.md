# 配置 AI

AI 不是核心学习流程的前置条件。未配置模型时，课程、复习、错题和本地课程检索继续可用。

## 配置项

| 字段 | 含义 |
| --- | --- |
| Provider preset | 服务商预设或 custom |
| Base URL | API 根地址 |
| API key | 服务凭据 |
| Chat model | 流式对话与解释模型 |
| JSON model | 结构化生成模型 |
| Strict schema mode | 对 JSON schema 的要求与回退策略 |

预设包括 DeepSeek、OpenAI、Moonshot、Ollama 和 Custom。具体模型名由用户配置，文档不假设远端默认值长期有效。

## 配置顺序

1. 打开设置中的 AI Tools。
2. 选择 provider preset。
3. 输入 base URL 与 API key；本地 Ollama 可按本地服务配置处理。
4. 分别选择 Chat model 与 JSON model。
5. 执行连接测试。
6. 检查延迟和错误信息。
7. 保存后从 AI Hub 发起最小文本请求。

## 连接测试

连接测试只证明当前 endpoint、凭据和最小请求可达，不证明所有结构化生成功能都受支持。JSON schema 不受支持时，引擎可按配置回退到 JSON object；结果仍需本地解析和校验。

## 密钥存储

原生平台使用可用的安全存储实现。Web 或缺少安全存储插件的平台仅在会话内持有凭据，并在界面中显示限制。

密钥不得进入：

- 普通日志。
- Prompt 缓存键。
- 脱敏报告。
- 课程 JSON。
- 文档或截图。

## 超时、重试与取消

请求包含功能名、Prompt 版本、输出上限、超时、幂等键和取消令牌。安全重试最多执行受控次数。取消是协作式操作：客户端停止接收和处理结果，不保证远端立即停止计费。

## 预算

AI 预算由统一管理器判断，可配置每日软限制与硬限制。软限制用于提示，硬限制阻止新请求。Token 和成本显示是本地估算时，应明确不等于服务商账单。

## 故障判定

| 错误 | 处理 |
| --- | --- |
| 401 / 403 | 检查 key、权限和 base URL |
| 模型不存在 | 检查模型名与 endpoint |
| schema 不支持 | 允许受控回退或更换 JSON model |
| 超时 | 降低输入规模、检查网络或本地服务 |
| 输出不可解析 | 保留原始错误状态，不直接写入课程 |

## 相关文档

- [AI 伴学](/guide/ai)
- [AI 工作流](/guide/ai-workflows)
- [本地数据与隐私](/guide/data-and-privacy)
