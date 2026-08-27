# 课程编辑器

课程编辑器是桌面工具（`tool/gui`），不进 App 本体。老师或作者在本机打开课程文件夹，改 Section / Unit / Lesson，保存时走同一套校验。

产品页演示见 [editor.html](../../editor.html)。教师逐步操作见 [教师指南](/authoring/teacher-guide)。

## 能改什么

- **三级课程树**：拖拽、复制、套用预设，结构和 App 里看到的一致。
- **课时蓝图**：intro / practice / listening / reading 等模板用表单和流程图编。
- **课程工坊**：从教材抽知识点，或从空白生成一节课，导入前先看 diff。
- **教师试做**：在桌面上把学员会做到的题点一遍。

## 推荐流程

1. 打开本地课程目录（例如 `turkish/`）。
2. 在树里选一课，改名称、先修、题型和题目。
3. 保存并校验；失败会回滚，避免写出坏 JSON。
4. 用教师模式试做，再发布。

课程内容的真理源是 JSON 文件，编辑器只是可视化前端。App 启动时把 JSON 写入本地 SQLite 缓存；改了内容版本号后会重新导入。

## 下一步

- [课程目录约定](/authoring/course-layout)
- [课型说明](/guide/lesson-types)
