function Contact(){
    return(
        <>
        <hr style={{height:"2px",borderWidth:"1px",color:"gray",backgroundColor:"gray"}}></hr>
        <section class="mb-4 contact p-5" id="contact">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4 text-light">Contact Me</h2>

    <p class="text-center w-responsive mx-auto mb-5 text-light">Feel Free To Send Me A Message!</p>

    <div class="row">

  
      <div class="col-md-9 mb-md-0 mb-5 contact">
        <form id="contact-form"  action="https://formspree.io/f/mknljlyj "  method="POST" >

        
          <div class="row">

            
            <div class="col-md-6">
              <div class="md-form mb-0">
                <label for="name" class="text-light m-2">Your name</label>
                <input type="text" id="name" name="username" class="form-control"/>

              </div>
            </div>
         

        
            <div class="col-md-6">
              <div class="md-form mb-0">
                <label for="email" class="text-light m-2">Your email</label>
                <input type="text" id="email" name="email" class="form-control"/>

              </div>
            </div>
           

          </div>

          <div class="row">

            
            <div class="col-md-12">

              <div class="md-form">
                <label for="message" class="text-white m-2">Your message</label>
                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"
                  width="400px"></textarea>

              </div>

            </div>
          </div>
         
       
        <div class="text-center text-md-left pt-4">
          <button type="submit" class="btn btn-primary">send</button>

        </div>

      </form>
      </div>
      </div>

  </section>
        
        
        
        
        </>
    )
}
export default Contact;