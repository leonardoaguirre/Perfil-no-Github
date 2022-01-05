import React from "react";
import useGithub from "../../hooks/github.hooks";
import * as S from "./styled"

const Profile = () => {
    const { githubState } = useGithub()

    return (
        <S.Wrapper>
            <S.WrapperImg>
                <img src="" alt="Imagem do usuario" />
            </S.WrapperImg>
            <S.WrapperInfoUser>
                <div>
                    <div>
                        <h1>{githubState.user.name}</h1>
                        <S.WrapperUserName>
                            <h3>Username :</h3>
                            <a href={githubState.user.html_Url}
                                target={"_blank"}
                                rel="noreferrer">
                                <span>{githubState.user.login}</span>
                            </a>
                        </S.WrapperUserName>
                    </div>
                    <S.WrapperStatusCount>
                        <div>
                            <h4>Seguidores</h4>
                            <span>{githubState.user.followers}</span>
                        </div>
                        <div>
                            <h4>Seguindo</h4>
                            <span>{githubState.user.following}</span>
                        </div>
                        <div>
                            <h4>Gists</h4>
                            <span>{githubState.user.public_gists}</span>
                        </div>
                        <div>
                            <h4>Repos</h4>
                            <span>{githubState.user.public_repos}</span>
                        </div>
                    </S.WrapperStatusCount>
                </div>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}
export default Profile;