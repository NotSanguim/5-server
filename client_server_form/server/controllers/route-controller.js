const router = require("express").Router();
const db = require("../db.json");

router.get("/", (req, res) => {
    try {

        res.status(200).json({
            Resullts:  db,
        })
    } catch (err) {
        res.status(500).json({
            Error: err,
        });
    }

});

router.get("/parm/:id", (req, res) => {
    try {
        // console.log(req);
        res.send("asdf");
    } catch (err) {
        res.status(500).json({
            Error: err,
        });
    }
});

module.exports = router;