const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }], // Array of image paths
});

module.exports = mongoose.model("AboutUs", aboutUsSchema);
