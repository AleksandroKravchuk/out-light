import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationItem = styled.li`
  text-decoration: none;
  padding-top: 40px;
  width: 100%;

  &:first-child {
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;

    /* width:100px; */
  }
`;

export const NavigationLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: calc(44 / 32);
  letter-spacing: 0.04em;
  color: #181c27;
  transform: scale(1);
  transition-property: color, text-decoration-line, transform;
  transition-duration: 250ms, 250ms, 250ms;

    @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: calc(66 / 48);
  }

    @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: calc(27 / 20);
  }
&.active{
 color: #f59256;
    /* text-decoration-line: underline; */
    transform: scale(1.1);
}
  /* &:hover,
  &:focus {

  } */
`
export const Navigation = styled.nav`
background-color: #FDF7F2;
 /* pointer-events: none; */

   @media screen and (max-width: 1279px) {
  text-align: center;
width: 100%;
    position: absolute;
    top: 40px;
    right: 0;
    height: 0;
    padding-top: 108px;
    opacity: 0;

    transform: scaleY(0.5);
    transform-origin: top;
    transition: transform 250ms linear, opacity 250ms linear;
     &.shown {
      transform: scaleY(1);
      opacity: 1;
      width: 100%;
      height: 110vh;
      z-index: 30;
      visibility: visible;
      pointer-events: auto;
    }
    }
    @media screen and (min-width: 1280px) {
      position: relative;
       visibility: visible;

    }


`

export const List = styled.ul`
  @media screen and (min-width: 1280px) {
    display: flex;
width:480px;
    column-gap: 80px;
}
`
