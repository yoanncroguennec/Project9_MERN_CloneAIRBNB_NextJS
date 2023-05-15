import mongoose from "mongoose";

const hostSchema = new mongoose.Schema(
  {
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    description: {
      type: String,
    },
    imgUserHost: {
      type: String,
    },
    geolocation: [
      {
        long: Number,
        lat: Number,
      },
    ],
    nameUserHost: {
      type: String,
    },
    photos: {
      type: [String],
    },
    price: {
      type: Number,
    },
    professional: {
      type: Boolean,
      default: false,
    },
    region: {
      type: String,
    },
    star: {
      type: Number,
    },
    subTitle: {
      type: String,
    },
    title: {
      type: String,
    },
    titlePagePrincipale: {
      type: String,
    },
    typeCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Host = mongoose.models.Host || mongoose.model("Host", hostSchema);
export default Host;
