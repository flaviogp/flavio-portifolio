import { githubRepository, repository } from "./types"

const formatRepositories = (data: githubRepository[]): repository[] => {

    const formatData: repository[] = []

        data.map(repo => {
        const formatRepo = {
            id: repo.id,
            name: repo.name,
            html_url: repo.html_url,
            created_at: repo.created_at,
            language: repo.language
        }

        formatData.push(formatRepo)
    })

    return formatData
} 

export default formatRepositories