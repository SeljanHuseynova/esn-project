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
import BoardMembers from "./pages/BoardMembers";
import BoardMembersSupporter from "./pages/BoardMembersSupporter";
import NationalAssembly from "./pages/NationalAssembly";
import EsnAdaBaku from "./pages/EsnAdaBaku";
import HowToBecomeASection from "./pages/HowToBecomeASection";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path='/esn-azerbaijan' element={<EsnAzerbaijan/>}/>
        <Route path='/board-members' element={<BoardMembers/>}/>
        <Route path='/board-members-supporter' element={<BoardMembersSupporter/>}/>
        <Route path='/national-assembly' element={<NationalAssembly/>}/>
        <Route path='/esn-ada-baku' element={<EsnAdaBaku/>}/>
        <Route path='/how-to-become-a-section' element={<HowToBecomeASection/>}/>
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
