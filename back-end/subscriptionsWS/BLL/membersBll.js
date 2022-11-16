const memberModel = require("../model/membersModel");

const getALLMembers = async () => {
  try {
    const members = await memberModel.find();
    return members;
  } catch (error) {
    throw error;
  }
};

const getOneMember = async (id) => {
  try {
    const member = await memberModel.findById(id);
    return member;
  } catch (error) {
    throw error;
  }
};

const createMember = async (obj) => {
  try {
    const newMember = new memberModel(obj);
    await newMember.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};
const updateMember = async (id, obj) => {
  try {
    await memberModel.findByIdAndUpdate(id, obj);

    return "Updated";
  } catch (error) {
    throw error;
  }
};
const deleteMember = async (id) => {
  try {
    await memberModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getALLMembers,
  getOneMember,
  createMember,
  updateMember,
  deleteMember,
};
