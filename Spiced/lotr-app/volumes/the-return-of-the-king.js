import { volumes } from "@/lib/data";
import VolumeDetail from "@/components/VolumeDetail";

export default function ReturnPage() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  const previousVolume = volumes.find(({ slug }) => slug === "the-two-towers");
  const nextVolume = null;

  return (
    <VolumeDetail
      volume={volume}
      previousVolume={previousVolume}
      nextVolume={nextVolume}
    />
  );
}
