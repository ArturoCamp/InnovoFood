import styled, {
  keyframes
} from 'styled-components';


export const ProductsContainer = styled.div `
  /* width: 100vw; */
  min-height: 78vh;
  padding: 1rem calc((100vw - 1200px) / 2);
  background: #fff;
 
  color: #000;
  background: #7E887E;
  background: -webkit-linear-gradient(to right, #B8BEB817, #B8BEB817);
  background: linear-gradient(to right, #B8BEB817, #B8BEB817);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
 
  justify-content: center;
 

`;

export const ProductCard = styled.div`

margin: 0 6rem;
line-height: 2;
width: 315px;
justify-content: center;
flex-basis: 280px;

`;
export const ProductCardInfo = styled.div`
margin: 0 5rem;
  line-height: 2;
  width: 400px;
  
  flex-basis: 280px;
  
`;

export const ProductImg = styled.img`
  height: 325px;
  width: 500px;
  min-width: 325px;
  justify-content: center;
  object-fit: cover;
  border-radius: 20px;
  &:hover {
    filter: saturate(130%);
    transition: 0.2s ease-out;
    cursor: pointer;
    -webkit-transform:scale(1.05);transform:scale(1.05);
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
    object-fit: cover;
  }
  
`;



export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 350px;
  max-width: 100%;
  padding: 0.5rem;
  
  color: #050505;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  color: #050101;
  text-align: init;
  font-size: 1rem;
  font-weight: 600;
 
`;


export const ProductTitle = styled.h2`
 
  color: #F5AB23;;
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  
`;



export const ProductButton = styled.button`
font-size: 1.2rem;
padding: 1rem 4rem;
border: none;
background: #FC2424;
color: #fff;
border-radius: 20px;
Text-aling: absolute;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
