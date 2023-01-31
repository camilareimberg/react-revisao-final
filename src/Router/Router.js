import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../Pages/Create";
import Details from "../Pages/Details";
import Error from "../Pages/Error";
import Feed from "../Pages/Feed";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/receitas/detalhes" element={<Details />} />
        <Route path="/receitas/criar" element={<Create />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
