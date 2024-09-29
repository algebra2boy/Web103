import React from "react";
import "../css/Event.css";

const Event = (props) => {
  const { id, title, date, image, time } = props;

  return (
    <article className="event-information" id={id}>
      <img src={image} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {date} <br />{" "}
            {time}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Event;
