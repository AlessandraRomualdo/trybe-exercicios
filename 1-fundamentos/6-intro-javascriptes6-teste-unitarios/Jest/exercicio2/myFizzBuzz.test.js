const { default: test } = require('node:test');
const myFizzBuzz = require('./myFizzBuzz.js');

describe('Teste da função myFizzBuzz', () => {

  test('Sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Sendo num um número divisível por 3, e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  test('Sendo num um número divisível por 5, e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('Sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(1)).toBe(num);
  });
  test('Sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('9')).toBe(false);
  });
});