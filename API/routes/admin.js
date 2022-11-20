const express = require("express");
const router = express.Router()
const adminController = require('../controllers/adminController');
const validation  = require("../middleware/validation");
const loginSchema = require("../validation/loginValidation");

router.post('/admin/login', validation(loginSchema), adminController.login)






module.exports = router;