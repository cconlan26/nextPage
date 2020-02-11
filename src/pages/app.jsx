import React from 'react'
import { NavBar } from '../components/navbar/NavBar'
import { MainPage } from './mainPage.jsx'
import styles from './app.module.scss'

import '../lib/fontawesome';

export const App = () => (
  <div className={styles.App}>
  	<NavBar/>
    <MainPage/>
  </div>
)

export default App