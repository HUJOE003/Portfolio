function WebsiteProjects(props){

    return(
        <>
        <section class="Projects" id="projects">
    
        <div className="card m-2  border-1  " style={{width: "18rem", backgroundColor: "rgb(170,162,254)"}}>
        <img
          src={props.image}
          style={{height: "30vh"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title" >{props.title}</h5>
          <p className="text-dark" >{props.projecttext}

          </p>
          <a href={props.link} target="_blank"
            className="btn  btn-dark btn-outline-light" style={{marginLeft:"2px"}}>View Project</a>
            <a href={props.web} target="_blank"
            className="btn  btn-dark btn-outline-light" style={{marginLeft:"2px",marginTop:"4px"}}>View Website</a>
        </div>
      </div>
      </section>
        </>
    )

}

export default WebsiteProjects;