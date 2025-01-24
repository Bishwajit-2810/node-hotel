const express = require('express');
const router = express.Router();
const menuItem = require("../models/menu")


router.post("/", async (req, res) => {
    try {
        const data = req.body
        const newMenu = new menuItem(data);

        const response = await newMenu.save();
        console.log("response data saved")
        res.status(200).json(response);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })

    }
})

router.get("/", async function (req, res) {
    try {
        console.log("All person data fetched")
        const data = await menuItem.find();
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })
    }
})

router.get("/:tasteType", async function (req, res) {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == "sweet", "spicy", "sour") {
            console.log("response data fetched")
            const data = await menuItem.find({ taste: tasteType });
            res.status(200).json(data)
        } else {
            res.status(404).json({ error: "invalid work type" })

        }


    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })
    }
})


module.exports = router


menu_doc = {
    "name": "cake",
    "price": 25,
    "taste": "sweet",
    "is_drink": false,
    "ingredients": [
        "chocolate",
        "floor",
        "milk",
        "sugar"
    ],
    "num_sales": 56
}