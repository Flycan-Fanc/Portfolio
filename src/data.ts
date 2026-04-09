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
    status: "Completed / Iterating",
    summary: "一款面向个人效率管理的桌面端应用，整合计划管理、日记书写与灵感记录。",
    highlights: ["基于 Vue3 + Electron 构建的桌面应用，覆盖计划、日记、灵感、标签等核心模块。", "探索本地优先的数据管理与同步思路，兼顾体验稳定性与后续扩展。", "接入 Node.js + Express + MySQL，补齐桌面应用之外的服务端能力。", "围绕真实使用场景持续修复 bug，打磨交互体验并持续迭代。"],
    tech: ["Vue3", "Vuex", "Vue Router", "Electron", "Node.js", "Express", "MySQL"],
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
    tech: ["Vue3", "TypeScript", "Vite", "Element Plus", "pdf.js", "SSE"],
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
    tech: ["vibe coding", "TypeScript", "Tauri"],
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
  { label: "Website", value: "个人网站主页", href: "https://flycan-fanc.github.io/portfolio/", placeholder: false },
];
