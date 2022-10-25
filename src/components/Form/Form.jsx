import PropTypes from "prop-types";
import Button from "../Button";
import Input from "./Input";

// function to render array of inputs
/*
function renderInputs(fields) {
  return fields.map((inputNum) => (
    <Input key={inputNum.id} label={inputNum.label} type={inputNum.type} />
  ));
}
*/

// Form function
// accepts and destructures props for input fields and the button
export default function Form({ inputs, button }) {
  // submit function for the form
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted"); // just to see if working
    // should probably add something to get input values
  }

  return (
    <form className="mx-auto mt-2 max-w-xs" onSubmit={handleSubmit}>
      {inputs.map((inputNum) => (
        <Input key={inputNum.id} label={inputNum.label} type={inputNum.type} />
      ))}
      {Button(button)}
    </form>
  );
}

Form.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  button: PropTypes.string.isRequired,
};
