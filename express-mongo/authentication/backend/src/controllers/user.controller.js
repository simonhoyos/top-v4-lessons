const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async signup(req, res) {
    try {
      const password = await bcrypt.hash(req.body.password, 8);
      const user = await User.create({ email: req.body.email, password });

      const token = jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: 1000 * 60 * 60 * 24 }
      );

      res.status(200).json({ token });
    } catch(error) {
      console.log(error);
      res.status(401).json(error);
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      const isValid = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if(!isValid) {
        res.status(401).json('Usuario o contraseña invalido');
        return;
      }

      const token = jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: 1000 * 60 * 60 * 24 }
      );

      res.status(200).json({ token });
    } catch(error) {
      console.log(error);
      res.status(401).json(error);
    }
  },
}
