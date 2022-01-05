import styled from "styled-components";

export const wrapperWaitingSearch = styled.div `
margin : 16px;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;

img{
    animation: rotate 10s linear infinite;
}
@keyframes rotate{
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;