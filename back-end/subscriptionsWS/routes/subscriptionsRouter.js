const subscriptionsBll = require("../BLL/subscriptionsBll");

const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const subscriptions = await subscriptionsBll.getAllSubscriptions();
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const subscriptions = await subscriptionsBll.getSubscriptionById(id);
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await subscriptionsBll.createSubscription(obj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
   
    const result = await subscriptionsBll.updateSubscription(id, obj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await subscriptionsBll.deleteSubscription(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = route;
