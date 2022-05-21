import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [hamActive, setHamActive] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    document.documentElement.dataset.scroll = offset;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleHamburger = () => {
    setHamActive(!hamActive);
  };

  const linkClicked = () => {
    setHamActive(false);
  };

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', handleHamburger);

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    handleScroll();

    return function cleanupListener() {
      hamburger.removeEventListener('click', handleHamburger);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  let navbarMenuClasses = ['nav-menu'];
  let hamburgerMenuClasses = ['hamburger'];
  if (hamActive) {
    navbarMenuClasses.push('active');
    hamburgerMenuClasses.push('active');
  }

  return (
    <header>
      <nav className={navbarClasses.join(' ')}>
        <a href='/' className='nav-branding'>
          Newsletter
        </a>
        <ul className={navbarMenuClasses.join(' ')}>
          <li className='nav-item'>
            <Link
              to='about'
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={500}
              //onClick={linkClicked}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='sponsor'
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={500}
              // onClick={linkClicked}
            >
              Sponsorship
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='issues'
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={500}
              // onClick={linkClicked}
            >
              Issues
            </Link>
          </li>
        </ul>
        <div className={hamburgerMenuClasses.join(' ')}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
