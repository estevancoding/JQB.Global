const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      // Estoque
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Salva a data e o horário
);

const Product = mongoose.model("Product", productSchema);

module.exports = {
  Product,
};
