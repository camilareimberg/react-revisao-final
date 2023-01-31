import { BASE_URL } from "../constants/url";
import { GlobalContext } from "./GlobalContext";
import axios from "react";

const GlobalState = ({ children }) => {
  const signup = (body) => {
    axios
      .post(`${BASE_URL}/user/signup`, body)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    const data = {
      signup
    };
  };

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export default GlobalState;
