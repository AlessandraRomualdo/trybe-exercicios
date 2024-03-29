const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Usando o metodo GET em /chocolates', function () {
  it('Retorna a lista completa de chocolates', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];
    response = await chai.request(app).get('/chocolates');
    
    
    expect(response.status).equal(200);
    expect(response.body).to.deep.equal(output);
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
  it('Retorna o chocolate Mounds', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal(
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
  it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
  it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
  });
});

describe('Usando o método GET em "/chocolas/total" para busca o total de chocolates.', function () {
  it('Retona o total de chocolates 4!', async function () {
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).equal(200);
    expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
})