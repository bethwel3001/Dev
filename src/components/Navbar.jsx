// src/components/Navbar.jsx
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const links = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="p-2 rounded-md text-gray-700 dark:text-gray-300">
                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none p-2">
                      {links.map((link) => (
                        <Menu.Item key={link.to}>
                          {({ active }) => (
                            <Link
                              to={link.to}
                              smooth={true}
                              duration={500}
                              className={`${
                                active ? 'bg-gray-100 dark:bg-gray-700' : ''
                              } block px-4 py-2 rounded-md text-gray-900 dark:text-white`}
                            >
                              {link.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                      <div className="p-2">
                        <ThemeToggle />
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;