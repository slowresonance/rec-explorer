import React, { useEffect } from "react";

const getImgSrc = (id) => {
  return `https://raw.githubusercontent.com/mohanvpatta/movie-posters/main/${id}-0.jpg`;
};

const getCustomImgSrc = (id, index) => {
  return `https://raw.githubusercontent.com/mohanvpatta/movie-posters/main/${id}-${index}.jpg`;
};

const Thumbnails = ({ movieid, users }) => {
  const empty = movieid === 0;

  const [thumbnails, setThumbnails] = React.useState({});

  const getThumbnails = async (id) => {
    const response = await fetch(`https://rec.cyclic.app/thumbnails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
    return response;
  };

  useEffect(() => {
    if (movieid === 0) return;
    getThumbnails(movieid).then((data) => {
      setThumbnails(data);
    });
  }, [movieid]);

  return (
    <>
      <div className="header">Thumbnails</div>
      <div className="body">
        <div className="thumbnail">
          <div className="poster">
            {!empty && !missingMovies.includes(movieid) && (
              <img
                loading="lazy"
                decoding="async"
                src={getImgSrc(movieid)}
                alt={movieid}
              />
            )}
          </div>
        </div>
        {thumbnails.id ? (
          <>
            <div className="user-thumbnails">
              {users.map((user, i) => (
                <div className="thumbnail" key={i}>
                  <div className={`label user-${i + 1}`}>{user} sees</div>
                  <div className="poster">
                    {!empty && !missingMovies.includes(movieid) && (
                      <img
                        loading="lazy"
                        decoding="async"
                        src={getCustomImgSrc(movieid, i + 1)}
                        alt={movieid}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="other-title">Other Thumbnails</div>
            {thumbnails.id && (
              <div className="other-thumbnails">
                {[...Array(thumbnails.thumbnails.length - 3)].map((_, i) => (
                  <div className="poster">
                    {!empty && !missingMovies.includes(movieid) && (
                      <img
                        loading="lazy"
                        decoding="async"
                        src={getCustomImgSrc(movieid, i + 3)}
                        alt={movieid}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="no-data">Custom Thumbnails Not Available</div>
        )}
      </div>
    </>
  );
};

export default Thumbnails;

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
