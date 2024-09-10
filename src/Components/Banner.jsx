import "../App.css"
import resume from '../Components/pics/resumepic.jpg'
import pic from '../Components/pics/Subject 2.png'
import pic2 from '../Components/pics/IMG_0774.jpeg'
import resumepdf from '../Components/pics/Resume (Hujoe Pandi Selvan)  copy.pdf'
function Banner(){
  
    return(
        <>
       <section className="bannersection">
    <div className=" container d-flex justify-content-around flex-wrap-reverse align-items-center  p-4">
      <div id="hero">
        <span className="pb-3 text-light"style={{color: "white", fontSize:"25px"}}>HI THERE! I'M</span> <br></br><span className="pb-3 text-light" style={{color: "white", fontWeight:"800",fontSize:"40px",marginTop:"-40px"}}><span style={{color:"orange"}}>HUJOE</span> PANDI SELVAN</span>
        <div className="abutton1"><a href="https://drive.google.com/file/d/17Tf2gM9Qz5h3sJ8UPuHAZxKpqbm3zqGX/view?usp=sharing"  rel="noreferrer" id="download_btn" target="_blank"  className="btn btn-dark text-black abutton pb-2" style={{ fontWeight:"800"}}>View Resume</a></div>
      </div>

      <div className="img-container">
        <img className="hujoe"
          src={pic2}
          style={{height: "350px", width: "350px"}} alt="pic"/>
      </div>

    </div>

  </section>
        </>
    )
}
export default Banner;
