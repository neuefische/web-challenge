import Lights from "../components/Lights";
import QuickActions from "../components/QuickActions";

export default function HomePage({
  lights,
  toggleLight,
  turnAllLightsOn,
  turnAllLightsOff,
}) {
  const turnedOnCount = lights.filter((light) => light.isOn).length;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Number of lights turned on: {turnedOnCount}</p>
      <QuickActions
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
        areAllLightsOn={turnedOnCount === lights.length}
        areAllLightsOff={turnedOnCount === 0}
      />
      <Lights lights={lights} toggleLight={toggleLight} />
    </div>
  );
}
