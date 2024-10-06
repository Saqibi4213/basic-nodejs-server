const express = require('express');

const router = express.Router();

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST new user
router.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;
  users = users.map((user) => (user.id === userId ? updatedUser : user));
  res.json(updatedUser);
});

// DELETE user
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: 'User deleted' });
});

module.exports = router;
