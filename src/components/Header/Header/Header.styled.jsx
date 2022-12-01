import styled from 'styled-components';

export const StyledHeader = styled.header`
margin-top: 16px;
  position: relative;
  display: flex;
  width:100%
  /* justify-content: space-between; */
  align-items: center;
  /* z-index: 20; */

  @media screen and (min-width: 1280px) {
  column-gap: 80px;
  margin-top: 20px;
  align-items:center;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  z-index:20;
  background-color: transparent;
/* padding-right:25px; */
/* @media screen and (min-width: 768px) {
   padding-right:45px;
  } */
   @media screen and (max-width: 767px) {
    margin-left:auto;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
position: absolute;
top: 0;
/* left: -20px; */
display: flex;
flex-direction: column-reverse;
justify-content: flex-end;
padding-top: 46px;
width: 100%;
/* height: 100%; */
overflow: hidden;
background-color:#FDF7F2;
row-gap: 60px;
align-items: center;

@media screen and (max-width: 1279px) {
transform: scaleY(0);
opacity: 0;
height: 100vh;
transform-origin: top;
transition: transform 250ms linear, opacity 250ms linear;

&.shown {
transform: scaleY(1);
opacity: 1;
z-index: 10;
}
}

@media screen and (min-width: 768px) {
padding: 0;
/* position: relative;
overflow: visible; */
/* height: auto;
width: 768px; */

}

@media screen and (min-width: 1280px) {
  display:none;
/* position: relative;
flex-direction: row;
justify-content: flex-start;
padding: 20px 0;
height: auto;
width: 1280px; */
}
`

export const AuthUserContainer = styled.div`
@media screen and (max-width: 767px) {
display:none;
    &.shown {
      display:flex;
  position:absolute;
  justify-content:space-around;
 top: 80px;
 left: 50%;
 transform:translateX(-50%);
 z-index:100;
    }
}

@media screen and (min-width: 768px) {
  /* display:block; */
  margin-left:auto;
  margin-right:25px;
  display: flex;
  gap: 12px;
  /* justify-content: center; */
  align-items: center;
}

@media screen and (min-width: 1280px) {
  position: relative;
  display: flex;
  column-gap: 20px;
  top: 0;
  right: 16px;
  margin-left: auto;
  transform: translate(0);
}
`
