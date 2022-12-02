import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-top: 42px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 92px;
  };

  @media screen and (min-width: 1280px) {
    padding-top: 70px;
    padding-bottom: 200px;
  };
`;

export const Title = styled.h2`
  margin-bottom: 28px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    text-align: center;
  };
`;

export const AuthLinkContainer = styled.div`
  display: flex;
`;
export const Category = styled.div`

  @media screen and (min-width: 1280px){
    display: flex;
  }
`;
export const AuthLink = styled(NavLink)`

  text-align: center;
  padding: 10px 28px;
  margin-right: 12px;
  text-decoration: none;

  background: #FFFFFF;
  border: 2px solid #F59256;
  border-radius: 40px;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(27 / 20);
  }

    &.active {

    color: #FFFFFF;
    background: #F59256;
  };

  &:first-child {
      margin-bottom: 0;
    };
`;

export const Nav = styled.nav`
position:relative;
  padding: 0;
display:flex;
  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  };

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  };

  @media screen and (min-width: 1280px) {
    display: flex;
  };
`;

export const StyledErr = styled.p`
font-size: 26px;
line-height: 1.5;
`