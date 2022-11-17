import axios from "axios";

export const getUsersData = async (dispatch) => {
  const { data: users } = await axios.get("http://localhost:8001/users");
  const { data: permissions } = await axios.get(
    "http://localhost:8001/permissions"
  );
  const { data: userData } = await axios.get("http://localhost:8001/user_data");
  const finalData = users.map((user) => {
    const filterUserData = userData.find((data) => data.id == user._id);
    const filterPermissions = permissions.find((perm) => perm.id == user._id);
    const obj = {};
    obj.id = user._id;
    obj.userName = user.userName;
    obj.password = user.password;
    obj.firstName = filterUserData.firstName;
    obj.lastName = filterUserData.lastName;
    obj.admin = filterUserData.admin;
    obj.createdDate = filterUserData.createdDate;
    obj.sessionTimeOut = filterUserData.sessionTimeOut;
    obj.permissions = filterPermissions.permissions;

    return obj;
  });
  const action = { type: "ADD ALL USERS DATA", payload: finalData };
  dispatch(action);
};
export const updateUserPassword = async (obj) => {
  const { data: user } = await axios.put(
    "http://localhost:8001/users/" + obj._id,
    obj
  );
};

export const updateUser = async (obj, dispatch) => {
  const permissions = { id: obj.id, permissions: obj.permissions };
  const userNameAndPassword = {
    _id: obj.id,
    userName: obj.userName,
    password: obj.password,
  };
  const userPersonalData = {
    id: obj.id,
    firstName: obj.firstName,
    lastName: obj.lastName,
    createdDate: obj.createdDate,
    sessionTimeOut: obj.sessionTimeOut,
    admin: obj.admin,
  };
  const { data: usersApi } = await axios.put(
    "http://localhost:8001/users/" + obj.id,
    userNameAndPassword
  );
  const { data: permissionsApi } = await axios.put(
    "http://localhost:8001/permissions/" + obj.id,
    permissions
  );
  const { data: userDataApi } = await axios.put(
    "http://localhost:8001/user_data/" + obj.id,
    userPersonalData
  );
  await getUsersData(dispatch);
};
export const deleteUser = async (id, dispatch) => {
  const { data: usersApi } = await axios.delete(
    "http://localhost:8001/users/" + id
  );
  const { data: permissionsApi } = await axios.delete(
    "http://localhost:8001/permissions/" + id
  );
  const { data: userDataApi } = await axios.delete(
    "http://localhost:8001/user_data/" + id
  );

  await getUsersData(dispatch);
};
export const createUser = async (obj, dispatch) => {
  const date = new Date();
  const permissions = { id: obj.id, permissions: obj.permissions };
  const userNameAndPassword = {
    _id: obj.id,
    userName: obj.userName,
    password: "",
  };
  const userPersonalData = {
    id: obj.id,
    firstName: obj.firstName,
    lastName: obj.lastName,
    createdDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    sessionTimeOut: obj.sessionTimeOut,
    admin: obj.admin,
  };
  const { data: usersApi } = await axios.post(
    "http://localhost:8001/users",
    userNameAndPassword
  );
  const { data: permissionsApi } = await axios.post(
    "http://localhost:8001/permissions",
    permissions
  );

  const { data: userDataApi } = await axios.post(
    "http://localhost:8001/user_data",
    userPersonalData
  );
  await getUsersData(dispatch);
};
