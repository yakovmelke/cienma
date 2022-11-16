const axios = require("axios")


const getMembers = ()=> axios.get("https://jsonplaceholder.typicode.com/users");

module.exports={getMembers}