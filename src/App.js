import { useState } from 'react'
import Nav from '../src/components/nav'
import Typical from '../src/components/typical'
import Container from './components/container'
import Footer from './components/footer'
import Menu from './components/menu'
import Toggle from './components/toggle'

import 'animate.css';

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [language,setLanguage] = useState(false)
  return (
    <>
      <Menu language={language} showMenu={showMenu} setShowMenu={setShowMenu}>
        <Toggle setLanguage={setLanguage}/>
      </Menu>
      <Nav language={language} setShowMenu={setShowMenu} />
      <Typical language={language} setShowMenu={setShowMenu}/>
      <Container language={language} setShowMenu={setShowMenu}/>
      <Footer setShowMenu={setShowMenu} language={language}/>
    </>
  );
}

export default App;
