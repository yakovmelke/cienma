from flask import Blueprint,jsonify,request
from Bll.mongoDbBll import MongoDbBll



subscriptions_bll = MongoDbBll("subscriptions")

subscriptions =Blueprint("subscriptions",__name__)

@subscriptions.route("/",methods=["GET"])
def get_all_subscriptions():
    subscriptions = subscriptions_bll.get_all_data()
    return jsonify(subscriptions)

@subscriptions.route("/<string:id>",methods=["GET"])
def get_subscription(id):
    subscription = subscriptions_bll.get_one_data(id)
    return jsonify(subscription)

@subscriptions.route("/",methods=["POST"])
def add_subscription():
    obj =request.json
    status = subscriptions_bll.add_data(obj)
    return jsonify(status)

@subscriptions.route("/<string:id>",methods=["PUT"])
def update_subscription(id):
    obj =request.json
    obj.pop('_id', None)
    status = subscriptions_bll.update_data(id,obj)
    return jsonify(status)

@subscriptions.route("/<string:id>",methods=["DELETE"])
def delete_subscription(id):
    status = subscriptions_bll.delete_data(id)
    return jsonify(status)
