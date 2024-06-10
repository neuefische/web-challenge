import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../../lib/data";
import Head from "next/head";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();

  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Go to a Random Volume</button>
    </>
  );
}
