const express = require("express")
const router = express.Router()
const {login, signup} = require("../controllers/user.controller")

router.post("/register", signup)
router.post("/login", login)

module.exports = router