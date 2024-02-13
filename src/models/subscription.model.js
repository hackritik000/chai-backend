import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  subscriber: {
    type: Schema.Types.ObjectId, // One who is Subcribing
    erref: "User",
  },
  channel: {
    type: Schema.Types.ObjectId, // One to whom Subcriber is Subcribing
    erref: "User",
  },
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
