import React from "react";

const User = ({ user, selectMovie, selectWatchlist, index }) => {
  let { id, ratings } = user;

  const recommendations = ratings.slice(0, 20);

  const empty = id === 0;

  const getImgSrc = (id) => {
    let index = 0;
    if (user.id === 201 && [28, 33, 56].includes(id)) {
      index = 1;
    }
    if (user.id === 880 && [28, 33, 56].includes(id)) {
      index = 2;
    }
    return `https://raw.githubusercontent.com/mohanvpatta/movie-posters/main/${id}-${index}.jpg`;
  };

  return (
    <>
      <div className={`header user-${index + 1}`}>{`${id}'s Feed`}</div>
      <div className="body movies">
        {recommendations.map((movie, i) => (
          <div
            className="poster action"
            key={`${user.id}-${i}`}
            onClick={() => selectMovie(movie.id)}
          >
            {!empty && !missingMovies.includes(movie.id) && (
              <img
                loading="lazy"
                decoding="async"
                src={getImgSrc(movie.id)}
                alt={movie.id}
              />
            )}
          </div>
        ))}
      </div>
      <div className="footer action" onClick={() => selectWatchlist(index)}>
        Watchlist
      </div>
    </>
  );
};

export default User;

const missingMovies = [
  14, 20, 75, 111, 115, 165, 166, 244, 279, 280, 296, 330, 454, 515, 536, 563,
  569, 665, 671, 683, 688, 701, 718, 788, 795, 815, 817, 853, 863, 900, 910,
  916, 925, 963, 969, 995, 1021, 1024, 1026, 1043, 1056, 1059, 1062, 1080, 1086,
  1110, 1128, 1147, 1148, 1164, 1182, 1187, 1201, 1212, 1223, 1233, 1234, 1235,
  1236, 1246, 1256, 1257, 1259, 1278, 1294, 1300, 1307, 1312, 1322, 1323, 1326,
  1331, 1339, 1340, 1341, 1343, 1344, 1349, 1351, 1353, 1359, 1365, 1366, 1368,
  1379, 1385, 1394, 1402, 1404, 1408, 1419, 1421, 1433, 1448, 1463, 1482, 1487,
  1493, 1499, 1503, 1505, 1515, 1516, 1518, 1529, 1539, 1541, 1559, 1561, 1565,
  1568, 1570, 1578, 1580, 1588, 1601, 1619, 1622, 1628, 1634, 1641, 1652, 1654,
  1660, 1667, 1668, 1676,
];
