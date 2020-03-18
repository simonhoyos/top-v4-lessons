const Menu = require('../models/menu.model');
const Plate = require('../models/plate.model');

module.exports = {
  async getAll(req, res) {
    try {
      const menus = await Menu.find().populate('plates');
      res.status(200).json(menus);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const menu = await Menu.findById(id).populate('plates');
      res.status(200).json(menu);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const menu = await Menu.create(req.body).populate('plates');

      await req.body.plates.forEach(async id => {
        const plate = await Plate.findById(id);
        plate.menus.push(menu);
        await plate.save();
      });

      res.status(200).json(menu);
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

      const menu = await Menu.findByIdAndUpdate(id, data, options).populate('plates');

      res.status(200).json(menu);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const menu = await Menu.findByIdAndDelete(id);
      res.status(200).json(menu);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
