import React from 'react';
import './App.css';
import Navbar from './Components/Nabar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import ProjectCard from './Components/ProjectCard';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <hr
        style={{
          height: "2px",
          borderWidth: "0",
          backgroundColor: "gray",
          marginTop: "1rem",
          marginBottom: "-2rem",
        }}
      />
      <section id="projects" style={{ marginLeft: "9%" }}>
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <h3 className="section-subtitle">Projects I Have Done</h3>
          <div className="cards-wrapper">
            <ProjectCard
              title="AI-Fitness-Coach"
              image="https://i.pinimg.com/originals/83/86/4b/83864b80969710388f357fc57b714240.jpg"
              projectText="Developed an AI-powered virtual fitness coach, modeled after Rick from Rick & Morty, integrated into a mobile/desktop-friendly web app."
              link="https://github.com/HUJOE003/Exercise-AI-Coach"
            />
            <ProjectCard
              title="Online-Chat-App"
              image="https://static.vecteezy.com/system/resources/previews/014/664/394/non_2x/chat-bot-symbol-and-logo-icon-vector.jpg"
              projectText="Designed and implemented a modern online chat website with real-time messaging."
              link="https://github.com/HUJOE003/Online-Chat-App"
            />
            <ProjectCard
              title="Action Planner"
              image="https://static.vecteezy.com/system/resources/previews/021/040/389/non_2x/to-do-list-icon-vector.jpg"
              projectText="Collaborated in a sprint-based team to develop a productivity app."
              link="https://github.com/SahilGoel05/COMPLEX_PANDAS"
            />
            {/* <ProjectCard
              title="Sustainable Land Initiative"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bheZkt8D3a_jSIa9XoR5VV1nJe7GPdducQ&s"
              projectText="Project with CalPoly under Dr. Michael Haungs and Dr. Erin Pearse."
              link="https://github.com/mhaungs/farmshare"
            /> */}
            <ProjectCard
              title="AI Age & Gender Detector"
              image="https://www.willbhurd.com/wp-content/uploads/2023/01/DALL%C2%B7E-2024-01-07-08.01.49-An-eye-catching-and-informative-lead-image-for-a-blog-about-artificial-intelligence-for-beginners.-The-image-should-visually-represent-the-concept-of-.png"
              projectText="CNN-based model using TensorFlow/Keras to detect age and gender from facial images with OpenCV preprocessing."
              link="https://github.com/HUJOE003/AI-Gender-Age-Predictor"
            />
          </div>
        </div>
      </section>
      <Contact />
      
      <Footer />
    </>
  );
}

export default App;
