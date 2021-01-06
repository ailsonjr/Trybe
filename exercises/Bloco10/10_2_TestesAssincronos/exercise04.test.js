const { expect } = require('@jest/globals');
const getRepos = require('./exercise04.js');

describe('Given a URL, check if the repositories are in the list', () => {
  it('URL https://api.github.com/users/tryber/repos has the specified repository', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/users/tryber/repos').then(repo => {
      expect(repo).toContain('enterprise-bridge-panel');
    });
  });
  it('URL https://api.github.com/users/tryber/repos has not the specified repository', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/users/tryber/repos').then(repo => {
      expect(repo).not.toContain('sd-01-week4-5-project-todo-list');
    });
  });
});