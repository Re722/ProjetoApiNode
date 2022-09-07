const { Router } = require('express');

const categoriasController = require('./controller/CategoriasController')
const ProdutosController = require('./controller/ProdutosController')

const router = Router()

router.post('/create-categoria', categoriasController.createCategorias)
router.put('/updat-categoria/:id', categoriasController.updateCategorias)
router.get('/list-categoria', categoriasController.listCategorias)
router.delete('/delete-categoria/:id', categoriasController.deleteCategorias)

router.post('/create-produtos', ProdutosController.createProdutos)
router.patch('/update-produtos/:id', ProdutosController.updateProdutos)
router.get('/list-produtos', ProdutosController.listProdutos)



module.exports = router;