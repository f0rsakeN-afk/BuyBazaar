const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [4, "Item name must have at least 4 characters"],
    required: [true, "Item name is required"],
  },
  shortDesc: {
    type: String,
    required: [true, `Item's short description is required`],
  },
  briefDesc: {
    type: String,
    required: [true, `Item's brief description is required`],
  },
  category: {
    type: String,
    enum: ["fruits", "vegetables", "dairy"],
    required: [true, `Item's category is required`],
    default: "fruits",
  },
  price: {
    type: Number,
    required: [true, `Item's price is required`],
    validate: {
      validator: function (val) {
        if (val < 0) {
          return -1;
        }
        return 1;
      },
    },
  },
  discount: {
    type: Number,
    validate: {
      validator: function (val) {
        if (val >= this.price) return -1;
        return 1;
      },
      message: "Dicount cannot be more than or equal to price of item.",
    },
  },
  rating: {
    type: Number,
    required: [true, `Item's rating is required`],
    min: [1, "Rating cannot be less than 1"],
    max: [5, "Rating cannot be more than 5"],
  },
  weight: {
    type: Number,
    required: [true, "The weight of item is required"],
  },
  quality: {
    type: String,
    enum: ["premium", "mid", "low"],
    default: "mid",
    required: [true, `Item's quality is required`],
  },
  checkMinWeight: {
    type: Number,
    required: [true, "Min weight to be purchased is required"],
  },
  image: String,
  nutritionFacts: {
    calories: String,
    protein: String,
    carbs: String,
    fiber: String,
    sugar: String,
  },
});

const Item = mongoose.model("items", itemSchema);
module.exports = Item;
