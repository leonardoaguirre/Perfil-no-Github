import styled from "styled-components";

export const Wrapper = styled.div `
form{
    display : flex;
    width : 100%;
    justify-content : space-between;
    padding : 4px;
}

input {
    border : 1px solid #ccc;
    border-radius : 8px;
    width : 100%;
    height : 44px;
    padding : 8px;
    font-weight : 500;
}

button {
    background-color : #225ed8;
    padding : 8px 16px;
    margin : 0 8px;
    border-radius : 8px;

    &:hover{
        background-color : #2c5282;
        box-shadow : 3px 2px 10px rgba(0,0,0,0.2);
    }

    span{
        color : #fff;
        font-weight : bold;
    }
}
`;
export const msgError = styled.div `
color : red;
font-weight: 100;
`;