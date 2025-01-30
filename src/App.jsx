import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Itempacking from "./components/Itempacking";
import Home from "./components/Home";
import "./App.css";
import QuizCardFliper from "./components/QuizCardFliper";
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
            className="project-quiz"
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
