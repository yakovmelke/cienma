const axios = require("axios")

const getAllMembers = ()=> axios.get("http://localhost:8000/members")
const getOneMember = (id)=> axios.get("http://localhost:8000/members/"+id)
const createMember = (obj)=> axios.post("http://localhost:8000/members",obj)
const updateMember = (id,obj)=> axios.put("http://localhost:8000/members/"+id,obj)
const deleteMember = (id)=> axios.delete("http://localhost:8000/members/"+id)


module.exports = {getAllMembers,
    getOneMember,
    createMember,
    updateMember,
    deleteMember}