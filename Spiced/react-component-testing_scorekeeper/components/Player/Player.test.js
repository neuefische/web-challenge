import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  const playerName = "John";
  const playerScore = 10;
  const increaseScore = jest.fn();
  const decreaseScore = jest.fn();

  render(
    <Player
      name={playerName}
      score={playerScore}
      increaseScore={increaseScore}
      decreaseScore={decreaseScore}
    />
  );

  const nameElement = screen.getByText(playerName);
  const scoreElement = screen.getByText(playerScore.toString());
  const increaseButton = screen.getByRole("button", { name: /increase/i });
  const decreaseButton = screen.getByRole("button", { name: /decrease/i });

  expect(nameElement).toBeInTheDocument();
  expect(scoreElement).toBeInTheDocument();
  expect(increaseButton).toBeInTheDocument();
  expect(decreaseButton).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
  const playerName = "John";
  const playerScore = 10;
  const increaseScore = jest.fn();
  const decreaseScore = jest.fn();

  render(
    <Player
      name={playerName}
      score={playerScore}
      increaseScore={increaseScore}
      decreaseScore={decreaseScore}
    />
  );

  const increaseButton = screen.getByRole("button", { name: /increase/i });
  const decreaseButton = screen.getByRole("button", { name: /decrease/i });

  await userEvent.click(increaseButton);
  expect(increaseScore).toHaveBeenCalledTimes(1);

  await userEvent.click(decreaseButton);
  expect(decreaseScore).toHaveBeenCalledTimes(1);
});
