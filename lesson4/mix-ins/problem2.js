/*
In the last question, we used a mix-in named Speed that 
contained a goFast method. We included the mix-in in the 
Car class and then called the goFast method from an instance
 of the Car class. You may have noticed that 
the string printed when we call goFast includes the name of 
the type of vehicle we are using. How is that done?

We used this.constructor.name to determine the name. It works like this:

Within goFast, this refers to the object that invoked the method. 
In this case, we used Car and Truck objects.
The constructor property of an object references the class that 
the object belongs to, i.e., Car or Truck.
Constructors have a name property that merely contains the name of 
the class as a string, and that's what we output in goFast.
*/