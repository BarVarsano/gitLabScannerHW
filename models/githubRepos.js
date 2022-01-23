
const axios = require('axios');
const config = require('../config');

const GITHUB_USERNAME = config.githubUsername;
const GITHUB_TOKEN = config.githubToken;

async function getGitHubRepos() {
    try {
        const response = await axios({
            method: "get",
            url: `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
                "Accept": "application/vnd.github.mercy-preview+json" // MUST ADD TO INCLUDE TOPICS
            }
        })

        return response.data;

        // const data = [];
        // response.data.forEach(repo => {
        //     const {
        //         name, // 1.Repo name
        //         size, // 2.Repo size
        //         owner: { login }, // 3.Repo owner`
        //         private, // 4.Private\public repo
        //     } = repo;
        //     const details = {
        //         name,
        //         size,
        //         owner: login,
        //         isPrivate: private
        //     };
        //     data.push(details);

        //     /*
        //       1.Repo name
        //       2.Repo size
        //       3.Repo owner
        //       4.Private\public repo
        //       5.Number of files in the repo
        //       6.Content of 1 yml file (any one that appear in the repo)
        //       7.Ative webhooks
        //     */
        // });

        // return data;

    } catch (err) {
        console.log(err.message || err);
        throw err;
    }
}

module.exports = {
    getGitHubRepos,
    // getGitHubData
};