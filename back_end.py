



from Instabot_2_4.Instagram_Bot_Class import instabot #The bot of the hour. He has finally arrived
from flask import Flask,render_template,redirect,request

# #INITIALIZE BOT:
# username="something"
# password="password"

# bot = instabot(username,password)
# bot.signin()
my_app=Flask(__name__,template_folder="",static_folder="")


@my_app.route('/',methods=["POST","GET"])
def index():
    if request.method=='POST':
        return "YESYESYESYESYESYES"
    else:
        return render_template("index.html")
 


if __name__=="__main__":
    my_app.run(debug=True)
    print("after running, it can wya")

    