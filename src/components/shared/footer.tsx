import { Container } from './container';

export function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 border-t border-gray-200">
      <Container>
        <div className="py-20 space-y-20">
          {/* Logo and Description */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-blue-700">
              Oleodecoco <span className="text-green-500">Fitness</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              At Oleodecoco, we believe in strong bodies, clear minds, and healthy habits. Join us on a journey to a better you.
            </p>
          </div>

          {/* Benefits and Subscription */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Benefits */}
            <div className="bg-gray-100 p-8 rounded-3xl border border-blue-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Why Oleodecoco?</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>🏋️ Personalized workout plans</li>
                <li>🥗 Nutrition tips and recipes</li>
                <li>📅 Weekly fitness challenges</li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="bg-gray-100 p-8 rounded-3xl border border-green-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Stay in the Loop</h3>
              <p className="text-gray-700 mb-6 text-lg">Subscribe for health tips, event invites, and new workouts.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-lg bg-white border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 border-t pt-10">
            <p>© 2025 Oleodecoco Fitness — Stronger Every Day.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}