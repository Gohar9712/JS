// enum (հապավում՝ enumeration) - հատուկ տիպ է TypeScript-ում, որը թույլ է տալիս սահմանել անվանական (named) հաստատուն արժեքների հավաքածու։ 
// Այն օգտագործվում է, երբ պետք է սահմանափակված թվային կամ տեքստային արժեքների շարք ունենանք։


// 1. Թվային (Numeric) enum

// TypeScript-ում լռելյայն (default) enum-ի արժեքները սկսում են 0-ից և աճում են 1-ով։

enum ProjectStatus {
    Pending,   // 0
    InProgress, // 1
    Completed,  // 2
}

console.log(ProjectStatus.Pending);   // 0
console.log(ProjectStatus.InProgress); // 1
console.log(ProjectStatus.Completed);  // 2


enum OrderStatus {
  Pending = 1,
  Shipped = 2,
  Delivered = 3,
  Canceled = 4,
}

console.log(OrderStatus.Pending);  // 1
console.log(OrderStatus.Delivered); // 3

//  • Մենք բացահայտ նշել ենք, որ Pending = 1։
//  • Հետևյալ արժեքները ինքնաբերաբար ավելանում են 1-ով (եթե դրանք ձեռքով չսահմանենք)։


// Եթե չենք ցանկանում թվեր օգտագործել, կարող ենք enum-ի արժեքները դարձնել տողային (string)։

enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

console.log(UserRole.Admin);