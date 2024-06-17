import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                {product.name} - {product.price} {product.currency}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
