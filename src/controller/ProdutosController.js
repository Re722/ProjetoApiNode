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
  }
}