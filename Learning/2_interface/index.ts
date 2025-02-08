// interface-ը TypeScript-ում օգտագործվում է օբյեկտների կառուցվածքը սահմանելու համար։ Այն օգնում է սահմանել տվյալների տեսակը և ապահովել կոդի ճկունությունն ու վերահսկողությունը։

// interface-ի հիմնական նպատակները.
//  • Օբյեկտների համար խիստ կառուցվածք սահմանել
//  • Կոդը դարձնել ավելի ընթեռնելի և մաքուր
//  • Հեշտացնել Օբյեկտ-Օրիենտացված Ծրագրավորումը (OOP)
//  • Թույլ տալ implements և extends մոդիֆիկատորներով ժառանգել կամ ընդլայնել կառուցվածքները


interface IUser {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

const user: IUser = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  isAdmin: false,
};

interface Person {
    userName: string;
    age: number;
}

interface Employee extends Person {
    company: string;
    position: string;
}
  
const employee1: Employee = {
    userName: "John",
    age: 28,
    company: "ACA",
    position: "Software Engineer",
};

// Ինտերֆեյսները կարող են ունենալ նաև ներդրված (nested) օբյեկտներ։

interface Address {
  street: string;
  city: string;
  country: string;
}

interface IUser2 {
  id: number;
  name: string;
  email: string;
  address: Address;
}

const user2: IUser2 = {
    id: 2,
    name: "Emma Watson",
    email: "emma@example.com",
    address: {
      street: "123 Main St",
      city: "Los Angeles",
      country: "USA",
    },
};
  

// Եթե հատկությունը պարտադիր չէ, այն կարող ենք նշել ? նշանով։

interface User3 {
  id: number;
  name: string;
  email?: string; // Optional հատկություն
}

const user3: User3 = {
  id: 4,
  name: "Davit",
};


// Ինտերֆեյսները կարելի է օգտագործել class-ներում implements բառով։

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Buddy");