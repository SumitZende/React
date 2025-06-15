import React from "react";
import PropTypes from "prop-types";
import "./UserCard.css";

export default function UserCard({ name, avatar, bio, title }) {
  return (
    <div className="card">
      <div className="img-avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="card-text">
        <div className="portada"></div>
        <div className="title-total">
          <div className="title">{title}</div>
          <h2>{name}</h2>
          <div className="desc">{bio}</div>
          <div className="actions">
            <button><i className="far fa-heart"></i></button>
            <button><i className="far fa-envelope"></i></button>
            <button><i className="fas fa-user-friends"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  title: PropTypes.string,
};
