const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name is required for the Event"],
  },
  tagline: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "Description is required for the Event"],
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
