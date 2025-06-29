import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import ArticleCardMedium from '../shared/article-card/article-card-medium'

export function FeaturedArticlesSection() {
  const { data: articles, isLoading } = useGetArticles()
const demoArticles = articles && articles.length >= 20 ? articles : Array.from({ length: 20 }, (_, i) => ({
  id: i, // число
  title: `Спортивная статья №${i + 1}: Тренировки и достижения`,
  summary: `Углублённый разбор тренировочных методик, диеты и психологических аспектов успеха спортсменов.`,
  content: `Полный текст статьи №${i + 1}. Здесь можно добавить развернутую информацию, советы и полезные материалы для спортсменов.`,
  type: ['Футбол', 'Тренировки', 'Питание', 'Мотивация'][i % 4],
  image: `https://source.unsplash.com/800x600/?sports,${i}`,
  published_date: new Date(Date.now() - i * 86400000).toISOString(),
}))



const allArticles = articles && articles.length ? articles : demoArticles

  // Группируем по типу
const groupedByType = allArticles.reduce<Record<string, typeof allArticles>>((acc, article) => {
  if (!article.type) return acc // пропускаем если type undefined
  if (!acc[article.type]) acc[article.type] = []
  acc[article.type].push(article)
  return acc
}, {})


  // Первый большой и два маленьких
  const mainArticle = allArticles[0]
  const sideArticles = allArticles.slice(1, 3)

  const types = Object.keys(groupedByType)

  // Тексты по секциям (для примера)
  const sectionDescriptions: Record<string, string> = {
    'Футбол': `Футбол — это не только игра, но и стиль жизни миллионов людей по всему миру. В наших статьях вы найдете советы по тренировкам, тактике и новостях мирового спорта.`,
    'Тренировки': `Правильные тренировки — залог успеха. Узнайте о методиках, тренировочных программах и как избежать травм.`,
    'Питание': `Оптимальное питание — основа спортивных результатов. Читайте о диетах, добавках и рецептах для спортсменов.`,
    'Мотивация': `Мотивация — двигатель прогресса. Здесь мы делимся историями успеха, советами по психологической подготовке и поддержке духа.`,
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 py-20 lg:py-32 overflow-hidden">
      {/* Плавающие частицы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/6 w-1 h-52 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Заголовок */}
<div className="text-center mb-20 relative px-6">
  <h2 className="relative text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 select-none">
    <span className="block text-black drop-shadow-sm">
      OLEODOCOCO
    </span>
    <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-50 rounded-full animate-pulse-slow"></div>
  </h2>
<p className="mt-12 max-w-4xl mx-auto text-xl sm:text-2xl font-semibold text-gray-700">
  Immerse yourself in the energy of sport and music — two powerful forces that shape both body and spirit. Here, you'll find inspiration, practical tips, and stories that fuel your passion and drive.
</p>
<p className="mt-4 text-lg text-gray-600 italic">
  Train smart, eat well, and listen to the rhythm of victory.
</p>

</div>

        {/* Главная и боковые статьи */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Главная статья */}
          {isLoading ? (
            <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-xl min-h-[420px]" />
          ) : (
            mainArticle && (
              <a
                href={`/blog/${mainArticle.id}`}
                className="relative group overflow-hidden rounded-xl shadow-2xl col-span-1 lg:col-span-2 flex flex-col bg-white hover:shadow-purple-500/40 transition-shadow duration-500"
                style={{ minHeight: '420px' }}
              >
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold shadow-lg">
                    {mainArticle.type}
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {mainArticle.title}
                  </h3>
                  <p className="mt-4 text-gray-700 line-clamp-4 flex-1">{mainArticle.summary}</p>
                  <p className="mt-4 text-sm text-gray-400">
                    {new Date(mainArticle.published_date ?? '').toLocaleDateString()}
                  </p>
                </div>
              </a>
            )
          )}

          {/* Две маленькие статьи */}
          <div className="flex flex-col gap-8">
            {isLoading
              ? [1, 2].map((i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-xl min-h-[180px]" />
                ))
              : sideArticles.map((article) => (
<ArticleCardSmall
  key={article.id}
  article={{
    ...article,
    image: article.image ?? 'https://via.placeholder.com/800x600?text=No+Image',
    type: article.type ?? 'unknown',
  }}
/>

                ))}
          </div>
        </div>

        {/* Секции по типам с описанием и статьями */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {types.map((type) => (
            <section key={type} className="space-y-8">
              <h3 className="text-4xl font-extrabold text-gray-900 border-b-4 border-purple-600 pb-3">
                {type}
              </h3>
              <p className="text-lg text-gray-700 max-w-xl">
                {sectionDescriptions[type] || ''}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {isLoading
                  ? Array(6)
                      .fill(0)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-lg h-64"
                        />
                      ))
                  : groupedByType[type].slice(0, 6).map((article) => (
                      <ArticleCardMedium key={article.id} article={article} />
                    ))}
              </div>
            </section>
          ))}
        </div>

        {/* Нижний call-to-action */}
        <div className="mt-24 text-center">
          <a
            href="/blog"
            className="relative inline-block px-12 py-5 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold text-lg lg:text-xl rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            style={{ clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)' }}
          >
            SHOW MORE
          </a>
        </div>

      </div>
    </section>
  )
}
