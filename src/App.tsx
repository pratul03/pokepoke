import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BackGround from "./components/BackGround";
import About from "./pages/About";
import Compare from "./pages/Compare";
import MyList from "./pages/MyList";
import Pokemon from "./pages/Pokemon";
import Search from "./pages/Search";
import "./scss/index.scss";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";

function App() {
  return (
    <div className="main-container">
      <BackGround />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon" />
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
