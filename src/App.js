import './App.css';
import ProjectCard from './Components/ProjectCard';
import WebsiteProjects from './Components/WebsiteProjects';
import Navbar from './Components/Nabar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import luffy from './Components/pics/lufy.jpg'
function App() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <Skills/>
   <section class="Projects" id="projects">
    <br></br>
   <p style={{color: "white", fontWeight: "750", fontSize: "29px", marginLeft: "55px"}}>Portfolio</p>
    <p style={{color: "rgb(235,131,0)", fontWeight: "750", fontSize:" 25px", marginLeft: "55px "}}>Projects I Have Done</p>
   <div className="cards  d-flex flex-wrap justify-content-center ">
   <ProjectCard title="AI-Fitness-Coach" image="https://i.pinimg.com/originals/83/86/4b/83864b80969710388f357fc57b714240.jpg" projecttext="Developed an AI-powered virtual fitness coach, modeled after Rick from Rick & Morty, integrated into a mobile/desktop-friendly web application. The assistant is designed to enhance user motivation and ensure consistent workout attendance." link="https://github.com/HUJOE003/Exercise-AI-Coach"/>
   <ProjectCard title="Online-Chat-App" image="https://static.vecteezy.com/system/resources/previews/014/664/394/non_2x/chat-bot-symbol-and-logo-icon-vector.jpg" projecttext="Designed and implemented a modern Online Chat Website that enabled users to be connected to their peers with seamless communication and real time messaging."link="https://github.com/HUJOE003/Online-Chat-App"/>
   <ProjectCard title="Action Planner" image="https://static.vecteezy.com/system/resources/previews/021/040/389/non_2x/to-do-list-icon-vector.jpg" projecttext="Collaborated in a sprint-based team to develop a productivity app." link="https://github.com/SahilGoel05/COMPLEX_PANDAS"/>
   {/* <ProjectCard title="Huffman Coding" image="https://www.huffmancoding.com/wp-content/uploads/2012/02/coding5.png" projecttext="Project on Huffman Coding" link="https://github.com/Hujoe-Pandi-Selvan/Huffman-Coding"/> */}
   {/* <ProjectCard title="DragoQuest BFS & DFS" image="https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Dragon_Quest_1_Remake_screenshot.png/220px-Dragon_Quest_1_Remake_screenshot.png" projecttext="This project utilizes a 2D grid structure with a dragon to implement both Breadth First
            Search and Depth First Search."link="https://github.com/Hujoe-Pandi-Selvan/DragoQuest-BFS-DFS"/> */}
   {/* <WebsiteProjects title="Tour Website" image="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80" projecttext=" Created a Tour wesite using HTML, CSS, Javascript, React.js, Node.js"link="https://github.com/Hujoe-Pandi-Selvan/Tour-Website" web="https://hujoe-pandi-selvan.github.io/Tour-Website/"/>
   <ProjectCard title="Ecommerce Website-(WORK IN PROGRESS)" image={luffy}projecttext="Created a Ecommerce wesite using HTML, CSS, Javascript, React.js, Node.js for my own brand called Animex"link="#"/> */}
   
   </div>
   </section>
   <Testimonial/>
   <Contact/>
   <Footer/>
   </>
  );
}


    
export default App;
