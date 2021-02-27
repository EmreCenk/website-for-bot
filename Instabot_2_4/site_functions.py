
from time import sleep
from random import uniform

def safe_verify(self,person):

    self.follow(person=person)
    sleep(uniform(0.1,0.4))
    we_can_send_message=self.send_verification(user=person)

    if we_can_send_message:
        return True
    else:
        return False


if __name__ == '__main__':

    from Instabot_2_4.Instagram_Bot_Class import instabot
    print(safe_verify(self=instabot(),person="asdf"))