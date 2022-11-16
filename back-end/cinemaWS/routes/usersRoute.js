const usersBll = require("../Bll/usersBll");

const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const users = await usersBll.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersBll.getOneUser(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
route.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await usersBll.createUser(obj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
route.put("/:id", async (req, res) => {
  try {
    const obj = req.body;
    const { id } = req.params;
    const result= await usersBll.updateUser(id,obj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result= await usersBll.deleteUser(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = route