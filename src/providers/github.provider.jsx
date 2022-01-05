import React,{createContext, useState} from "react"

export const GithubContext = createContext({
    user :{},
    repositories : [],
    starred : [],
});

const GitHubProvider = ({children}) => {
    const [githubState,setgithubState] = useState({
        user :{
            login : undefined,
            name : undefined,
            html_Url : undefined,
            blog : undefined,
            company : undefined,
            location : undefined,
            followers : 0,
            following : 0,
            public_gists : 0,
            public_repos : 0,
        },
        repositories : [],
        starred : [],
    });

    const ContextValue = {
        githubState,

    }
    return (
        <GithubContext.Provider value={ContextValue}>{children}</GithubContext.Provider>
    )
}

export default GitHubProvider;