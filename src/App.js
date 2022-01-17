import { useState } from 'react'
import Nav from '../src/components/nav'
import Typical from '../src/components/typical'
import Container from './components/container'
import Footer from './components/footer'
import Menu from './components/menu'
import Toggle from './components/toggle'
import Slider from './components/slider'

import 'animate.css';
import About from './components/about';
import { useEffect } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [language, setLanguage] = useState(false)
  const [seeSlider,setSeeSlider] = useState(false)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if(entry.contentRect.width <= 600){
          setSeeSlider(true);
        }else{
          setSeeSlider(false);
        }
      }
    })
    resizeObserver.observe(document.body)
  },[])
  return (
    <>
      <Menu language={language} showMenu={showMenu} setShowMenu={setShowMenu}>
        <Toggle setLanguage={setLanguage} />
      </Menu>
      <Nav language={language} setShowMenu={setShowMenu} />
      <Typical language={language} setShowMenu={setShowMenu} />
      {
        seeSlider?<Slider language={language} />:<About language={language} setShowMenu={setShowMenu} />  
      }
      <Container language={language} setShowMenu={setShowMenu} />
      <Footer setShowMenu={setShowMenu} language={language} />
    </>
  );
}

export default App;
