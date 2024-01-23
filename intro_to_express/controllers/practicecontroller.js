//  Creating a variable ->> importing the router engine from express
const router = require("express").Router();

router.get("/hello-world", (request, response) => {

    response.send("Hello World");
});

router.post("/greeing", (req,res) => {
    res.status(200).send("Good Afternoon")
});

router.post("/jspon", (req, res) => {
    console.log(req.body);

    res.status(200).send(`Your name was added: ${req.body.name}`)
});
    
router.get("*", (req,res) => {
    // - "*"; accounts for a wildcard or anything that has not been defined
    // - Provides a clean response back to the user

    res
        .status(400)
        .send(`<img src="https://http.cat/404" alt="status code 404"/>`);
});

module.exports = router;