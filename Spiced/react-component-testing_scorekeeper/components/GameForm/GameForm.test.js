import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const descriptionInput = screen.getByRole("textbox", {
    name: /description/i,
  });
  const submitButton = screen.getByRole("button", { name: /create/i });

  expect(nameInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  const form = screen.getByRole("form");

  expect(form).toHaveAccessibleName("Create a new game");
});

test("submits the correct form data when every field is filled out", async () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const descriptionInput = screen.getByRole("textbox", {
    name: /description/i,
  });
  const submitButton = screen.getByRole("button", { name: /create/i });

  await userEvent.type(nameInput, "Test Game");
  await userEvent.type(descriptionInput, "This is a test description");
  await userEvent.click(submitButton);

  expect(onCreateGame).toHaveBeenCalledWith({
    name: "Test Game",
    description: "This is a test description",
  });
});

test("does not submit form if one input field is left empty", async () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const submitButton = screen.getByRole("button", { name: /create/i });

  await userEvent.type(nameInput, "Test Game");
  await userEvent.click(submitButton);

  expect(onCreateGame).not.toHaveBeenCalled();
});
