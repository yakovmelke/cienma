const usersModel = require("../model/usersModel");

const getAllUsers = async () => {
  try {
    const users = await usersModel.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const getOneUser = async (id) => {
  try {
    const user = await usersModel.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (obj) => {
  try {
    const newUser = new usersModel(obj);
    await newUser.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, obj) => {
  try {
    await usersModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    await usersModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
