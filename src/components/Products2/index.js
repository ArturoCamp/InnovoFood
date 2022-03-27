import React from 'react';
import Aos from "aos";

import {
  ProductsContainer,
  ProductWrapper,
  ProductHorario,
  ProductDesc,
  ProductCard,
  ProductCardInfo,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle
 
} from './ProductsElements';

const Products = ({  data }) => {
  Aos.init();
  return (
    <ProductsContainer>
     
     <ProductWrapper>
        
       
       
         {data.map((product, index) => {
          return (
            
            <ProductCard key={index}  data-aos="zoom-in" data-aos-duration="500">
              <ProductImg src={product.img} alt={product.alt} ></ProductImg>

            </ProductCard>
          );
        })}
          {data.map((product, index) => {
          return (
            
            <ProductCardInfo key={index} > 
              
          
              <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
                
                 <ProductDesc>{product.desc1}</ProductDesc>
                 
                
              </ProductInfo>
              
            </ProductCardInfo>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
