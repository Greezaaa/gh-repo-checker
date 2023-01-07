export const ISSUES_PER_PAGE = 10
export const ROOT_API_URL = 'https://api.github.com/'

export function getRepoDataFromUrl(url: string): { owner: string, repo: string } | null{

    const regex = /^https:\/\/github\.com\/(?<owner>[\w-]+)\/(?<repo>[\w-]+)\/?$/
    const match = url.match(regex)
    
    if (!match || !match.groups) return null
    const { owner, repo } = match.groups as { owner: string, repo: string }
    return { owner, repo }
}