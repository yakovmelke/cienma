from flask import Blueprint,jsonify,request
from Bll.mongoDbBll import MongoDbBll



movies_bll = MongoDbBll("movies")

movies =Blueprint("movies",__name__)

@movies.route("/",methods=["GET"])
def get_all_movies():
    movies = movies_bll.get_all_data()
    return jsonify(movies)

@movies.route("/<string:id>",methods=["GET"])
def get_movie(id):
    movie = movies_bll.get_one_data(id)
    return jsonify(movie)

@movies.route("/",methods=["POST"])
def add_movie():
    obj =request.json
    status = movies_bll.add_data(obj)
    return jsonify(status)

@movies.route("/<string:id>",methods=["PUT"])
def update_movie(id):
    obj =request.json
    obj.pop('_id', None)
    status = movies_bll.update_data(id,obj)
    return jsonify(status)

@movies.route("/<string:id>",methods=["DELETE"])
def delete_movie(id):
    status = movies_bll.delete_data(id)
    return jsonify(status)
