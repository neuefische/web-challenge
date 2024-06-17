import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed to load product</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Category: {data.category}</p>
      <Link href="/products">
        <a>Back to Products</a>
      </Link>
    </div>
  );
}
