import PropTypes from "prop-types";

function Header({ title }) {
  return <h1 className="my-4 text-center text-3xl font-semibold">{title}</h1>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
