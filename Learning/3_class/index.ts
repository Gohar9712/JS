class Car {
    brand: string;
    model: string;
    year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getCarInfo(): string {
      return `${this.brand} ${this.model} - ${this.year}`;
    }
}
  
const myCar = new Car("Mercedes", "C", 2020);
console.log(myCar.getCarInfo()); // Mercedes C - 2020

// ✅ Բացատրություն:

// Ստեղծեցինք Car դասը, որը ունի brand, model, և year հատկություններ։
// constructor մեթոդը օգտագործվում է հատկությունների արժեքները նախնականացնելու համար։
// getCarInfo() մեթոդը վերադարձնում է մեքենայի տվյալները։


class Person {
    public name: string;
    private password: string;
  
    constructor(name: string, password: string) {
      this.name = name;
      this.password = password;
    }
  
    public getName(): string {
      return this.name;
    }
  
    private getPassword(): string {
      return this.password;
    }
}

const person = new Person("Davit", "1999Dav");

console.log(person.getName()); // ✅ "Davit
// console.log(person.password); // ❌ Սխալ, քանի որ `password`-ը private է
// console.log(person.getPassword()); // ❌ Սխալ, քանի որ `getPassword()`-ը private է


// ✅ Բացատրություն:

// public հատկությունները հասանելի են ցանկացած վայրից։
// private հատկությունները հասանելի են միայն class-ի ներսում։

// 3. Ժառանգություն (extends)
// Ժառանգությունը թույլ է տալիս նոր դաս ստեղծել գոյություն ունեցող դասի հիման վրա։


class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound(): void {
      console.log("Some generic sound...");
    }
}
  
class Cat extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name);
      this.breed = breed;
    }
  
    makeSound(): void {
      console.log(`${this.name} barks!`);
    }
}
  
  const cat = new Cat("Kostik", "Ragdoll");
  cat.makeSound(); 


//  4. getter և setter մեթոդներ
// TypeScript-ի getter և setter մեթոդները թույլ են տալիս վերահսկել հատկությունների արժեքների ընթերցումը և փոփոխումը։

class BankAccount {
    private _balance: number = 0;
  
    get balance(): number {
      return this._balance;
    }
  
    set balance(amount: number) {
      if (amount < 0) {
        console.log("Balance cannot be negative!");
      } else {
        this._balance = amount;
      }
    }
}
  

const account = new BankAccount();
account.balance = 500; // ✅ Տեղի կունենա փոփոխություն
console.log(account.balance); // 500

account.balance = -100; // ❌ "Balance cannot be negative!"




// 5. (abstract class)



abstract class ReactComponent {
    abstract render(): void;
    abstract info(): void;
}

class MyComponent extends ReactComponent {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'this i info'
    }
}
