import React from "react";

const Movie = () => {
  const movie = {
    name: "Django Unchained",
    id: "1",
    genres: ["Western", "Drama", "Thriller"],
    Cast: [
      "Jamie Foxx",
      "Christoph Waltz",
      "Leonardo DiCaprio",
      "Kerry Washington",
      "Samuel L. Jackson",
      "Walton Goggins",
      "Dennis Christopher",
    ],
  };
  const { name, genres, Cast } = movie;
  return (
    <>
      <div className="header">Selected Movie</div>
      <div className="body">
        <div className="poster">
          <img src="" alt="" />
        </div>
        <div className="title">{name}</div>
        <div className="label">Genres</div>
        <ol className="genres">
          {genres.map((genre, i) => (
            <li className="genre" key={i}>
              {genre}
            </li>
          ))}
        </ol>
        <div className="label">Cast</div>
        <ol className="cast">
          {Cast.map((actor, i) => (
            <li className="actor" key={i}>
              {actor}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Movie;
