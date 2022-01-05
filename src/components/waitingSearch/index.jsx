import React from "react";
import * as S from './styled';
import img from './logo192.png'

const WaitingSearch = () => {
    return (
        <S.wrapperWaitingSearch>
            <img src={img} alt="Icone React" />
            <h4>Aguardando a sua pesquisa...</h4>
        </S.wrapperWaitingSearch>
    )
}
export default WaitingSearch;