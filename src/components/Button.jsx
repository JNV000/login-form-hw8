import PropTypes from "prop-types";

export default function Button({ txt }) {
  return (
    <button
      type="submit"
      className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  // type: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};
