const Plate = require('../models/plate.model');

module.exports = {
  async getAll(req, res, next) {
    try {
      const plates = await Plate.find().populate('menus');

      res.status(200).json(plates);
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const plate = await Plate.findById(id).populate('menus');
      res.status(200).json(plate);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const plate = await Plate.create(req.body);
      res.status(200).json(plate);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };
      const plate = await Plate.findByIdAndUpdate(id, req.body, options).populate('menus');
      res.status(200).json(plate);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const plate = await Plate.findByIdAndDelete(id);
      res.status(200).json(plate);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
