import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: {
      desc: "Category's name.",
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

module.exports = mongoose.model("Categories", schema);