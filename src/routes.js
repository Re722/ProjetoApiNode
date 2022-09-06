const { Router } = require('express');

const UserController = require('./controller/UserController')

const router = Router()

router.post('/create-categoria', UserController.createCategorias)
router.put('/updat-categoria/:id', UserController.updateCategorias)
router.get('/list-categoria', UserController.listCategorias)
router.delete('/delete-categoria/:id', UserController.deleteCategorias)

module.exports = router;