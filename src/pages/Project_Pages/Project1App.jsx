import React from "react";
import HeroSection from "../../components/Projects_page_components/HeroSection";
import ContentSection from "../../components/Projects_page_components/ContentSection.jsx";
import "../../assets/style/Project.css";
import Navbar from "../../components/global/Navbar.jsx"


function Project1App() {
  return (
    
    <div className="Project">
      <Navbar />
      <HeroSection
        imageAdress1="https://esn.az/sites/default/files/news/galleries/jj-130_1.jpg"
        imageAdress2="https://esn.az/sites/default/files/news/images/creartivity.jpg"
      />
      <h2 className="projectName">
        CreARTivity - Creative Youth Development Program
      </h2>
      <ContentSection
        title="CreARTivity"
        information="With the support of the Ministry of Youth and Sports of the Republic of Azerbaijan, Erasmus Student Network Azerbaijan implemented a project named CreARTivity - Creative Youth Development Program on 7-11 december 2024 in Baku, Azerbaijan.

      The 5-day training program empowered young creatives in photography, videography, and filmmaking, equipping them with the latest skills and knowledge. Led by international trainers from Turkey and Italy, along with local experts, participants gained both theoretical and practical experience. Furthermore, 26 youth from different backgrounds joined the project and enhanced their knowledge & skills in the creative fields.

      The program culminated in an exhibition competition where the top 3 creative works, including photoshoots and film/video clips, were showcased, and awarded."
        imageSource="https://esn.az/sites/default/files/news/galleries/jj-44_1.jpg"
        description="Seminar on creativity"
      />
      
    </div>
  );
}

export default Project1App;
