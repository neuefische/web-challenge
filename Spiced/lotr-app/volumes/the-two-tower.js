import { volumes } from "@/lib/data";
import VolumeDetail from "@/components/VolumeDetail";

export default function TowersPage() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  const previousVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const nextVolume = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <VolumeDetail
      volume={volume}
      previousVolume={previousVolume}
      nextVolume={nextVolume}
    />
  );
}
