import React from "react";
import HeroSection from "../../components/Projects_page_components/HeroSection";
import ContentSection from "../../components/Projects_page_components/ContentSection.jsx";
import "../../assets/style/Project.css";
import Navbar from "../../components/global/Navbar.jsx"



function Project3App() {
  return (
    <div className="Project">
      <Navbar />
      <HeroSection
        imageAdress1="https://esn.az/sites/default/files/news/galleries/jj-272_1.jpg"
        imageAdress2="https://esn.az/sites/default/files/news/images/untitled_design.png"
      />
      <h2 className="projectName">
        Youth Workers Exchange Program Between Azerbaijan and Georgia
      </h2>
      <ContentSection
        title="Youth Workers Exchange Program"
        information="With the support of the Azerbaijan Youth Foundation, in partnership with ESN Georgia, ESN Azerbaijan organized a youth workers exchange program named Strengthening Relations between Youth Workers of Azerbaijan and Georgia.
  
          The project's primary goal is to enhance the relationship between youth organizations in Azerbaijan and Georgia, facilitating dialogue and exchange of experience between youth organizations in both countries.
          
          In the initial stage of the project, 25 selected youth workers participated in a training program covering topics such as youth policy, intercultural dialogue, effective leadership, and international representation. 
          
          Five youth workers were selected among all the participants based on their performance to participate in the 3-day study visit to Tbilisi, Georgia."
        imageSource="https://esn.az/sites/default/files/news/galleries/jj-119_1.jpg"
        description="Seminar on Youth Workers"
      />
      <ContentSection
        title="In Project"
        information="During the visit, participants engaged in meetings with several public institutions, youth organizations, and NGOs such as the Tbilisi City Council, National Youth Agency, National Erasmus+ Office, Student Union of Tbilisi State University, Association of Georgian Student Organizations, ESN Georgia, ELSA Georgia, and the Droni Youth Organization in Georgia. 
  
          They conducted mutual discussions and delivered presentations about their respective activities. Furthermore, Azerbaijani youth workers expressed their insights about youth opportunities in Azerbaijan and shared the best practices of represented youth organizations with their Georgian counterparts."
        imageSource="https://esn.az/sites/default/files/news/galleries/jj-72_1.jpg"
        description="During the project"
      />
      <ContentSection
        title="In the end"
        information="On the final day of the study trip, the project participants delivered a presentation to Georgia's youth sector representatives. The presentation focused on the opportunities for young people in Azerbaijan and the activities of youth organizations. Key topics included the importance of national youth strategy, the role of young people in shaping youth policy, the positive social impact of youth organizations, and various opportunities for young individuals."
        imageSource="https://esn.az/sites/default/files/news/galleries/jj-72_1.jpg"
        description="End Sentence"
      />

    </div>
  );
}

export default Project3App;
