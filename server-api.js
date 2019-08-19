module.exports = function(app) {
  console.log(app);
  const Look = require("./models/Looks");

  app.get("/api/looks", (req, res) => {
    console.log("##########");
    Look.find()
      .then(looks => res.json(looks))
      .catch(err => res.json(err));
  });

  app.post("/api/looks", (req, res) => {
    console.log("sdfkdjh");
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
  app.delete("/api/looks/:id", (req, res) => {
    const { id } = req.params;
    Look.findByIdAndRemove(id)
      .then(look => res.json({ success: true }))
      .catch(err => res.json(err));
  });
};
