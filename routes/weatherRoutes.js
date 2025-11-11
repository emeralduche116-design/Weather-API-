const express = require("express");
const { getWeather } = require("../controllers/weatherController");

const router = express.Router();

// GET /weather?address=City1,City2
router.get("/weather", getWeather);

module.exports = router;
