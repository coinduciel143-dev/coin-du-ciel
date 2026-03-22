import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{fontFamily:"Arial"}}>

      <h1 style={{textAlign:"center"}}>Coin du Ciel</h1>

      <div style={{
        display:"flex",
        gap:"20px",
        padding:"20px",
        flexWrap:"wrap"
      }}>
        {properties.map(p => (
          <div key={p._id} style={{
            border:"1px solid #ccc",
            padding:"10px",
            width:"250px"
          }}>
            <img src={p.image} width="100%" />
            <h3>{p.title}</h3>
            <p>{p.city}</p>
            <p>{p.price}€</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
