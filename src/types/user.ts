export type LocalGithubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitterUsername: string,
    publicRepositories: number,
    followers: number,
    following: number,
    createdAt: string,
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
}

export type NotFound = {
    message: string,
    documentationURL: string,
    status: string,
}