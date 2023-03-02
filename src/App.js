import "./styles/styles.css";
import "./fonts/font.css";
import Pane from "./components/Pane";
import User from "./components/User";
import Movie from "./components/Movie";
import Thumbnails from "./components/Thumbnails";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  return (
    <div id="app">
      <div id="top">
        <div className="left">
          <Pane>
            <User />
          </Pane>
          <Pane>
            <User />
          </Pane>
        </div>
        <div className="right">
          <Pane>
            <Movie />
          </Pane>
          <Pane>
            <Thumbnails />
          </Pane>
        </div>
      </div>
      <div id="bottom">
        <div className="left">
          <div className="item action">Search a movie</div>
          <div className="item action">Demo</div>
        </div>
        <div className="right">
          <div className="item action">Info</div>
        </div>
      </div>
    </div>
  );
}

export default App;
