import React, { useState, useEffect, useRef } from 'react';
import * as st from './AboutMe.module.scss'

export interface TextSectionProps {
  title: React.ReactNode,
  content: React.ReactNode
}

interface SectionList {
  listName: string,
  entries: string[]
}

export interface ExperienceEntryProps {
  employer: string,
  role: string,
  date: string,
  lines: string[]
}

const EXPERIENCES: ExperienceEntryProps[] = [
  {
    employer: 'Comparison Creator',
    role: 'Frontend Developer',
    date: 'June, 2014',
    lines: [
            'Gained experience working with a company engaged with clients specializing in financial services, e.g. GoCompare.com, Moneysupermarket.com.',
            'Improved skills in web development and design from using Photoshop and HTML.',
            'Contributed to improving the design of a client’s website.'
          ]
  },
  {
    employer: 'Elevate',
    role: 'App Developer',
    date: '31st July - 22nd September',
    lines: [
            'Summer internship at Imperial College London in collaboration with an external industry collaborator and with a component of research in Computer Vision.',
            'Worked on developing an App prototype in Java and Python using Android Studio and OpenCV.',
            'Gained skills in both App Development and Computer Vision.'
          ]
  },
  {
    employer: 'Visa',
    role: 'Software Engineer',
    date: '23 July 2018 - 27 September 2019',
    lines: [
            'Experience in working at an international company and having to collaborate with people across the globe.',
            'Experience in developing maintainable code for the large-scale VIP system which facilitates millions of transactions across the globe.',
            'Completed the ISTQB Foundation level testing qualification to become a Certified Tester. Regularly tests written code during development',
            'Experience in working in an Agile scrum team with CI/CD and developing in GoLang, C++ and Assembly.',
          ]
  },
  {
    employer: 'Amazon',
    role: 'Software Engineer',
    date: '3 October 2019 - Present',
    lines: [
            'Working on the Prime Video website which delivers content to millions across the globe.',
            'Using Full stack technology such as React and Scala.'
          ]
  }
]

const FadeInSection = ({ children }) => {
  
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // if (entries[0].isIntersecting) {
      //   setVisible(true);        
      //   observer.unobserve(domRef.current);
      // }

      entries.map(entry => {
        setVisible(entry.isIntersecting);
      })
    });
    
    observer.observe(domRef.current);
    
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div ref={ domRef } className={`${st.FadeInSection} ${isVisible ? st.isVisible : ''}` }>
      {children}
    </div>);
};

const ExperienceTitle = 
  <div className={`${st.Title}`}>
    <h1>Experience</h1>
  </div>

const ExperienceEntry = ( { employer, role, date, lines } : ExperienceEntryProps ) => {
  return(
    <div className={st.ExperienceEntry}>
      <div className={`${st.WithDate}`}>
        <h2>{employer} - {role}</h2>
        <h3>{date}</h3>
      </div>
      {lines.map((line, index) => <p id={`line-${index}`} key={index}>{line}</p>)}
    </div>
  )
}

export const ExperienceContent = () => 
    <div className={`${st.Content}`}>
      {EXPERIENCES.map((experience, index) => 
        <FadeInSection key={index}>
          <ExperienceEntry {...experience}/>
        </FadeInSection>
        )}
    </div>


export const TextSection = ({title, children}) => {
  return (
    <div className={st.TextSection}>
      {title}
      {children}
    </div>
  )
}

export const AboutMe = () => {
  return(
    <TextSection title={ExperienceTitle}>
      <ExperienceContent/>
    </TextSection>
  )
}

export default AboutMe