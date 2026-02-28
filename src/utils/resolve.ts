const GITHUB_BASE = 'https://github.com';

export function resolveGithubUrl(id: string) {
  return `${GITHUB_BASE}/${id}`;
}

export function resolveGithubAvatar(id: string) {
  return `${GITHUB_BASE}/${id}.png`;
}

export function resolveRepoUrl(url: string) {
  return url.replace(/^git\+/, '').replace(/\.git$/, '');
}

export function resolveNpmUrl(name: string) {
  return `https://www.npmjs.com/package/${name}`;
}
