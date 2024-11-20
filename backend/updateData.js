const mongoose = require('mongoose');
const Catalog = require('./models/Catalog'); // Ensure the correct path to your model
require('dotenv').config();

// Catalog data
const catalogData = [
  {
    name: 'Wedding Venue',
    description: 'A beautiful venue for your special day.',
    category: 'Venue',
    price: 5000,
    location: 'Downtown, Guelph',
    titleImage: '/uploads/images/wedding.jpg',
    images: ['/uploads/images/wedding.jpg', '/uploads/images/wedding1.jpg'],
    tags: ['wedding', 'venue', 'event'],
    contact: { email: 'contact@weddingvenue.com', phone: '123-456-7890' },
  },
  {
    name: 'Corporate Event Hall',
    description: 'Spacious hall perfect for corporate events and meetings.',
    category: 'Venue',
    price: 7000,
    location: 'Tech Park, Toronto',
    titleImage: '/uploads/images/corporate_event.jpg',
    images: ['/uploads/images/corporate_event.jpg'],
    tags: ['corporate', 'event', 'venue'],
    contact: { email: 'info@corporatehall.com', phone: '987-654-3210' },
  },
  {
    name: 'Birthday Party Package',
    description: 'Complete package for a fun-filled birthday party.',
    category: 'Package',
    price: 2500,
    location: 'Downtown, Kitchener',
    titleImage: '/uploads/images/birthday.jpg',
    images: ['/uploads/images/birthday.jpg', '/uploads/images/birthday1.jpg'],
    tags: ['birthday', 'party', 'package'],
    contact: { email: 'birthday@eventplanner.com', phone: '555-123-4567' },
  },
  {
    name: 'Luxury Catering Service',
    description: 'Top-notch catering with a variety of cuisines.',
    category: 'Catering',
    price: 30,
    location: 'Waterloo',
    titleImage: '/uploads/images/catering.jpg',
    images: ['/uploads/images/catering.jpg', '/uploads/images/catering1.jpg'],
    tags: ['catering', 'food', 'event'],
    contact: { email: 'catering@luxuryfood.com', phone: '666-789-1234' },
  },
  {
    name: 'Themed Decorations',
    description: 'Customized decorations to suit any event theme.',
    category: 'Decorations',
    price: 1500,
    location: 'Mississauga',
    titleImage: '/uploads/images/decorations.jpg',
    images: ['/uploads/images/decorations.jpg'],
    tags: ['decorations', 'theme', 'custom'],
    contact: { email: 'decor@themeparty.com', phone: '444-888-2222' },
  },
  {
    name: 'DJ Entertainment',
    description: 'Professional DJ to keep the party alive.',
    category: 'Entertainment',
    price: 1000,
    location: 'Brampton',
    titleImage: '/uploads/images/dj.jpg',
    images: ['/uploads/images/dj.jpg'],
    tags: ['dj', 'entertainment', 'music'],
    contact: { email: 'dj@partybeats.com', phone: '777-222-3333' },
  },
  {
    name: 'Event Photography',
    description: 'Capture every moment with our professional photography service.',
    category: 'Photography',
    price: 1200,
    location: 'Hamilton',
    titleImage: '/uploads/images/photography.jpg',
    images: ['/uploads/images/photography.jpg'],
    tags: ['photography', 'events', 'moments'],
    contact: { email: 'photos@eventclicks.com', phone: '888-555-6666' },
  },
  {
    name: 'Luxury Transport',
    description: 'Luxury transport service for your special event.',
    category: 'Transportation',
    price: 500,
    location: 'Cambridge',
    titleImage: '/uploads/images/transport.jpg',
    images: ['/uploads/images/transport.jpg'],
    tags: ['transport', 'luxury', 'event'],
    contact: { email: 'transport@luxrides.com', phone: '999-111-2222' },
  },
  {
    name: 'Custom Stationery',
    description: 'Elegant and customized event stationery.',
    category: 'Stationery',
    price: 300,
    location: 'Milton',
    titleImage: '/uploads/images/stationery.jpg',
    images: ['/uploads/images/stationery.jpg'],
    tags: ['stationery', 'custom', 'event'],
    contact: { email: 'stationery@elegantdesigns.com', phone: '111-222-3333' },
  },
  {
    name: 'Garden Wedding Venue',
    description: 'A picturesque garden venue for your dream wedding.',
    category: 'Venue',
    price: 6000,
    location: 'Niagara Falls',
    titleImage: '/uploads/images/garden_wedding.jpg',
    images: ['/uploads/images/garden_wedding.jpg'],
    tags: ['wedding', 'garden', 'venue'],
    contact: { email: 'garden@weddingvenue.com', phone: '123-987-6543' },
  },
  {
    name: 'Gourmet Catering Service',
    description: 'Delicious gourmet food for any occasion.',
    category: 'Catering',
    price: 40,
    location: 'Oakville',
    titleImage: '/uploads/images/gourmet_catering.jpg',
    images: ['/uploads/images/gourmet_catering.jpg'],
    tags: ['catering', 'gourmet', 'food'],
    contact: { email: 'gourmet@catering.com', phone: '456-789-0123' },
  },
  {
    name: 'Event Lighting Setup',
    description: 'Dynamic lighting to set the mood for your event.',
    category: 'Decorations',
    price: 1000,
    location: 'Burlington',
    titleImage: '/uploads/images/lighting.jpg',
    images: ['/uploads/images/lighting.jpg'],
    tags: ['lighting', 'decor', 'events'],
    contact: { email: 'lighting@eventsetup.com', phone: '321-654-9870' },
  },
  {
    name: 'Live Music Band',
    description: 'Live band to entertain and energize your guests.',
    category: 'Entertainment',
    price: 2500,
    location: 'Toronto',
    titleImage: '/uploads/images/live_music.jpg',
    images: ['/uploads/images/live_music.jpg'],
    tags: ['music', 'live', 'band'],
    contact: { email: 'music@livebands.com', phone: '123-123-1234' },
  },
  {
    name: 'Video Coverage',
    description: 'High-quality video coverage for your event.',
    category: 'Photography',
    price: 2000,
    location: 'Guelph',
    titleImage: '/uploads/images/video.jpg',
    images: ['/uploads/images/video.jpg'],
    tags: ['video', 'coverage', 'events'],
    contact: { email: 'video@capturemoments.com', phone: '987-987-9876' },
  },
  {
    name: 'Vintage Transport',
    description: 'Vintage cars for a unique travel experience.',
    category: 'Transportation',
    price: 700,
    location: 'Stratford',
    titleImage: '/uploads/images/vintage_transport.jpg',
    images: ['/uploads/images/vintage_transport.jpg'],
    tags: ['transport', 'vintage', 'luxury'],
    contact: { email: 'vintage@rides.com', phone: '222-333-4444' },
  },
  {
    name: 'DIY Stationery Kit',
    description: 'Create your stationery with this DIY kit.',
    category: 'Stationery',
    price: 200,
    location: 'London',
    titleImage: '/uploads/images/diy_stationery.jpg',
    images: ['/uploads/images/diy_stationery.jpg'],
    tags: ['diy', 'stationery', 'custom'],
    contact: { email: 'diy@stationery.com', phone: '555-444-3333' },
  },
  {
    name: 'Beachside Venue',
    description: 'Stunning venue by the beach for memorable events.',
    category: 'Venue',
    price: 8000,
    location: 'Wasaga Beach',
    titleImage: '/uploads/images/beach_venue.jpg',
    images: ['/uploads/images/beach_venue.jpg'],
    tags: ['beach', 'venue', 'event'],
    contact: { email: 'beach@venue.com', phone: '111-888-9999' },
  },
  {
    name: 'Luxury Event Package',
    description: 'All-in-one luxury package for grand events.',
    category: 'Package',
    price: 15000,
    location: 'Toronto',
    titleImage: '/uploads/images/luxury_package.jpg',
    images: ['/uploads/images/luxury_package.jpg'],
    tags: ['luxury', 'package', 'events'],
    contact: { email: 'luxury@eventpackage.com', phone: '333-222-1111' },
  },
  {
    name: 'Outdoor Camping Venue',
    description: 'Perfect outdoor venue for adventure events.',
    category: 'Venue',
    price: 3000,
    location: 'Blue Mountain',
    titleImage: '/uploads/images/camping_venue.jpg',
    images: ['/uploads/images/camping_venue.jpg'],
    tags: ['outdoor', 'camping', 'venue'],
    contact: { email: 'camping@outdoorvenue.com', phone: '888-777-6666' },
  },
  {
    name: 'Themed Party Package',
    description: 'Exciting themed party packages for all ages.',
    category: 'Package',
    price: 4000,
    location: 'Mississauga',
    titleImage: '/uploads/images/themed_party.jpg',
    images: ['/uploads/images/themed_party.jpg'],
    tags: ['theme', 'party', 'package'],
    contact: { email: 'theme@partypackage.com', phone: '444-555-6666' },
  },
];


// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/maple_events', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit on connection failure
  }
};

// Seed the database
const seedCatalog = async () => {
  try {
    console.log('🌱 Starting data seeding...');
    await Catalog.deleteMany(); // Clear existing data
    console.log('✅ Existing catalog data cleared');
    await Catalog.insertMany(catalogData); // Insert new data
    console.log('✅ Catalog seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding catalog:', error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

// Run the script
connectDB().then(seedCatalog);
