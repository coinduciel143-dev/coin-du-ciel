const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

console.log("Mode sans MongoDB");

// Route test
app.get('/api/properties', (req, res) => {
  res.json([
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
  ]);
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});