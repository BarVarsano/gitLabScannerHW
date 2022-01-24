
const { getGitHubRepo, getGitHubReposForUser } = require('../../models/githubRepos');
const _ = require('lodash');

module.exports = {
  repo: async args => {
    try {
      const owner = args && args.repoInput && args.repoInput.owner;
      const repoName = args && args.repoInput && args.repoInput.name;
      
      const repo = await getGitHubRepo(owner, repoName);

      return repo;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  repos: async args => {
    try {
      const username = args && args.reposInput && args.reposInput.owner;

      return getGitHubReposForUser(username);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};
