import { useContext } from "react";
import SignupForm from "../components/SignupForm";
import { GlobalContext } from "../GlobalState/GlobalContext";

const Signup = () => {
  const context = useContext(GlobalContext);
  const { signup } = context;

  return;
  <SignupForm />;
};

export default Signup;
