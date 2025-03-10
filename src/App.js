import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Footer from "./component/layouts/footer/Footer";
import Nav from "./component/layouts/nav/Nav";
import Home from "./pages/Home";
import AddArticle from "./pages/article/AddArticle";
import GetArticle from "./pages/article/getArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rediger-article" element={<AddArticle />} />
        <Route path="/lire-article/:id" element={<GetArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
