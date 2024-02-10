import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  subscription: {
    type: Schema.Types.ObjectId,
    erref: "User",
  },
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
