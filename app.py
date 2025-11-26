from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

def greet_user(message):
    current_time = datetime.now()
    hour = current_time.hour

    if hour < 12:
        greet = "Good Morning"
    elif hour < 18:
        greet = "Good Afternoon"
    else:
        greet = "Good Evening"

    return f"{greet}, {message}! 😊"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get", methods=["POST"])
def get_bot_response():
    user_msg = request.form["msg"]
    bot_res = greet_user(user_msg)
    return jsonify({"response": bot_res})

if __name__ == "__main__":
    app.run(debug=True)
