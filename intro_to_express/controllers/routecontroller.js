const router = require("express").Router();
const db = required("../db.json");

router.get("/", (req, res) => {
    try{
        res.status(200).json({
            results: db,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

router.get("/:id", (req, res) => {
    console.log(req.params)
        try{
            let { id } = req.params;
            let results = db.filter((i) => i.id == id)

            console.log(results);

            res.status(200).json({
                results: results[0]
            });         

    res.status(200).json({
      response: "ok",
    });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

module.exports = router;

