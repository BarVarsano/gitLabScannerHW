
require('dotenv').config();
const axios = require('axios');
const _ = require('lodash');
const config = require('../config');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = config.githubUsername;

/************************** Show List of Repositories **************************/
function _customizeReposList({ name, size, owner: { login } }) {
    return {
        name,               // 1.Repo name
        size,               // 2.Repo size
        owner: login,       // 3.Repo owner
    }
}

async function getGitHubReposForUser(username = GITHUB_USERNAME) {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.github.com/users/${username}/repos`,
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
                Accept: 'application/vnd.github.mercy-preview+json'
            }
        });
        
        return _.map(response.data, _customizeReposList);
    } catch (err) {
        console.log(err.message || err);
        throw err;
    }
}

/****************************** Show Repo details ******************************/
function _customizeRepoDetails({
    name,
    size,
    owner: { login },
    visibility,
}) {
    return {
        name,                                       // 1. Repo name       
        size,                                       // 2. Repo size
        owner: login,                               // 3. Repo owner
        visibility,                                 // 4. Private\public repo                   
        //filesAmount: 999,                           // ** 5. Number of files in the repo                            
        //content: 'test content',                    // ** 6. Content of 1 yml file (any one that appear in the repo)          
        //ativeWebhooks: 'test ativeWebhooks'         // ** 7. Ative webhooks
    }
}

async function getGitHubRepo(owner = GITHUB_USERNAME, repoName) {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.github.com/repos/${owner}/${repoName}`,
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
                Accept: 'application/vnd.github.mercy-preview+json'
            }
        });

        return _customizeRepoDetails(response.data);
    } catch (err) {
        if (err.response && err.response.status === 404) {
            throw new Error('Resource not found');
        }

        throw err;
    }
}

module.exports = {
    getGitHubRepo,
    getGitHubReposForUser,
};