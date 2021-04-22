import styled, { keyframes }  from 'styled-components';
import { Header, Image } from 'semantic-ui-react';
export const MainHead = styled.h1`
  color: green;
  font-size: 12px;
`
export const MainP = styled.p`
  font-size: 45px;
  margin-bottom: 30px;
`
export const SecHead = styled(Header)`
  color: red;
  background: yellow;
  font-size: 45px !important;
  @media (max-width: 768px) {
    color: blue;
    background: green;
  }
  @media (max-width: 500px) {
    background: blue;
    color: green;
  }
`
export const GrowShrink = keyframes`
  0% { 
    height: 100px; 
    background: red;
  }
  25% {
    height: 300px;
    background: green;
  }
  50% {
    height: 100px;
    background: blue;
  }
  100% {
    height: 50px;
    background: pink;
  }
`
export const MainImg = styled(Image)`
  height: 100px;
  animation-name: ${GrowShrink};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`