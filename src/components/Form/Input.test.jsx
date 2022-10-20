import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders with the correct label, placeholder, and id and is of type text", () => {
    render(<Input label="label" />);

    // Act
    const input = screen.getByLabelText("label");

    // Assert
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders with the correct type", () => {
    render(<Input label="label" type="email" />);

    // Act
    const input = screen.getByLabelText("label");

    // Assert
    expect(input).toHaveAttribute("type", "email");
  });
});
