const List = require("../models/list");



const addTask = async (req, res) => {
  try {
    const { title, body } = req.body;

    const list = await new List({ title, body });
    await list.save();

    return res.status(200).json({ message: "Task added", list, success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await List.find({});
    return res
      .status(200)
      .json({ message: "All tasks fetched", tasks, success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, body } = req.body;
    const list = await List.findByIdAndUpdate(req.params.id, { title, body }, { new: true }); 
    res.status(200).json(list); 
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error updating task" });
  }
};


const deleteTask = async (req, res) => {
  try {
    const list = await List.findByIdAndDelete(req.params.id);

    if (!list) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted", _id: req.params.id }); // Return the deleted task ID
  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addTask, updateTask, deleteTask, getAllTasks };
