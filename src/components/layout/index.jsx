import React from "react"
import useGithub from "../../hooks/github.hooks";
import Header from "../header";
import * as S from './styled';
import WaitingSearch from "../waitingSearch";

const Layout = ({ children }) => {
    const { githubState } = useGithub();

    return (
        <S.wrapperLayout>
            <Header />
            {githubState.hasUser ?
                <>{children}</>
                :
                <WaitingSearch />
            }
        </S.wrapperLayout>
    )

}

export default Layout;