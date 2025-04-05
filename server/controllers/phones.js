const PhonesModel = require("../models/phones.model")

const addPhone = async (req, res) => {
    try {
        const { title, image_url, price } = req.body

        if (!title || !image_url || !price) {
            return res.status(400).json({ message: "Title, Image URL, and Price are required." });
        }

        const newPhone = new PhonesModel({ title, image_url, price });
        await newPhone.save();

        res.status(201).json({ message: "Phone added successfully!", phone: newPhone });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}


const getPhones = async (req, res) => {
    try {
        const phones = await PhonesModel.find()
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = { addPhone, getPhones };
