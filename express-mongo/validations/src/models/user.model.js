const mongoose = require('mongoose');
const { Schema, model  } = mongoose;

const regex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$', 'ig');
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre de usuario es requerido'],
    // minlength: [10, 'El nombre debe de tener entre 10 y 20 caracteres'],
    // maxlength: [20, 'El nombre debe de tener entre 10 y 20 caracteres'],
    // match: regex,
    // enum: ['Simon', 'Pedro', 'Maria', 'Ana']
  },
  age: {
    type: Number,
    required: [true, 'La edad del usuario es requerida'],
    // min: 18,
    // max: 25
  },
  email: {
    type: String,
    // required: [true, 'El email es requerido'],
    // match: regex,
    validate: [
      {
        validator: (value) => {
          const test = regex.test(value)
          return test;
        },
        message: 'El email no es valido'
      },
      {
        validator: (value) => {
          return mongoose.models.User.findOne({ email: value })
            .then(user => {
              console.log(user);
              return !user;
            });
        },
        message: 'El email ya existe'
      }
    ]
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;

