const { encode, decode } = require('./code');

describe('Teste das funções encode e decode', () => {
  test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfg')).not.toEqual('12345');
  });
  test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('ola').length).toBe(3);
  });
  test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('1l1').length).toBe(3);
  });
  test('Teste se encode e decode são funções', () => {
    expect(typeof decode).toEqual('function');
  });
  test('Teste se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
  });
});