import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
/* padding: 12px 17px 12px 4px; */
border-radius: 20px;
background-color: white;
color: black;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 40px;
padding:16px;
`;

export const FriendsThumb = styled.div`
margin-top: 40px;
display: grid;
grid-template-columns: 1fr;
grid-row-gap: 12px;
font-weight: 500;
font-size: 12px;
line-height: calc(16 / 12);

@media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
}

@media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
}
`

export const CardThumb = styled.div`
display: flex;
column-gap: 12px;
margin-top: 12px;
align-items: flex-start;
`

export const FriendTitle = styled.h3`
text-align: center;
color: #F59256;
display: block;

&.time {

    /* &:after {
        content: "hello";
        top: 100%;
        left: 0;
        width: 100%;
    } */
}
`

export const FirstThumb = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 110px;
margin-right:50px;
`

export const SecondThumb = styled.div`
width: 150px;
color: black;
`

export const Title = styled.h2`
display: block;
font-weight: 700;
font-size: 24px;
line-height: calc(33 / 24);
color: black;
margin-top: 47px;
text-align: center;

@media screen and (min-width: 768px) {
margin-top: 94px;
}
`

export const Image = styled.img`
display: block;
width: 100%;
`

export const Item = styled.li`
position: relative;
&:not(:last-child) {
    margin-bottom: 4px;
}`

export const Anchor = styled.a`
color: inherit;
text-decoration: none;
`
export const TimeClick = styled(NavLink)`
color:inherit;
cursor: pointer;
transition: color 250ms linear;
/* ::after{
  content:"";
  position:absolute;
width:120px;
height:120px;
transform:scale(0);
transform-origin: top;
color: inherit;
background-color:blue;
transition:transform 250ms linear;
} */
&:hover,
&:focus{
 color: #F59256;
  /* ::after{
    transform:scale(1);

background-color:red;

} */
}

`
export const TimeBlock = styled.div`
display:flex;
justify-content:space-between;

`
export const TimeList = styled.ul`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
margin-bottom:4px;
width:120px;
/* height:160px; */
transform:scale(0);
background: #FFFFFF;
border: 1px solid #F59256;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;
padding:12px;
transform-origin: top;
position:absolute;
background-color:white;
top:40px;
left:0px;
z-index:101;
transition:transform  250ms linear;
&.show{
  transform:scale(1);
}
`
export const TimeItem = styled.div`

`
export const Time = styled.p`
`
