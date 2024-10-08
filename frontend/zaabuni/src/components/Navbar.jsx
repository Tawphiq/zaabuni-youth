import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import zaawhite from '../assets/zaabwhite.jpg'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [isTopOfPage, setIsTopOfPage] = useState(true)


  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true)
      if (window.scrollY !== 0) setIsTopOfPage(false)
      }
      window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  const handleNav = () => {
    setNav(!nav);
  };

  const navbarBackground = isTopOfPage? "bg-orange-200 shadow lg:text-black": "bg-teal-200"

  const navItems = [
    { id: 1, text: 'Home', link: 'home' },
    { id: 2, text: 'About', link: 'about' },
    { id: 3, text:'Scholarships', link: 'scholarships' },
    { id: 4, text: 'Projects', link: 'projects' },
    { id: 5, text: 'Donate', link: 'donate' },
    { id: 6, text: 'Contact', link: 'contact' },
    { id: 7, text: 'Executives', link: 'executives' },
  ];

  return (
    <nav className={`${navbarBackground} font-nunito flex justify-between items-center h-24 max-w-full mx-auto px-4 sticky top-0 w-full z-50`}>
      {/* Logo */}
      <div className='flex gap-2'>
        {/* <h1 className={`text-3xl font-bold ${isTopOfPage? "text-[#00df9a]": "text-white"} font-play  order-2 mt-2`}>ZAABUNI</h1> */}
        <img src={zaawhite} alt="Zaabuni Logo" className='h-12' />
      </div>

      {/* Desktop Navigation */}
      <ul className={`${isLargeScreen? 'flex' : 'hidden'}`}>
        {navItems.map(item => (
          <li key={item.id} className='p-4 uppercase font-bold hover:bg-teal-200 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
            <Link to={item.link} smooth={true} duration={500}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block text-black md:hidden'>
        {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={
        nav
          ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]g bg-gray-800 ease-in-out duration-500'
          : 'fixed left-[-100%] top-0 h-full w-[60%] ease-in-out duration-500'
        }
      >
        <Link to='home' smooth={true} duration={500}>
        <img src={zaawhite} alt="Zaabuni Logo" className='h-12 ml-4 mt-5' />
        </Link>
        {navItems.map(item => (
          <li key={item.id} className='p-4 border-b border-gray-600 cursor-pointer hover:bg-[#00df9a] hover:text-black text-white duration-300'>
            <Link onClick={handleNav} to={item.link} smooth={true} duration={500}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
