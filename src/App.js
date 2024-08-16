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
   <ProjectCard title="Timber Tales" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS506be18ZpFkmVpHlGsg5jsGcFmbIPyDlqKv3OyqmbNaUX6Hjkn3_b-zNDLHzE9IxSKNI&usqp=CAU" projecttext="Project Developing a Game Utilizing A* Search, DFS, BFS Algorithms and OOPS concept. In
            this game, a lumberjack seeks the shortest route to fell trees and transport the wood to houses, while
            fairies journey to the felled areas to plant saplings. These saplings flourish into trees with captivating
            animations and effects" link="https://github.com/Hujoe-Pandi-Selvan/TimberTales"/>
   <ProjectCard title="GreenHouse Gas Emission" image="https://images.unsplash.com/photo-1524316258794-08104ccf1e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW5ob3VzZSUyMGdhcyUyMGVtaXNzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" projecttext="Project Using Object-oriented design principles to (1) model some data about global
            greenhouse gas emissions (obtained from the Emissions Database for Global Atmospheric Research), and (2)
            used the resulting classes to help answer some research questions about greenhouse gas emissions."link="https://github.com/Hujoe-Pandi-Selvan/GreenHouse-Gas-Emission"/>
   <ProjectCard title="A* Pathing Strategy" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVvKOQ3l_KELUMVkyck5sQKh_YNG2i-ul3Q&usqp=CAU" projecttext="Project developing a code for A* Pathing Algorithm" link="https://github.com/Hujoe-Pandi-Selvan/AStar-Pathing-Strategy"/>
   <ProjectCard title="Huffman Coding" image="https://www.huffmancoding.com/wp-content/uploads/2012/02/coding5.png" projecttext="Project on Huffman Coding" link="https://github.com/Hujoe-Pandi-Selvan/Huffman-Coding"/>
   <ProjectCard title="DragoQuest BFS & DFS" image="https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Dragon_Quest_1_Remake_screenshot.png/220px-Dragon_Quest_1_Remake_screenshot.png" projecttext="This project utilizes a 2D grid structure with a dragon to implement both Breadth First
            Search and Depth First Search."link="https://github.com/Hujoe-Pandi-Selvan/DragoQuest-BFS-DFS"/>
    <ProjectCard title="Charger-Surfing: Exploiting a Power Line Side-Channel for Smartphone Information Leakage" image="https://d3i71xaburhd42.cloudfront.net/a219e57d2fe8b89a0c588a538595a3351c32b59f/12-Figure14-1.png" 
    projecttext="Working with professor Stephan Beard on this project to hack open a mobile device through the voltage 
    change observed by the connected charger. For more info click the link" link="https://www.usenix.org/conference/usenixsecurity21/presentation/cronin"/>
   <ProjectCard title="Astromech Project" image="https://rukminim2.flixcart.com/image/850/1000/action-figure/a/n/q/star-wars-interactive-r2d2-astromech-droid-robot-hasbro-original-imaeqqvpcabmg97t.jpeg?q=90" projecttext="helped with brainstorming ideas while building the droid" link="https://www.calpolyrobotics.org/astromech#:~:text=Astromech%20—%20Cal%20Poly%20Robotics%20Club&text=The%20Astromech%20project%20is%20focused,to%20make%20a%20cool%20robot!"/>
   <WebsiteProjects title="Tour Website" image="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80" projecttext=" Created a Tour wesite using HTML, CSS, Javascript, React.js, Node.js"link="https://github.com/Hujoe-Pandi-Selvan/Tour-Website" web="https://hujoe-pandi-selvan.github.io/Tour-Website/"/>
   <ProjectCard title="Ecommerce Website-(WORK IN PROGRESS)" image={luffy}projecttext="Created a Ecommerce wesite using HTML, CSS, Javascript, React.js, Node.js for my own brand called Animex"link="#"/>
   
   </div>
   </section>
   <Testimonial/>
   <Contact/>
   <Footer/>
   </>
  );
}


    
export default App;
