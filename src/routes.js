const { Router } = require('express');

const UserController = require('./controller/UserController')
const ProdutosController = require('./controller/ProdutosController')

const router = Router()

router.post('/create-categoria', UserController.createCategorias)
router.put('/updat-categoria/:id', UserController.updateCategorias)
router.get('/list-categoria', UserController.listCategorias)
router.delete('/delete-categoria/:id', UserController.deleteCategorias)

router.post('/create-produtos', ProdutosController.createProdutos)
router.patch('/update-produtos/:id', ProdutosController.updateProdutos)



module.exports = router;