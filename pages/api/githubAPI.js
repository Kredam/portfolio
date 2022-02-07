const { Octokit } = require('@octokit/rest')

export default async(req, res) => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    })
    const {data: followers} = await octokit.request("/users/Kredam/followers?per_page=100");
    const {data: my_repos} = await octokit.rest.repos.listForAuthenticatedUser();
    return res.status(200).json({repos: my_repos.length, followers: followers.length})
}