import React, { useEffect, useState } from "react";
import axios from "axios";

function Vault() {

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/likes`);
    setLikes(res.data);
  };

  return (

    <div className="container mt-4">

      <h2 className="text-center mb-4">Your Vibe Vault ✨</h2>

      <div
        style={{
        columnCount: 3,
        columnGap: "15px"
        }}
        >

        {likes.map((item) => (

          <div
            key={item.id}
            style={{
                breakInside: "avoid",
                marginBottom: "15px",
                transform: `rotate(${Math.random() * 4 - 2}deg)`
            }}
            >

            <div className="card shadow">

              <img
                src={item.Vibe.image_url}
                alt={item.Vibe.title}
                className="card-img-top"
              />

              <div className="card-body text-center">
                <h6>{item.Vibe.title}</h6>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Vault;