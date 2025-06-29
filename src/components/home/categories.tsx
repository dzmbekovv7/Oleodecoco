import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
  const { data: articles, isLoading } = useGetArticles()
  const categories = [...new Set(articles?.map(article => article.type))]

  return (
    <section className="relative bg-white text-gray-900 py-28 overflow-hidden">
      {/* Мягкие цветовые пятна */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-green-400 opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-10 blur-3xl rounded-full" />

      {/* Заголовок */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-[3rem] md:text-[4rem] font-extrabold leading-tight bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 text-transparent bg-clip-text">
          Sport is more than game —
          <br />
          it’s passion in motion.
        </h2>
        <p className="mt-6 text-lg text-gray-700 font-light leading-relaxed tracking-wide max-w-3xl mx-auto">
          Every category holds a spirit. From intense matches to mindful training — explore the arenas of sport and find your drive.
        </p>
      </div>

      {/* Категории */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-48 bg-gray-200/40 animate-pulse rounded-[50%_50%_30%_70%/60%_30%_70%_40%] shadow-inner"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {categories.map((category) => (
              <a
                key={category}
                href={`/blog?type=${encodeURIComponent(category || '')}`}
                className="relative group block bg-gradient-to-br from-green-700 via-blue-600 to-cyan-600 text-white px-6 py-8 rounded-[60%_40%_40%_60%/50%_60%_40%_50%] shadow-2xl transition-transform hover:rotate-[-2deg] hover:scale-105 duration-500"
              >
                <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full opacity-20 group-hover:scale-150 transition-transform" />
                <h3 className="text-2xl font-bold tracking-widest text-white mb-2 group-hover:scale-110 transition-transform">
                  {category?.toUpperCase()}
                </h3>
                <p className="text-sm text-white/90">
                  Uncover the <span className="text-green-200">vibes</span> of {category}.
                </p>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Нижняя линия */}
      <div className="mt-24 flex justify-center">
        <div className="w-56 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full animate-pulse" />
      </div>
    </section>
  )
}
