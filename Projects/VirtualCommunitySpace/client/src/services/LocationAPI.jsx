const getAllLocations = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/location");
    const locations = await response.json();
    return locations;
  } catch (error) {
    console.log(error);
  }
};

const getLocationByID = async (locationID) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationID}`
    );
    const locations = await response.json();
    return locations[0];
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAllLocations,
  getLocationByID,
};
