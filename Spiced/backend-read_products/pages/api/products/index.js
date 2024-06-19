import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Products";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const products = await Product.find();
      console.log(products);

      return res.status(200).json(products);
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
