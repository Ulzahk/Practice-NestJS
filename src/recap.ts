const myName = 'Francisco';
const myAge = 26;
const sum = (a: number, b: number) => {
  return a + b;
};
sum(12, 32);

class Person {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name} ${this.age}`;
  }
}

const Ulzahk = new Person(26, 'Francisco');
Ulzahk.getSummary();
