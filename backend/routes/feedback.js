const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

// Submit feedback
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all feedbacks (for admin)
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;