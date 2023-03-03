import React, { useEffect } from "react";
import { useState } from "react";

const getImgSrc = (id) => {
  return `https://raw.githubusercontent.com/mohanvpatta/movie-posters/main/${id}-0.jpg`;
};

const Movie = ({ movie }) => {
  const [data, setData] = useState({
    title: "",
    genres: [],
    actors: [],
  });

  const { title, genres, actors } = data;

  const API_KEY = "7a1009b4e49581207130211394ef3d89";

  useEffect(() => {
    if (movie.tmdb_id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie.tmdb_id}?api_key=${API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          setData({
            title: movie.title,
            genres: data.genres.map((genre) => genre.name),
            actors: movie.actors,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [movie]);

  const empty = movie.id === 0;

  return (
    <>
      {!empty && (
        <>
          <div className="header">Selected Movie</div>
          <div className="body">
            <div className="poster">
              <img
                loading="lazy"
                decoding="async"
                src={getImgSrc(movie.id)}
                alt={movie.id}
              />
            </div>
            <div className="title">{title}</div>
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
              {actors.map((actor, i) => (
                <li className="actor" key={i}>
                  {actor.name}
                </li>
              ))}
            </ol>
          </div>
        </>
      )}
    </>
  );
};

export default Movie;
