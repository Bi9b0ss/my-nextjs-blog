import React from 'react'

const MOCK_POSTS = [
  {
    id: 1,
    title: '如何开始学习 Next.js',
    excerpt: 'Next.js 是一个功能强大的 React 框架，本文将带你快速上手...',
    date: '2026-10-15',
    category: '前端'
  },
  {
    id: 2,
    title: 'TypeScript 的实战技巧',
    excerpt: '从基础类型到高级泛型，探索 TypeScript 如何提升开发效率...',
    date: '2026-10-10',
    category: '语言'
  },
  {
    id: 3,
    title: 'Tailwind CSS 的设计哲学',
    excerpt: '为什么实用类优先 (Utility-first) 的 CSS 框架成为了主流？',
    date: '2026-10-05',
    category: '设计'
  },
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          探索技术，记录思考
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          这是一个基于 Next.js 14 和 TypeScript 构建的个人博客。我在这里分享关于前端开发、系统架构和生活随笔的见解。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-brand-500 text-white px-6 py-3 rounded-full font-medium hover:bg-brand-900 transition-all shadow-lg shadow-brand-500/20">
            阅读文章
          </button>
          <button className="border border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all">
            关于我
          </button>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">最新文章</h2>
          <a href="/posts" className="text-sm text-brand-500 hover:underline">查看全部 →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_POSTS.map((post) => (
            <div key={post.id} className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-500 transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1">
              <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{post.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-brand-900 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="text-xs text-gray-400">{post.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
