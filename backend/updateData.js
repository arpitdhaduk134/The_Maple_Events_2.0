const mongoose = require('mongoose');
require('dotenv').config();

const Catalog = require('./models/Catalog'); // Update the path as needed

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

const seedData = async () => {
  await connectDB();

  const data = [
    // Venues
    {
      name: "Elegant Ballroom",
      type: "venue",
      description: "Spacious ballroom perfect for weddings and corporate events.",
      price: 4000,
      capacity: 200,
      location: "Toronto",
      tags: ["Wedding", "Corporate Event"],
      photos: ["uploads/images/wedding.jpg"],
    },
    {
      name: "Lakeside Pavilion",
      type: "venue",
      description: "Beautiful lakeside venue for intimate gatherings.",
      price: 1500,
      capacity: 100,
      location: "Vancouver",
      tags: ["Wedding", "Birthday"],
      photos: ["uploads/images/birthday.jpg"],
    },
  
    // Catering
    {
      name: "Gourmet Feast",
      type: "catering",
      description: "A delicious multi-cuisine buffet for any event.",
      pricePerGuest: 50,
      tags: ["Wedding", "Corporate Event", "Birthday"],
      photos: ["uploads/images/catering.jpg"],
    },
    {
      name: "Street Food Fiesta",
      type: "catering",
      description: "Tasty street food options to spice up your party.",
      pricePerGuest: 20,
      tags: ["Birthday", "Anniversary"],
      photos: ["uploads/images/street-food.jpg"],
    },
  
    // Decorations
    {
      name: "Royal Wedding Theme",
      type: "decorations",
      description: "Elegant royal theme decorations to make your wedding day special.",
      price: 1200,
      tags: ["Wedding"],
      photos: ["uploads/images/royal-wedding.jpg"],
    },
    {
      name: "Modern Corporate Decor",
      type: "decorations",
      description: "Stylish decorations suitable for corporate events.",
      price: 800,
      tags: ["Corporate Event"],
      photos: ["uploads/images/corporate-decor.jpg"],
    },
  
    // Entertainment
    {
      name: "DJ Party",
      type: "entertainment",
      description: "A fun and vibrant DJ party for your event.",
      price: 1000,
      tags: ["Wedding", "Birthday"],
      photos: ["uploads/images/dj-party.jpg"],
    },
    {
      name: "Magic Show",
      type: "entertainment",
      description: "A fun-filled magic show for all ages.",
      price: 800,
      tags: ["Birthday", "Corporate Event"],
      photos: ["uploads/images/magic-show.jpg"],
    },
  
    // Photography
    {
      name: "Classic Photography",
      type: "photography",
      description: "Professional photography package for all events.",
      price: 800,
      tags: ["Wedding", "Birthday"],
      photos: ["uploads/images/photography.jpg"],
    },
    {
      name: "Cinematic Videography",
      type: "photography",
      description: "Cinematic video coverage for weddings and events.",
      price: 1200,
      tags: ["Wedding", "Anniversary"],
      photos: ["uploads/images/videography.jpg"],
    },
  
    // Transportation
    {
      name: "Luxury Limousine",
      type: "transportation",
      description: "Luxury limousine service for special events.",
      pricePerHour: 200,
      capacity: 8,
      tags: ["Wedding", "Corporate Event"],
      photos: ["uploads/images/limousine.jpg"],
    },
    {
      name: "Party Bus",
      type: "transportation",
      description: "Spacious party bus for group transport.",
      pricePerHour: 150,
      capacity: 20,
      tags: ["Birthday", "Anniversary"],
      photos: ["uploads/images/party-bus.jpg"],
    },
  
    // Stationery
    {
      name: "Elegant Invitations",
      type: "stationery",
      description: "Beautifully crafted invitations for weddings.",
      pricePerPiece: 5,
      tags: ["Wedding"],
      photos: ["uploads/images/invitations.jpg"],
    },
    {
      name: "Corporate Stationery",
      type: "stationery",
      description: "Custom stationery for corporate branding.",
      pricePerPiece: 3,
      tags: ["Corporate Event"],
      photos: ["uploads/images/corporate-stationery.jpg"],
    },
  ];
  

  try {
    await Catalog.deleteMany({});
    await Catalog.insertMany(data);
    console.log('Data seeded successfully');
  } catch (err) {
    console.error('Error seeding data:', err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
