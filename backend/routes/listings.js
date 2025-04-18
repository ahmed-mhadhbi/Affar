const express = require('express');
const router = express.Router();
const { createListing, getListings, updateListing, deleteListing } = require('../controllers/listings');
const authMiddleware = require('../middleware/auth');
const upload = require('../middleware/multer');


router.post('/', authMiddleware, upload.array('images', 4), createListing);


router.get('/', getListings);
router.put('/:id', authMiddleware, updateListing);
router.delete('/:id', authMiddleware, deleteListing);

module.exports = router;