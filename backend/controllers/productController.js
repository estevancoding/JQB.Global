const { Product: ProductModel } = require("../models/Product");

const productController = {
  async create(req, res) {
    const { name, price, description, stock } = req.body;

    // ===== Validações da Sprint =====
    if (!name || name.trim() === "") {
      return res
        .status(400)
        .json({ error: "O nome do produto é obrigatório." });
    }

    if (name.length > 100) {
      return res
        .status(400)
        .json({ error: "O nome não pode ultrapassar 100 caracteres." });
    }

    if (description.length > 5000) {
      return res
        .status(400)
        .json({ error: "A descrição não pode passar de 5.000 caracteres." });
    }

    if (price === undefined || price < 0 || isNaN(price)) {
      return res
        .status(400)
        .json({ error: "Preço inválido. Deve ser número maior ou igual a 0." });
    }

    if (stock === undefined || stock < 0 || !Number.isInteger(stock)) {
      return res.status(400).json({
        error: "Quantidade inválida. Deve ser um número inteiro >= 0.",
      });
    }

    try {
      // Criando o produto no MongoDB
      const product = await ProductModel.create({
        name,
        price,
        description,
        stock,
      });

      return res.status(201).json(product);
    } catch (error) {
      console.error("Erro ao salvar o produto:", error);
      return res.status(500).json({
        error: "Erro ao salvar o produto.",
        // details: error.message, detalhe para debug
      });
    }
  },
};

module.exports = productController;
