const router = require("express").Router();
const db = require("../mock_db/db.json");


const crudController = require("./controllers/crud");
const PORT = 8080;
3
//? Challenge:
/*
    - 2 GET requests
        - One to retrieve all of the data from the given mock dataset
        - One to retrieve a specific piece of data (obj) from the dataset by its id

        - Implement try/catch
        - Provide correct HTTP status code
*/

router.get("/route", (req, res) => {
    try{
        res.status(200).json({
            results: db,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});
// GET By ID
router.get("/one/:id", (req,res) => {
    try {
        let filtered = db.filter((i) => i.id == req.params.id);
        res.status(200).json({ 
        // console.log(filtered);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        });
    }
});
// POST Create item
router.post("/create", (req, res) => {
    try {
        let myObj = {
            id: db.length + 1,
            name: req.body.name,
            category: req.body,
            price: req.body.price,
            emoji:req.body.emoji,
        };

        console.log(myObj);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
})


module.exports = router;
