const jsonUsersDataBll = require("../Bll/jsonUsersDataBll");

const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const usersData = await jsonUsersDataBll.getAllUsersData();
    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json(error);
  }
});
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await jsonUsersDataBll.getUserData(id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await jsonUsersDataBll.createUserData(obj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const obj = req.body;
    const { id } = req.params;
    const result = await jsonUsersDataBll.updateUserData(id,obj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await jsonUsersDataBll.deleteUserData(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = route