import styled from 'styled-components';

export const UserInfo = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.div`



  @media screen and (min-width: 768px) {
    margin: 0 0 0 52px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 36px 0;
  }
`;

export const ImgUser = styled.img`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
background-repeat:no-repeat;
  background-size:cover;
  background-color:white;
  /* background-image:url('  https://s.gravatar.com/avatar/0cfe0ef3a357503c4a4538414b870ca1?s=100&r=x&d=retro'); */
  width: 233px;
  height: 233px;
  margin: 20px 24px 12px 23px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const EditPhotoBtn = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  border: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  padding: 0;
  margin-left: 170px;

  img {
    padding-right: 4px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 152px;
  }
`;
// export const Input = styled.input`
// ::after{
//   content:'';
//   background-image:url(${wavesPhone});
//  background-repeat: no-repeat;
//   /* background-size: contain; */
//    background-position: bottom;
// }

// `;
