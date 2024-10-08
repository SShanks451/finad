import mongoose from "mongoose";

const OrganisationPostSchema = mongoose.Schema(
  {
    content: {
      type: String,
    },

    status: {
      type: String,
      required: true,
      enum: ["active", "expired"],
      default: "active",
    },

    deadline: {
      type: Date,
    },

    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organisation",
      required: true,
    },

    pictures: [
      {
        publicId: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],

    likesCount: {
      type: Number,
      default: 0,
    },

    reachCount: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

const OrganisationPost = mongoose.model("OrganisationPost", OrganisationPostSchema);

export default OrganisationPost;
