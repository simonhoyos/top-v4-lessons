const { Category } = require('../db');

module.exports = {
  async list(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async create(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async show(req, res) {
    try {
      const { categoryId } = req.params;
      const category = await Category.findByPk(categoryId);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { categoryId } = req.params;
      let category = await Category.findByPk(categoryId);
      category = await category.update(req.body);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { categoryId } = req.params;
      const category = await Category.findByPk(categoryId);
      await category.destroy();
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
