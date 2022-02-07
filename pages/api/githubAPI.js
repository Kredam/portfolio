const { Octokit } = require('@octokit/rest')

export default async(req, res) => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    })
    const {data: followers} = await octokit.request("/users/Kredam/followers?per_page=100");
    const {data: my_repos} = await octokit.rest.repos.listForAuthenticatedUser();
    const stargazersCount = my_repos.filter(repo => !repo.fork).reduce((curr, next) => {return curr + next.stargazers_count}, 0);
    const watchersCount = my_repos.filter(repo => !repo.fork).reduce((curr, next) => {return curr + next.watchers_count}, 0);
    const reposCount = my_repos.length;
    let publicReposCount = my_repos.filter(repo => !repo.fork && !repo.private).length;
    const numberOfCollabs = my_repos.filter(repo => repo.owner.login !== "Kredam").length;
    return res.status(200).json({   reposCount: reposCount, 
                                    followersCount: followers.length,
                                    stargazersCount: stargazersCount,
                                    watchersCount: watchersCount,
                                    publicReposCount: publicReposCount,
                                    privateReposCount: reposCount - publicReposCount,
                                    numberOfCollabs: numberOfCollabs})
}