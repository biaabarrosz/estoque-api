const express = require('express');
const multer = require('multer');
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController'); // Meus controladores para fazer minha lógica de negócio

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Minhas rotas CRUD
router.post('/', upload.single('photo'), createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', upload.single('photo'), updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
