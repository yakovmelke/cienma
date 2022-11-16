const membersDal = require("../Dal/membersDal");

const getAllMembers = async () => {
  try {
    const { data: members } =
      await membersDal.getAllMembers();
    return members;
  } catch (error) {
    throw error;
  }
};

const getOneMember = async (id) => {
  try {
    const { data: member } = await membersDal.getOneMember(
      id
    );
    return member;
  } catch (error) {
    throw error;
  }
};

const createMember = async (obj) => {
  try {
    const result = await membersDal.createMember(obj);
    return result;
  } catch (error) {
    throw error;
  }
};

const updateMember = async (id, obj) => {
  try {
    const result = await membersDal.updateMember(id, obj);
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteMember = async (id) => {
  try {
    const result = await membersDal.deleteMember(id);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMembers,
  getOneMember,
  createMember,
  updateMember,
  deleteMember,
};
