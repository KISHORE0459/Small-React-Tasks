import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Itempacking from "./components/Itempacking";
import Home from "./components/Home";
import "./App.css";
import QuizCardFliper from "./components/QuizCardFliper";
import TextExtender from "./components/TextExtender";
import Amazonapi from "./components/Amazonapi";
import Omdb from "./components/OMDB/Omdb";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pack-things"
            element={<Itempacking />}
            className="project-ctn"
          />
          <Route
            path="/QuizCardFlipper"
            element={<QuizCardFliper />}
            className="project-ctn"
          />
          <Route
            path="/TextExtender"
            element={<TextExtender />}
            className="project-ctn"
          />
          <Route
            path="/Amazonapi"
            element={<Amazonapi />}
            className="project-ctn"
          />
          <Route path="/Omdb" element={<Omdb />} className="project-ctn" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
