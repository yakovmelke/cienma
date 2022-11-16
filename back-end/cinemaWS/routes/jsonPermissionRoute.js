const jsonPermissionBll = require("../Bll/jsonPermissionBll");

const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const permission = await jsonPermissionBll.getAllPermissions();
    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const permission = await jsonPermissionBll.getPermission(id);
    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await jsonPermissionBll.createPermission(obj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const obj = req.body;
    const { id } = req.params;
    const result = await jsonPermissionBll.updatePermission(id,obj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await jsonPermissionBll.deletePermission(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = route