import mongoose from "mongoose";

// Define the Product schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

// Create the Product model if it doesn't exist
const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

// Connect to the database
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
      break;
    case "POST":
      try {
        const productData = req.body;
        await Product.create(productData);
        res.status(201).json({ status: "Product created." });
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
