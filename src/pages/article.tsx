import React, { useState } from 'react'
import {
  ArticleComments,
  ArticleContent,
  ArticleFeatured,
  ArticleHeader,
  ArticleLatest,
  ArticleNavigation,
  ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
  const { slug } = useParams()

  const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(slug || '')
  const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

  const [sidebarTab, setSidebarTab] = useState<'comments' | 'popular' | 'latest' | 'featured'>('comments')

  if (isArticleLoading || isArticlesLoading) {
    return (
      <div className='relative min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 overflow-hidden flex items-center justify-center'>
        <div className='text-indigo-700 font-semibold text-lg animate-pulse'>Loading article...</div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className='relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden flex items-center justify-center'>
        <Container>
          <div className='text-center text-white'>
            <h2 className='text-5xl font-bold mb-4'>404</h2>
            <p className='mb-6'>Article not found.</p>
            <a
              href='/blog'
              className='inline-block px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-700 rounded-md text-white font-semibold hover:scale-105 transition-transform'
            >
              Back to Blog
            </a>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className='bg-white min-h-screen text-gray-900'>
      {/* HEADER fixed with padding below */}
      <header className="bg-white border-b border-gray-200 shadow-sm z-50 h-16 flex items-center">
        <Container>
          <h1
            className="text-xl font-bold truncate max-w-[90vw]"
            title={article.title}
            aria-label="Article title"
          >
            {article.title}
          </h1>
        </Container>
      </header>

      {/* Main content with padding top to avoid overlap */}
      <main className="pt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
            {/* Left/main content */}
            <article className="lg:col-span-8 space-y-6">
              {/* Article main image */}
              {article.image && (
                <div className="w-full max-h-96 overflow-hidden rounded-md shadow-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Article navigation */}
              <div className="mb-6 bg-indigo-50 p-5 rounded-md shadow-sm">
                <ArticleNavigation currentArticle={article} articles={articles} />
              </div>

              {/* Article content */}
              <section
                id="article-content"
                className="bg-white p-8 rounded-md shadow-md"
              >
                <ArticleContent article={article} />
              </section>
            </article>

            {/* Right sidebar */}
            <aside className="lg:col-span-4 flex flex-col space-y-6">
              {/* Tabs navigation */}
              <nav
                className="flex justify-around bg-gray-100 rounded-md shadow-inner p-2 text-sm font-medium select-none"
                role="tablist"
                aria-label="Sidebar tabs"
              >
                {[
                  { id: 'comments', label: 'Comments' },
                  { id: 'popular', label: 'Popular' },
                  { id: 'latest', label: 'Latest' },
                  { id: 'featured', label: 'Featured' },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    role="tab"
                    type="button"
                    aria-selected={sidebarTab === id}
                    aria-controls={`tab-panel-${id}`}
                    id={`tab-${id}`}
                    onClick={() => setSidebarTab(id as any)}
                    className={`px-3 py-2 rounded-md focus:outline-none transition-colors ${
                      sidebarTab === id
                        ? 'bg-white shadow font-semibold text-indigo-700'
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>

              {/* Tabs content */}
              <div className="bg-white rounded-md shadow-md p-6 flex-grow overflow-auto max-h-[70vh]">
                {sidebarTab === 'comments' && (
                  <section
                    id="tab-panel-comments"
                    role="tabpanel"
                    aria-labelledby="tab-comments"
                    tabIndex={0}
                    className="space-y-4"
                  >
                    <ArticleComments article={article} />
                  </section>
                )}
                {sidebarTab === 'popular' && (
                  <section
                    id="tab-panel-popular"
                    role="tabpanel"
                    aria-labelledby="tab-popular"
                    tabIndex={0}
                    className="space-y-4"
                  >
                    <ArticlePopular articles={articles} />
                  </section>
                )}
                {sidebarTab === 'latest' && (
                  <section
                    id="tab-panel-latest"
                    role="tabpanel"
                    aria-labelledby="tab-latest"
                    tabIndex={0}
                    className="space-y-4"
                  >
                    <ArticleLatest articles={articles} />
                  </section>
                )}
                {sidebarTab === 'featured' && (
                  <section
                    id="tab-panel-featured"
                    role="tabpanel"
                    aria-labelledby="tab-featured"
                    tabIndex={0}
                    className="space-y-4"
                  >
                    <ArticleFeatured articles={articles} />
                  </section>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </main>
    </div>
  )
}
