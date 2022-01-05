import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github.hooks";
import RepositoryItem from "../RepositoryItem";
import * as S from './styled'

const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUser, setHasUser] = useState(false);

    useEffect(() => {
        if (!!githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUser(!!githubState.repositories);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login])
    return (
        <>
            {
                hasUser ?
                    <S.WrapperTabs
                        selectedTabClassName="is-selected"
                        selectedTabPanelClassName="is-selected">
                        <S.WrapperTabList>
                            <S.WrapperTab>Repositorios</S.WrapperTab>
                            <S.WrapperTab>Favoritados</S.WrapperTab>
                        </S.WrapperTabList>
                        <S.WrapperList>
                            <S.WrapperTabPanel>
                                {githubState.repositories.length > 0 ?
                                    githubState.repositories.map((item, key) =>
                                    (<RepositoryItem
                                        key={key}
                                        name={item.name}
                                        linkToRepo={item.html_url}
                                        fullName={item.full_name} />)
                                    )
                                    : <h3>Não possui Repositorios</h3>
                                }
                            </S.WrapperTabPanel>
                        </S.WrapperList>
                        <S.WrapperList>
                            <S.WrapperTabPanel>
                                {githubState.starred.length > 0 ?
                                    githubState.starred.map((item, key) =>
                                    (<RepositoryItem
                                        key={key}
                                        name={item.name}
                                        linkToRepo={item.html_url}
                                        fullName={item.full_name} />)
                                    )
                                    : <h3>Não possui Favoritos</h3>
                                }
                            </S.WrapperTabPanel>
                        </S.WrapperList>
                    </S.WrapperTabs>
                    :
                    ``
            }
        </>
    )
}
export default Repositories;