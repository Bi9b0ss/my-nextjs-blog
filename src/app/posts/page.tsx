import React from 'react'
import { posts } from '@/lib/posts'
import Link from 'next/link'

export default function PostsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">所有文章</h1>
        <p className="text-gray-500 text-lg">记录关于技术、生活与思考的随笔。</p>
      </div>

      <div className="grid gap-8">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/posts/${post.id}`}
            className="group block p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-500 transition-all hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-brand-500 uppercase">{post.category}</span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-900 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 text-sm font-medium text-brand-500 group-hover:translate-x-1 transition-transform inline-block">
              阅读全文 →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
