import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import LocationAPI from "../services/LocationAPI";
import EventsAPI from "../services/EventsAPI";
import "../css/LocationEvents.css";
import Events from "./Events";

const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getLocation = async () => {
      const location = await LocationAPI.getLocationByID(index);
      setLocation(location);
    };
    getLocation();
  }, []);

  useEffect(() => {
    const getEventsByID = async () => {
      const events = await EventsAPI.getEventsByLocationID(index);
      setEvents(events);
    };
    getEventsByID();
  }, []);

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} />
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>
            {location.address}, {location.city}, {location.state} {location.zip}
          </p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
            {"No events scheduled at this location yet!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
