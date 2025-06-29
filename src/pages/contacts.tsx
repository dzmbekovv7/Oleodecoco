import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 text-gray-900">
            Contact <span className="text-blue-500">Oleodecoco</span> Fitness
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our training programs, fitness goals, or collaboration opportunities?
            Reach out — we’re here to help you build your best self.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 sm:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <ContactForm />
          </div>

          {/* Info Text */}
          <div className="pl-6 sm:pl-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Get in Touch with Our Team
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Whether you’re looking to join a fitness class, book a personal coach, or have inquiries about our services — we’re just a message away.
            </p>
            <p className="text-gray-600 italic mb-6">
              "The body achieves what the mind believes."
            </p>
            <div className="text-gray-800 text-md leading-relaxed">
              <p><strong>📍 Address:</strong> 123 Broadway, New York, NY 10001, USA</p>
              <p className="mt-2"><strong>📞 Phone:</strong> +1 (212) 982-4580</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-white py-16 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Stay Strong, Stay Connected
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Subscribe to our newsletter to receive fitness tips, health advice, and exclusive updates from Oleodecoco Fitness.
        </p>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-400 rounded-full"></div>
      </section>
    </>
  )
}