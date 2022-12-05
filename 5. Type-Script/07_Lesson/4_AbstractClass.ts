//Abstract Class
// In abstract class we can define the functionality of methods but in functions we cannot.

abstract class AbsClass{
    name :string;
    id :number;
    conditionI :boolean;

    thisMethod() :string{
        return "Returning a string"
    }
}