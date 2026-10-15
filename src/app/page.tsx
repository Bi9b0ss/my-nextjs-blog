import React from 'react'
import Link from 'next/link'
import { posts } from '@/lib/posts'

export default function Home() {
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          探索技术，记录思考
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          这是一个基于 Next.js 14 和 TypeScript 构建的个人博客。我在这里分享关于前端开发、系统架构和生活随笔的见解。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/posts" className="bg-brand-500 text-white px-6 py-3 rounded-full font-medium hover:bg-brand-900 transition-all shadow-lg shadow-brand-500/20">
            阅读文章
          </Link>
          <button className="border border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all">
            关于我
          </button>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">最新文章</h2>
          <Link href="/posts" className="text-sm text-brand-500 hover:underline">查看全部 →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/posts/${post.id}`}
              className="group block p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-500 transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{post.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-brand-900 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="text-xs text-gray-400">{post.date}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
