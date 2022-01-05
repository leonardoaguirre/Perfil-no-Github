import React from "react";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Nome Completo:</h4>
            <a href={linkToRepo}>
                {fullName}
            </a>
        </div>
    )
}
export default RepositoryItem;