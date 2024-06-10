import Link from "next/link";

export default function VolumeDetail({ volume, previousVolume, nextVolume }) {
  return (
    <div>
      <Link href="/volumes">
        <a>&larr; All Volumes</a>
      </Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <h2>Books in this Volume</h2>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <nav>
        {previousVolume && (
          <Link href={`/volumes/${previousVolume.slug}`}>
            <a>&larr; Previous Volume: {previousVolume.title}</a>
          </Link>
        )}
        {nextVolume && (
          <Link href={`/volumes/${nextVolume.slug}`}>
            <a>Next Volume: {nextVolume.title} &rarr;</a>
          </Link>
        )}
      </nav>
    </div>
  );
}
