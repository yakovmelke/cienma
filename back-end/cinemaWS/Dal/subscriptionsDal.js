const axios = require("axios")

const getAllSubscriptions = ()=> axios.get("http://localhost:8000/subscriptions")
const getOneSubscription = (id)=> axios.get("http://localhost:8000/subscriptions/"+id)
const createSubscription = (obj)=> axios.post("http://localhost:8000/subscriptions",obj)
const updateSubscription = (id,obj)=> axios.put("http://localhost:8000/subscriptions/"+id,obj)
const deleteSubscription = (id)=> axios.delete("http://localhost:8000/subscriptions/"+id)


module.exports = {getAllSubscriptions,
    getOneSubscription,
    createSubscription,
    updateSubscription,
    deleteSubscription}