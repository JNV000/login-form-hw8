import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders with the correct label, placeholder, and id", () => {
    render(<Input label="label" />);

    // Act
    const input = screen.getByLabelText("label");

    // Assert
    expect(input).toBeInTheDocument();
  });
});
