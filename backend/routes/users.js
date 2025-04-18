const express = require('express');
const router = express.Router();
const { getUser, updateUser, deleteUser } = require('../controllers/users');
const authMiddleware = require('../middleware/auth');


router.get('/me', authMiddleware, getUser); 
router.put('/me', authMiddleware, updateUser); 
router.delete('/me', authMiddleware, deleteUser); 

module.exports = router;