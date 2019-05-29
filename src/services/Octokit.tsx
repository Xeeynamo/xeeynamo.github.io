import Octokit from '@octokit/rest'

export let octokit = new Octokit({
    userAgent: 'xeeynamo v1.0',
    baseUrl: 'https://api.github.com',
    log: {
      debug: () => {},
      info: () => {},
      warn: console.warn,
      error: console.error
    },
});