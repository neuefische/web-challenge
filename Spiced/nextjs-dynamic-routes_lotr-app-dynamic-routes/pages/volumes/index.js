import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Head from "next/head";

export default function Volumes() {
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
    </>
  );
}
