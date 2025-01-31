import { Route, Routes } from "react-router";
import Navbar from "./components/global/Navbar";
import About from "./pages/About";
import Footer from "./components/global/Footer";
import ForStudents from "./pages/ForStudents";
import Media from "./pages/Media";
import ExternalRelations from "./pages/ExternalRelations";
import Blog from "./pages/Blog";
import NationalEvents from "./pages/NationalEvents";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import EsnAzerbaijan from "./pages/EsnAzerbaijan";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path='/esn-azerbaijan' element={<EsnAzerbaijan/>}/>
        <Route path="/forStudents" element={<ForStudents />} />
        <Route path="/media" element={<Media />} />
        <Route path="/externalRelations" element={<ExternalRelations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nationalEvents" element={<NationalEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
