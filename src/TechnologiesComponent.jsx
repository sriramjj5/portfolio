import './TechnologiesComponent.css'

function TechnologiesComponent() {

    return (
      <>
        <div className="technology-svgs">
            {/* loose order is front-end -> back-end -> git-esque -> cloud -> misc*/}
          <div className="tooltip">
            <img className="techsvg" src="/react.svg" alt="React" height="32" width="32" />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/redux.svg" alt="Redux" height="32" width="32" />
            <span className="tooltiptext">Redux</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/typescript.svg" alt="TypeScript" height="32" width="32" />
            <span className="tooltiptext">TypeScript</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/node.svg" alt="Node.js" height="32" width="32" />
            <span className="tooltiptext">Node.js</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/python.svg" alt="Python" height="32" width="32" />
            <span className="tooltiptext">Python</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/java.svg" alt="Java" height="32" width="32" />
            <span className="tooltiptext">Java</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/cplusplus.svg" alt="C++" height="32" width="32" />
            <span className="tooltiptext">C++</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/linux.svg" alt="Linux" height="32" width="32" />
            <span className="tooltiptext">Linux</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/git.svg" alt="Git" height="32" width="32" />
            <span className="tooltiptext">Git</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/aws.svg" alt="AWS" height="32" width="32" />
            <span className="tooltiptext">AWS</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/google-cloud.svg" alt="Google Cloud" height="32" width="32" />
            <span className="tooltiptext">Google Cloud</span>
          </div>
          <div className="tooltip">
            <img className="techsvg" src="/figma.svg" alt="Figma" height="32" width="32" />
            <span className="tooltiptext">Figma</span>
          </div>
        </div>
      </>
    )
  }
  
export default TechnologiesComponent
  