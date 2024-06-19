import mongoose from "mongoose";
import { useRouter } from "next/router";
import Link from "next/link";

// Define the Product schema (same as in the other files)
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

export default function ProductDetails({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        {product.price} {product.currency}
      </p>
      <Link href="/">Back to products</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  await connectToDatabase();

  const { id } = context.params;
  const product = await Product.findById(id).lean();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
