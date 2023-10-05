import React from "react";

import "./index.scss";

const UserCard = ({ name, status, species, location, episode, image }) => {
  return (
    <div className="userCard">
      <article className="userCard-name">
        <div>
          <img src={image} alt={image} />
        </div>
        <div className="userCard-info">
          <div className="container-up">
            <h2>{name}</h2>
            <span className="color">
              <span className={`circle circle-${status.toLowerCase()}`}></span>
              {status} - {species}
            </span>
          </div>

          <div className="container-middle">
            <span>Last known location:</span>
            <br />
            <a href="{location.name}">{location.name}</a>
          </div>
          
          <div className="container-end">
            <span>First seen in:</span>
            <br />
            <a href="{episode[0]}">{episode[0]}</a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UserCard;
