import styled from 'styled-components';
import backError from 'img/smiley.jpg';


export const Section = styled.div`
  /* padding-top: 60px; */
  margin: 0 auto;
  position: relative;

width:100vh;
height:100vh;
display:flex;
justify-content:center;

background-image:url(${backError});
background-repeat:no-repeat;
  background-size:cover;
  /* @media screen and (min-width: 768px) {
    padding-top: 92px;
    padding-left:16px;
  } */
    /* @media screen and (min-width: 1280px) {
   max-width: 1280px;
    padding: 0px 16px;
  } */
`;
export const Text = styled.p`
font-size:30px;
margin-top:100px;
font-style:italic;
  @media screen and (min-width: 768px) {

  }
    /* @media screen and (min-width: 1280px) {
   max-width: 1280px;
    padding: 0px 16px;
  } */
`;
