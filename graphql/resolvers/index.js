
const { getGitHubRepos } = require('../../models/githubRepos');

module.exports = {
  repos: () => {'test'},
  // repos: async () => {
  //   try {
  //     const repos = await getGitHubRepos();
  //     return repos.map(repo => {
  //       return {
  //         _id: repo.id,
  //         name: repo.name,
  //         size: repo.size,
  //         owner: repo.owner.login,
  //       }
  //     })
  //   } catch (err) {
  //     throw err;
  //   }
  // },
};
