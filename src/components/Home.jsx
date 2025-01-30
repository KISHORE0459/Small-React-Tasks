import { Link } from "react-router";
import "../styles/home.css";

const Home = () => {
  return (
    <div id="container">
      <h2 id="title">React Small Tasks</h2>
      <div id="projects-list">
        <div className="project-ctn">
          <Link to={"/pack-things"}>Item Pacing Project</Link>
        </div>
        <div className="project-ctn">
          <Link to={"/QuizCardFlipper"}>Quiz With Flippers</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
