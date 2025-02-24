import React from "react";
import HeroSection from "../../components/Projects_page_components/HeroSection";
import ContentSection from "../../components/Projects_page_components/ContentSection.jsx";
import "../../assets/style/Project.css";
import Navbar from "../../components/global/Navbar.jsx"


function Project2App() {
  return (
    <div className="Project">
      <Navbar/>
      <HeroSection
        imageAdress1="https://esn.az/sites/default/files/news/galleries/jj-272_1.jpg"
        imageAdress2="https://esn.az/sites/default/files/news/images/isyop.jpg"
      />
      <h2 className="projectName">
        International Sustainable Youth Outreach Program (ISYOP)
      </h2>
      <ContentSection
        title="ISYOP"
        information="With the support of the Youth Foundation of the Republic of Azerbaijan Erasmus Student Network Azerbaijan implemented International Sustainable Youth Outreach Program (ISYOP) project  within Solidarity for a Green World Year 2024 on 12-15th October, 2024 in Baku, Azerbaijan.

        The 3-day program aimed at raising awareness among local and international youth on climate change and environmental sustainability, educate them on reducing carbon footprints, and support both personal and professional development."
        imageSource="https://esn.az/sites/default/files/news/galleries/jj-119_1.jpg"
        description="Seminar on Sustainable Youth"
      />
      <ContentSection
        title="In Project"
        information="During the project, participants got trained by local and international experts about the COP29 conference and its importance in climate action, climate change, carbon footprint, and greenhouse gas emissions reduction, as well as their impact on the environment. Additionally, they made a study visit to Təmiz Şəhər OJSC's facilities, the Azerbaijani company that works on improvement of ecological situation by organizing the placement and disposal of solid waste in accordance with up-to date standards..
        
        On the final day of the study trip, the project participants delivered a presentations focused on climate change solutions.
        
        A total of 30 young people from 8 different countries, including ESNers from Turkiye, Hungary, Poland, and Georgia joined the 3-day training program."
        imageSource="https://esn.az/sites/default/files/news/galleries/jj-72_1.jpg"
        description="Seminar on Sustainable Youth"
      />

    </div>
  );
}

export default Project2App;
