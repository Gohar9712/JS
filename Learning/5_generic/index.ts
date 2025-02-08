// TypeScript-ի Generics՝ Պրակտիկ Օրինակներով 🚀
// Generics-ները TypeScript-ում թույլ են տալիս ստեղծել ճկուն (flexible) և վերօգտագործվող
// (reusable) կոդ՝ աշխատելով տարբեր տեսակների (types) հետ։ Դրանք օգտակար են, երբ ուզում ենք ստեղծել ֆունկցիաներ, 
// դասեր կամ ինտերֆեյսներ, որոնք կարող են աշխատել տարբեր տեսակների (types) հետ՝ առանց նախապես սահմանափակելու կոնկրետ տեսակ:



// Եթե ունենք ֆունկցիա, որը ընդունում է որոշակի տվյալ և վերադարձնում է այն, առանց փոփոխելու, ապա այն կարող ենք գրել հետևյալ կերպ.



function foo<T>(arg: T): T {
    return arg;
}
  
console.log(foo<number>(5));       // 5
console.log(foo<string>("Hello")); // "Hello"
console.log(foo<boolean>(true));   // true

// T-ն ներկայացնում է տեսակի տեղապահ (type placeholder)։


// 3. Generics բազմակի տեսակների հետ
// Մեկից ավելի Generics-ներ կարող ենք օգտագործել, եթե ֆունկցիան աշխատում է տարբեր տեսակների հետ.


function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
  
console.log(pair<string, number>("Age", 30)); // ["Age", 30]
console.log(pair<boolean, string>(true, "Success")); // [true, "Success"]


// 4. Generics ինտերֆեյսներում
// Օրինակ, եթե ունենք օգտատիրոջ տվյալները, կարող ենք ստեղծել ինտերֆեյս, որը կաշխատի տարբեր տեսակների հետ.

interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "Alice", age: 25 },
};

console.log(userResponse.data.age);




// 5. Generics դասերի (Classes) հետ
// Օրինակ, կարող ենք ստեղծել տվյալների պահոց (data storage) class, որը կարող է աշխատել տարբեր տեսակների հետ.

class DataStorage<T> {
  private storage: T[] = [];

  addItem(item: T): void {
    this.storage.push(item);
  }

  removeItem(item: T): void {
    this.storage = this.storage.filter(i => i !== item);
  }

  getItems(): T[] {
    return [...this.storage];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
console.log(textStorage.getItems()); // ["Hello", "World"]

textStorage.removeItem("Hello");
console.log(textStorage.getItems()); // ["World"]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems()); // [10, 20]