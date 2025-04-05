const express = require("express");
const verifyToken = require("../middlewares/userMiddlewares");
const { addPhone, getPhones } = require("../controllers/phones");

const router = express.Router();


router.post("/phones", verifyToken, addPhone);


router.get("/phones",verifyToken, getPhones);


router.get("/earbuds", verifyToken, (req, res) => {
    res.json({ message: "You are in earbuds route bro!" });
});


router.get("/watches", verifyToken, (req, res) => {
    res.json({ message: "You are in watches route bro!" });
});

module.exports = router;
