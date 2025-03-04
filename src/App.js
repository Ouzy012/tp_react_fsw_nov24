import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router";
import "./App.css";
import Footer from "./component/layouts/footer/Footer";
import Nav from "./component/layouts/nav/Nav";
import Home from "./pages/Home";
import AddArticle from "./pages/article/AddArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rediger-article" element={<AddArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
