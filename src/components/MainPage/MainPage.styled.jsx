import styled from 'styled-components';
import mobileBack from 'img/Vector@2x.png';
import tabletBack from 'img/tabletBackground.png';
import desktopBack from 'img/desktopBack.png';
import desktopBack2 from 'img/desktopBack2.png';
import heart from 'img/heart.png';
import 'animate.css';

export const MainPageSection = styled.div`
  padding-top: 60px;
  margin: 0 auto;
  position: relative;
width:100%;
background-color: #FDF7F2;
  @media screen and (min-width: 768px) {
    padding-top: 92px;
    padding-left:16px;
  }
    /* @media screen and (min-width: 1280px) {
   max-width: 1280px;
    padding: 0px 16px;
  } */
`;

export const MainHeader = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: calc(44 / 32);

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: calc(100 / 68);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top:50px;
  margin-left:auto;
  margin-right:auto;
  /* margin: 0 auto; */
  background-image: url(${mobileBack});
  background-size: cover;
  background-position: left bottom;
  background-repeat: no-repeat;
  /* transform: translateX(-20px); */
  display: flex;
  align-items: flex-end;
background-color: #FDF7F2;
  /* &.firstLoad { */
    animation: zoomIn 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  /* } */
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 1045px;
    background-image: url(${tabletBack});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left bottom;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    left: 0px;
    margin-left:-16px;
    width: 102.6%;
    height: 655px;
    background-image: url(${desktopBack}), url(${desktopBack2}), url(${heart});
    background-size: 1120px 410px, 585px 410px, 92px 89px;
    background-position: left bottom, 690px bottom, 715px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  margin-top: 58px;
  /* &.firstImgLoad { */
    transform: translateX(140%);
    @keyframes moveImg {
      0% {
        transform: translateX(140%);
      }
      100% {
        transform: translateX(0);
      }
    }
    animation: moveImg 250ms cubic-bezier(0.215, 0.61, 0.355, 1) 1000ms forwards;
  /* } */
  @media screen and (min-width: 768px) {
    width: 699px;
  }

  @media screen and (min-width: 1280px) {
    width: 624px;
    margin-left: auto;
  }
`;

export const Header = styled.h1`
  position: absolute;
  top: 60px;
  font-weight: bold;
  font-size: 32px;
  line-height: calc(44 / 32);
  width: 280px;
  z-index: 1;

  /* &.firstLoadHeader { */
    transform: translateX(-140%);
    @keyframes moveHeader {
      0% {
        transform: translateX(-140%);
      }
      100% {
        transform: translateX(0);
      }
    }
    animation: moveHeader 250ms cubic-bezier(0.215, 0.61, 0.355, 1) 1000ms
      forwards;
  /* } */
  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: calc(100 / 68);
    width: 588px;
    top: 92px;
  }

  @media screen and (min-width: 1280px) {
    left: 0px;
    display: block;
    max-width: 588px;
    margin-left:16px;
  }
`;
