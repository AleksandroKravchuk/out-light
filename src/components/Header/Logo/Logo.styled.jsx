import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Paragraph = styled(Link)`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  color: black;
z-index:20;
/* padding-left:20px; */
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(48 / 32);
  }
`;

export const AccentSpan = styled.span`
  color: #f59256;
`;
