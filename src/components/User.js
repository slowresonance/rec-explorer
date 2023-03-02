import React from "react";

const getImgSrc = (id) => {
  console.log(id);
  return `https://raw.githubusercontent.com/mohanvpatta/movie-posters/main/${id}-0.jpg`;
};

const User = () => {
  const user = {
    id: "1",
    movies: [
      {
        id: "1",
        src: "",
      },
      {
        id: "2",
        src: "",
      },
      {
        id: "3",
        src: "",
      },
      {
        id: "4",
        src: "",
      },
      {
        id: "12",
        src: "",
      },
      {
        id: "6",
        src: "",
      },
      {
        id: "7",
        src: "",
      },
      {
        id: "8",
        src: "",
      },
      {
        id: "9",
        src: "",
      },
    ],
  };
  const { id, movies } = user;
  return (
    <>
      <div className="header">{id}</div>
      <div className="body movies">
        {movies.map((movie, i) => (
          <div className="poster action" key={i}>
            <img src={getImgSrc(movie.id)} alt={user.id} />
          </div>
        ))}
      </div>
      <div className="footer action">Watchlist</div>
    </>
  );
};

export default User;
