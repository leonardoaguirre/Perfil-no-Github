import React, { createContext, useCallback, useState } from "react"
import { api } from '../services/api'

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GitHubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        hasUser: false,
        userNotFound : false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            created_at: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`users/${username}`)
            .then(({ data }) =>
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: true,
                    hasUser: true,
                    userNotFound : false,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        created_at: data.created_at,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                })
                ))
            .catch(() => setGithubState((prevState) =>
            ({
                ...prevState,
                hasUser: false,
                userNotFound : true,
            })))
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: false,
                })
                )
            })
    }
    const ContextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    }
    return (
        <GithubContext.Provider value={ContextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GitHubProvider;