const getEventsByLocationID = async (locationID) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/event/${locationID}`
    );
    const events = await response.json();
    return events;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getEventsByLocationID,
};
