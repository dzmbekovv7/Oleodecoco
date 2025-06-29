import { Container } from '@/components/shared/container'
import { useState } from 'react'

export function Hero() {
	const [loaded, setLoaded] = useState(false)

	return (
		<section className='relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-48 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-30'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-50'></div>
				<div className='absolute top-1/2 right-1/6 w-40 h-40 border-2 border-cyan-400 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			{/* Background image with advanced overlay */}
			<div className='absolute inset-0'>
				<div
					className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
						loaded ? 'opacity-0' : 'opacity-100'
					}`}
					style={{ zIndex: 1 }}
				/>
				<img
					src='https://cdn.cacei.ro/wp-content/uploads/2024/01/zebrahead-electric-ballroom-53-1024x683.jpg'
					alt='Fitness Altitude - Conquer new heights in fitness'
					decoding='async'
					loading='eager'
					fetchPriority='high'
					className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10s]'
					srcSet='https://cdn.cacei.ro/wp-content/uploads/2024/01/zebrahead-electric-ballroom-53-1024x683.jpg'
					sizes='100vw'
					onLoad={() => setLoaded(true)}
					style={{ zIndex: 2, position: 'relative' }}
				/>
				{/* Multi-layered gradient overlay */}
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900/80 via-indigo-900/70 to-purple-900/80' style={{ zIndex: 3 }}></div>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' style={{ zIndex: 4 }}></div>
			</div>

<Container className="relative z-10 min-h-screen flex items-center py-20 lg:py-32 px-6">
  <div className="w-full max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-28">

      {/* Левая часть: заголовок + 3 колонки текста */}
      <div className="lg:w-3/5 select-none">
        {/* Заголовок большой сверху */}
        <h1 className="text-white font-extrabold text-8xl leading-[1.05] tracking-tight mb-12">
          WHO IS THE <span className="text-pink-500">BEST ARTIST?</span>
        </h1>

    <div className="relative max-w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 text-lg font-medium">

  {/* Много анимированных декоративных кругов */}
  <div className="pointer-events-none absolute top-[-50px] left-[-50px] w-36 h-36 rounded-full bg-pink-500 opacity-25 animate-pulse mix-blend-screen filter blur-2xl"></div>
  <div className="pointer-events-none absolute top-20 left-20 w-24 h-24 rounded-full bg-purple-600 opacity-30 animate-bounce mix-blend-screen filter blur-lg"></div>
  <div className="pointer-events-none absolute bottom-[-40px] right-[-40px] w-28 h-28 rounded-full bg-indigo-700 opacity-20 animate-pulse mix-blend-screen filter blur-xl"></div>
  <div className="pointer-events-none absolute top-[35%] right-0 w-20 h-20 rounded-full border-2 border-indigo-500 opacity-20 animate-spin-slow"></div>
  <div className="pointer-events-none absolute bottom-[15%] left-10 w-24 h-24 rounded-full border-2 border-pink-400 opacity-15 animate-spin-slow-reverse"></div>
  <div className="pointer-events-none absolute top-[10%] right-28 w-16 h-16 rounded-full bg-pink-400 opacity-15 animate-pulse"></div>
  <div className="pointer-events-none absolute bottom-[25%] left-32 w-20 h-20 rounded-full bg-purple-500 opacity-15 animate-bounce"></div>

  {/* Тонкие вертикальные линии */}
  <div className="pointer-events-none absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-b from-pink-400 via-purple-600 to-indigo-800 opacity-10 rounded-full"></div>
  <div className="pointer-events-none absolute bottom-0 right-1/4 w-[2px] h-[60%] bg-gradient-to-t from-indigo-700 via-pink-600 to-purple-700 opacity-10 rounded-full"></div>

  {/* Карточки с наклоном, кривизной и анимацией */}
  <div
    className="relative p-6 bg-gradient-to-tr from-pink-600 via-purple-700 to-indigo-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer transform hover:-translate-y-2 hover:rotate-1 rotate-[4deg] translate-x-[6px]"
    title="About concerts"
  >
    <h3 className="mb-4 text-xl font-bold text-white tracking-wide">Discover the hottest concerts</h3>
    <p>
      Dive deep into the rhythm and beats that shape the industry — from electrifying rock shows to soulful jazz nights.
    </p>
  </div>

  <div
    className="relative p-6 bg-gradient-to-br from-purple-700 via-indigo-700 to-pink-600 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer transform hover:-translate-y-2 hover:-rotate-1 -rotate-[3deg] translate-x-[-6px]"
    title="Stay tuned"
  >
    <h3 className="mb-4 text-xl font-bold text-white tracking-wide">Stay tuned for exclusives</h3>
    <p>
      Weekly music charts, behind-the-scenes stories, and exclusive interviews to keep your playlist fresh and exciting.
    </p>
  </div>

  <div
    className="relative p-6 bg-gradient-to-tr from-indigo-700 via-pink-600 to-purple-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer transform hover:-translate-y-2 hover:rotate-1 rotate-[2deg] translate-x-[4px]"
    title="Community"
  >
    <h3 className="mb-4 text-xl font-bold text-white tracking-wide">Join our vibrant community</h3>
    <p>
      Get early access to tickets, special offers, and more by connecting with fellow music lovers worldwide.
    </p>
  </div>
</div>

      </div>

      {/* Правая часть: даты концертов в виде карточек и кнопки */}
      <div className="lg:w-2/5 flex flex-col gap-10 select-none">

 <div className="w-full flex flex-row gap-6 select-none relative">
  {/* Вертикальный год слева */}
  <div className="flex flex-col justify-center items-center mr-4 relative">
    <span
      className="text-white font-extrabold text-6xl tracking-wide uppercase"
      style={{
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        userSelect: 'none',
        letterSpacing: '0.5em',
      }}
    >
      2025
    </span>
    <div className="w-1 h-48 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 rounded-full mt-6"></div>
  </div>

  {/* Карточки концертов с наклоном, анимацией и окружением */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative flex-1">
    {/* Декоративные элементы */}
    <div className="absolute -top-10 -left-10 w-24 h-24 border-4 border-pink-600 rounded-full opacity-40 animate-pulse mix-blend-screen pointer-events-none"></div>
    <div className="absolute top-16 right-4 w-12 h-12 bg-purple-600 rounded-full opacity-30 animate-bounce pointer-events-none"></div>
    <svg
      className="absolute bottom-0 left-0 w-48 h-48 stroke-pink-400 opacity-20 pointer-events-none"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 64 64"
    >
      <path d="M2 32 L62 32 M32 2 L32 62" />
    </svg>

    {[{
      date: 'June 25, 2025',
      event: 'The Rock Legends at Madison Square Garden',
    }, {
      date: 'July 10, 2025',
      event: 'Jazz Nights featuring Ella & The Band at Blue Note',
    }, {
      date: 'August 5, 2025',
      event: 'Electronic Festival — Beats and Lights',
    }, {
      date: 'September 15, 2025',
      event: 'Pop Icons Reunion Tour at Wembley Stadium',
    }].map(({ date, event }, i) => (
      <div
        key={i}
        className={`relative bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 rounded-xl shadow-2xl p-6 cursor-pointer
        transform transition-transform duration-400 hover:scale-105 hover:shadow-3xl
        ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}
        `}
        style={{ willChange: 'transform' }}
      >
        <div className="absolute -left-5 top-4 w-1.5 h-20 rounded-full bg-white opacity-70 shadow-white shadow-lg"></div>
        <p className="text-white font-semibold text-lg tracking-wide select-text">{date}</p>
        <p className="text-gray-200 mt-2 select-text">{event}</p>
      </div>
    ))}
  </div>
</div>


        {/* Кнопки с наклоном и анимацией */}
        <div className="flex gap-8 flex-wrap justify-center mt-6">
          <a
            href="/articles"
            className="relative inline-block px-12 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold text-lg rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300 hover:brightness-110"
            style={{ boxShadow: "0 8px 20px rgba(219, 39, 119, 0.7)" }}
          >
            SHOW ARTICLES
            <span className="absolute -bottom-2 -right-3 w-4 h-4 bg-white rounded-full animate-ping"></span>
          </a>

          <a
            href="/about"
            className="relative inline-block px-12 py-4 border-2 border-white/80 text-white font-semibold text-lg rounded-2xl shadow-md transform rotate-3 hover:-rotate-1 hover:scale-110 transition-all duration-300 hover:bg-white hover:text-purple-900"
          >
            ABOUT
            <span className="absolute -top-2 -left-3 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></span>
          </a>
        </div>

      </div>
    </div>
  </div>
</Container>



			
		</section>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('hero-section-styles')) {
	const style = document.createElement('style')
	style.id = 'hero-section-styles'
	style.textContent = `
		/* Custom animation for slow spin */
		@keyframes spin-slow {
			from { 
				transform: rotate(0deg); 
			}
			to { 
				transform: rotate(360deg); 
			}
		}

		.animate-spin-slow {
			animation: spin-slow 20s linear infinite;
		}

		/* Ensure proper clipping on mobile */
		@media (max-width: 640px) {
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Performance optimizations */
		@media (prefers-reduced-motion: reduce) {
			.animate-spin-slow,
			.animate-bounce,
			.animate-pulse {
				animation: none;
			}
			
			.transition-transform,
			.transition-all {
				transition: none;
			}
		}
	`
	document.head.appendChild(style)
}
