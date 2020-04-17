export default (req, res) => {
  const sum = req.body.a + req.body.b;
  res.json({ sum });
}
