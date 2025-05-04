const fs = require("fs");
const fetch = require("node-fetch");

const username = "Empy-ai09";
const outputFile = "stats.json";

(async () => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  const res2 = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  const repos = await res2.json();

  let totalStars = 0;
  let totalCommits = 0;

  for (const repo of repos) {
    totalStars += repo.stargazers_count;
    const commitRes = await fetch(repo.commits_url.replace("{/sha}", ""));
    const commits = await commitRes.json();
    totalCommits += Array.isArray(commits) ? commits.length : 0;
  }

  const stats = {
    username,
    totalStars,
    totalCommits,
    publicRepos: repos.length,
    updated: new Date().toISOString()
  };

  fs.writeFileSync(outputFile, JSON.stringify(stats, null, 2));
})();
