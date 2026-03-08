import React from "react";
import { motion } from "framer-motion";
import axios from "axios";

function VibeCard({ vibe, onSwipe }) {

  const handleDragEnd = async (event, info) => {

    // swipe right
    if (info.offset.x > 150) {

      await axios.post(`${process.env.REACT_APP_API_URL}/like`, {
        user_id: 1,
        vibe_id: vibe.id
      });

      onSwipe();

    }

    // swipe left
    else if (info.offset.x < -150) {

      onSwipe();

    }

  };

  return (

    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 1.05 }}
      style={{ cursor: "grab" }}
    >

      <div
        className="card shadow-lg"
        style={{ width: "22rem", borderRadius: "20px" }}
      >

        <img
          src={vibe.image_url}
          className="card-img-top"
          alt={vibe.title}
          style={{
            height: "350px",
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px"
          }}
        />

        <div className="card-body text-center">

          <h5 className="card-title">{vibe.title}</h5>

        </div>

      </div>

    </motion.div>
  );
}

export default VibeCard;