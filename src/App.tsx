import BackGround from "./components/BackGround";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";
import "./scss/index.scss";

function App() {
  return (
    <div className="main-container">
      <BackGround />
      <div className="app">
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  );
}

export default App;
