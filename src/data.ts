export type SectionId = "about" | "skills" | "projects" | "advantages" | "contact";

import aiPdfImage from "./assets/AI_PDF.png";
import myDayImage from "./assets/MyDay.png";

export const navItems: Array<{ id: SectionId; label: string }> = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "advantages", label: "Advantages" },
  { id: "contact", label: "Contact" },
];

export const heroTags = ["Vue", "TypeScript", "React", "Tailwind CSS", "Vibe Coding"];

export const skillGroups = [
  {
    title: "前端核心",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue3", "Vue Router", "Vuex / Pinia", "React（学习中）"],
  },
  {
    title: "UI / 可视化",
    items: ["Element Plus", "Ant Design", "Tailwind CSS（学习中）", "Figma（学习中）", "Canvas API（学习中）"],
  },
  {
    title: "工程化 / 应用开发",
    items: ["Vite", "Webpack", "Git", "GitHub", "AJAX", "Electron", "electron-store", "Node.js", "Express", "MySQL"],
  },
  {
    title: "AI / Agent",
    items: ["Vibe Coding", "AI-assisted Development", "Prompt Engineering", "Skills", "Claude Code", "Codex"],
  },
];

export const projects = [
  {
    name: "MyDay",
    status: "Completed / Iterating",
    summary: "一款面向个人效率管理的桌面端应用，整合计划管理、日记书写与灵感记录。",
    highlights: ["基于 Vue3 + Electron 构建的桌面应用，覆盖计划、日记、灵感、标签等核心模块。", "探索本地优先的数据管理与同步思路，兼顾体验稳定性与后续扩展。", "接入 Node.js + Express + MySQL，补齐桌面应用之外的服务端能力。", "围绕真实使用场景持续修复 bug，打磨交互体验并持续迭代。"],
    tech: ["产品项目", "Vue3", "Vuex", "Vue Router", "Electron", "Node.js", "Express", "MySQL"],
    links: [
      { label: "GitHub", href: "https://github.com/Flycan-Fanc/MyDay", placeholder: false },
      //{ label: "项目详情", href: "#", placeholder: true },
    ],
    imgs: myDayImage,
  },
  {
    name: "AI PDF 助手",
    status: "Completed / Iterating",
    summary: "支持 PDF 解析与 AI 总结的前端工具项目，强调阅读体验与流式反馈。",
    highlights: ["使用 pdf.js 解析 PDF 内容，优化上传、阅读和总结的完整流程。", "通过 SSE 实现流式输出与类打字机反馈，让 AI 响应过程可感知。", "基于 Vue3 + TypeScript + Vite 搭建，关注工具型产品的交互体验与流程完整性。", "聚焦 PDF 解析、AI 总结与流式交互，形成完整的工具型产品流程。"],
    tech: ["产品项目", "Vue3", "TypeScript", "Vite", "Element Plus", "pdf.js", "SSE"],
    links: [
      { label: "GitHub", href: "https://github.com/Flycan-Fanc/ai-pdf-summarize", placeholder: false },
      { label: "在线演示", href: "https://flycan-fanc.github.io/ai-pdf-summarize/", placeholder: false },
      //{ label: "Demo", href: "#", placeholder: true },
    ],
    imgs: aiPdfImage,
  },
  {
    name: "EffiDock",
    status: "In Progress",
    summary: "一个正在推进中的插拔式生产力工具平台项目，当前聚焦模块化架构、本地能力增强与桌面端延展。",
    highlights: ["以“插拔式模块化生产力工具平台”为核心思路，支持模块安装、卸载、启用与停用。", "MVP 阶段优先推进平台壳子、模块开关与 AI 辅助能力，逐步形成可扩展的效率工作台。", "第一轮已完成工作台布局、模块系统、模块商店与核心模块的基础实现。", "第二轮继续推进 Tauri 桌面端接入、导入导出增强与本地能力支持。"],
    tech: ["产品项目", "vibe coding", "TypeScript", "Tauri"],
    links: [
      { label: "GitHub", href: "https://github.com/Flycan-Fanc/EffiDock", placeholder: false },
      //{ label: "开发计划", href: "#", placeholder: true },
    ],
    progress: [
      { name: "当前已完成", content: "平台壳子、模块系统、模块商店与核心模块的第一轮实现。" },
      { name: "下一步", content: "接入 Tauri，完善导入导出、本地能力增强与桌面端体验。" },
      { name: "后续方向", content: "继续扩展效率模块、数据管理能力、多人协作能力与更完整的工作台闭环。" },
    ],
  },
  {
    name: "Flycan PPT Skill",
    status: "In Progress",
    summary: "一个面向 Claude Code、Codex 等本地 Agent 的网页 PPT 生成 Skill，可将主题、文章、大纲或笔记生成单文件 HTML 横向翻页演示文稿。",
    highlights: ["支持奶油轻柔风、牛油果自然风、深绿极简杂志风、黑板手绘板书风、午夜极简哲思风五套独立视觉系统。", "可根据内容需求或用户指定决定页数，支持键盘、滚轮、触屏、索引导航与静态模式切换。", "黑板手绘板书风使用 AI 粉笔插画、Canvas 字形合成与资源嵌入方案，强化教学推导与知识拆解表现力。", "内置内容、结构、样式、技术四层强制校验流程，提升生成结果的可演示性与交付稳定性。"],
    tech: ["AI工程实践", "Skill", "Claude Code", "Codex", "HTML", "CSS", "JavaScript", "Canvas", "vibe coding"],
    links: [{ label: "GitHub", href: "https://github.com/Flycan-Fanc/flycan-ppt-skill", placeholder: false }],
    progress: [
      { name: "当前已完成", content: "已形成五套 PPT 视觉系统、示例页面、模板资产、布局参考、主题文档与基础安装方式。" },
      { name: "下一步", content: "继续打磨各风格的版式细节、材质表现、组件复用能力与 Agent 生成稳定性。" },
      { name: "后续方向", content: "扩展更多适合知识视频、课程讲解、公众号内容转演示稿的风格与自动化生成链路。" },
    ],
  },
  {
    name: "Game UI Auto Composer Skill",
    status: "MVP",
    summary: "一个面向游戏开发的 UI 自动编排 Skill，旨在从已有图片资源与简要游戏描述出发，自动推理并生成可实现的游戏 UI 方案。",
    highlights: ["面向微信小游戏、H5 轻量小游戏、跑酷、换道、点击切换、轻合成、轻节奏等休闲游戏场景。", "能够分析游戏类型、平台、玩法节奏与核心交互，并识别背景、按钮、图标、角色帧、装饰等资源用途。", "默认优先形成首页、游戏中 HUD、结算页三个核心页面闭环，避免盲目扩页。", "输出页面清单、资源映射、布局方案、组件树、Engine-Neutral UI Spec、HTML/CSS 原型说明与轻量动效建议。"],
    tech: ["AI工程实践", "Skill", "Claude Code", "Game UI", "Engine-Neutral UI Spec", "HTML", "CSS", "vibe coding"],
    links: [{ label: "GitHub", href: "https://github.com/Flycan-Fanc/game-ui-auto-composer-skill", placeholder: false }],
    progress: [
      { name: "当前已完成", content: "已完成 v1/MVP 版本定位，聚焦从素材资源到核心页面 UI 方案的自动编排流程。" },
      { name: "下一步", content: "继续增强资源识别、页面推理、布局约束、组件树表达与原型输出的稳定性。" },
      { name: "后续方向", content: "逐步扩展到更多游戏类型、更复杂 UI 系统、更强的引擎适配与半自动实现链路。" },
    ],
  },
];

export const valueCards = [
  {
    title: "项目驱动学习",
    text: "更擅长通过项目理解技术，并在实践中持续完善细节。",
  },
  {
    title: "持续修复与迭代",
    text: "愿意花时间处理 bug、补细节、做优化，持续打磨项目体验与完成度。",
  },
  {
    title: "工程与体验并重",
    text: "既关注交互和可用性，也重视状态管理、模块拆分与后续维护。",
  },
  {
    title: "AI 辅助开发意识",
    text: "持续关注 AI 工具、Vibe Coding 与效率工作流，并尝试将其用于项目开发。",
  },
];

export const contactLinks = [
  { label: "GitHub", value: "github.com/Flycan-Fanc", href: "https://github.com/Flycan-Fanc", placeholder: false },
  { label: "Email", value: "ericfanwork@163.com", href: "mailto:ericfanwork@163.com", placeholder: false },
  { label: "Resume", value: "简历下载", href: "#", placeholder: false },
  { label: "Website", value: "个人网站主页", href: "https://flycan-fanc.github.io/Portfolio/", placeholder: false },
];
