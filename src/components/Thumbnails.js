import React from "react";

const Thumbnails = () => {
  const thumbnails = {
    original: "",
    users: [
      {
        id: "312",
        src: "",
      },
      {
        id: "98",
        src: "",
      },
    ],
  };

  return (
    <>
      <div className="header">Thumbnails</div>
      <div className="body">
        <div className="thumbnail">
          <div className="poster">
            <img src={thumbnails.original} alt="" />
          </div>
        </div>
        <div className="user-thumbnails">
          {thumbnails.users.map((user, i) => (
            <div className="thumbnail">
              <div className={`label user-${i + 1}`}>{user.id} sees</div>
              <div className="poster">
                <img src={user.src} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Thumbnails;
