const express = require('express');
const router = express.Router();
const { registerControl, loginControl } = require("../controllers/authController")

router.post("/register", registerControl);
router.post("/login", loginControl);

module.exports = router;