




from flask import Flask,render_template
# from flask_sqlalchemy import SQLAlchemy


my_app=Flask(__name__,template_folder="",static_folder="")
# my_app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'


# db = SQLAlchemy(my_app) #initialize database


# class user(db.Model):

#     username = db


@my_app.route('/',methods=["POST","GET"])
def index():
    return render_template("index.html")


if __name__=="__main__":
    my_app.run(debug=True)
    print("after running, it can wya")

    