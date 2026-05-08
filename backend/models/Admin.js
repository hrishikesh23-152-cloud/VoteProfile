const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    default: 'superadmin'
  }
}, {
  timestamps: true 
});

module.exports = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);