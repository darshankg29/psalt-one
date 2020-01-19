const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const websiteSchema = new Schema(
  {
    nickName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1
    },
    url: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },
    pwd: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },
    createdDate: {
      type: Date,
      trim: true,
      minlength: 1
    }
  },
  {
    timestamps: true
  }
);

const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;
