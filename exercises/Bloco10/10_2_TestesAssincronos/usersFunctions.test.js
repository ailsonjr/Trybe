const getUserName = require('./usersFunctions')

describe('When the userID is entered', () => {
  it('userID is found and shows the user name', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toBe('Mark');
    });
  });
  it('userId is not found, show a error message', () => {
    expect.assertions(1);
    return getUserName(3).catch(error => {
      expect(error).toEqual({ error: 'User with ' + 3 + ' not found.' });
    });
  });
});

describe('When the userID is entered using async/await', () => {
  it('userID is found and shows the user name', async () => {
    expect.assertions(1);
    await getUserName(4).then(user => {
      expect(user).toBe('Mark');
    });
  });
  it('userId is not found, show a error message', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 3 + ' not found.' });
    }
  });
});
