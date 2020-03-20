const { Book, Category, sequelize} = require('../db');

module.exports = {
  async list(req, res) {
    const { categoryId } = req.params;
    try {
      const books = await Book
        .scope({ include: [ Category ]})
        .findAll({
          where: {
            '$Categories.id$': categoryId
          }
        });
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async create(req, res) {
    try {
      const { categoryId } = req.params;
      const { categories, ...data } = req.body;
      const book = await Book.create(data);

      book.setCategories([categoryId, ...categories]);
      await book.save();
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async show(req, res) {
    try {
      const { bookId } = req.params;
      const book = await Book.findByPk(bookId);
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { bookId } = req.params;
      const { categories, ...data } = req.body;
      let book = await Book.findByPk(bookId);
      book = await book.update(data);
      if(categories) {
        book.setCategories(categories);
      }
      await book.save();
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { bookId } = req.params;
      const book = await Book.findByPk(bookId);
      await book.destroy();
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
