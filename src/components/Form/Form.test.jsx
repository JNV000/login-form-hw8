import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("renders the correct number of inputs", () => {
    const fields = [
      { label: "email", type: "email" },
      { label: "password", type: "password" },
    ];

    render(<Form inputs={fields} button="ok" />);

    const emailInput = screen.getByLabelText("email");
    const passInput = screen.getByLabelText("password");

    expect(emailInput).toBeInTheDocument();
    expect(passInput).toBeInTheDocument();
  });
});
