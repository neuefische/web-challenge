import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Products";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({ status: "Not Found" });
      }

      res.status(200).json(product);
    } catch (error) {
      return res
        .status(400)
        .json({ status: "Bad Request", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
