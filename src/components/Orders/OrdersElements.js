import styled, {
  keyframes
} from 'styled-components';



const ImageAnimation = keyframes`
  0%{opacity: 0; transform:scale(1.3);}

  100%{opacity: 1;}
`;
export const OrdersContainer = styled.div`
background: #fff;

    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    color: #fff;
    text-align: center;
  padding: 2rem calc((90vw - 1300px) / 2);
  justify-content: center;
  
   color: #000;
`;

export const OrdersWrapper = styled.div`
margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  overflow:hidden;
  justify-content: center;
  gap:20px;

`;

export const OrdersCard = styled.div`
margin: 0 2rem;
line-height: 2;
width: 300px;

overflow:hidden;
background: #F5AB23;
  &:hover {
    filter: saturate(150%);
    transition: 0.2s ease-out;
    
    
  }

`;

export const OrdersImg = styled.img`
height: 300px;
  min-width: 300px;
  max-width: 100%;
  filter: saturate(120%);
  object-fit:cover;
  &:hover {
    filter: saturate(120%);
    transition: 0.2s ease-out;
   
    -webkit-transform:scale(1.1);transform:scale(1.1);
  }
`;



export const OrdersInfo = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background: #F5AB23;
`;

export const OrdersDesc = styled.p`

font-size: 1rem;
color: #fff;
`;
export const OrdersPrice = styled.p`
font-weight: bold;
font-size: 1.2rem;
color: #fff;
`;
export const OrdersTitle = styled.h2`
margin-top: -1rem;
font-size: 1.5rem;
color: #fff;
text-align: center;
`;


export const OrdersButton = styled.button`
display: inline-block;
color: #fff;
    font-weight: 300;
    text-decoration: none;
    margin-top: 30px;
    border: 1px solid #fff;
    width: 150px;
    border-radius: 3px;
    text-align: center;
    padding: 10px 0;
    font-size: 1.2rem;


background: #FC242400;
border-radius: 20px;

  
  &:hover {
   background: linear-gradient(to right, #12C2E9, #C471ED59, #F64F5A57);
    
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
    
  }
`;

  