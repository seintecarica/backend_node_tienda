const suma = (a, b) => {
    return a + b;
};
suma(12, 23);
class Persona {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    getSummary() {
        return `My name is ${this.name}, ${this.age}`;
    }
}
const nicolas = new Persona(15, 'Nicolas');
nicolas.getSummary();
//# sourceMappingURL=recap.js.map