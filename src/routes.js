const { Router } = require('express');

const UserController = require('./controller/UserController')

const router = Router()

router.post('/create-categoria', UserController.createCategorias)
router.put('/update-categoria', UserController.updateCategorias)
router.get('/list-categoria', UserController.listCategorias)

module.exports = router;