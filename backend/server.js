const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");

const User = require("./models/User");
const Vibe = require("./models/Vibe");
const Like = require("./models/Like");
const vibeRoutes = require("./routes/vibeRoutes");

User.hasMany(Like, { foreignKey: "user_id" });
Like.belongsTo(User, { foreignKey: "user_id" });

Vibe.hasMany(Like, { foreignKey: "vibe_id" });
Like.belongsTo(Vibe, { foreignKey: "vibe_id" });

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", vibeRoutes);

app.get("/", (req, res) => {
  res.send("Vibe Swipe API Running");
});

sequelize.authenticate()
  .then(() => console.log("MySQL Connected"))
  .catch(err => console.log("Database error:", err));

sequelize.sync()
  .then(() => console.log("Tables created"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});