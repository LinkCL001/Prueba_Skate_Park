const { Router } = require("express");
const db = require("../db");

const router = Router();

router.get("/skaters", (_, res) => {
  db.listar()
    .then((users) => res.json(users))
    .catch((error) => res.json({ error }));
});

module.exports = router;
