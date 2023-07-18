const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/file/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(_dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) { 
    return null;
  }
};

const getAllChocolates =  async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((choco) => choco.id === id);
};

const getChocolateByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((choco) => choco.brandId === brandId);
}

module.exports = {
  getAllChocolates,
  getChocolateByBrand,
  getChocolateById
};