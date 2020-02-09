import React, { useState, useEffect, useRef } from 'react';
import * as st from './AboutMe.module.scss'

//put into seperate file? 
const ExperienceTitle = <h1 className={`${st.Title}`}>Experience</h1>

// const handleExperienceScroll = (e) => {
//     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//     if (bottom) {
//       console.log("dsf")
//     }
// }

export const ExperienceEntry = ( { employer, role, date, lines } ) => {
  const [isScrolledTo, setScrolledTo] = useState(false);
  const [isTriggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset > ref.current.offsetTop - 400
      if (scrolled) {
        setTriggered(true);
      }
      setScrolledTo(scrolled);
    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return(
    <div className={`${st.Experience} ${isScrolledTo? st.ExperienceScrolled: ''} ${isTriggered? '': st.Invisible}`} ref={ref}>
      <div className={`${st.WithDate}`}>
        <h2>{employer} - {role}</h2>
        <h3>{date}</h3>
      </div>
      {lines.map((line, index) => <p id={`line-${index}`} key={index}>{line}</p>)}
    </div>
  )
}


const ExperienceContent = 
  <div className={`${st.Content}`}>
    <ExperienceEntry employer={'Comparison Creator'} role={'Frontend Developer'} date={'July 2015'} 
      lines={[
        'Gained experience working with a company engaged with clients specializing in financial services, e.g. GoCompare.com, Moneysupermarket.com.',
        'Improved skills in web development and design from using Photoshop and HTML.',
        'Contributed to improving the design of a client’s website.'
      ]}/>
    <ExperienceEntry employer={'Comparison Creator'} role={'Frontend Developer'} date={'July 2015'} 
    lines={[
      'Gained experience working with a company engaged with clients specializing in financial services, e.g. GoCompare.com, Moneysupermarket.com.',
      'Improved skills in web development and design from using Photoshop and HTML.',
      'Contributed to improving the design of a client’s website.'
    ]}/> 
  </div>


export interface TextSectionProps {
	title: React.ReactNode,
	content: React.ReactNode
}

interface SectionList {
	listName: string,
	entries: string[]
}


export const TextSection = ( { title, content }: TextSectionProps) => (
  <div className={st.TextSection}>
    {title}
    {content}
  </div>
)

export const AboutMe = () => <TextSection title={ExperienceTitle} content={ExperienceContent}/>

export default AboutMe