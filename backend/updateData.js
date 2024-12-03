const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

mongoose.set('bufferTimeoutMS', 30000); // Increase timeout to 30 seconds

// Define Admin Schema and Model
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin', 'admin'], required: true },
});

const Admin = mongoose.model('Admin', adminSchema);

// Script to Create a New Admin with Superadmin Role
const createSuperAdmin = async () => {
  try {
    // Superadmin credentials
    const username = 'superadmin';
    const password = 'supersecurepassword123'; // Change this to your desired password
    const role = 'superadmin';

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the superadmin
    const newAdmin = new Admin({
      username,
      password: hashedPassword,
      role,
    });

    await newAdmin.save();

    console.log(`✅ Superadmin created successfully!`);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Role: ${role}`);
  } catch (error) {
    console.error('❌ Error creating superadmin:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Execute the script
createSuperAdmin();
