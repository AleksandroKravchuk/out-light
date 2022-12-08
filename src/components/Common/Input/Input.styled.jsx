import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
        @media screen and (max-width: 767px) {
 margin-bottom: 11px;
}

`;

export const Input = styled.input`
  max-width: 100%;
  height: ${({ height }) => height ?? '40px'};
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${({ borderRadius }) => borderRadius ?? '40px'};
  margin-top: 8px;
  padding: ${({ padding }) => padding ?? '0 14px'};
  &::placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(27, 27, 27, 0.6);
  }
      @media screen and (min-width: 768px) {

  padding: ${({ padding }) => padding ?? '10px 16px'};
&:nth-last-child(-n+2){
  margin-bottom:28px;
}

margin-top:12px;
  &::placeholder{
font-weight: 400;
font-size: 16px;
line-height: 26px;

  }
}
`;
export const Label = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
      @media screen and (min-width: 768px) {
font-size: 24px;
line-height: 26px;
}
`;
