
const { getGitHubRepo, getGitHubReposForUser } = require('../../models/githubRepos');
const _ = require('lodash');

module.exports = {
  repo: async args => {
    try {
      let owner, repoName;
      
      if (args && args.repoInput) {
        owner = args.repoInput.owner;
        repoName = args.repoInput.name;
      }
      
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
