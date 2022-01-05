import React from "react";
import RepositoryItem from "../RepositoryItem";
import * as S from './styled'

const Repositories = () => {
    return (
        <>
            <S.WrapperTabs
                selectedTabClassName="is-selected"
                selectedTabPanelClassName="is-selected">
                <S.WrapperTabList>
                    <S.WrapperTab>Repositorios</S.WrapperTab>
                    <S.WrapperTab>Favoritados</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <RepositoryItem
                        name=""
                        linkToRepo=""
                        fullName="" />
                </S.WrapperTabPanel>
                <S.WrapperTabPanel> <RepositoryItem
                    name=""
                    linkToRepo=""
                    fullName="" />
                </S.WrapperTabPanel>
            </S.WrapperTabs>
        </>
    )
}
export default Repositories;