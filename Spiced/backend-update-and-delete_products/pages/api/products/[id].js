import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(product);
    } catch (error) {
      response.status(500).json({ status: "Error", message: error.message });
    }
  } else if (request.method === "PUT") {
    try {
      const updatedProduct = request.body;
      const product = await Product.findByIdAndUpdate(id, updatedProduct, {
        new: true,
      });

      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }

      response
        .status(200)
        .json({ status: "Product successfully updated.", product });
    } catch (error) {
      response.status(500).json({ status: "Error", message: error.message });
    }
  } else if (request.method === "DELETE") {
    try {
      const product = await Product.findByIdAndDelete(id);

      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json({ status: "Product successfully deleted." });
    } catch (error) {
      response.status(500).json({ status: "Error", message: error.message });
    }
  } else {
    response.status(405).json({ status: "Method Not Allowed" });
  }
}
