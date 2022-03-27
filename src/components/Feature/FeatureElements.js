import styled  from 'styled-components';
import ImgBg from '../../images/fondo4.png';

export const FeatureContainer = styled.div`
background: linear-gradient(to right, #FDFD4746, #24FE4167);
url(${ImgBg});

  background: linear-gradient(to right, #FDFD4746, #24FE4167),url(${ImgBg});

background-attachment: fixed;
background-position: center;
background-size: cover;
position: relative;
overflow: hidden;
color: #fff;
text-align: center;



`;

export const HeroWaves = styled.div`
  height: 100px;
  width: 100%;
 

  background: linear-gradient(to right, #12C2E94B, #12C2E921, #12C2E913)),
    url(${ImgBg});


`;

export const SvgWaves = styled.svg`
height: 100%;
width: 105.308%;

`;
export const PathWaves = styled.path`
stroke: none;
 fill: #fff;
`;

export const FeatureWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;



`;

export const FeatureCard = styled.div`

line-height: 2;
width: 315px;
justify-content: center;
flex-basis: 280px;
`;
export const FeatureCard2 = styled.div`

color: #fff;
justify-content: center;
  
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
export const FeatureCardInfo = styled.div`

  line-height: 2;
  width: 300px;
 justify-content: center;
  flex-basis: 280px;
  
`;

export const FeatureImg = styled.img`
height: 325px;
  min-width: 325px;
  max-width: 100%;
 
  border-radius: 20px;
  &:hover {
    filter: saturate(120%);
    transition: 0.2s ease-out;
    cursor: pointer;
    -webkit-transform:scale(1.05);transform:scale(1.05);
  }
`;



export const FeatureInfo = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
 
  padding: 0.5rem;
  
  color: #000;


`;

export const FeatureDesc = styled.p`

color: #000;
justify-content: center;
  
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;


export const FeatureTitle = styled.h2`

color: #000;
justify-content: center;
  
  text-decoration: none;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;



