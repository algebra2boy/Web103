const getAllLocations = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/location')
        const locations = await response.json();
        console.log(locations);
        return locations;
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllLocations
}