from flask import Flask
from routers.membersRouter import members
from routers.moviesRouter import movies
from routers.subRouter import subscriptions
from utils.encoder import Jsonencoder
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
app.json_provider_class = Jsonencoder

app.register_blueprint(members, url_prefix="/members")

app.register_blueprint(movies, url_prefix="/movies")

app.register_blueprint(subscriptions, url_prefix="/subscriptions")

app.run("localhost", 8000)
