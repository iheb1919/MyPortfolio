
import './App.css'
import AboutMe from './components/AboutMe';
import ContactPage from './components/ContactMe';
import Description from './components/Description';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
//import PageFooter from './components/Footer';

import HeaderNav from './components/headerNav/HeaderNav';
import Skills from './components/Skills';
import Works from './components/Works';
import useResponsive from './hooks/useResponsive';

function App() {
  
    useResponsive();

console.log("eee")
  return (
   
          <div className={ ` w-[100dvw] h-[100dvh] overflow-x-hidden bg-bodyBg`}>
               <HeaderNav/>
              <Description/>
              <AboutMe/>
              <Skills/>
              <Experiences/>
              <Works/>
              <Footer/> 
             {/*  <ContactPage/> */}
             
          </div>
         
  )
}

export default App
