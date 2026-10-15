import React from 'react'
import { getPostById } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link 
        href="/posts" 
        className="text-sm text-gray-500 hover:text-brand-500 transition-colors inline-block mb-8"
      >
        ← 返回文章列表
      </Link>

      <article>
        <header className="mb-10 text-center">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="text-gray-400 text-sm">
            发布日期: {post.date}
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
