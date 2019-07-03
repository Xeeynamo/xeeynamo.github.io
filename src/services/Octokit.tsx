import Octokit from '@octokit/rest'

export let octokit = new Octokit({
  userAgent: 'xeeynamo v1.0',
  baseUrl: 'https://d2he3ux5gwrwae.cloudfront.net',
  log: {
    debug: () => { },
    info: () => { },
    warn: console.warn,
    error: console.error
  },
});