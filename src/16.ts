// This is an example of a simple TypeScript class.
class MyClass {
    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    get value(): number {
        return this._value;
    }

    set value(newValue: number) {
        if (newValue >= 0 && newValue <= 100) {
            this._value = newValue;
        } else {
            console.log("Invalid input!");
        }
    }
}

// Example usage
const myClass = new MyClass(50);
myClass.value = 75; // This will set the value of _value
