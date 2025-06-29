import { useLocation, Link } from 'react-router';
import { Container } from './container';
import { useState } from 'react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Privacy', href: '/privacy-policy' },
];

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Left: Logo */}
          <Link to="/" className="flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Oleodecoco
            </h1>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Natural & Pure
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-xl font-semibold text-gray-700 hover:text-black transition`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-black transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
