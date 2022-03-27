import React from 'react';
import Aos from "aos";
import { FeatureContainer,
   FeatureWrapper,
   FeatureCard,
   FeatureImg,
   FeatureInfo,
   FeatureTitle,
   FeatureDesc,
   FeatureCard2,
   
   } from './FeatureElements';

const Feature = ({data}) => {
  Aos.init();
  return (
    <FeatureContainer>

      <FeatureWrapper>
        
        {data.map((product, index) => {
          return (
            
            <FeatureCard key={index} data-aos="zoom-in" data-aos-duration="500">
              <FeatureImg src={product.img} alt={product.alt} >
              
              </FeatureImg>
           
            
            </FeatureCard>
          );
        })}
         {data.map((product, index) => {
          return (
            
            <FeatureCard2 key={index} data-aos="zoom-in" data-aos-duration="500">
             
              <FeatureInfo>
            
               <FeatureTitle>{product.name}</FeatureTitle>
            
                 <FeatureDesc>{product.desc}</FeatureDesc>
               
                
               
              </FeatureInfo>
            </FeatureCard2>
          );
        })}
      </FeatureWrapper>
     
    </FeatureContainer>
  );
};

export default Feature;
