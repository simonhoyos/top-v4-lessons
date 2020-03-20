const Sequelize = require('sequelize');
const categoryModel = require('./models/category.model');

// Configuración de la base de datos
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

//Agregar modelos a la base de datos
db.Category = db.sequelize.import(
  'category',
  categoryModel
);

db.Book = db.sequelize.import(
  'book',
  require('./models/book.model')
);

// Revisar que modelos tienen relaciones y correr cade uno de esos métodos
for(let key in db) {
  if(db[key].associate) {
    db[key].associate(db);
  }
}

module.exports = db;
