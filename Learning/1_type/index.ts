// type-ը նման է interface-ին, բայց ունի ավելի մեծ ճկունություն, քանի որ կարող է աջակցել union types, 
// intersection types


type User = {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
  };
  
  const user1: User = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    isAdmin: false,
};
  

// type-ի օգտագործում Union Type-ի հետ

// Union Type-ն օգտագործվում է, երբ տվյալը կարող է լինել տարբեր տեսակների։

type Status = 'pending' | 'completed' | 'failed';

function updateOrderStatus(orderId: number, status: Status) {
    console.log(`Order ${orderId} is now ${status}`);
}


updateOrderStatus(101, "completed"); // ✅ Վավեր
updateOrderStatus(102, "pending");   // ✅ Վավեր
// updateOrderStatus(103, "shipped"); // ❌ Սխալ, քանի որ "shipped" չկա Status-ում


// ✅ Union Type (|) - երբ փոփոխականը կարող է լինել տարբեր տեսակներից մեկը։

type ID = number | string;

let userId: ID;
userId = 123;   // ✅ Վավեր
userId = "ABC"; // ✅ Վավեր

// ✅ Intersection Type (&) - երբ միավորում ենք երկու տեսակներ։


// Տվյալների  (arrays) նույնպես կարող են տիպավորվել։

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
];