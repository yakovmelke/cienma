import axios from "axios";

export const getAllSubscriptions = async (dispatch) => {
  const { data: subscriptions } = await axios.get(
    `http://localhost:8001/subscriptions`
  );
  const action = { type: "ADD ALL SUBSCRIPTIONS", payload: subscriptions };
  dispatch(action);
};
export const createSubscription = async (obj, dispatch) => {
  const { data: subscriptions } = await axios.post(
    `http://localhost:8001/subscriptions`,
    obj
  );
  console.log(subscriptions);
  await getAllSubscriptions(dispatch);
};
export const updateSubscription = async (sub, obj, dispatch) => {
  console.log(sub);
  const finalObj = {};
  finalObj.memberId = sub.memberId;
  finalObj.movies = sub.movies;
  finalObj.movies.push(obj);
  const { data: subscriptions } = await axios.put(
    `http://localhost:8001/subscriptions/${sub._id}`,
    finalObj
  );
  await getAllSubscriptions(dispatch);
};
export const deleteSubscription = async (member) => {
  console.log(member.id);
  console.log(member.name._id);
};
