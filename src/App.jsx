import Form from "components/Form/Form";
import Header from "./components/Header";
import "./App.css";

const loginForm = {
  header: { title: "Login" },
  form: {
    inputs: [
      { id: 1, type: "email", label: "Email" },
      { id: 2, type: "password", label: "Password" },
    ],
    button: {
      txt: "Login",
    },
  },
};

function App() {
  return (
    <>
      {Header(loginForm.header)}
      {Form(loginForm.form)}
    </>
  );
}

export default App;
