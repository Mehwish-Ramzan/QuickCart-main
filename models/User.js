import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: string, auto: true, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isSeller: { type: Boolean, default: false },
    imageUrl: { type: String },
    cartItems: { type: Object, default: {} },
  },
  { minimize: false },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
