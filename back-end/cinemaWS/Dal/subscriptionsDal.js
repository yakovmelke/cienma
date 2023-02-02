const axios = require("axios")

const getAllSubscriptions = ()=> axios.get("http://0.0.0.0:8000/subscriptions")
const getOneSubscription = (id)=> axios.get("http://0.0.0.0:8000/subscriptions/"+id)
const createSubscription = (obj)=> axios.post("http://0.0.0.0:8000/subscriptions",obj)
const updateSubscription = (id,obj)=> axios.put("http://0.0.0.0:8000/subscriptions/"+id,obj)
const deleteSubscription = (id)=> axios.delete("http://0.0.0.0:8000/subscriptions/"+id)


module.exports = {getAllSubscriptions,
    getOneSubscription,
    createSubscription,
    updateSubscription,
    deleteSubscription}