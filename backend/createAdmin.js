const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('Admin already exists. Skipping...');
    } else {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const admin = new Admin({ username: 'admin', password: hashedPassword });
      await admin.save();
      console.log('Admin created successfully');
    }
    
    await mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding admin:', err);
    process.exit(1);
  }
};

createAdmin();
