const membersBll =require("../Bll/membersBll")

const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const members = await membersBll.getAllMembers();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const member = await membersBll.getOneMember(id);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await membersBll.createMember(obj);
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await membersBll.updateMember(id, obj);
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await membersBll.deleteMember(id);
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = route;
