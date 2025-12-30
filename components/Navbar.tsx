
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Mission', path: '/' },
    { name: 'Field Stories', path: '/media' },
    { name: 'Pray4India', path: '/pray4india' },
    { name: 'Donate', path: '/donate' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className={`rounded-2xl sm:rounded-3xl transition-all duration-700 ${scrolled ? 'glass px-3 sm:px-4 shadow-xl border-black/5 dark:border-white/5' : 'bg-transparent border-transparent'}`}>
          <div className="flex items-center justify-between h-14 sm:h-16 px-2 sm:px-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-1 sm:space-x-2 group">
                <span className="text-lg sm:text-xl md:text-2xl font-black serif text-slate-800 dark:text-white tracking-tight group-hover:text-orange-700 transition-colors duration-300">
                  Jesus<span className="text-orange-600 font-bold italic">For</span>India
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-[10px] sm:text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${isActive(link.path) ? 'text-orange-700 dark:text-orange-500' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-700 dark:bg-orange-500 rounded-full"></span>
                    )}
                  </Link>
                ))}

                <button
                  onClick={toggleTheme}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1m9-9h1M3 9h1m17.364 7.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </button>

                <Link
                  to="/donate"
                  className="bg-orange-600 text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-200 transition-all"
                >
                  Partner
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 sm:space-x-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1m9-9h1M3 9h1m17.364 7.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-3 sm:px-4 mt-2">
          <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-2xl dark:border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${isActive(link.path)
                  ? 'text-orange-700 dark:text-orange-500 bg-orange-50/50 dark:bg-orange-900/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                  } block px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-bold tracking-widest uppercase transition-all`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-orange-600 text-white px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-bold uppercase mt-3 sm:mt-4"
            >
              Support the Mission
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
