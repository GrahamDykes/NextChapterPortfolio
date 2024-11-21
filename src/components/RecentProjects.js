import "./RecentProjects.css";

const RecentProjects = () => {
  return (
    <div className="recentprojects">
      Recent Projects:
      <div className="projectdiv">
        <div className="project">
          TechNotes:
          <br></br>
          {/* <image className='projectimage'></image> */}
          <div className="projectimage"></div>
        </div>
        <div className="project">
          Best Project
          <br></br>
          {/* <image className='projectimage'></image> */}
          {/* <div className="projectimage"></div> */}
          <iframe width="560" height="349" src="https://www.youtube.com/embed/live_stream?channel=UC5oF2dPB0DcBAboAjFrlhoQ&autoplay=1" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="project">
          Admin Tools
          <br></br>
          {/* <image className='projectimage'></image> */}
          <div className="projectimage"></div>
        </div>
        <div className="project">
          Daily Tasks
          <br></br>
          {/* <image className='projectimage'></image> */}
          <div className="projectimage"></div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
