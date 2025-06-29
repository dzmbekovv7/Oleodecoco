import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardMedium from '../shared/article-card/article-card-medium'
import ArticleCardMediumSkeleton from '../shared/article-card/article-card-medium-skeleton'

export function LatestArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className='relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-36 bg-gradient-to-b from-emerald-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/5 w-32 h-2 bg-gradient-to-r from-violet-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/4 w-28 h-28 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				
				{/* Revolutionary title design */}
				<div className='text-center mb-20'>
					<div className='relative inline-block'>
						{/* Geometric background accents */}
						<div className='absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 transform rotate-45 opacity-80'></div>
						<div className='absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full opacity-60'></div>
						
						{/* Main title with split effect */}
						<div className='relative overflow-hidden'>
							<h2 className='text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none'>
								<span className='block transform hover:translate-x-3 transition-transform duration-500'>LATEST</span>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 transform hover:-translate-x-3 transition-transform duration-500 -mt-3'>
									ARTICLES
								</span>
							</h2>
							
							{/* Dynamic cutting line */}
							<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent transform -translate-y-1/2 opacity-50'></div>
						</div>

						{/* Floating decorative elements */}
						<div className='absolute -top-6 -left-6 w-6 h-6 bg-yellow-400 transform rotate-45 animate-pulse'></div>
						<div className='absolute -bottom-8 -right-8 w-8 h-8 bg-emerald-500 rounded-full animate-bounce'></div>
					</div>

					{/* Subtitle with highlight */}
					<div className='mt-10 space-y-4'>
						<p className='text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto'>
							Latest materials for conquering 
							<span className='bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 py-1 rounded-lg font-bold mx-2 transform inline-block hover:scale-105 transition-transform duration-300'>
								fitness heights
							</span>
							from experts
						</p>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Stay up to date with the latest trends and scientific discoveries in the fitness world
						</p>
					</div>

					{/* Decorative line separator */}
					<div className='mt-8 flex justify-center items-center space-x-6'>
						<div className='w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-600'></div>
						<div className='w-4 h-4 bg-emerald-500 transform rotate-45'></div>
						<div className='w-16 h-1 bg-gradient-to-r from-teal-600 to-cyan-600'></div>
					</div>
				</div>

				{/* Articles grid with geometric design */}
				<div className='relative'>
					{/* Central floating element */}
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0'>
						<div className='w-40 h-40 border-4 border-emerald-200 rounded-full opacity-10 animate-spin-slow'></div>
						<div className='absolute inset-0 w-24 h-24 border-2 border-teal-200 transform rotate-45 opacity-20 animate-pulse'></div>
					</div>

					<div className='relative z-10 grid gap-8 lg:gap-10 lg:grid-cols-2'>
						{isLoading ? (
							Array.from({ length: 4 }).map((_, index) => (
								<div key={index} className='group relative'>
									{/* Geometric container for skeleton */}
									<div className={`
										relative bg-gradient-to-br animate-pulse shadow-xl transform hover:scale-105 transition-all duration-500
										${index % 4 === 0 
											? 'from-emerald-100 to-teal-200 clip-path-slant-left'
											: index % 4 === 1
											? 'from-violet-100 to-purple-200 clip-path-corner-cut'
											: index % 4 === 2
											? 'from-cyan-100 to-blue-200 clip-path-slant-right'
											: 'from-pink-100 to-rose-200 clip-path-diamond-cut'
										}
									`}>
										<ArticleCardMediumSkeleton />
									</div>
									
									{/* Floating accent for skeleton */}
									<div className={`
										absolute -top-3 -right-3 w-8 h-8 rounded-full animate-pulse shadow-lg
										${index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}
									`}></div>
								</div>
							))
						) : (
							articles?.slice(3, 7).map((article, index) => (
								<div key={article.id} className='group relative'>
									{/* Geometric container with dynamic shapes */}
									<div className={`
										relative overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 min-h-[350px] flex flex-col
										${index % 4 === 0 
											? 'clip-path-slant-left bg-gradient-to-br from-emerald-50 to-teal-100'
											: index % 4 === 1
											? 'clip-path-corner-cut bg-gradient-to-br from-violet-50 to-purple-100'
											: index % 4 === 2
											? 'clip-path-slant-right bg-gradient-to-br from-cyan-50 to-blue-100'
											: 'clip-path-diamond-cut bg-gradient-to-br from-pink-50 to-rose-100'
										}
									`}>
										{/* Inner glow effect */}
										<div className='absolute inset-0 bg-gradient-to-br from-white/60 to-transparent group-hover:from-white/80 transition-all duration-500'></div>
										
										{/* Article card wrapper */}
										<div className='relative z-10 p-4 flex-1 flex flex-col'>
											<ArticleCardMedium article={article} />
										</div>

										{/* Animated background pattern */}
										<div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
											<div className='absolute top-6 left-6 w-8 h-8 border-2 border-emerald-500 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
											<div className='absolute bottom-6 right-6 w-6 h-6 bg-teal-500 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
											<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-violet-500 group-hover:w-24 transition-all duration-500'></div>
										</div>
									</div>

									{/* Floating accent with dynamic colors */}
									<div className={`
										absolute -top-3 -right-3 w-12 h-12 rounded-full shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center
										${index % 5 === 0 ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : ''}
										${index % 5 === 1 ? 'bg-gradient-to-br from-violet-400 to-purple-500' : ''}
										${index % 5 === 2 ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : ''}
										${index % 5 === 3 ? 'bg-gradient-to-br from-pink-400 to-rose-500' : ''}
										${index % 5 === 4 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : ''}
									`}>
										<div className='w-4 h-4 bg-white rounded-full group-hover:bg-gray-900 transition-colors duration-300'></div>
									</div>

									{/* Article number indicator */}
									<div className='absolute -top-2 -left-2 w-10 h-10 bg-gray-900 text-white font-bold text-sm flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300'>
										{String(index + 4).padStart(2, '0')}
									</div>

									{/* Corner accent triangle */}
									<div className={`
										absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent opacity-60
										${index % 3 === 0 ? 'border-b-emerald-400' : ''}
										${index % 3 === 1 ? 'border-b-violet-400' : ''}
										${index % 3 === 2 ? 'border-b-cyan-400' : ''}
									`}></div>
								</div>
							))
						)}
					</div>
				</div>

				{/* Bottom action section */}
				<div className='mt-20 text-center'>
					<div className='relative inline-block'>
						{/* Background geometric accent */}
						<div className='absolute -inset-6 bg-gradient-to-r from-emerald-100 to-teal-100 transform rotate-2 opacity-60'></div>
						
						<div className='relative space-y-6'>
							<h3 className='text-2xl lg:text-3xl font-bold text-gray-900'>
								Don't miss updates from 
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-black'>
									FITNESS ALTITUDE
								</span>
							</h3>
							
							<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
								Subscribe to news to be the first to receive fresh materials
							</p>

							<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
								<a
									href='/blog'
									className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300'
									style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)'}}>
									
									<span className='flex items-center'>
										ALL ARTICLES
										<div className='ml-3 w-6 h-6 bg-white/20 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300'>
											<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
											</svg>
										</div>
									</span>
								</a>

								<a
									href='/contacts'
									className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-200'
									style={{clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 30%)'}}>
									
									<span className='flex items-center'>
										SUBSCRIBE
										<div className='ml-3 w-6 h-6 bg-emerald-500/20 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300'>
											<svg className='w-4 h-4 text-emerald-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
											</svg>
										</div>
									</span>
								</a>
							</div>
						</div>
						
						{/* Floating decorative elements */}
						<div className='absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 transform rotate-45 animate-bounce'></div>
						<div className='absolute -bottom-4 -left-4 w-4 h-4 bg-emerald-500 rounded-full animate-pulse'></div>
					</div>
				</div>

				{/* Bottom decorative elements */}
				<div className='mt-16 flex justify-center space-x-8'>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent'></div>
					<div className='w-2 h-2 bg-emerald-500 transform rotate-45'></div>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent'></div>
				</div>
			</div>
		</section>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('latest-articles-styles')) {
	const style = document.createElement('style')
	style.id = 'latest-articles-styles'
	style.textContent = `
		/* Clip-path utilities for geometric shapes */
		.clip-path-slant-left {
			clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
		}

		.clip-path-slant-right {
			clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
		}

		.clip-path-corner-cut {
			clip-path: polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%);
		}

		.clip-path-diamond-cut {
			clip-path: polygon(0 10%, 90% 0, 100% 90%, 10% 100%);
		}

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

		/* Responsive adjustments */
		@media (max-width: 768px) {
			.clip-path-slant-left,
			.clip-path-slant-right,
			.clip-path-corner-cut,
			.clip-path-diamond-cut {
				clip-path: none;
			}
		}

		/* Ensure article cards have proper height and spacing */
		@media (min-width: 1024px) {
			.latest-article-card {
				min-height: 350px;
			}
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			.latest-article-card {
				min-height: 320px;
			}
		}

		@media (max-width: 767px) {
			.latest-article-card {
				min-height: 300px;
			}
		}

		/* Button hover effects */
		@media (hover: hover) {
			.hover-transform:hover {
				transform: scale(1.05) rotate(1deg);
			}
		}
	`
	document.head.appendChild(style)
}
