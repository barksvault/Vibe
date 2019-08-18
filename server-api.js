module.exports = function(app) {
  const Look = require("./models/Looks");

  app.get("/api/looks", (req, res) => {
    Look.find()
      .then(looks => res.json(looks))
      .catch(err => res.json(err));
  });

  app.post("/api/looks", (req, res) => {
    Look.create(req.body)
      .then(look => res.json(look))
      .catch(err => res.json(err));
  });

  app.patch("/api/looks/:id", (req, res) => {
    const { id } = req.params;
    Look.findByIdAndUpdate(id, req.body, { new: true })
      .then(look => res.json(look))
      .catch(err => res.json(err));
  });
};
