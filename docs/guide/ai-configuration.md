# 配置 AI

AI 不是核心学习流程的前置条件。未配置模型时，课程、复习、错题和本地课程检索继续可用。

## 配置项

| 字段 | 含义 |
| --- | --- |
| Provider preset | 服务商预设或「自定义」 |
| Base URL | API 根地址（自定义时手填；命名预设自动带入） |
| API key | 服务凭据 |
| Chat model | 流式对话与解释模型；留空回退预设默认模型 |
| JSON model | 结构化生成模型；留空回退预设默认模型 |
| Strict schema mode | `auto`（默认，遇 400 回退 `json_object`）/ `on` / `off` |
| Reasoning | 显式开关（`reasoning_effort` / `thinking` 字段）；预设的 `supportsReasoning` 只是能力提示，不会自动开 |
| 响应缓存 | 命中相同请求时直接复用结果 |

内置预设：**DeepSeek**（默认 `deepseek-v4-flash`）、**Kimi**（`kimi-k3`）、**Qwen**（`qwen3.8-max`）、**MiMo**（`mimo-v2.5-pro`）、**自定义**。具体模型名由用户配置，文档不假设远端默认值长期有效。

## 配置顺序

1. 打开「设置 → 高级 → AI 连接」。
2. 选择 provider preset（命名预设自动填入 Base URL 与默认模型；「自定义」保留你手填的值）。
3. 输入 API key；自定义服务可填本地或自托管 endpoint。
4. 需要分流时分别选择 Chat model 与 JSON model。
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

请求体包含 model、messages、temperature，以及可选的 max_tokens、reasoning_effort 与 response_format。请求有超时上限（120 秒）与取消令牌；取消是协作式操作：客户端停止接收和处理结果，不保证远端立即停止计费。

## 预算

当前**没有**用量与花费管控。引擎未实现预算管理器，AI 侧不提供每日软/硬限制、Token 计数或成本估算，供应商定价表也未内置。因此不要在文档或预期里假设存在「预算上限」开关；花费需在服务商侧自行查看。

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
