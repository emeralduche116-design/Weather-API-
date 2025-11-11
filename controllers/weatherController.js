const apiClient = require("../utils/apiClient");

const getWeather = async (req, res) => {
  const citiesQuery = req.query.address; // Example: "Lagos,Abuja,London"
  if (!citiesQuery) return res.status(400).json({ error: "Address is required" });

  const cities = citiesQuery.split(",").map(city => city.trim());
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const results = await Promise.all(
      cities.map(async (city) => {
        try {
          const response = await apiClient.get("/weather", {
            params: { q: city, units: "metric", appid: apiKey },
          });
          const data = response.data;
          return {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
          };
        } catch (err) {
          return { city, error: "City not found or API error" };
        }
      })
    );

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getWeather };
