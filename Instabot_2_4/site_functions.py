
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

