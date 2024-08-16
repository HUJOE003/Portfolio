
import '../App.css';
import Logo from '../Components/pics/logoname2.jpg';
import Logo2 from '../Components/pics/1.png'
import Logo3 from '../Components/pics/2.png'
function Navbar(){
    return(
        <>
        <section className="topnav">
    <nav className="navbar navbar-dark bg-transparent fixed-top  ">
      <div className="container-fluid">

        <img src={Logo3} style={{height: "90px", width: "90px"}} className="logo"/>
        <button className="navbar-toggler bg-dark shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h3 className="offcanvas-title" id="offcanvasDarkNavbarLabel">HI <span
                style={{color: "rgb(225, 89, 59)"}}>THERE!</span></h3>


            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active text-white navbtn" style={{width: "1000"}} aria-current="page" href=".">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white navbtn" href="#skills">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white navbtn" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white navbtn" href="#testimonial">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white navbtn" href="#contact">Contact Me</a>
              </li>

            </ul>
            
            
          </div>
        </div>
      </div>
    </nav>

  </section>
        </>
    )
}
export default Navbar;