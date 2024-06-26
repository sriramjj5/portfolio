import './NavBarComponent.css'
import { Link } from "react-router-dom"

function NavBarComponent() {

    return (
      <>
        <div className="header-links">
            <div className="socials">
              <a href="https://www.linkedin.com/in/sriram-jeyakumar-8693ab266/" target="_blank" rel="noopener noreferrer">
                <img className="socialsvg" src="/linkedin.svg" alt="linkedin" height="30" width="30"/>
              </a>
              <a href="https://www.github.com/sriramjj5/" target="_blank" rel="noopener noreferrer">
                <img className="socialsvg" src="/github.svg" alt="github" height="30" width="30"/>
              </a>
              <a href="mailto: sriramjj5@gmail.com">
                <img className="socialsvg" src="/email.svg" alt="email" height="30" width="30"/>
              </a>
              <a href="https://www.instagram.com/sriramjey/" target="_blank" rel="noopener noreferrer">
                <img className="socialsvg" src="/instagram.svg" alt="instagram" height="30" width="30"/>
              </a>
            </div>
            <div className="navigation">
              <Link to="/"><span className="link">Home</span></Link> 
              <span className="sep"> | </span> 
              <Link to="/experience"><span className="link">Experience</span></Link> 
              <span className="sep"> | </span> 
              <Link to="/projects"><span className="link">Projects</span></Link>
              <span className="sep"> | </span> 
              <Link to="/academic"><span className="link">Academic</span></Link> 
              <span className="sep"> | </span> 
              <Link to="/misc"><span className="link">Misc.</span></Link>
            </div>
        </div>
      </>
    )
  }
  
export default NavBarComponent
  