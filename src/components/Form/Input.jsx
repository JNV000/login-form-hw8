import PropTypes from "prop-types";

export default function Input({ type, label }) {
  // technically this is already uncontrolled
  // we can make refs
  // const inputRef = useRef(); // we don't need to though

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
        // ref={inputRef}
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
