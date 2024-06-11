import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  turnAllLightsOn,
  turnAllLightsOff,
  areAllLightsOn,
  areAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnAllLightsOff}
        disabled={areAllLightsOff}
      >
        Turn all lights off
      </Button>
      <Button type="button" onClick={turnAllLightsOn} disabled={areAllLightsOn}>
        Turn all lights on
      </Button>
      <br></br>
    </StyledQuickActions>
  );
}
