import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponent.js";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
`;
export default function HomePage() {
  return (
    <StyledBox>
      <BoxWithClassName isBlack={false} />
      <BoxWithClassName isBlack={true} />
      <BoxWithStyledComponents $isBlack={false} />
      <BoxWithStyledComponents $isBlack={true} />
    </StyledBox>
  );
}
