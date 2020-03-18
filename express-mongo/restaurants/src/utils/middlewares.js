const jwt = require('jsonwebtoken');

module.exports = {
  auth(req, res, next) {
    try {
      const token = req.headers.authorization;
      req.user = jwt.verify(token, process.env.SECRET).user;
      next();
    } catch (error) {
      res.status(401).json({ error });
    }
  }
}
