import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://coin-du-ciel-backend.onrender.com/api/properties")
      .then((res) => res.json())
      .then((data) => {
        console.log("Données reçues :", data);
        setProperties(data);
      })
      .catch((err) => console.error("Erreur :", err));
  }, []);

  return (
    <div className="App">
      <h1>🏡 Coin du Ciel</h1>

      {properties.length === 0 ? (
        <p>Chargement...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {properties.map((property) => (
            <div
              key={property._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                width: "250px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={property.image}
                alt={property.title}  // ✅ CORRECTION ICI (très important)
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3>{property.title}</h3>
              <p>📍 {property.city}</p>
              <p><strong>{property.price} €</strong></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;