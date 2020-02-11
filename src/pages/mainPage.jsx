import React from 'react'
import styled from './MainPage.module.scss'
import { AboutMe } from '../components/aboutMe/AboutMe'

export const MainPage = () => (
  <div className={styled.MainPage}>
    <AboutMe/>
  </div>
)

export default MainPage