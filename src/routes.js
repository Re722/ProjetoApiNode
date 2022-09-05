const { Router } = require('express');
const Categorias = require('./models/Categorias')

const router = Router()

router.get('/', (req, res) => {
  res.json({ HELLO: 'world' })

})

router.post('/', async (req, res) => {
  const { codigo, titulo, status } = req.body

  const categorias = await Categorias.create({ codigo, titulo, status })

  res.json({ categorias })

})

module.exports = router;