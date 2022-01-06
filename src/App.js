import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./home.scss";
function App() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="text-content">
          <h1 className="heading">So, you want to travel to</h1>
          <h2 className="heading__big font-light">Space</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <h1 className="font-light">
            <Link to="/">Explore</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
