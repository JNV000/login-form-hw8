import PropTypes from "prop-types";

export default function Input({ type, label }) {
  return (
    <div className="mt-4 flex flex-col">
      <label
        className="sr-only mb-2 text-lg font-semibold text-gray-700"
        htmlFor={type}
      >
        {label}
      </label>
      <input
        className="rounded border py-2 px-3 text-gray-700"
        type={type}
        id={type}
        placeholder={label}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
