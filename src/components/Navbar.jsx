import { Menu, Transition } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">My Portfolio</a>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="about" smooth={true} duration={500} className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">About</Link>
          <Link to="projects" smooth={true} duration={500} className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">Contact</Link>
          <DarkModeToggle />
        </div>
        <div className="md:hidden">
          <Menu as="div" className="relative">
            <Menu.Button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              <FiMenu className="text-gray-800 dark:text-white" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="about" smooth={true} duration={500} className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 dark:bg-gray-600' : 'text-gray-800 dark:text-white'}`}>About</Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="projects" smooth={true} duration={500} className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 dark:bg-gray-600' : 'text-gray-800 dark:text-white'}`}>Projects</Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="contact" smooth={true} duration={500} className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 dark:bg-gray-600' : 'text-gray-800 dark:text-white'}`}>Contact</Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};