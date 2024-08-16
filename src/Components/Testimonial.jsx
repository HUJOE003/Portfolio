import photo1 from '../Components/pics/Jordan.jpeg'
import photo2 from '../Components/pics/delaneycook.jpeg'
import photo3 from '../Components/pics/alex.jpeg'
function Testimonial(){
    return(
        <>
        
        
        <section className="testimonial text-light" id="testimonial">
          <br></br>
    <p style={{color: "rgb(255, 94, 0)", fontWeight: "750", fontSize: "29px", marginLeft: "55px"}}>Testimonials</p>
    <p style={{color: "white", fontWeight: "750", fontSize: "25px", marginLeft: "55px"}}>What They Say</p>

    <section className="gradient-custom">
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="text-center mb-4 pb-2">
              <i className="fas fa-quote-left fa-3x text-white"></i>
            </div>

            <div className="card">
              <div className="card-body px-4 py-5">
             
                {/* <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                 
                  <div className="carousel-indicators mb-0">
                    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
                    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="1" aria-label="Slide 1"></button>
                    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="2" aria-label="Slide 1"></button>
                  </div> */}
                  <div id="carouselDarkVariant" class="carousel slide carousel-dark" data-mdb-ride="carousel">
  <div class="carousel-indicators mb-0">
    <button
      type="button"
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
                  
                  <div className="carousel-inner pb-5">
                    
                    <div className="carousel-item active">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img src={photo1}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                height="150" />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                              <h4 className="mb-4">Jordan D'Acquisto - AV Student Manager</h4>
                              <p className="mb-0 pb-3">
                              Hujoe works very well as a team member and everyday puts in the effort to learn more. He is hard-working, respectful, and willing to take on new tasks.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    
                    <div className="carousel-item">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img src={photo2}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                height="150" />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                              <h4 className="mb-4">Delaney Cook - AV Student Manager</h4>
                              <p className="mb-0 pb-3">
                              As Hujoe’s student manager, I always appreciated his enthusiasm, ability to quickly learn new concepts and willingness to step up and help the team. He was always willing to take on an extra shift to help team members out. He also displayed a great willingness to learn through asking questions and taking initiative. From the time Hujoe was hired until the time I left ASI, he grew an incredible amount in the Audio/Visual position technically and personally.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  
                    <div className="carousel-item ">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img src={photo3}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                height="150" />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                              <h4 className="mb-4">Alex Elliott - AV Tech 2</h4>
                              <p className="mb-0 pb-3">
                                
Hujoe consistently shines as an exemplary team player, effortlessly integrating within our collaborative environment. With each passing day, Hujoe invests significant effort into expanding his knowledge base. He respects his peers and their willingness to embrace novel tasks further to contribute to their undeniable impact. Hujoe's ability to seamlessly meld these qualities together is a true inspiration and a driving force behind our collective success.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                
                  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                
              </div>
            </div>

            <div className="text-center mt-4 pt-2">
              <i className="fas fa-quote-right fa-3x text-white"></i>
            </div>
          </div>
        </div>
    </div>
    </div>  

        </section>
        
        </section>
        
        
        </>
    )
}
export default Testimonial;