import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>Description: {product.description} €</p>
          <p>Price: {product.price}</p>
          <p>Currency: {product.currency}</p>
          <p>Category: {product.category}</p>
          <Link href={`/products/${product.id}`}>Go to Detailspage</Link>
        </li>
      ))}
    </ul>
  );
}
