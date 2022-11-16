const subscriptionsDal = require("../Dal/subscriptionsDal");

const getAllSubscriptions = async () => {
  try {
    const { data: subscriptions } =
      await subscriptionsDal.getAllSubscriptions();
    return subscriptions;
  } catch (error) {
    throw error;
  }
};

const getOneSubscription = async (id) => {
  try {
    const { data: subscription } = await subscriptionsDal.getOneSubscription(
      id
    );
    return subscription;
  } catch (error) {
    throw error;
  }
};

const createSubscription = async (obj) => {
  try {
    
    const result = await subscriptionsDal.createSubscription(obj);
    return result;
  } catch (error) {
    throw error;
  }
};

const updateSubscription = async (id, obj) => {
  try {
    const result = await subscriptionsDal.updateSubscription(id, obj);
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteSubscription = async (id) => {
  try {
    const result = await subscriptionsDal.deleteSubscription(id);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSubscriptions,
  getOneSubscription,
  createSubscription,
  updateSubscription,
  deleteSubscription,
};
