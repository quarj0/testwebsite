import React from "react";
import PropTypes from "prop-types";

import "../Styles/course.css";

const Course = ({ title, description, image, color }) => {
  return (
    <div className="course-container" style={{ backgroundColor: color }}>
      <div className="course-text-container">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <button className="course-button">Learn More</button>
      </div>
      <div className="course-image-container">
        <img src={image} alt={title} className="course-image" />
      </div>
    </div>
  );
};

Course.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Course;
