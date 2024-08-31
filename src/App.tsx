import BackGround from "./components/BackGround";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";
import "./scss/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <BackGround />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={""} path="/search" />
          </Routes>
          <Wrapper />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
