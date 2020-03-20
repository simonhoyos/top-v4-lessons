const { Book } = require('../db');

module.exports = {
  async list(req, res) {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async create(req, res) {
    try {
      const book = await Book.create(req.body);
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
      let book = await Book.findByPk(bookId);
      book = await book.update(req.body);
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
