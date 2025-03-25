import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          {/* Centered Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg px-8 py-2 rounded-full shadow-lg glass-nav">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer font-medium"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 focus:outline-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <Transition
        as={Fragment}
        show={mobileMenuOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm">
          {/* Menu Container - Centered with strong glass effect */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden glass-nav">
              {/* Close Button - Top Right */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                  aria-label="Close menu"
                >
                  <FiX size={24} className="text-xl" />
                </button>
              </div>
              
              {/* Centered Navigation Links */}
              <div className="flex flex-col items-center space-y-6 px-6 pb-8">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center px-6 py-3 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Theme Toggle - Centered */}
                <div className="pt-4">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      {/* Add glassmorphism styles */}
      <style jsx>{`
        .glass-nav {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        }
        .dark .glass-nav {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;