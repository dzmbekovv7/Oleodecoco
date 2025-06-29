export function CallToActionSection() {
	return (
		<section className="relative bg-gradient-to-br from-black via-indigo-900 to-purple-900 overflow-hidden">
			{/* Динамичные плавные частицы */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-24 left-1/3 w-3 h-56 bg-gradient-to-b from-cyan-400 to-transparent transform rotate-12 opacity-40 animate-pulse"></div>
				<div className="absolute top-1/4 right-1/3 w-40 h-2 bg-gradient-to-r from-purple-400 to-transparent transform -rotate-45 opacity-30"></div>
				<div className="absolute bottom-1/3 left-1/4 w-2 h-72 bg-gradient-to-t from-emerald-400 to-transparent transform rotate-45 opacity-50"></div>
				<div className="absolute top-1/2 left-1/2 w-48 h-48 border-4 border-violet-500 transform rotate-45 opacity-15 animate-spin-slow"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-40">
				<div className="flex flex-col lg:flex-row items-center gap-20">
					{/* Левая часть с текстом */}
					<div className="lg:w-3/5 order-2 lg:order-1 text-center lg:text-left">
						<div className="relative">
							{/* Геометрический акцент */}
							<div className="absolute -top-10 -left-10 w-28 h-28 bg-gradient-to-br from-violet-600/30 to-pink-600/30 transform rotate-45 opacity-70"></div>

							<div className="space-y-10">
								{/* Заголовок с эффектом */}
								<h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
									<span className="block transform hover:translate-x-3 transition-transform duration-600">
										FEEL THE
									</span>
									<span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 transform hover:-translate-x-3 transition-transform duration-600 -mt-3">
										MUSIC VIBES
									</span>
								</h2>

								{/* Подзаголовок */}
								<p className="text-2xl text-gray-300 font-semibold max-w-xl mx-auto lg:mx-0">
									Dive into a world where rhythm and harmony elevate your soul. 
									Experience exclusive tracks, deep dives into sound science, and inspiring artist stories.
								</p>

								{/* Акценты */}
								<div className="flex justify-center lg:justify-start items-center space-x-8">
									<div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full"></div>
									<div className="w-8 h-8 bg-emerald-400 rounded-full rotate-45 shadow-lg"></div>
									<div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
								</div>
							</div>
						</div>
					</div>

					{/* Правая часть с кнопкой */}
					<div className="lg:w-2/5 order-1 lg:order-2 w-full flex justify-center lg:justify-end">
						<div className="relative group">
							{/* Фоновые геометрические фигуры */}
							<div className="absolute -inset-10 opacity-25">
								<div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-pink-600 to-purple-800 transform rotate-45 group-hover:rotate-90 transition-transform duration-600"></div>
								<div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full group-hover:scale-125 transition-transform duration-600"></div>
							</div>

							{/* Контейнер кнопки с clip-path */}
							<div
								className="relative bg-gradient-to-r from-gray-900 to-indigo-900 p-10 lg:p-14 shadow-2xl transform group-hover:scale-110 transition-all duration-600"
								style={{ clipPath: 'polygon(0 0, 88% 0, 100% 25%, 88% 100%, 0 100%)' }}
							>
								{/* Внутреннее свечение */}
								<div
									className="absolute inset-0 bg-gradient-to-br from-pink-700/20 to-violet-700/20 group-hover:from-pink-700/40 group-hover:to-violet-700/40 transition-all duration-600"
									style={{ clipPath: 'polygon(0 0, 88% 0, 100% 25%, 88% 100%, 0 100%)' }}
								></div>

								<div className="relative space-y-8">
									{/* Логотип/иконка */}
									<div className="flex justify-center">
										<div
											className="w-20 h-20 bg-gradient-to-br from-pink-500 to-violet-700 flex items-center justify-center shadow-xl transform group-hover:rotate-15 transition-transform duration-600"
											style={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}
										>
											<div className="text-3xl font-extrabold text-white">🎵</div>
										</div>
									</div>

									{/* Текст кнопки */}
									<div className="text-center space-y-3">
										<h3 className="text-3xl font-extrabold text-white">
											Join 
											<span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-black">
												101newSound
											</span>
										</h3>
										<p className="text-gray-400 text-lg">
											Unlock weekly exclusive music content & inspiration
										</p>
									</div>

									{/* Кнопка */}
									<div className="flex justify-center">
										<a
											href="/subscribe"
											className="group/btn relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-pink-600 to-violet-700 hover:from-pink-700 hover:to-violet-800 text-white font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-400 overflow-hidden"
											style={{ clipPath: 'polygon(0 0, 80% 0, 95% 35%, 80% 100%, 0 100%)' }}
										>
											{/* Анимация фона кнопки */}
											<div
												className="absolute inset-0 bg-gradient-to-r from-violet-700 to-pink-600 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"
												style={{ clipPath: 'polygon(0 0, 80% 0, 95% 35%, 80% 100%, 0 100%)' }}
											></div>

											<span className="relative z-10 flex items-center">
												SUBSCRIBE
												<div className="ml-4 w-7 h-7 bg-white/25 flex items-center justify-center transform group-hover/btn:translate-x-3 group-hover/btn:rotate-12 transition-all duration-300 rounded-full">
													<svg
														className="w-5 h-5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M13 7l5 5m0 0l-5 5m5-5H6"
														/>
													</svg>
												</div>
											</span>
										</a>
									</div>

									{/* Статистика */}
									<div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
										<div className="text-center">
											<div className="text-pink-500 font-bold text-xl">5K+</div>
											<div className="text-gray-400 text-sm">Listeners</div>
										</div>
										<div className="text-center">
											<div className="text-emerald-400 font-bold text-xl">200+</div>
											<div className="text-gray-400 text-sm">Exclusive Tracks</div>
										</div>
										<div className="text-center">
											<div className="text-violet-500 font-bold text-xl">24/7</div>
											<div className="text-gray-400 text-sm">Music Support</div>
										</div>
									</div>
								</div>
							</div>

							{/* Плавающие акценты */}
							<div className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-400 transform rotate-45 animate-bounce rounded-xl shadow-lg"></div>
							<div className="absolute -bottom-8 -left-8 w-8 h-8 bg-emerald-400 rounded-full animate-pulse shadow-md"></div>
						</div>
					</div>
				</div>

				{/* Нижние декоративные элементы */}
				<div className="mt-24 flex justify-center space-x-10">
					<div className="w-40 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
					<div className="w-3 h-3 bg-pink-500 transform rotate-45 rounded-sm"></div>
					<div className="w-40 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"></div>
				</div>
			</div>

			{/* Добавляем стили для анимации spin-slow */}
			<style>{`
				@keyframes spin-slow {
					from { 
						transform: rotate(0deg); 
					}
					to { 
						transform: rotate(360deg); 
					}
				}
				.animate-spin-slow {
					animation: spin-slow 25s linear infinite;
				}
			`}</style>
		</section>
	)
}
