const TESTIMONIALS = [
	{
		quote:
			'Статьи на FITNESS ALTITUDE кардинально изменили мой подход к тренировкам. Научные методики действительно работают!',
		author: 'Дмитрий Волков',
		title: 'Персональный тренер',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
		stat: '2 года с нами'
	},
	{
		quote:
			"Невероятное разнообразие тем и глубина подачи материала. Каждая статья - это шаг к новым высотам в фитнесе.",
		author: 'Анна Петрова',
		title: 'Фитнес-инструктор',
		image: 'https://image-handler.playbookapp.io/828x0/filters:quality(85)/1695690137546_Cover-comp.jpg',
		stat: '500+ тренировок'
	},
	{
		quote:
			'FITNESS ALTITUDE помог мне понять науку за тренировками. Теперь каждое упражнение имеет смысл и цель.',
		author: 'Михаил Сидоров',
		title: 'Спортивный врач',
		image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
		stat: '15 лет опыта'
	}
]

export function TestimonialsSection() {
	return (
		<section className='relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 lg:py-32 overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/5 w-2 h-44 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-36 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-56 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-10 w-28 h-28 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				
				{/* Revolutionary title design */}
				<div className='text-center mb-20'>
					<div className='relative inline-block'>
						{/* Geometric background accents */}
						<div className='absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-violet-500/10 to-pink-500/10 transform rotate-45 opacity-80'></div>
						<div className='absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full opacity-60'></div>
						
						{/* Main title with split effect */}
						<div className='relative overflow-hidden'>
							<h2 className='text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none'>
								<span className='block transform hover:translate-x-3 transition-transform duration-500'>ОТЗЫВЫ</span>
								<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 transform hover:-translate-x-3 transition-transform duration-500 -mt-3'>
									ВЫСОТ
								</span>
							</h2>
							
							{/* Dynamic cutting line */}
							<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform -translate-y-1/2 opacity-50'></div>
						</div>

						{/* Floating decorative elements */}
						<div className='absolute -top-6 -left-6 w-6 h-6 bg-yellow-400 transform rotate-45 animate-pulse'></div>
						<div className='absolute -bottom-10 -right-10 w-8 h-8 bg-emerald-500 rounded-full animate-bounce'></div>
					</div>

					{/* Subtitle with highlight */}
					<div className='mt-10 space-y-4'>
						<p className='text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto'>
							Истории успеха от тех, кто уже покорил 
							<span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-lg font-bold mx-2 transform inline-block hover:scale-105 transition-transform duration-300'>
								новые высоты
							</span>
							вместе с нами
						</p>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Реальные отзывы от профессионалов фитнес-индустрии и наших преданных читателей
						</p>
					</div>

					{/* Decorative line separator */}
					<div className='mt-8 flex justify-center items-center space-x-6'>
						<div className='w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-600'></div>
						<div className='w-4 h-4 bg-violet-500 transform rotate-45'></div>
						<div className='w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600'></div>
					</div>
				</div>

				{/* Testimonials grid with geometric design */}
				<div className='relative'>
					{/* Central floating element */}
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0'>
						<div className='w-40 h-40 border-4 border-violet-200 transform rotate-45 opacity-15 animate-spin-slow'></div>
						<div className='absolute inset-0 w-24 h-24 border-2 border-pink-200 rounded-full opacity-25 animate-ping'></div>
					</div>

					<div className='relative z-10 grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						{TESTIMONIALS.map((testimonial, index) => (
							<div key={testimonial.author} className='group relative'>
								{/* Geometric container with dynamic shapes */}
								<div className={`
									relative overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 min-h-[320px]
									${index % 3 === 0 
										? 'clip-path-slant-left bg-gradient-to-br from-violet-50 to-purple-100'
										: index % 3 === 1
										? 'clip-path-corner-cut bg-gradient-to-br from-emerald-50 to-cyan-100'
										: 'clip-path-slant-right bg-gradient-to-br from-pink-50 to-rose-100'
									}
								`}>
									{/* Inner glow effect */}
									<div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent group-hover:from-white/70 transition-all duration-500'></div>
									
									{/* Testimonial content */}
									<div className='relative z-10 p-6 lg:p-8 h-full flex flex-col'>
										{/* Quote section */}
										<div className='flex-1 mb-6'>
											{/* Quote icon */}
											<div className='w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500'
												 style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
												<svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
													<path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z'/>
												</svg>
											</div>
											
											<blockquote className='text-lg lg:text-xl text-gray-700 font-medium leading-relaxed'>
												"{testimonial.quote}"
											</blockquote>
										</div>

										{/* Author section */}
										<div className='flex items-center justify-between'>
											<div className='flex items-center'>
												<div className='relative'>
													<img
														className='h-14 w-14 rounded-full object-cover shadow-lg transform group-hover:scale-110 transition-transform duration-300'
														src={testimonial.image}
														alt={testimonial.author}
													/>
													{/* Image border accent */}
													<div className='absolute inset-0 rounded-full border-2 border-violet-500 opacity-0 group-hover:opacity-100 transform scale-110 transition-all duration-300'></div>
												</div>
												<div className='ml-4'>
													<p className='text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-300'>
														{testimonial.author}
													</p>
													<p className='text-sm text-gray-600 font-medium'>{testimonial.title}</p>
												</div>
											</div>

											{/* Stats badge */}
											<div className='hidden sm:block'>
												<div className={`
													px-3 py-1 text-xs font-bold text-white rounded-full transform group-hover:scale-110 transition-transform duration-300
													${index % 3 === 0 ? 'bg-gradient-to-r from-violet-500 to-purple-600' : ''}
													${index % 3 === 1 ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : ''}
													${index % 3 === 2 ? 'bg-gradient-to-r from-pink-500 to-rose-600' : ''}
												`}>
													{testimonial.stat}
												</div>
											</div>
										</div>
									</div>

									{/* Animated background pattern */}
									<div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
										<div className='absolute top-4 left-4 w-6 h-6 border-2 border-violet-500 transform rotate-45 group-hover:rotate-90 transition-transform duration-500'></div>
										<div className='absolute bottom-4 right-4 w-4 h-4 bg-pink-500 rounded-full group-hover:scale-150 transition-transform duration-500'></div>
										<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-emerald-500 group-hover:w-16 transition-all duration-500'></div>
									</div>
								</div>

								{/* Floating accent with dynamic colors */}
								<div className={`
									absolute -top-3 -right-3 w-10 h-10 rounded-full shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center
									${index % 4 === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : ''}
									${index % 4 === 1 ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : ''}
									${index % 4 === 2 ? 'bg-gradient-to-br from-violet-400 to-purple-500' : ''}
									${index % 4 === 3 ? 'bg-gradient-to-br from-pink-400 to-rose-500' : ''}
								`}>
									<div className='w-3 h-3 bg-white rounded-full group-hover:bg-gray-900 transition-colors duration-300'></div>
								</div>

								{/* Rating stars indicator */}
								<div className='absolute -top-2 -left-2 flex space-x-1'>
									{Array.from({ length: 5 }).map((_, starIndex) => (
										<div key={starIndex} className='w-3 h-3 bg-yellow-400 transform rotate-45 group-hover:rotate-12 transition-transform duration-300' 
											 style={{ animationDelay: `${starIndex * 100}ms` }}></div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Bottom stats section */}
				<div className='mt-20'>
					<div className='relative bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 p-8 lg:p-12 shadow-2xl'
						 style={{clipPath: 'polygon(0 0, 95% 0, 100% 15%, 95% 100%, 0 100%)'}}>
						
						{/* Background accent */}
						<div className='absolute inset-0 bg-gradient-to-br from-violet-600/10 to-pink-600/10'
							 style={{clipPath: 'polygon(0 0, 95% 0, 100% 15%, 95% 100%, 0 100%)'}}></div>
						
						<div className='relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
							<div className='space-y-2'>
								<div className='text-3xl lg:text-4xl font-black text-violet-400'>2K+</div>
								<div className='text-gray-300 text-sm font-medium uppercase tracking-wide'>Довольных читателей</div>
							</div>
							<div className='space-y-2'>
								<div className='text-3xl lg:text-4xl font-black text-emerald-400'>98%</div>
								<div className='text-gray-300 text-sm font-medium uppercase tracking-wide'>Положительных отзывов</div>
							</div>
							<div className='space-y-2'>
								<div className='text-3xl lg:text-4xl font-black text-pink-400'>500+</div>
								<div className='text-gray-300 text-sm font-medium uppercase tracking-wide'>Успешных историй</div>
							</div>
							<div className='space-y-2'>
								<div className='text-3xl lg:text-4xl font-black text-yellow-400'>24/7</div>
								<div className='text-gray-300 text-sm font-medium uppercase tracking-wide'>Поддержка</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom decorative line */}
				<div className='mt-16 flex justify-center space-x-8'>
					<div className='w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</div>
		</section>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('testimonials-section-styles')) {
	const style = document.createElement('style')
	style.id = 'testimonials-section-styles'
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
			.clip-path-corner-cut {
				clip-path: none;
			}
		}

		/* Testimonial card height consistency */
		@media (min-width: 1024px) {
			.testimonial-card {
				min-height: 320px;
			}
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			.testimonial-card {
				min-height: 300px;
			}
		}

		@media (max-width: 767px) {
			.testimonial-card {
				min-height: 280px;
			}
		}
	`
	document.head.appendChild(style)
}