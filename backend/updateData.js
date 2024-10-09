require('dotenv').config();
const mongoose = require('mongoose');
const Venue = require('./models/Venue');
const Catering = require('./models/Catering');
const Decorations = require('./models/Decorations');
const Entertainment = require('./models/Entertainment');
const Photography = require('./models/Photography');
const Transportation = require('./models/Transportation');
const Stationery = require('./models/Stationery');

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Sample data for seeding
const venuesData = [
  { name: "Elegant Ballroom", location: "Toronto", capacity: 200, price: 4000, tags: ["Wedding", "Corporate Event"], photos: ["https://via.placeholder.com/150"] },
  { name: "Lakeside Pavilion", location: "Vancouver", capacity: 120, price: 1500, tags: ["Wedding", "Birthday"], photos: ["https://via.placeholder.com/150"] }
];

const cateringData = [
  { name: "Gourmet Feast", pricePerGuest: 50, menuOptions: ["Italian", "Indian", "Continental"], description: "A delicious multi-cuisine buffet for any event.", tags: ["Wedding", "Corporate Event", "Birthday"], photos: ["https://via.placeholder.com/150"] },
  { name: "Street Food Fiesta", pricePerGuest: 20, menuOptions: ["Mexican", "BBQ", "Vegetarian"], description: "Tasty street food options to spice up your party.", tags: ["Birthday", "Anniversary"], photos: ["https://via.placeholder.com/150"] }
];

const decorationsData = [
  { packageName: "Royal Wedding Theme", price: 1200, includedItems: ["Flower Arrangements", "Table Centerpieces", "Backdrop"], description: "Elegant royal theme decorations to make your wedding day special.", tags: ["Wedding"], photos: ["https://via.placeholder.com/150"] },
  { packageName: "Modern Corporate Decor", price: 800, includedItems: ["LED Lights", "Themed Backdrops"], description: "Stylish decorations suitable for corporate events.", tags: ["Corporate Event"], photos: ["https://via.placeholder.com/150"] }
];

const entertainmentData = [
  { name: "DJ Party", type: "Music", price: 1000, duration: 
    4, description: "A fun and vibrant DJ party for your event.", tags: ["Wedding", "Birthday"], photos: ["https://via.placeholder.com/150"] },
    { name: "Magic Show", type: "Performance", price: 800, duration: 2, description: "A fun-filled magic show for all ages.", tags: ["Birthday", "Corporate Event"], photos: ["https://via.placeholder.com/150"] }
  ];
  
  const photographyData = [
    { name: "Classic Photography", price: 800, coverageTime: 5, packageType: "Standard", description: "Professional photography package for all events.", tags: ["Wedding", "Birthday"], photos: ["https://via.placeholder.com/150"] },
    { name: "Cinematic Videography", price: 1200, coverageTime: 8, packageType: "Premium", description: "Cinematic video coverage for weddings and events.", tags: ["Wedding", "Anniversary"], photos: ["https://via.placeholder.com/150"] }
  ];
  
  const transportationData = [
    { vehicleType: "Limousine", pricePerHour: 200, capacity: 8, description: "Luxury limousine service for special events.", tags: ["Wedding", "Corporate Event"], photos: ["https://via.placeholder.com/150"] },
    { vehicleType: "Party Bus", pricePerHour: 150, capacity: 20, description: "Spacious party bus for group transport.", tags: ["Birthday", "Anniversary"], photos: ["https://via.placeholder.com/150"] }
  ];
  
  const stationeryData = [
    { packageName: "Elegant Invitations", pricePerPiece: 5, itemsIncluded: ["Printed Invitations", "Envelopes"], description: "Beautifully crafted invitations for weddings.", tags: ["Wedding"], photos: ["https://via.placeholder.com/150"] },
    { packageName: "Corporate Stationery", pricePerPiece: 3, itemsIncluded: ["Letterhead", "Business Cards"], description: "Custom stationery for corporate branding.", tags: ["Corporate Event"], photos: ["https://via.placeholder.com/150"] }
  ];
  
  // Seeding function
  const seedData = async () => {
    await connectDB();
  
    await Venue.deleteMany({});
    await Venue.insertMany(venuesData);
  
    await Catering.deleteMany({});
    await Catering.insertMany(cateringData);
  
    await Decorations.deleteMany({});
    await Decorations.insertMany(decorationsData);
  
    await Entertainment.deleteMany({});
    await Entertainment.insertMany(entertainmentData);
  
    await Photography.deleteMany({});
    await Photography.insertMany(photographyData);
  
    await Transportation.deleteMany({});
    await Transportation.insertMany(transportationData);
  
    await Stationery.deleteMany({});
    await Stationery.insertMany(stationeryData);
  
    console.log('Data seeded successfully');
    mongoose.connection.close();
  };
  
  seedData();
  