const express = require("express")
const router = express.Router();

const {createTask} = require("../controllers/task");







//router.get("/",getTask);
router.post("/",createTask);
//router.get("/",getTask);
//router.get("/",deletTask);
//router.get("/",updateTask);


module.exports = router;