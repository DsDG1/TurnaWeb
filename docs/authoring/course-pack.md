# 外部课程包（.turnapack）

> `.turnapack` 是外部课程进入 Turna 的唯一运行时格式。LibreLingo YAML 等源格式只在离线工具里转换；应用只解析本文描述的 JSON，不在运行时读 YAML。

这页面向想把 LibreLingo 社区课程（或自制内容）装进 Turna 的课程作者。学习者侧的操作见[导入课程包](/guide/course-pack)。

## 两种包形态

| 形态 | `format` | 容器 | 限制 |
| --- | --- | --- | --- |
| v1 | `turnapack/1` | 单文件 UTF-8 JSON（`.turnapack`，手改包可用 `.json`） | ≤ 20 MB；不含媒体，听力题 `audioAsset` 填 wordId，运行时走 TTS |
| v2 | `turnapack/2` | zip：根目录 `pack.json` + `media/` 树 | 压缩 ≤ 80 MB，解压合计 ≤ 200 MB，单文件 ≤ 15 MB |

v1 顶层结构：

```jsonc
{
  "format": "turnapack/1",
  "packVersion": 1,
  "language": {
    "code": "es",
    "displayName": "Spanish",
    "ttsLocale": "es-ES",
    "nativeLabel": "Aprende español",
    "signatureChars": "ñÑáéíóúüÜ¿¡"
  },
  "license": {
    "name": "CC BY-SA 4.0",
    "attribution": "LibreLingo community",
    "link": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "files": {
    "index.json": {},
    "vocab.json": {},
    "expressions.json": {},
    "grammar_points.json": {},
    "sections/ll-es-s-1.json": {}
  }
}
```

`files` 的键是相对课程根的路径，内容与 `assets/courses/<dir>/` 同构，校验规则与内置课程一致（见[课程目录约定](/authoring/course-layout)）。

## 硬规则

- `format` 只认 `turnapack/1` 与 `turnapack/2`，未知值直接拒绝。
- `language.code` 匹配 `^[a-z]{2,3}$`；不得占用内置 manifest code，不得为 `anki`。
- `index.json` 的 `language` 必须等于 `language.code`；`vocab.json` 必填。
- 所有 section / unit / lesson / word / expression / grammar id 必须以 `ll-<code>-` 开头。
- 引用了 `media/` 但不是带 `media/` 树的 zip → 拒绝。

## 媒体（v2）

zip 内布局：

```text
pack.json          # 与 v1 相同的 JSON 对象，format 为 turnapack/2
media/dog1.jpg
media/hola.mp3
```

- 课程 JSON 的媒体字段（`audioAsset` / `imageAsset` / `audioAssets` / `imageAssets`）写包内相对路径，导入时被改写成 `turnapack://<code>/<file>`。
- 解压前校验 zip-slip（`..`、绝对路径、冒号），落盘到应用私有目录 `imported_courses/<code>/media/`。
- 允许扩展名：`.jpg` `.jpeg` `.png` `.webp` `.gif` `.mp3` `.ogg` `.wav` `.m4a` `.aac` `.opus`。
- `media/` 规范形态是平铺文件名；嵌套子目录可用（`turnapack://` 解析剥一层 `media/` 前缀后保留子路径）。唯一被拒绝的是 `media/media/…` 双前缀。
- 媒体只在数据库写入成功后解压——失败的导入不会破坏已安装课程的媒体。

## LibreLingo 转换

转换器是应用仓库的 `tool/librelingo_import.py`（Python）：

```bash
python tool/librelingo_import.py \
  --course-dir path/to/spanish-from-english \
  --code es --display-name Spanish --tts-locale es-ES \
  --out spanish.turnapack --validate
```

| 参数 | 说明 |
| --- | --- |
| `--course-dir` | LibreLingo 课程目录（含 `course.yaml`），必填 |
| `--code` | 包语言码，`[a-z]{2,3}`，必填。一律来自 CLI，不读取课程里的 `IETF BCP 47` |
| `--display-name` / `--tts-locale` | 显示名与 TTS 语言码，必填 |
| `--out` | 输出 `.turnapack` 路径，必填 |
| `--media-dir` | 额外图片 / 音频目录，可重复。课程根下的 `images/`、`media/`、`audio/` 默认扫描 |
| `--pack-version` | 包版本整数，默认 `1` |
| `--default-level` | 默认 CEFR 等级 |
| `--signature-chars` | 覆盖 `Special characters` → `signatureChars` 的自动映射 |
| `--zip` | 即使没有媒体也强制写 v2 zip |
| `--validate` | 写盘前先解包并跑 `course_cli.py validate` |

发现媒体文件时自动写成 v2 zip；无媒体时输出 v1，行为与「TTS 朗读」一致。

### LibreLingo 侧的支持面

- `Modules` / `Skills` / `New words` 等内容块嵌在头块（`Course:` / `Module:` / `Skill:`）内或与其平级均可——两种写法都支持（真实课程的 module 名常带尾斜杠，属平级形态）。
- `Images:` 列表按文件名 stem 匹配媒体索引；同 stem 的音频进 `vocab.audioAsset` 与听力题。
- `Mini-dictionary` 按 `Language.Name` / `For speakers of.Name` 选目标语桶，多义项逗号合并。

### 生成规则（防碰撞与达标）

- 词条 / 表达 id 由 `slugify(term)` 派生；折叠后丢信息的词（带重音、非拉丁文字）自动加 `-<sha256 前 6 位>` 后缀保证唯一，同词重复转换结果稳定。
- 一个模块内 lesson 数按 30 切成多个 unit（`ll-<code>-u-<m>-<k>`）——运行时校验单 unit 上限 40 课。
- lesson id 取 skill `Id`，撞名时追加序号后缀。
- 选择题选项做确定性乱序，`correctIndex` 不恒为 0；干扰项排除题干文本本身。

### 转换真实课程

真实课程仓库（如 `LibreLingo-ES-from-EN`）浅克隆到应用仓库旁即可；转换时加 `--validate` 会在写盘前跑一遍与运行时同源的校验。校验失败说明包体不满足课程契约，先修包再导入，不要绕过校验。

## 导入行为（作者需要知道的语义）

- 同语言码重复导入会先弹覆盖确认；仍存在内容的进度保留，被移除内容的进度清除，孤儿复习行同步清理。
- 语言元信息（displayName / ttsLocale / signatureChars / license）写入 `courseMeta` 的 `importedLang:<code>`，不改内置 manifest。
- 卸载只删解压出的 `media/`，保留 `.turnapack` 供恢复时再解压。
- 备份覆盖 `course.db`（含导入课行与元信息），**不**覆盖包文件本身。

明确不做的方向：云商店、运行时 YAML 解析、GUI 编辑导入课。

## 相关文档

- [导入课程包](/guide/course-pack)：学习者侧操作与恢复语义
- [课程目录约定](/authoring/course-layout)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)：另一条 AI 辅助的课程生产路径
