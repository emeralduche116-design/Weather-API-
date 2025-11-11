const express = require("express");
const { getWeather } = require("../controllers/weatherController");

const router = express.Router();

// GET /weather?address=city
router.get("/weather", getWeather);

module.exports = router;
