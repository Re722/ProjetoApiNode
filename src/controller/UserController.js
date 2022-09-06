const { update } = require('../models/Categorias')
const Categorias = require('../models/Categorias')

module.exports = {

  async createCategorias(req, res) {
    try {
      const { codigo, titulo, status } = req.body

      const categorias = await Categorias.create({ codigo, titulo, status })

      res.status(200).json({ categorias })

    } catch (error) {

      res.status(400).json({ error })

    }
  },

  async updateCategorias(req, res) {
    try {

      const { id } = req.params
      const { codigo, titulo, status } = req.body

      const categorias = await Categorias.findOne({ where: { id } })

      if (!categorias) {
        res.status(401).json({ message: "não encontrado" })
      } else {
        const categorias = await Categorias.update({ codigo, titulo, status }, { where: { id } })

        res.status(200).json({ categorias })

      }
    } catch (error) {

      res.status(400).json({ error })
    }
  },
  async listCategorias(req, res) {
    try {
      const categorias = await Categorias.findAll()
      if (!categorias) {
        res.status(401).json({ message: 'Não existe usuario cadastros' })
      }
      res.status(200).json({ categorias })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async deleteCategorias(req, res) {
    const { id } = req.params
    const categorias = await Categorias.findOne({ where: { id } })
    if (!categorias) {
      res.status(401).json({ message: 'Usuario não encontrado' })
    } else {
      await User.destroy({ where: { id } })
      res.status(200).json({ ok: true })
    }
  }
}








