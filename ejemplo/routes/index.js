const express = require('express');
const router = express.Router();

router.get('/user', function (req, res) {
  const { name, age } = req.query

  res.status(200).json({
    "name": name,
    "age": age
  });
})

router.post('/create-user', function (req, res) {
  const { name, age } = req.body

  if (!name || !age) {
    return res.status(400).json({ error: 'Missing name or age' });
  }

  res.status(201).json({
    "name": name,
    "age": age
  });
})

module.exports = router;