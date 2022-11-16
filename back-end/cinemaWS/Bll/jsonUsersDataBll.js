const jsonDataUtils = require("../Dal/jsonDataUtils");
const file = "./jsonData/UsersData.json";

const getAllUsersData = async () => {
  try {
    const userData = await jsonDataUtils.getAllData(file);
    return userData;
  } catch (error) {
    throw error;
  }
};
const getUserData = async (id) => {
  try {
    const userData = await jsonDataUtils.getAllData(file);
    const result = userData.find((ele) => ele.id == id);
    return result;
  } catch (error) {
    throw error;
  }
};

const createUserData = async (obj) => {
  try {
    const usersData = await jsonDataUtils.getAllData(file);
    usersData.push(obj);
    const result = await jsonDataUtils.setData(file, usersData);
    return result;
  } catch (error) {
    throw error;
  }
};

const updateUserData = async (id, obj) => {
  try {
    const usersData = await jsonDataUtils.getAllData(file);
    const updateData = usersData.map((element) =>
      element.id == id ? obj : element
    );
    const result = await jsonDataUtils.setData(file, updateData);
    return result;
  } catch (error) {
    throw error;
  }
};
const deleteUserData = async (id) => {
  try {
    const usersData = await jsonDataUtils.getAllData(file);
    const updateData = usersData.filter((element) => element.id !== id);
    const result = await jsonDataUtils.setData(file, updateData);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsersData,
  getUserData,
  createUserData,
  updateUserData,
  deleteUserData,
};
