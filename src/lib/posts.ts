export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 'how-to-learn-nextjs',
    title: '如何开始学习 Next.js',
    date: '2026-10-15',
    category: '前端',
    excerpt: 'Next.js 是一个功能强大的 React 框架，本文将带你快速上手...',
    content: `
      <h1 class="text-3xl font-bold mb-4">如何开始学习 Next.js</h1>
      <p class="mb-4">Next.js 是目前最流行的 React 框架之一。它解决了 React 单页应用 (SPA) 的许多痛点，比如 SEO 优化和首屏加载速度。</p>
      <h2 class="text-2xl font-bold mb-3">为什么选择 Next.js?</h2>
      <p class="mb-4">1. 服务端渲染 (SSR)：让你的内容在服务器上生成，搜索引擎能轻松抓取。</p>
      <p class="mb-4">2. 文件系统路由：无需配置复杂的 Router，创建文件即创建路由。</p>
      <p class="mb-4">3. 零配置：内置了 Tailwind CSS, TypeScript 等现代工具。</p>
    `
  },
  {
    id: 'typescript-tips',
    title: 'TypeScript 的实战技巧',
    date: '2026-10-10',
    category: '语言',
    excerpt: '从基础类型到高级泛型，探索 TypeScript 如何提升开发效率...',
    content: `
      <h1 class="text-3xl font-bold mb-4">TypeScript 的实战技巧</h1>
      <p class="mb-4">TypeScript 为 JavaScript 带来了强大的静态类型系统，极大地减少了运行时的 Bug。</p>
      <h2 class="text-2xl font-bold mb-3">核心要点</h2>
      <p class="mb-4">1. 接口 (Interface) 与 类型别名 (Type Alias) 的选择。</p>
      <p class="mb-4">2. 泛型 (Generics) 的妙用：编写可复用的组件。</p>
    `
  }
];

export function getPostById(id: string) {
  return posts.find(post => post.id === id);
}
