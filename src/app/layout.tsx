import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '我的个人博客',
  description: '一个用 Next.js 和 TypeScript 构建的现代博客',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-brand-900">MyBlog.</a>
            <div className="flex gap-6 text-sm font-medium text-gray-600">
              <a href="/" className="hover:text-brand-500 transition-colors">首页</a>
              <a href="/posts" className="hover:text-brand-500 transition-colors">文章</a>
              <a href="/about" className="hover:text-brand-500 transition-colors">关于</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t py-10 mt-20 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MyBlog. Powered by Next.js
        </footer>
      </body>
    </html>
  )
}
