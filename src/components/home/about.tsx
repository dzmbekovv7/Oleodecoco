export function AboutSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-24">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-blue-300 rounded-full blur-2xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Верхний заголовок */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Sport is More Than Game —
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              It’s a Lifestyle.
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Discover the passion, discipline, and stories behind the world of sports. From grassroots to the global arena — feel the energy and dedication in every moment.
          </p>
        </div>

        {/* Картинки и центральный текст */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-14">
          {/* Левая картинка */}
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf"
              alt="Sports action"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Текст в центре */}
          <div className="md:w-1/3 text-left">
            <h3 className="text-3xl font-bold text-green-700 mb-5">
              The Drive Behind Every Athlete
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              This is more than just competition — it’s a journey of passion, perseverance, and power. A place where stories inspire and the spirit of sport unites us all.
            </p>
            <p className="mt-4 text-gray-600">
              Here, every victory counts, every challenge builds strength, and every athlete’s journey is celebrated.
            </p>
          </div>

          {/* Правая картинка */}
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
              alt="Training moment"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Нижняя часть — блок про блог */}
        <div className="mt-24 bg-gradient-to-r from-green-600 to-blue-500 text-white px-10 py-14 rounded-3xl shadow-2xl">
          <h3 className="text-4xl font-extrabold mb-6 leading-tight">
            🏆 Join the Journey of Champions
          </h3>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Our blog shares exclusive interviews, training tips, and inspirational stories that fuel your passion for sport and fitness.
          </p>

          <a
            href="/blog"
            className="inline-block mt-10 px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full hover:bg-gray-100 transition"
          >
            Read Our Stories
          </a>
        </div>
      </div>
    </section>
  )
}
