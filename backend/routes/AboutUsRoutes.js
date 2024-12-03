const express = require("express");
const multer = require("multer");
const path = require("path");
const aboutUsController = require("../controllers/aboutusController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads/about-us",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Fetch About Us Information
router.get("/", aboutUsController.getAboutUs);

// Update About Us Information
router.put("/", upload.array("images", 5), aboutUsController.updateAboutUs);

module.exports = router;
