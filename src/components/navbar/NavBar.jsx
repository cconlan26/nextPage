import React, { useState, useEffect, useRef } from 'react';
import * as st from './NavBar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface NavLink {
  url: string,
  text: string
}

export interface Icon {
  type: string,
  icon: string,
  url: url
}

export const HEADERS: NavLink[] = [
  {
    url: '/AboutMe',
    text: 'About Me'
  },
  {
    url: '/Resume',
    text: 'My Resume'
  },
  {
    url: '/FoodRecipes',
    text: 'Food Recipes'
  },
  {
    url: '/Coffee',
    text: 'Coffee'
  }
]

export const ICONS: Icon[] = [
  {
    type: 'fab',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/christopher-conlan/'
  },
  {
    type: 'fab',
    icon: 'github',
    url: 'https://github.com/cconlan26'
  },
  {
    type: 'fas',
    icon: 'envelope-square',
    url: 'mailto:cconlan26@gmail.com'
  }
]

export const NavBar = () => {

  const [isScrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      setScrolled(window.pageYOffset > 200);
    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div id="navbar" className={`${st.Nav} ${isScrolled? st.Scrolled: ''}`} ref={ref}>
      <div className={`${st.navTitleBox}`}>
        <h1 className={`${st.navTitle}`}>
          {isScrolled? 'Chris Conlan': 'Chris Conlan'}
        </h1>
      </div>
      <div className={`${st.NavLinks}`}>
    		{HEADERS.map((header, index) => <a key={index} href={header.url}>{header.text}</a>)}
      </div>
      <ul className={`${st.NavIcons}`}>
        {ICONS.map((i, index) => <li key={index} id='navIcon'><a href={i.url} target='_blank'><FontAwesomeIcon icon={[i.type, i.icon]}/></a></li>)}
      </ul>
    </div>
  )
}

export default NavBar