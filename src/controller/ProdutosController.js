const Produtos = require('../models/Produtos')

module.exports = {

  async createProdutos(req, res) {
    try {
      const { idCategoria, codigo, nome, descricao, valor, status } = req.body

      const produtos = await Produtos.create({ idCategoria, codigo, nome, descricao, valor, status })

      res.status(200).json({ produtos })

    } catch (error) {

      res.status(400).json({ error })
    }

  },
  async updateProdutos(req, res) {
    try {

      const { id } = req.params
      const { idCategoria, codigo, nome, descricao, valor, status } = req.body

      const produtos = await Produtos.findOne({ where: { id } })

      if (!produtos) {
        res.status(401).json({ message: "produto não encontrado" })
      } else {
        const produtos = await Produtos.update({ idCategoria, codigo, nome, descricao, valor, status }, { where: { id } })

        res.status(200).json({ produtos })

      }
    } catch (error) {

      res.status(400).json({ error })
    }
  },
  async listProdutos(req, res) {
    try {
      const produtos = await Produtos.findAll()
      if (!produtos) {
        res.status(401).json({ message: 'Não existem produtos cadastrados' })
      }
      res.status(200).json({ produtos })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async deleteProdutos(req, res) {
    const { id } = req.params
    const produtos = await Produtos.findOne({ where: { id } })
    if (!produtos) {
      res.status(401).json({ message: 'produto não encontrado' })
    } else {
      await Produtos.destroy({ where: { id } })
      res.status(200).json({ ok: true })
    }
  }
}
