import axios from "axios";

export const getAllMembers = async(dispatch)=>{
const {data:members} = await axios.get("http://localhost:8001/members")
const action = { type: "ADD ALL MEMBERS DATA", payload: members };
  dispatch(action);
} 

export const createMember = async(obj,dispatch)=>{
const {data:members} = await axios.post("http://localhost:8001/members",obj)
 await getAllMembers(dispatch)
} 
export const updateMember = async(obj,dispatch)=>{
const {data:members} = await axios.put("http://localhost:8001/members/"+obj._id,obj)
await getAllMembers(dispatch)
} 
export const deleteMember = async(id,dispatch)=>{
const {data:members} = await axios.delete("http://localhost:8001/members/"+id)
await getAllMembers(dispatch)
} 

