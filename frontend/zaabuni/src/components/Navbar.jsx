import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About', link: '/about' },
    { id: 3, text: 'Announcements', link: '/announcements' },
    { id: 4, text: 'Gallery', link: '/gallery' },
    { id: 5, text: 'Contact', link: '/contact' },
  ];

  return (
    <div className='bg-gray-800 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-[#00df9a] font-play'>ZAABUNI</h1>

      {/* Desktop Navigation */}
      <ul className={`${isLargeScreen? 'flex' : 'hidden'}`}>
        {navItems.map(item => (
          <li key={item.id} className='p-4 uppercase hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={
        nav
          ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]g bg-gray-800 ease-in-out duration-500'
          : 'fixed left-[-100%] top-0 h-full w-[60%] ease-in-out duration-500'
        }
      >
        <h1 className='text-3xl font-bold text-[#00df9a] m-4 font-play'>ZAABUNI</h1>
        {navItems.map(item => (
          <li key={item.id} className='p-4 border-b border-gray-600 cursor-pointer hover:bg-[#00df9a] hover:text-black duration-300'>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
