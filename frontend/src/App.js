import React, { useEffect, useState } from "react";
import axios from "axios";
import VibeCard from "./components/VibeCard";
import Vault from "./pages/Vault";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {

  const [vibes, setVibes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchVibes();
  }, []);

  useEffect(() => {
    if (vibes.length > 0 && index < vibes.length) {
      document.body.style.backgroundColor = vibes[index].color;
    }
  }, [index, vibes]);

  const fetchVibes = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/vibes`);
    setVibes(res.data);
  };

  const handleSwipe = () => {
    setIndex(index + 1);
  };

  return (

    <div className="container text-center mt-5">

      <h1 className="mb-4">Vibe Swipe </h1>

      <Link to="/vault" className="btn btn-dark mb-3">
        View Vibe Vault
      </Link>
      <div className="d-flex justify-content-center position-relative">

        {vibes.slice(index, index + 2).reverse().map((vibe, i) => (
          <div
            key={vibe.id}
            style={{
              position: "absolute",
              top: i * 10,
              zIndex: 10 - i
            }}
          >
            <VibeCard
              vibe={vibe}
              onSwipe={handleSwipe}
            />
          </div>
        ))}

        {index >= vibes.length && (
          <h4>No more vibes </h4>
        )}

      </div>

    </div>

  );
}

function App() {

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/vault" element={<Vault />} />

      </Routes>

    </Router>
  );
}

export default App;