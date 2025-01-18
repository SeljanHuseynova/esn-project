import { Route, Routes } from "react-router";
import Navbar from "./components/global/Navbar";
import About from "./pages/About";
import Footer from "./components/global/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
