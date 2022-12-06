import styled, { css } from 'styled-components';

const style = css`
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'initial'};
  padding: ${({ pads }) => pads ?? '10px'};
  margin-left: ${({ ml }) => ml ?? '0'};
  margin-right: ${({ mr }) => mr ?? '0'};
  margin-bottom: ${({ mb }) => mb ?? '0'};
  margin-top: ${({ mt }) => mt ?? '0'};
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  border-radius: 40px;
  margin-top:12px;
  background-color: transparent;
  cursor: pointer;
    @media screen and (min-width: 768px) {
font-size: 20px;
line-height: 27px;
}
`;

const buttonAppearances = {
  primary: `
  background-color: #f59256;
  color: #ffffff;
  border: 1px solid #f59256;
  margin-top: 30px;
  margin-bottom: 12px;

  &:disabled {
    &:hover {
      pointer-events: none;
    }
  }
`,
  inverse: `
  background-color: #ffffff;
  color: #111111;
  border: 1px solid #f59256;
  //  margin-top: 30px;
  margin-bottom: 12px;
  transition:background-color, 250ms, linier;
  transition:color, 250ms, linier;
 &:hover {
        background-color: #f59256;
  color: #ffffff;
  border: 1px solid #f59256;
    }

  &:disabled {
    &:hover {
      pointer-events: none;
    }
  }
`,
};

export const Button = styled.button`
  ${style}
  ${({ variant }) => buttonAppearances[variant]}
`;
