const uppercase = require('./exercise01');

test('string to uppercase', done => {
  setTimeout(() => {
    uppercase('test', (callback) => {
      expect(callback).toBe('TEST');
      done();
    }, 200);
  })
});

// Usado a função setTimeout para simular um função assíncrona e para não dar falso-positivo foi usado a função done