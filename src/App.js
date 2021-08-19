import { Header } from "./Components/Header/Index";

import { Footer } from '../src/Components/Footer/Index.js';
import {Banner} from './Components/Banner/Index'
import { MainContent} from './Components/MainContent/Index';
import { SectionCondition} from './Components/SectionCondition/Index';
import { ShirtShop} from './Components/ShirtShop/Index';
import { Contact} from './Components/Contact/Index';
import {Carousel} from './Components/Carousel/Index'

function App() {

  return (
    <>
      <Header/>
      <MainContent/>
      <SectionCondition/>
      <ShirtShop/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </>

  );
}

export default App;
