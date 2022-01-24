Implement a "GitLab scanner" system.

General:
1. Please clone the following repo https://github.com/roma8389/javascript

Import the above repo to your own gitlab account under 3 different names (for example repoA, repoB, repoC) 

Note: you can open a github project for free

2. Create a GraphQL express server 

3. The server needs to support 2 scenarios 

1.Show List of Repositories 
2.Show Repo details 

Make sure to add to your input a "developer token" from github and return the appropriate data for the scenario

 

List of Repositories should contain the following information:
1.Repo name
2.Repo size
3.Repo owner

Repo details should contain the following information:
1.Repo name
2.Repo size
3.Repo owner
4.Private\public repo
5.Number of files in the repo
6.Content of 1 yml file (any one that appear in the repo)
7.Ative webhooks

Notes:
1. The system should be working as expected and convenient
2. Keep clean code and proper functionality
3. When scanning all 3 repo's at the same time limit your code to scan up to maximum 2 repo's in parallel 


Bonus:
Implement a client application to display the list of Repo's and the content of the repo once selected.