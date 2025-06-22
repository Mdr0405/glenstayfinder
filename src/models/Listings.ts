import mongoose from 'mongoose';

const ListingSchema = new mongoose.Schema({
  _id: String,
  name: String,
  room: String,
  link: String,
}
);

export default mongoose.models.Listing || mongoose.model('Listing', ListingSchema);
