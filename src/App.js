import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productData2,productData3,productData4,productData5 } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Orders from './components/Orders';
import Products2 from './components/Products2';



function App() {
  Aos.init();
  return (
    <Router>
      <GlobalStyle />
      <Hero data={productData3}/>     
      <Orders  data={productData2} />
      <Products data={productData4} />
      <Products2 data={productData5} />
      <Footer />
     {/* <Products data={productData4} />
        <Products2 heading='¿Quiénes somos?' data={productData}  />
  <Feature  data={productData5}/> */}
      
    
   
    </Router>
  );
}

export default App;
