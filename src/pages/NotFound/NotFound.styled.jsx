import styled from 'styled-components';
import backError from 'img/smiley.jpg';


export const Section = styled.div`
  margin: 0 auto;
  position: relative;

width:100vh;
height:100vh;
display:flex;
justify-content:center;

background-image:url(${backError});
background-repeat:no-repeat;
  background-size:cover;
`;
export const Text = styled.p`
font-size:30px;
margin-top:100px;
font-style:italic;
  @media screen and (min-width: 768px) {

  }

`;
