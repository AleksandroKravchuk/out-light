import styled from "styled-components";


export const SearchBar = styled.div`
    display: flex;
    max-width:60%;
    justify-content: center;
    margin-bottom: 40px;
margin-left:auto;
margin-right:auto;
    @media screen and (min-width: 768px){
        margin-bottom: 60px;
    }
`
export const Form = styled.form`
display:flex;
justify-content:center;

    @media screen and (min-width: 768px){
        width: 608px;
        height: 44px
    }

`

export const InputSearch = styled.input`
   width: 200px;
    border-radius: 20px 0 0 20px;
    border: none;
    outline: none;
    background: #FFFFFF;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.1;
    align-items: center;
    letter-spacing: 0.04em;
    padding: 9px 12px;
    color: #535353;

    @media screen and (min-width: 768px) {
        width: 554px;
    }

`
export const ButtonSearch = styled.button`
    border: none;
    outline: none;
    background: #FFFFFF;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    padding: 10px;
`
