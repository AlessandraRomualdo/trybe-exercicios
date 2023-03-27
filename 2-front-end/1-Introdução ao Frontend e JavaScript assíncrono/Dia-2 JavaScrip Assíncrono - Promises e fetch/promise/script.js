// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });
  resolvedPromise().then((response) => {
    console.log(`O número gerado é ${response}`)
  });
  // promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber();
    reject(new Error(`O número ${randomNumber} é inválido.`));
  }, 1000);
});
rejectedPromise().then((response) => {
  console.log(`O número não é valido ${response}`);
}).catch((error) => {
  console.log(`Regeitada ${error.message}`);
});

// random promise
const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`O valor sorteado deve ser par ${randomNumber}`));
      }
    }, 1000)
  });

randomPromise().then((response) => {
  console.log(`O valor sorteado é ${response}`);
}).catch((error) => {
  console.log(`${error.message} não é par`);
}).finally(() => {
  console.log(`Fim da execução`);
})