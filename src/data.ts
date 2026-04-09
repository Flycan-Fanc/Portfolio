export type SectionId = "about" | "skills" | "projects" | "contact";

export const navItems: Array<{ id: SectionId; label: string }> = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const heroTags = ["Vue", "TypeScript", "React", "Tailwind CSS", "Vibe Coding"];

export const skillGroups = [
  {
    title: "前端核心",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue3", "Vue Router", "Vuex / Pinia", "React（学习中）"],
  },
  {
    title: "UI / 工程化",
    items: ["Element Plus", "Tailwind CSS（学习中）", "Vite", "Webpack", "AJAX", "Git / GitHub"],
  },
  {
    title: "桌面端 / 后端",
    items: ["Electron", "electron-store", "Node.js", "Express", "MySQL"],
  },
  {
    title: "AI / 新技术关注",
    items: ["Vibe Coding", "AI-assisted Development", "Prompting"],
  },
];

export const projects = [
  {
    name: "MyDay",
    status: "Iterating",
    summary: "一款面向个人效率管理的桌面应用，整合计划管理、日记书写与灵感记录。",
    highlights: ["基于 Vue3 + Electron 构建桌面端应用，覆盖计划、日记、灵感、标签等核心模块。", "探索本地优先的数据管理与同步思路，兼顾体验稳定性与后续扩展。", "接入 Node.js + Express + MySQL，补齐桌面应用之外的服务端能力。", "围绕真实使用场景持续修复 bug、打磨交互并保持迭代。"],
    tech: ["Vue3", "Vuex", "Vue Router", "Electron", "Node.js", "Express", "MySQL"],
    links: [
      { label: "GitHub", href: "https://github.com/Flycan-Fanc/MyDay", placeholder: false },
      //{ label: "项目详情", href: "#", placeholder: true },
    ],
    imgs: "./assets/MyDay.png",
  },
  {
    name: "AI PDF 助手",
    status: "Completed",
    summary: "支持 PDF 解析与 AI 总结的前端工具项目，强调阅读体验与流式反馈。",
    highlights: ["使用 pdf.js 解析 PDF 内容，优化上传、阅读和总结的完整流程。", "通过 SSE 实现流式输出与类打字机反馈，让 AI 响应过程可感知。", "基于 Vue3 + TypeScript + Vite 搭建，关注工具型产品的交互完整性。", "适合作为 AI 工具前端项目，体现对能力接入和用户体验的平衡。"],
    tech: ["Vue3", "TypeScript", "Vite", "Element Plus", "pdf.js", "SSE"],
    links: [
      { label: "GitHub", href: "https://github.com/Flycan-Fanc/ai-pdf-summarize", placeholder: false },
      { label: "在线演示", href: "https://flycan-fanc.github.io/ai-pdf-summarize/", placeholder: false },
      //{ label: "Demo", href: "#", placeholder: true },
    ],
    imgs: "./assets/AI_PDF.png",
  },
  {
    name: "EffiDock",
    status: "In Progress",
    summary: "一个正在推进中的效率工具型项目，当前聚焦模块化架构、本地能力增强与桌面端延展。",
    highlights: ["面向效率场景规划产品方向，从单体前端基础阶段逐步过渡到模块化实现。", "预留桌面端封装和本地能力增强的扩展路径，强调工具可持续演进。", "包含文件导入导出、本地工作流增强等方向，兼顾产品与工程视角。", "体现从需求拆分、方案规划到阶段性落地的完整思考过程。"],
    tech: ["vibe coding", "TypeScript", "Frontend Architecture", "Tauri", "Local-first Workflow"],
    links: [
      { label: "GitHub", href: "https://github.com/Flycan-Fanc/EffiDock", placeholder: false },
      //{ label: "开发计划", href: "#", placeholder: true },
    ],
  },
];

export const valueCards = [
  {
    title: "项目驱动学习",
    text: "更习惯通过真实项目理解技术，而不是停留在只看教程的阶段。",
  },
  {
    title: "持续修复与迭代",
    text: "愿意花时间处理 bug、补细节、做优化，不把项目停在“能跑就行”。",
  },
  {
    title: "工程与体验并重",
    text: "既关注交互和可用性，也重视状态管理、模块拆分与后续维护。",
  },
  {
    title: "AI 辅助开发意识",
    text: "持续关注 AI 工具、Vibe Coding 与效率工作流，并尝试落到真实开发中。",
  },
];

export const contactLinks = [
  { label: "GitHub", value: "https://github.com/Flycan-Fanc", href: "https://github.com/Flycan-Fanc", placeholder: true },
  { label: "Email", value: "your-email@example.com", href: "mailto:your-email@example.com", placeholder: true },
  { label: "Resume", value: "resume-link-or-file", href: "#", placeholder: true },
  { label: "Website", value: "portfolio domain", href: "#", placeholder: true },
];
