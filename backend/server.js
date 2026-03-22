const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 Données test (tu peux remplacer plus tard par MongoDB)
const properties = [
  {
    _id: 1,
    title: "Villa luxe",
    price: 450000,
    city: "Agadir",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  },
  {
    _id: 2,
    title: "Appartement moderne",
    price: 120000,
    city: "Marrakech",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
  }
];

// Routes
app.get("/", (req, res) => {
  res.send("API Coin du Ciel fonctionne 🚀");
});

app.get("/api/properties", (req, res) => {
  res.json(properties);
});

// 🔥 PORT CORRECT POUR RENDER
const PORT = process.env.PORT || 3000;

// Lancement serveur
app.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});