import React from "react";
import HeroSection from "../../components/Projects_page_components/HeroSection";
import ContentSection from "../../components/Projects_page_components/ContentSection.jsx";
import "../../assets/style/Project.css";
import Navbar from "../../components/global/Navbar.jsx"


function Project4App() {
  return (
    <div className="Project">
      <Navbar />
      <HeroSection
        imageAdress1="https://esn.az/sites/default/files/news/galleries/jj-272_1.jpg"
        imageAdress2="https://esn.az/sites/default/files/news/images/rectangle_3.png"
      />
      <h2 className="projectName">
        Youth Workers Exchange Program Between Azerbaijan and Georgia
      </h2>
      <ContentSection
        title="Youth Workers Exchange Program"
        information="As we celebrate this year's Erasmus Days, we are delighted to announce the release of Erasmus: A Complete Guide e-book. This comprehensive resource serves as a valuable companion for students embarking on an Erasmus+ journey, and its launch is a testament to the enduring spirit of international education and cultural exchange. It exemplifies the heart of Erasmus Days, a celebration of unity, diversity, and the transformative power of international education.
  
          For many, studying abroad with the Erasmus+ programme is an adventure of a lifetime. It's not just an academic journey; it's a transformational experience that touches every aspect of your life. Whether an aspiring student or already on an Erasmus+ exchange, Erasmus: A Complete Guide is the helping hand through every step of this remarkable journey for its reader.
          
          As an individual contemplates the idea of embarking on an exchange, the guide begins by exploring the question: Why choose Erasmus? It elucidates the myriad benefits, from personal growth and intercultural understanding to skill development, that come with this opportunity. But the Guide does not stop at theory; it comes alive with testimonials from the Erasmus+ alums and ESN volunteers. Their stories provide a tangible glimpse into the adventures and challenges that await the person.
          Five youth workers were selected among all the participants based on their performance to participate in the 3-day study visit to Tbilisi, Georgia."
        imageSource="https://image.isu.pub/240205193528-148e612715ba21a12b85ee79d45901f3/jpg/page_1_thumb_large.jpg"
        description="Seminar on Youth Workers"
      />
      <ContentSection
        title="In Project"
        information="Moreover, the guidebook delves into the nitty-gritty aspects of an Erasmus+ exchange, offering guidance on the credit recognition, important documents, insurance, and more. This practical advice aims for better preparation for the administrative and logistical aspects of a student's journey. Packing for a long-term stay can be daunting, but the Guide offers insights into what to bring, what to leave behind, and how to prepare effectively. Accommodation, a pivotal element of the experience, is discussed in detail, providing strategies for finding and choosing the right place to call home during an exchange.
  
          The Erasmus Student Network (ESN) is a lifeline for many students. The e-book highlights how ESN, particularly through the Buddy System, can make the transition into a new culture smoother and help forge valuable friendships. The initial days of an exchange are pivotal. The Guide offers tips on making new friends, exploring the host country, language learning, cultural immersion, typical activities, maintaining relationships during and after the exchange, making the most out of the skills gained during the time spent abroad and translating them into future career opportunities, and much more, giving practical advice for all aspects through fun and interactive illustrations."
        imageSource="https://esn.az/sites/default/files/news/galleries/jj-72_1.jpg"
        description="During the project"
      />
      <ContentSection
        title="In the end"
        information="Erasmus: A Complete Guide is designed to be a friendly companion, a go-to resource whether contemplating the idea of an Erasmus+ exchange or already immersed in one. It offers a cohesive and comprehensive view of an entire mobility journey from start to finish. So, whether taking the first step or approaching the grand finale, trust this book's guidance to make the most of an Erasmus+ adventure."
        imageSource="https://esn.az/sites/default/files/news/galleries/jj-72_1.jpg"
        description="End Sentence"
      />

    </div>
  );
}

export default Project4App;
