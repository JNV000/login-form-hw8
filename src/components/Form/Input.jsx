import PropTypes from "prop-types";
import { useState } from "react";

export default function Input({ type, label }) {
  // hook/useState to update inputs value
  const [userInput, setInput] = useState("");
  // decided not too make a seperate file for the hook

  return (
    <div className="mt-4 flex flex-col">
      <label
        className="sr-only mb-2 text-lg font-semibold text-gray-700"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="rounded border py-2 px-3 text-gray-700"
        type={type}
        id={label}
        placeholder={label}
        value={userInput}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(["email", "password", "text"]),
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: "text",
};
