const getAllLocation = (req, res) => {
    try {
        res.status(200).json([
            { name: "The Echo Lounge & Music Hall" },
            { name: "House of Blues" },
            {
                name: "The Pavilion at Toyota Music Factory",
            },
            { name: "American airline center" }
        ])
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export default {
    getAllLocation
}