import { ST } from "next/dist/shared/lib/utils";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  background-color: blue;
  padding: 10px;
`;
const StyledH3 = styled.h1`
  -webkit-text-stroke: 2px black;
  font-family: sans;
  color: yellow;
  margin-top: 5px;
`;

const StyledP = styled.p`
  color: white;
`;

export default function Card() {
  return (
    <StyledDiv>
      <StyledH3>Homer Simpson</StyledH3>
      <StyledP>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </StyledP>
    </StyledDiv>
  );
}
