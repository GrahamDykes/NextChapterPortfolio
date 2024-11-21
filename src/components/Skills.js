import "./Skills.css";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className="hireme">
        Hire me! We will produce awesome projects, and have fun doing it
      </div>
<br></br>
<br></br>

      <div className="skillsmain">Skills:
      <div className='skillscointainer'>
        
        
        <span className='devicons devicons-react' title='React'></span>
        <FaReact className='reacticon' />
        {/* react excaped html character            &#xe6ba              */}
        {/* <ion-icon className='reacticon' name="logo-react"></ion-icon> */}
        <span className='devicons devicons-mongodb' title='Mongo'></span>
        <span className='devicons devicons-nodejs_small' title='Node'></span>
        <span className='devicons devicons-github_badge' title='Github'></span>
        <span className='devicons devicons-javascript_badge' title='Javascript'></span>
        <span className='devicons devicons-bootstrap' title='Bootstrap'></span>
        <span className='devicons devicons-html5' title='HTML'></span>
        <span className='devicons devicons-css3' title='CSS'></span>
        
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h4>Written Out:</h4>
        <br></br>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Redux</li>
          <li>Github</li>
          <li>MongoDB</li>
          <li>Node</li>
          <li>Express</li>
        </ul>
      </div>
      <br></br>
      <br></br>
      </div>
    </>
  );
};

export default Skills;
