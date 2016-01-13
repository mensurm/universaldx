
#data model for contact us form

class ContactForm():
    def __init__(self, firstname='', lastname='', email='', question=''):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.question = question

    #override string representation of model object
    def __str__(self):
        info = u"name = {} , email = {}, query = {}".format(unicode(self.firstname) + ' ' + unicode(self.lastname), unicode(self.email), unicode(self.question))
        return info

    #override unicde representation of model object
    def __unicode__(self):
        info = u"name = {} , email = {}, query = {}".format(unicode(self.firstname) + ' ' + unicode(self.lastname), unicode(self.email), unicode(self.question))
        return info