class Other(object):
    def override(self):
        print "OTHER override()"
    def implicit(self):
        print "OTHER implicit()"
    def altered(self):
        print "OTHER altered()"
# notice how the Child class does not inherit from the Other class
# however there may be some cases where we want to use some attributes/methods
# from the Other class
class Child(object):
    def __init__(self):
 # so we create an instance of the Other class as an attribute for the Child class
        

        self.other = Other()    # gives Child class the methods and attributes of the Other class. Access methods and attributes with self.other 


    def implicit(self):
  # we can then use some of the behavior of Other in Child
        self.other.implicit()
    def override(self):
        print "CHILD override()"
    def altered(self):
        print "CHILD, BEFORE OTHER altered()"
  # again we use some of the behavior of Other in Child
        self.other.altered()
        print "CHILD, AFTER OTHER altered()"

son = Child()     # create Child object
son.implicit()    # call Child.implicit, which calls Other.implicit = "OTHER implicit()"
son.override()    # calls Child.override = "CHILD override()"
son.altered()     # calls Child.altered, which prints "CHILD, BEFORE OTHER altered()" and then calls Other.altered, which prints "OTHER altered()"
                  #     and finally prints "CHILD, AFTER OTHER altered()"