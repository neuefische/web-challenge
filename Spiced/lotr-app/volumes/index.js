import Link from "next/link";
import { volumes } from "@/lib/data";

export default function VolumesPage() {
  return (
    <div>
      <h1>Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>
              <a>{volume.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
