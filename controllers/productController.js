const { Product } = require('../models');
const path = require('path');

// CRIAR UM NOVO PRODUTO
exports.createProduct = async (req, res) => {
  try {
    const { name, description, quantity } = req.body;
    const photo = req.file ? req.file.buffer : null; 

    const product = await Product.create({ name, description, quantity, photo });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CONSULTAR TODOS OS REGISTROS
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    const productsWithBase64 = products.map(product => ({
      ...product.toJSON(),
      photo: product.photo ? product.photo.toString('base64') : null,
    }));

    res.status(200).json(productsWithBase64);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CONSULTAR POR ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const productWithBase64 = {
      ...product.toJSON(),
      photo: product.photo ? product.photo.toString('base64') : null,
    };

    res.status(200).json(productWithBase64);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ALTERAR
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, quantity } = req.body;

    // Buscar o produto no banco de dados
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Verificar se existe uma nova imagem no request
    const photo = req.file ? req.file.buffer : product.photo;

    // Atualizar o produto com os novos dados
    await product.update({ name, description, quantity, photo });

    // Retornar o produto atualizado
    res.status(200).json({
      id: product.id,
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      photo: product.photo ? product.photo.toString('base64') : null,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETAR
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    await product.destroy();
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
