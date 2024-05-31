import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr"; // Import SWR

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch character data using SWR
  const { data, error } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
