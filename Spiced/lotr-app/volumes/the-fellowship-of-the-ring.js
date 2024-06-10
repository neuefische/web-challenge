import { volumes } from "@/lib/data";
import VolumeDetail from "@/components/VolumeDetail";

export default function FellowshipPage() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const previousVolume = null;
  const nextVolume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <VolumeDetail
      volume={volume}
      previousVolume={previousVolume}
      nextVolume={nextVolume}
    />
  );
}
