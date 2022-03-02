from flask import Flask, request

app = Flask(__name__)


@app.route("/", methods=["GET"])
def root():
    print("Called root endpoint.")
    return "hello from /"


@app.route("/create", methods=["POST"])
def create():
    print(f"Called create endpoint with data: {request.data}")
    return "hello from /create"
