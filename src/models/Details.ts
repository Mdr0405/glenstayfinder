import mongoose from "mongoose";

const DetailsSchema = new mongoose.Schema({
  name: String,
  room: Number,
  description: String,
  price: Number,
  location: String,
  images: [String],
});

export default mongoose.models.Detail || mongoose.model("Detail", DetailsSchema);