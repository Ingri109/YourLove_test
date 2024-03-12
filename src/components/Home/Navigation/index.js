import { useState, useEffect } from 'react';
import AccountSVG from '../../../assets/img/account.svg';
import AccountActivSVG from '../../../assets/img/accountActiv.svg';
import NavigationItem from '../NavigationItem';
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (window.location.pathname === '/') {
      setCurrentPage('Home');
    } else if (window.location.pathname === '/yourLove') {
      setCurrentPage('Your Love');
    } else if (window.location.pathname === '/chat') {
      setCurrentPage('Chat');
    } else if (window.location.pathname === '/events') {
      setCurrentPage('Events');
    } else if (window.location.pathname === '/account') {
      setCurrentPage('Account');
    }
  }, []);

  const handleLinkClick = (pageName) => {
    setCurrentPage(pageName);
  };
  return (
    <nav className='fixed top-0 left-0 right-0 z-10'>
      <ul className='flex justify-between items-center bg-black bg-opacity-60 h-[30px] md:h-[46px]'>
        <NavigationItem to="/" pageName="Home" currentPage={currentPage} onClick={handleLinkClick} />
        <div className='flex justify-end items-center space-x-2 mr-[5px] md:space-x-6 md:mr-[15px] sm:mr-[8px]'>
          <NavigationItem to="/yourLove" pageName="Your Love" currentPage={currentPage} onClick={handleLinkClick} />
          <NavigationItem to="/chat" pageName="Chat" currentPage={currentPage} onClick={handleLinkClick} />
          <NavigationItem to="/events" pageName="Events" currentPage={currentPage} onClick={handleLinkClick} />
          <li>
            <Link to="/account" className={``} onClick={() => handleLinkClick('Account')}><img src={currentPage === 'Account' ? AccountActivSVG : AccountSVG} alt={currentPage === 'Account' ? 'Active Account Icon' : 'Account Icon'} className={`rounded-full h-[24px] w-[24px] md:h-[40px] md:w-[40px] ${currentPage === 'Account' ? 'shadow-[0_2px_15px_3px_rgba(0,0,0,0.3)] shadow-color2' : 'hover:shadow-[0_2px_15px_3px_rgba(0,0,0,0.3)] delay-200 ease-out duration-300 hover:shadow-color2'} `}></img></Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}