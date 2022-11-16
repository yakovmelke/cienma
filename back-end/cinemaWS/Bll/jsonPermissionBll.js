const jsonDataUtils = require("../Dal/jsonDataUtils");
const file = "./jsonData/Permission.json";

const getAllPermissions = async () => {
  try {
    const permission = await jsonDataUtils.getAllData(file);
    return permission;
  } catch (error) {
    throw error;
  }
};
const getPermission = async (id) => {
  try {
    const permission = await jsonDataUtils.getAllData(file);
    const result = permission.find((ele) => ele.id == id);
    return result;
  } catch (error) {
    throw error;
  }
};

const createPermission = async (obj) => {
  try {
    const usersAndPassword = await jsonDataUtils.getAllData(file);
    usersAndPassword.push(obj);
    const result = await jsonDataUtils.setData(file,usersAndPassword)
    return result;
  } catch (error) {
    throw error;
  }
};

const updatePermission = async (id,obj) => {
  try {
    const usersAndPassword = await jsonDataUtils.getAllData(file);
    const updateData = usersAndPassword.map(element =>element.id==id?obj:element )
    const result = await jsonDataUtils.setData(file,updateData)
    return result;
  } catch (error) {
    throw error;
  }
};
const deletePermission = async (id) => {
  try {
    const usersAndPassword = await jsonDataUtils.getAllData(file);
    const updateData = usersAndPassword.filter(element =>element.id!==id )
    const result = await jsonDataUtils.setData(file,updateData)
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports={getAllPermissions,
  getPermission,
    createPermission,
    updatePermission,
    deletePermission}