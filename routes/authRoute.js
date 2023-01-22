const express = require('express')
const authMiddleware = require('../config/authMiddleware')
const { registerUser,loginUser,userData } = require('../controllers/authController')


const router = express.Router()


router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/userdata',authMiddleware,userData)

module.exports = router