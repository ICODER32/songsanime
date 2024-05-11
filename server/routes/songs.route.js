import express from "express";
import multer from "multer";
import path from "path";
import User from "../models/User.js";

import Songs from "../models/Songs.js";

const router = express.Router();

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { selectedSong } = req.body;

  try {
    // find if user exists
    const user = await User.findByIdAndUpdate(id, {
      selectedSong,
    });

    res
      .status(200)
      .json({ success: true, message: "Song updated successfully" });
    // save song into file with unique name
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
