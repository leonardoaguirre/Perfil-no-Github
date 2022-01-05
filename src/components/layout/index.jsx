import React from "react"
import useGithub from "../../hooks/github.hooks";
import Header from "../header";
import * as S from './styled';
import img from './logo192.png'

const Layout = ({ children }) => {
    const { githubState } = useGithub();

    return (
        <S.wrapperLayout>
            <Header />
            {githubState.loading && (<p>Loading....</p>)}
            {githubState.userNotFound && (<S.msgError><p>Nenhum usuário foi encontrado</p></S.msgError>)}
            {githubState.hasUser ?
                <>{children}</>
                :
                <>
                    <S.wrapperWaitingSearch>
                        <img src={img} alt="Icone React" />
                        <h4>Aguardando a sua pesquisa...</h4>
                    </S.wrapperWaitingSearch>
                </>}
        </S.wrapperLayout>
    )

}

export default Layout;