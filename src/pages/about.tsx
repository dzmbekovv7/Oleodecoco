import { Container } from '../components/shared/container';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl font-extrabold leading-tight">
                Your Fitness, <span className="text-gray-600">Your Journey</span>
              </h1>
              <p className="text-lg font-light text-gray-600">
                At <strong>Oleodecoco Fitness</strong>, we focus on balance, strength, and well-being. Join a fitness lifestyle that suits your pace and inspires you to grow.
              </p>
              <button className="mt-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition">
                Join Us Today
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
                alt="Fitness"
                className="rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Energy & Endurance',
                icon: '🔥',
                desc: 'Enhance your performance and feel energized all day.',
              },
              {
                title: 'Mental Clarity',
                icon: '🧘‍♂️',
                desc: 'Find peace of mind through mindful movement and training.',
              },
              {
                title: 'Community Support',
                icon: '🤝',
                desc: 'Train with others who share your drive and values.',
              },
            ].map(({ title, icon, desc }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coaches Section */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Coaches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: 'Max Johnson',
                role: 'Strength Coach',
                img: 'https://www.ourwatch.org.au/_next/image?url=https%3A%2F%2Fassets.ourwatch.org.au%2Fassets%2FMen-in-focus-resources%2F_800x640_crop_center-center_90_none%2FMiF-Mack.jpg&w=3840&q=90',
              },
              {
                name: 'Emily Park',
                role: 'Yoga Instructor',
                img: 'https://img.freepik.com/free-photo/woman-doing-close-up-photoshoot-studio_53876-14476.jpg?semt=ais_hybrid&w=740',
              },
              {
                name: 'Carlos Rivera',
                role: 'Cardio Trainer',
                img: 'https://www.byrdie.com/thmb/vPnxcxE3aXQo_2SpVzlksa7vZmY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/382273864_695179078823092_5394277896313770987_n1-38d6e99842b44d1e8335fd8a3455b26c.jpg',
              },
              {
                name: 'Sophie Lee',
                role: 'Nutritionist',
                img: 'https://media.heragenda.com/brand-img/10702/0x0/wp-content/uploads/2019/12/woman-wearing-gray-notch-lapel-suit-jacket-2381069.jpg',
              },
            ].map(({ name, role, img }, i) => (
              <div
                key={i}
                className="bg-gray-50 text-center rounded-2xl p-6 border shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Start Today</h2>
            <p className="text-gray-700 mb-6">No matter your level, we’ll help you reach your goals.</p>
            <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}