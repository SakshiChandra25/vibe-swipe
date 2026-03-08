const express = require("express");
const router = express.Router();

const Vibe = require("../models/Vibe");
const Like = require("../models/Like");

router.get("/vibes", async (req, res) => {
  const vibes = await Vibe.findAll();
  res.json(vibes);
});


router.post("/like", async (req, res) => {

  const { user_id, vibe_id } = req.body;

  const like = await Like.create({
    user_id,
    vibe_id
  });

  res.json(like);

});


router.get("/likes", async (req, res) => {

  const likes = await Like.findAll({
    include: Vibe
  });

  res.json(likes);

});

router.post("/vibe", async (req, res) => {

  const { title, image_url, color, audio_url } = req.body;

  const vibe = await Vibe.create({
    title,
    image_url,
    color,
    audio_url
  });

  res.json(vibe);

});

module.exports = router;