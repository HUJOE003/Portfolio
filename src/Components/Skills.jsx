import logo1 from './pics/java.png'
import logo2 from './pics/download (3).png'
import logo3 from './pics/download.jpg'
import logo4 from './pics/download (9).png'
import logo5 from './pics/images.png'
import logo6 from './pics/download (6).png'
import logo7 from './pics/download (7).png'
import logo8 from './pics/GitHub-Mark.png'
import logo9 from './pics/Splunk-Logo.jpg'
import logo10 from './pics/linux.png'

import { useTypewriter, Cursor } from "react-simple-typewriter"



function Skills() {

  const [data] = useTypewriter({
    words: ['Front-End (HTML, CSS, Javascript)', 'Back-End  (Node.js)', 'Programming Languages(Python, Java, C)', 'GitHub', 'Tools: Git, OpenAI Assistants, Planet Scale, Supabase, AWS, Clerk, Vercel, Upstash, Figma, Photoshop'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100
  });
  return (
    <>


      <section className="skills" id="skills" >
        <br></br>
        <div><p style={{ color: "black", fontWeight: "750", fontSize: "29px", marginLeft: "55px" }}>What I Do</p></div>
        <p style={{ fontWeight: "750", fontSize: "25px", marginLeft: "55px", color: "#5345B4", textTransform: "uppercase" }}>
          skills</p>


        <div className=" container d-flex justify-content-center flex-wrap  p-5" style={{ marginTop: " -60px"}}>
          <div className="content" style={{ fontWeight: "700"}}>


            <div className="container">
              <h2 className="text first-text" style={{ color: "black", marginRight: "2px" }}>I'm am Proficient in
                <span className="ml-2" style={{ fontWeight: "bold", color: "#ff8c00" , marginLeft:"10px"}} >{data}
                </span>
                <span>
                  <Cursor cursorColor='black' />
                </span>
              </h2>
            </div>
            <div className="famebtn">
              <button className="fame align-items-center" style={{ marginLeft: "10px" }}>
                I ENJOY
                <span className="famesp ">MAKING THINGS FUN.</span>
              </button>
            </div>
            <div className="skillsparagh" style={{ backgroundColor: "rgba(230,215,255, 0.424)", padding: "15px", marginTop: "20px", color: "rgb(0, 0, 0)", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sansSerif" ,fontSize:"20px",fontWeight: "500"}}>
            <span style={{fontWeight: "bold"}}>TECHNICAL SKILLS:<br></br></span>
            <br />
            <span style={{fontWeight: "bold"}}>Languages:</span> Java, Python, C, C++, SQL, JavaScript, HTML/CSS, ARM Assembly<br></br>
            <span style={{fontWeight: "bold"}}>Frameworks:</span> React.js, Next.js, Node.js, Express.js, Angular.js, .NET, Bootstrap, Tailwind, WordPress Developer<br></br>
             <span style={{fontWeight: "bold"}}>Tools: </span>Git, OpenAI Assistants, Planet Scale, Supabase, AWS, Clerk, Vercel, Upstash, Figma, Photoshop
            </div>
            <br></br>
          </div>




          {/* <table className="text-center p-2">
            <tbody>
              <tr>
                <td> <img src={logo1} width="95vw" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill"> </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td> <img src={logo2} width="95px" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill2"> </div>
                  </div>
                </td>
              </tr>


              <tr>
                <td> <img src={logo3} width="95px" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill3"> </div>
                  </div>
                </td>
              </tr>


              <tr>
                <td> <img src={logo4} width="95px" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill4"> </div>
                  </div>
                </td>
              </tr>


              <tr>
                <td> <img src={logo5} width="55vw" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill5"> </div>
                  </div>
                </td>
              </tr>


              <tr>
                <td> <img src={logo6} width="95px" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill6"> </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td> <img src={logo7} width="95px" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill7"> </div>
                  </div>
                </td>

              </tr>
              <tr>
                <td> <img src={logo8} width="60vw" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill8"> </div>
                  </div>
                </td>

              </tr>
              <tr>
                <td> <img src={logo9} width="85px" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill9"> </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td> <img src={logo10} width="100px" alt="pic" /></td>
                <td>
                  <div className="skill-top d-flex align-items-center">
                    <div className="skill10"> </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </section>

    </>
  )
}
export default Skills;