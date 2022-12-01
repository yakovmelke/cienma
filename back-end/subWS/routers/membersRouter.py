from flask import Blueprint, jsonify, request
from Bll.mongoDbBll import MongoDbBll


members_bll = MongoDbBll("members")

members = Blueprint("members", __name__)


@members.route("/", methods=["GET"])
def get_all_members():
    members = members_bll.get_all_data()
    return jsonify(members)


@members.route("/<string:id>", methods=["GET"])
def get_member(id):
    member = members_bll.get_one_data(id)
    return jsonify(member)


@members.route("/", methods=["POST"])
def add_member():
    obj = request.json
    status = members_bll.add_data(obj)
    return jsonify(status)


@members.route("/<string:id>", methods=["PUT"])
def update_member(id):
    obj = request.json
    obj.pop('_id', None)
    status = members_bll.update_data(id, obj)
    return jsonify(status)


@members.route("/<string:id>", methods=["DELETE"])
def delete_member(id):
    status = members_bll.delete_data(id)
    return jsonify(status)
