import { Container } from '../components/shared/container';

export const PrivacyPolicyPage = () => {
	return (
		<div className="relative min-h-screen bg-white text-gray-800 overflow-hidden">
			<Container className="relative z-10 py-20 lg:py-28">
				{/* Header */}
				<div className="flex flex-col lg:flex-row justify-between items-start gap-12">
					{/* Title and description */}
					<div>
						<h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-700 drop-shadow-md">
							Oleodecoco Fitness
						</h1>
						<p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-md leading-relaxed">
							Your health. Your power. Your privacy.
						</p>
					</div>

					{/* Privacy Policy Section */}
					<div className="text-right">
						<h2 className="text-3xl font-bold text-gray-800">Privacy Policy</h2>
						<p className="mt-2 text-sm text-gray-500 max-w-xs">
							We value your privacy. Here's how we protect your information.
						</p>
					</div>
				</div>

				{/* Decorative Line */}
				<div className="mt-12 flex justify-center items-center space-x-4">
					<div className="w-16 h-1 bg-blue-400"></div>
					<div className="w-4 h-4 bg-green-400 transform rotate-45"></div>
					<div className="w-16 h-1 bg-blue-400"></div>
				</div>

				{/* Page Content */}
				<div className="mt-20 max-w-4xl mx-auto space-y-10">
					{/* Point 1 */}
					<div className="relative border-l-4 border-blue-400 pl-6 py-6 bg-gray-100 rounded-tr-3xl rounded-bl-xl shadow-lg">
						<h4 className="text-2xl font-bold text-gray-800 mb-2">1. What Data We Collect</h4>
						<p className="text-gray-700 leading-relaxed">
							We only collect essential data such as browser type and visit duration. No sensitive personal data is stored without your permission.
						</p>
					</div>

					{/* Point 2 */}
					<div className="relative border-r-4 border-green-400 pr-6 py-6 bg-gray-100 rounded-tl-xl rounded-br-3xl shadow-lg text-right">
						<h4 className="text-2xl font-bold text-gray-800 mb-2">2. How We Use Your Data</h4>
						<p className="text-gray-700 leading-relaxed">
							Data helps us improve your experience, like recommending fitness programs and content based on your preferences.
						</p>
					</div>

					{/* Point 3 */}
					<div className="relative border-l-4 border-blue-400 pl-6 py-6 bg-gray-100 rounded-tl-3xl rounded-br-xl shadow-md">
						<h4 className="text-2xl font-bold text-gray-800 mb-2">3. Your Rights</h4>
						<p className="text-gray-700 leading-relaxed">
							You can request to view, change, or delete your data at any time. Just contact our support team.
						</p>
					</div>

					{/* Point 4 */}
					<div className="relative border-r-4 border-green-400 pr-6 py-6 bg-gray-100 rounded-tr-xl rounded-bl-3xl shadow-xl text-right">
						<h4 className="text-2xl font-bold text-gray-800 mb-2">4. Updates to This Policy</h4>
						<p className="text-gray-700 leading-relaxed">
							Our Privacy Policy may change over time. We recommend checking back once a month to stay informed.
						</p>
					</div>
				</div>

				{/* Contact Section */}
				<div className="mt-20 text-center">
					<h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
						Have questions about privacy?
					</h3>
					<p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto">
						Reach out to our support team — we’re here to keep your fitness journey safe and sound.
					</p>
					<a
						href="/contacts"
						className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md transition-transform"
					>
						Contact Us
					</a>
				</div>

				{/* Footer Texts */}
				<div className="mt-20 flex justify-between items-end text-sm text-gray-500">
					<p className="max-w-xs">
						© 2025 Oleodecoco Fitness — Power. Health. Strength.
					</p>
					<p>
						Last updated: June 2025
					</p>
				</div>
			</Container>
		</div>
	);
};