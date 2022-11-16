const express = require("express");
const router = express.Router();

const membersBLL = require("../BLL/membersBll");

router.get("/", async (req, res) => {
  try {
    const members = await membersBLL.getALLMembers();
    res.status(200).json(members);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const member = await membersBLL.getOneMember(id);
    res.status(200).json(member);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await membersBLL.createMember(obj);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await membersBLL.updateMember(id,obj);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await membersBLL.deleteMember(id);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
