import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input label="Username" name="username" placeholder="Enter your username" />
  );

  const input = screen.getByRole("textbox", { name: /username/i });

  expect(input).toHaveAttribute("placeholder", "Enter your username");
  expect(input).toHaveAttribute("name", "username");

  const label = screen.getByText(/username/i);
  expect(label).toBeInTheDocument();
  expect(label).toHaveAttribute("for", "username");
});

test("calls callback on every user input", async () => {
  const mockOnChange = jest.fn();
  render(<Input label="Username" name="username" onChange={mockOnChange} />);

  const input = screen.getByRole("textbox", { name: /username/i });
  await userEvent.type(input, "test");

  expect(mockOnChange).toHaveBeenCalledTimes(4);
});
