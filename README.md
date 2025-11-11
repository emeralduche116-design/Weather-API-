# 🌦️ Weather API

The **Weather API** is a backend web service that provides real-time weather information based on a user’s location or city input.  
It fetches live data from a third-party API (OpenWeatherMap) and returns structured JSON responses that can be easily integrated into frontend apps, mobile apps, or IoT systems.

---

## 🧠 1. Project Overview

The Weather API allows users to retrieve current weather conditions using either a city name or geographical coordinates.  
It demonstrates backend principles such as API integration, environment management, and error handling.

---

## ⚙️ 2. Core Objectives

- Build a Node.js + Express.js backend that fetches and serves weather data.  
- Integrate an external API (OpenWeatherMap).  
- Ensure secure API key management with environment variables.  
- Handle errors, invalid requests, and API rate limits.  
- Implement clean RESTful API design for easy frontend integration.  
- *(Optional)* Add caching (e.g., Redis or in-memory) for efficiency.

---

## 🧩 3. Tech Stack

| Component | Tool / Technology | Purpose |
|------------|-------------------|----------|
| Runtime | **Node.js** | JavaScript runtime for backend logic |
| Framework | **Express.js** | Build and manage routes, requests, and responses |
| API Integration | **OpenWeatherMap API** | Source of real-time weather data |
| Environment Management | **dotenv** | Store API keys securely |
| Testing | **Postman** |Testing API endpoints|

---

## 🏗️ 4. Project Architecture

### 🗂️ Folder Structure
weather-api/

‎│

‎├── node_modules/

‎├── src/

‎│   ├── routes/

‎│   │   └── weatherRoutes.js

‎│   ├── controllers/

‎│   │   └── weatherController.js

‎│   ├── services/

‎│   │   └── weatherService.js

‎│   ├── config/

‎│   │   └── apiConfig.js

‎│   ├── utils/

‎│   │   └── errorHandler.js

‎│   └── app.js

‎│

‎├── .env

‎├── package.json

‎└── server.js


## ‎🔑 5. Environment Setup
‎

### ‎Step 1: Initialize project
‎
‎mkdir weather-api

‎cd weather-api

‎npm init -y
‎
### ‎Step 2: Install dependencies
‎
‎npm install express axios dotenv

‎npm install nodemon --save-dev
‎
### ‎Step 3: Create .env file
‎
‎PORT=3000

‎WEATHER_API_KEY=your_openweathermap_api_key.


## ‎🌐 6. API Endpoint Design
‎
‎HTTP Method	Endpoint	Description	Example
‎
‎GET	/api/weather?city={city}	Fetch current weather by city name	/api/weather?city=Lagos
‎GET	/api/weather/coordinates?lat={lat}&lon={lon}	Fetch weather by coordinates	/api/weather/coordinates?lat=6.5244&lon=3.3792
‎
‎
‎
