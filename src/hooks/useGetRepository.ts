import { useEffect, useState } from "react"
import {githubRepository, repository } from "../utils/types"
import formatRepository from "../utils/formatRepository"

export const useGetRepository = (user: string, repo: string): repository => {
    const [repositoryFormated, setRepositoryFormated] = useState<repository>({})
    const [repository, setRepository] = useState<githubRepository>({})

    useEffect(() => {
        fetch(`https://api.github.com/repos/${user}/${repo}`)
            .then(res => res.json())
            .then(data => setRepository(data))
            .catch((error) => {
                throw new Error(error.message);
            });
        const repositoryFormated = formatRepository(repository)
        setRepositoryFormated(repositoryFormated)
    }, [user, repo]);

    return repositoryFormated

}

// https://api.github.com/repos/{owner}/{repo}
// https://api.github.com/users/{owner}/repos