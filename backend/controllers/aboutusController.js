const AboutUs = require("../models/AboutUs");

exports.getAboutUs = async (req, res) => {
  try {
    const aboutUs = await AboutUs.findOne();
    res.status(200).json(aboutUs || {});
  } catch (error) {
    res.status(500).json({ message: "Error fetching About Us data." });
  }
};

exports.updateAboutUs = async (req, res) => {
  try {
    const { title, description } = req.body;
    const images = req.files.map((file) => `/uploads/about-us/${file.filename}`);

    let aboutUs = await AboutUs.findOne();

    if (!aboutUs) {
      aboutUs = new AboutUs({ title, description, images });
    } else {
      aboutUs.title = title || aboutUs.title;
      aboutUs.description = description || aboutUs.description;
      aboutUs.images = images.length > 0 ? images : aboutUs.images;
    }

    await aboutUs.save();
    res.status(200).json({ message: "About Us updated successfully.", aboutUs });
  } catch (error) {
    res.status(500).json({ message: "Error updating About Us data.", error });
  }
};
