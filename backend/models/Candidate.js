const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  position: { type: String, required: true },
  image: { type: String }, // URL to image
  agenda: [{ title: String, description: String, icon: String }],
  achievements: [{ title: String, description: String, year: String, icon: String }],
  projects: [{ title: String, description: String, image: String, category: String }]
});

module.exports = mongoose.model('Candidate', candidateSchema);