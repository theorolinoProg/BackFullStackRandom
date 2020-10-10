import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: {
      desc: "Articles's name.",
      trim: true,
      type: String,
      required: true,
    },
    category: {
        desc: "Articles's category.",
        trim: true,
        type: String,
        required: true,
      },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Articles", schema);