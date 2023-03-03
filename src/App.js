import "./styles/styles.css";
import "./fonts/font.css";
import Pane from "./components/Pane";
import User from "./components/User";
import Movie from "./components/Movie";
import Thumbnails from "./components/Thumbnails";
import Watchlist from "./components/Watchlist";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([201, 880]);
  const [usersData, setUsersData] = useState([
    { id: 0, ratings: [{}, {}, {}, {}, {}, {}, {}] },
    { id: 0, ratings: [{}, {}, {}, {}, {}, {}, {}] },
  ]);

  const [movie, setMovie] = useState(0);
  const [movieData, setMovieData] = useState({ id: 0 });

  const [watchlistId, setWatchlistId] = useState(-1);

  const getUsers = async (ids) => {
    const response = await fetch(
      `https://rec.cyclic.app/users?ids=${ids.join(",")}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
    return response;
  };

  useEffect(() => {
    getUsers(users).then((data) => {
      setUsersData(data);
    });
  }, [users]);

  const getMovie = async (id) => {
    const response = await fetch(`https://rec.cyclic.app/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
    return response;
  };

  useEffect(() => {
    if (movie === 0) return;
    getMovie(movie).then((data) => {
      setMovieData(data);
    });
  }, [movie]);

  const selectMovie = (id) => {
    console.log(id);
    setMovie(id);
  };

  const selectWatchlist = (id) => {
    console.log(id);
    setWatchlistId(id);
  };

  return (
    <div id="app">
      <div id="top">
        <div className="left">
          {usersData.map((user, i) => (
            <Pane key={i}>
              <User
                user={user}
                selectMovie={selectMovie}
                index={i}
                selectWatchlist={selectWatchlist}
              />
            </Pane>
          ))}
          {watchlistId !== -1 && (
            <Pane>
              <Watchlist
                user={usersData[watchlistId]}
                selectMovie={selectMovie}
                index={watchlistId}
              />
            </Pane>
          )}
        </div>
        <div className="right">
          <Pane>
            <Movie movie={movieData} />
          </Pane>
          <Pane>
            <Thumbnails movieid={movie} users={users} />
            {/* <Thumbnails movieid={56} users={users} /> */}
          </Pane>
        </div>
      </div>
      <div id="bottom">
        <div className="left">
          <div className="item action">Under Construction</div>
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
