const router = require("express").Router();

const List = require("../models/list");
const { addTask, updateTask, deleteTask, getAllTasks} = require("../controller/authcontroller");
// create
router.post("/addTask", addTask);
router.get('/getTask', getAllTasks)
// update
router.put("/updateTask/:id", updateTask);
// delete
router.delete("/deleteTask/:id", deleteTask)
// getTask

module.exports = router;
