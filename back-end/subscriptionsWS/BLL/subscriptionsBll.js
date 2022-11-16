const subscriptionsModel = require("../model/subscriptionsModel");
const membersBll = require("../BLL/membersBll");
const moviesBll = require("../BLL/moviesBll");

const getAllSubscriptions = async () => {
  try {
    const subscriptionsData = await subscriptionsModel.find();

    return subscriptionsData;
  } catch (error) {
    throw error;
  }
};

const getSubscriptionById = async (id) => {
  try {
    const subscriptionData = await subscriptionsModel.findById(id);

    return subscriptionData;
  } catch (error) {
    throw error;
  }
};

const createSubscription = async (obj) => {
  try {
    const subscription = new subscriptionsModel(obj);
    await subscription.save();

    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateSubscription = async (id, obj) => {
  try {
    await subscriptionsModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};
const deleteSubscription = async (id) => {
  try {
    await subscriptionsModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  deleteSubscription,
  createSubscription,
  updateSubscription,
};
