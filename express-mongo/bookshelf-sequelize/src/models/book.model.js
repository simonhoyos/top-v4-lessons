module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      title: {
        type: DataTypes.STRING,
        noEmpty: true
      },
      author: {
        type: DataTypes.STRING,
        noEmpty: true
      },
      description: {
        type: DataTypes.TEXT,
        noEmpty: true
      },
    },
    {
      tableName: 'books',
      timestamps: true
    }
  );

  return Book;
};
