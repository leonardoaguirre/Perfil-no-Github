import styled from 'styled-components'

export const Wrapper = styled.div `
display : flex;
align-item : flex-start;
`;
export const WrapperStatusCount = styled.div `
display : flex;
align-item : center;
`;
export const WrapperUserName = styled.div `
display : flex;
align-item : center;
margin-top : 8px;
h3 { 
    margin-right : 8px;
}
a{ 
    color : blue;
    font-wight : bold;
    font-size : 18px
}
`;
export const WrapperImg = styled.div `
border-radius: 50%;
width : 200px;
margin : 8px;
`;
export const WrapperInfoUser = styled.div `
display : flex;
align-item : flex-start;
flex-direction: column;
justify-content : space-between;
height : 200px;
margin-left : 8px;

h1{
    font-size : 32px;
    font-weight : bold;
}
h3{
    font-size : 18px;
    font-weight : bold;
}
h4{
    font-size : 14px;
    font-weight : bold;
}
`;