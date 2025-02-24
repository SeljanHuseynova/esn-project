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
import ProjectCards from "./pages/ProjectCards";
import Project1App from "./pages/Project_Pages/Project1App";
import Project2App from "./pages/Project_Pages/Project2App";
import Project3App from "./pages/Project_Pages/Project3App";
import Project4App from "./pages/Project_Pages/Project4App";
import EsnAzerbaijan from "./pages/EsnAzerbaijan";
import BoardMembers from "./pages/BoardMembers";
import BoardMembersSupporter from "./pages/BoardMembersSupporter";
import NationalAssembly from "./pages/NationalAssembly";
import EsnAdaBaku from "./pages/EsnAdaBaku";
import HowToBecomeASection from "./pages/HowToBecomeASection";
import ExchangeAzAndGeorgia from "./pages/slide-pages/ExchangeAzAndGeorgia";
import Trust from "./pages/slide-pages/Trust";
import Isyop from "./pages/slide-pages/Isyop";
import Guide from "./pages/slide-pages/Guide";
import OrientationDay from "./pages/slide-pages/OrientationDay";
import ErasmusGenerationPortal from "./pages/forStudents/ErasmusGenerationPortal";
import EuropeanSolidartyCorps from "./pages/forStudents/EuropeanSolidartyCorps";
import GetYourMembershipCard from "./pages/forStudents/GetYourMembershipCard";
import HowToParticipate from "./pages/forStudents/HowToParticipate";
import JoinEsnAzerbaijan from "./pages/forStudents/JoinEsnAzerbaijan";
import StudyInAzerbaijan from "./pages/forStudents/StudyInAzerbaijan";
import SurvivalGuide from "./pages/forStudents/SurvivalGuide";
import News from "./pages/media/News";
import MediaKit from "./pages/media/MediaKit";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/esn-azerbaijan" element={<EsnAzerbaijan />} />
        <Route path="/board-members" element={<BoardMembers />} />
        <Route
          path="/board-members-supporter"
          element={<BoardMembersSupporter />}
        />
        <Route path="/project-cards" element = {<ProjectCards />}/>
        <Route path="/project1" element = {<Project1App />}/>
        <Route path="/project2" element = {<Project2App />} />
        <Route path="/project3" element = {<Project3App />} />
        <Route path="/project4" element = {<Project4App />} />
        <Route path="/national-assembly" element={<NationalAssembly />} />
        <Route path="/esn-ada-baku" element={<EsnAdaBaku />} />
        <Route
          path="/how-to-become-a-section"
          element={<HowToBecomeASection />}
        />
        <Route
          path="/youth-workers-exchange-program-between-azerbaijan-and-georgia"
          element={<ExchangeAzAndGeorgia />}
        />
        <Route
          path="/training-and-resources-universities-strengthen-transnational-partnerships-trust"
          element={<Trust />}
        />
        <Route path="/isyop" element={<Isyop />} />
        <Route
          path="/first-ever-edition-erasmus-complete-guide"
          element={<Guide />}
        />
        <Route
          path="/orientation-day-international-students-fall-2023-edition"
          element={<OrientationDay />}
        />
        <Route
          path="/erasmus-generation-portal"
          element={<ErasmusGenerationPortal />}
        />
        <Route
          path="/european-solidarity-corps"
          element={<EuropeanSolidartyCorps />}
        />
        <Route
          path="/get-your-membership-card"
          element={<GetYourMembershipCard />}
        />
        <Route path="/external-relations" element={<ExternalRelations />} />
        <Route path="/how-participate-erasmus" element={<HowToParticipate />} />
        <Route path="/join-esn-azerbaijan" element={<JoinEsnAzerbaijan />} />
        <Route path="/study-azerbaijan" element={<StudyInAzerbaijan />} />
        <Route path="/survival-guide" element={<SurvivalGuide />} />
        <Route path="/news" element={<News />} />
        <Route path="/media-kit" element={<MediaKit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
