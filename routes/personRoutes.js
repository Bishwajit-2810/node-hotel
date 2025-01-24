const express = require('express');
const router = express.Router();
const Person = require("../models/person")


router.post("/", async (req, res) => {
    // const data = req.body
    // const newPerson = new Person(data)
    // // newPerson.name=data.name this is hactic

    // newPerson.save((err, savedPerson) => {
    //     if (err) {
    //         console.log("there is a error", err)
    //         res.status(500).json({ error: "internal server error" })
    //     }else{
    //         console.log("data saved successfully")
    //         res.status(200).json(savedPerson)
    //     }

    // })


    try {
        const data = req.body
        const newPerson = new Person(data);

        const response = await newPerson.save();
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
        const data = await Person.find();
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })
    }
})

router.get("/:workType", async function (req, res) {
    try {
        const workType = req.params.workType;
        if (workType == 'chef', 'manager', 'waiter') {
            console.log("response data fetched")
            const data = await Person.find({ work: workType });
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

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const updatedPerson = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        });
        if (!updatedPerson) {
            return res.status(404).json({ error: 'person not found' })
        }
        res.json(updatedPerson)
        console.log("response data updated")
        res.status(200).json(data)


    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        const deletedPerson = await Person.findByIdAndDelete(personId)
        if (!deletedPerson) {
            return res.status(404).json({ error: 'person not found' })
        }

        console.log("response data deleted")
        res.status(200).json({ message: "person deleted successfully" })


    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })
    }
})


module.exports = router


person_doc = {
    "name": "Bishwajit",
    "age": 22,
    "work": "chef",
    "mobile": "123-456-7890",
    "email": "Bishwajit@example.com",
    "address": "123 Main St, City",
    "salary": 60000
}