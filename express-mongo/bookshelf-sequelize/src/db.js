const Sequelize = require('sequelize');
const categoryModel = require('./models/category.model');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const db = {
  Sequelize,
  sequelize,
};

db.Category = db.sequelize.import(
  'category',
  categoryModel
);

db.Book = db.sequelize.import(
  'book',
  require('./models/book.model')
);

module.exports = db;
