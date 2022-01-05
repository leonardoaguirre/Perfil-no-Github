import React from "react"
import * as S from './styled'

const Layout = ({ children }) => {
    return (
        <S.wrapperLayout>
            <section>
                <header>
                    Header
                </header>
                {children}
            </section>
        </S.wrapperLayout>
    )

}

export default Layout;