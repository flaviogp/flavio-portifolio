import { githubRepository, repository } from "./types"

const formatRepository = (data: githubRepository): repository => {


    const formatData: repository = {
        id: data.id,
        name: data.name,
        html_url: data.html_url,
        created_at: data.created_at,
        language: data.language
    }

    return formatData

}

export default formatRepository