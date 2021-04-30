const dogPictures = require('./dogPictures');

describe('Testando a requisição', () => {
  const apiDogPicture = jest.spyOn(dogPictures, 'fetchDogPictures');
  afterEach(apiDogPicture.mockReset);

  test('testando a requisição caso a promise resolva', async () => {
    apiDogPicture.mockResolvedValue('request sucess');

    apiDogPicture();
    expect(apiDogPicture).toHaveBeenCalled();
    expect(apiDogPicture).toHaveBeenCalledTimes(1);
    expect(apiDogPicture()).resolves.toBe('request sucess');
    expect(apiDogPicture).toHaveBeenCalledTimes(2);
  });

  test('testando a requisição caso a promise seja rejeitada', async () => {
    apiDogPicture.mockResolvedValue('request failed');

    expect(apiDogPicture).toHaveBeenCalledTimes(0);
    expect(apiDogPicture()).rejects.toMatch('request failed');
    expect(apiDogPicture).toHaveBeenCalledTimes(1);
  });
});
