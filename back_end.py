




from flask import Flask,render_template


my_app=Flask(__name__,template_folder="",static_folder="")

@my_app.route('/',methods=["POST","GET"])
def index():
    return render_template("index.html")


if __name__=="__main__":
    my_app.run(debug=True)


    