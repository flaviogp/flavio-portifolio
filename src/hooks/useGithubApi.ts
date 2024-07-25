import { useEffect, useState } from "react"
import { githubRepository, repository } from "../utils/types"
import formatRepositories from "../utils/formatRepositories"

export const useGithubApi = (user: string): repository[] => {
    const [repositories, setRepositories] = useState<githubRepository[]>([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}/repos`)
        .then(res => res.json())
        .then(data => setRepositories(data))
        .catch((error) => {
            throw new Error(error.message);
        })
    })

    const repositoriesFormated = formatRepositories(repositories)

    return repositoriesFormated

}