import React from 'react';
import logo_black from '../../assets/logo_black.png';
import logo_white from '../../assets/logo_white.png';
import resume from '../../assets/Jonathan_Shih_resume.pdf';
import { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import SideNav from './sidenav.js';

const NavigationTopbar = ({ theme, toggleTheme }) => {
  const [lastScroll, setLastScroll] = useState(0);
  const [zindex, setZindex] = useState(false);

  const handleScroll = () => {
    const nav = document.querySelector('.nav-bar');
    const transparent = document.querySelector('.transparent');
    const currentScroll = window.pageYOffset;
    if (window.pageYOffset < 10) {
      nav.classList.remove('nav-bar--hidden');
      transparent.classList.remove('transparent--hidden');

      transparent.classList.remove('nav-bar-backdrop-black');
      transparent.classList.remove('nav-bar-backdrop-white');
      setZindex(false);
    } else if (lastScroll < currentScroll && currentScroll - lastScroll > 10) {
      nav.classList.add('nav-bar--hidden');
      transparent.classList.add('transparent--hidden');
    } else if (lastScroll > currentScroll && lastScroll - currentScroll > 5) {
      nav.classList.remove('nav-bar--hidden');
      transparent.classList.remove('transparent--hidden');
      setZindex(true);
      setShadow();
    }

    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll]);

  useEffect(() => {
    setShadow();
  }, [theme]);

  useEffect(() => {
    const transparent = document.querySelector('.transparent');
    transparent.classList.remove('nav-bar-backdrop-black');
    transparent.classList.remove('nav-bar-backdrop-white');
  }, []);

  const setShadow = () => {
    const transparent = document.querySelector('.transparent');
    if (theme === 'dark') {
      transparent.classList.remove('nav-bar-backdrop-white');
      window.pageYOffset > 10 &&
        transparent.classList.add('nav-bar-backdrop-black');
    } else {
      transparent.classList.remove('nav-bar-backdrop-black');
      window.pageYOffset > 10 &&
        transparent.classList.add('nav-bar-backdrop-white');
    }
  };
  var smallNav = document.querySelector('.small-nav');
  var smallNavTransparent = document.querySelector('.small-nav-transparent');
  useEffect(() => {
    smallNav = document.querySelector('.small-nav');
    smallNavTransparent = document.querySelector('.small-nav-transparent');
  }, []);
  const showSmallNav = () => {
    smallNav.classList.add('small-nav--show');
    smallNavTransparent.classList.add('small-nav-transparent--show');
  };

  return (
    <div className={`topbar ${zindex && 'z-10'}`}>
      <div className="transparent"></div>
      <div className="d-flex align-items-center justify-content-between nav-bar">
        <div>
          <img
            src={theme === 'dark' ? logo_white : logo_black}
            alt="logo"
            className="logo"
            type="button"
            onClick={() => Scroll.animateScroll.scrollToTop({ duration: 100 })}
          />
        </div>
        <i
          type="button"
          className="fa-solid fa-bars d-md-none h3"
          onClick={() => showSmallNav()}
        ></i>
        <ul className="nav d-none d-md-flex h6">
          <li className="nav-item" type="button">
            <Link
              to="aboutme-wrapper"
              spy={true}
              smooth={true}
              duration={100}
              className="nav-link"
              activeClass="nav-link-active"
            >
              About Me
            </Link>
          </li>
          <li className="nav-item" type="button">
            <Link
              to="experiences-wrapper"
              spy={true}
              smooth={true}
              duration={100}
              className="nav-link"
              activeClass="nav-link-active"
            >
              Experiences
            </Link>
          </li>
          <li className="nav-item" type="button">
            <Link
              to="projects-wrapper"
              spy={true}
              smooth={true}
              duration={100}
              className="nav-link"
              activeClass="nav-link-active"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={resume} target="_blank">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center switch-div">
              <i
                type="button"
                className={
                  theme === 'dark'
                    ? 'fa-solid fa-sun mode-switch'
                    : 'fa-solid fa-moon mode-switch'
                }
                onClick={() => toggleTheme()}
              ></i>
            </div>
          </li>
        </ul>
      </div>
      <SideNav theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default NavigationTopbar;
