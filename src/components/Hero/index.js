import React from 'react';


import {
  HeroContainer,
  HeroContainer2,
  HeroItems,
  HeroH1,
  HeroH2,
  HeroBtn,
  Span1,
  Span2,
  
} from './HeroElements';

const Hero = ({ data }) => {

  return (
    <HeroContainer>
      <HeroContainer2>
      <HeroItems>
        <HeroH1> IN<Span1>ovo</Span1><Span2>Food</Span2></HeroH1>
        <HeroH2> come lo que te hace feliz</HeroH2>
        <HeroBtn data-glf-cuid="0f68ebbc-ca45-4b0e-8703-3a007dd6959e" data-glf-ruid="66922116-96de-4baf-9d51-04ece55d47e3">
                Contactar</HeroBtn>
      </HeroItems>
      
     {/* {data.map((product, index) => {
          return (
           
               <OrdersImg src={product.img} alt={product.alt} ></OrdersImg>
           
             

          );
        })}*/}
     
      </HeroContainer2>
        
      
    </HeroContainer>
    
  );
};

export default Hero;
