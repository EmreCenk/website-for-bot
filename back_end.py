



from Instabot_2_4.Instagram_Bot_Class import instabot #The bot of the hour. He has finally arrived
from flask import Flask,render_template,redirect,request
from time import perf_counter,sleep

#INITIALIZE BOT:
username="something"
password="something"

bot = instabot(username,password,headless = False)
bot.signin()
my_app=Flask(__name__,template_folder="",static_folder="") #overriding the default directories flask searches for
result="yes"

@my_app.route('/',methods=["POST","GET"])
def index():
    if request.method=='POST':
        user=str(request.form['name'])
        # bot.follow(user)
        result = "I have sent a request to " + user
        verified = bot.safe_verify(person=user)
        started=perf_counter()

        didwe=False
        while didwe == False and perf_counter() - started<180:
            didwe = bot.check_response(user)
            print(didwe)
            sleep(10)

        if didwe:
            outcome=bot.evaluate_verification(message=didwe)
            bot.respond_to_verification(user=user,outcome=outcome)
            if outcome == True:
                bot.message_who_has_not_followed_back(user=user)







        return ('', 204) #since we can't return nothing, we return this instead
    else:

        return render_template("index.html")
 


if __name__=="__main__":
    my_app.run(debug=False)
    print("after running, it can wya")
    