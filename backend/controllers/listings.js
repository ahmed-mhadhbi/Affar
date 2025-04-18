const Listing = require('../models/Listing');

// Create a new listing
const createListing = async (req, res) => {
  const { title, description } = req.body;
  const images = req.files.map((file) => file.path); // Get paths of uploaded images
  try {
    const listing = new Listing({ title, description, images, createdBy: req.user.id });
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all listings
const getListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate('createdBy', 'username');
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a listing
const updateListing = async (req, res) => {
  const { title, description } = req.body;
  try {
    const listing = await Listing.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    res.json(listing);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a listing
const deleteListing = async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Listing deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createListing, getListings, updateListing, deleteListing };