const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: "../uploads/profil/profil.png",
    },

    activitePost: {
      type: String,
      required: true,
      trim: true,
    },
    villePost: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 300,
    },

    likers: {
      type: [String],
      required: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPrenom: String,
          commenterNom: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", PostSchema);
