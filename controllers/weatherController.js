const apiClient = require("../utils/apiClient");

const getWeather = async (req, res) => {
  const city = req.query.address;
  if (!city) return res.status(400).json({ error: "Address is required" });

  try {
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await apiClient.get("/weather", {
      params: { q: city, units: "metric", appid: apiKey },
    });

    const data = response.data;

    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
    });
  } catch (error) {
    res.status(404).json({ error: "City not found or API error" });
  }
};

module.exports = { getWeather };
