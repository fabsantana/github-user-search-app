import { Octokit } from "octokit";

const octokit = new Octokit({ 
    auth: 'SECRET_API_KEY'
  });

const request = await octokit.request('GET /users/fabsantana', {
    username: 'fabsantana',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})

console.log(request)