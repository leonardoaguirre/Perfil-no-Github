import React, { useState } from "react";
import useGithub from "../../hooks/github.hooks";
import * as S from './styled'

const Header = () => {
    const { getUser } = useGithub();
    const [search, setSearch] = useState();
    const [error, setError] = useState('');

    const submitGetUser = (e) => {
        e.preventDefault();
        if (!search) return setError('Campo de pesquisa está vazio');
        setError(``)
        return getUser(search);
    }

    return (
        <header>
            <S.Wrapper>
                <form onSubmit={submitGetUser}>
                    <input
                        type="text"
                        placeholder="Digite o username para pesquisa..."
                        onChange={(e) => setSearch(e.target.value)} />
                    <button type="submit">
                        <span>Buscar</span>
                    </button>
                </form>
            </S.Wrapper>
            <S.msgError>
                {error ? <p>{error}</p> : ``}
            </S.msgError>
        </header>
    )
}

export default Header;