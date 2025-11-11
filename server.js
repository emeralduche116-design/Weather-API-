require("dotenv").config();
const express = require("express");
const path = require("path");

const weatherRoute = require("./routes/weatherRoutes");

const app = express();
const port = process.env.PORT || 3001;

// Serve static files (if any)
app.use(express.static(path.join(__dirname, "public")));

// Weather routes
app.use("/", weatherRoute);

// Catch-all 404
app.use((req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
