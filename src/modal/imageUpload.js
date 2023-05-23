const mongoose = require("mongoose");

const deleteMusicSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const DeleteMusic = mongoose.model("Image", deleteMusicSchema);

module.exports = { DeleteMusic };
