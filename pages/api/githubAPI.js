const { Octokit } = require('@octokit/rest')

export default async(req, res) => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN
    })
    const statNames= ['Repos', 'Followers', 'Stargazers', 'Watchers', 'Public Repos', 'Private Repos', 'Collabs'];

    const {data: followers} = await octokit.request("/users/Kredam/followers?per_page=100");
    const {data: my_repos} = await octokit.rest.repos.listForAuthenticatedUser();
    const stargazersCount = my_repos.filter(repo => !repo.fork).reduce((curr, next) => {return curr + next.stargazers_count}, 0);
    const watchersCount = my_repos.filter(repo => !repo.fork).reduce((curr, next) => {return curr + next.watchers_count}, 0);
    const reposCount = my_repos.length;
    let publicReposCount = my_repos.filter(repo => !repo.fork && !repo.private).length;
    const numberOfCollabs = my_repos.filter(repo => repo.owner.login !== "Kredam").length;
    return res.status(200).json({   Repos: reposCount, 
                                    Followers: followers.length,
                                    Stargazers: stargazersCount,
                                    Watchers: watchersCount,
                                    PublicRepos: publicReposCount,
                                    PrivateRepos: reposCount - publicReposCount,
                                    Collabs: numberOfCollabs})
}