// PART 1


let productName = "T-shirts";
let productId = Symbol('uniqueId');
let price = 25.99;
let isOnSale = true;
let quantity = 50;

console.log(typeof productName);  
console.log(typeof productId);  
console.log(typeof price);  
console.log(typeof isOnSale);
console.log(typeof quantity);  


const inventory = [
  {
    productName: "Rolex",
    price: 20,
    isOnSale: true,
    quantity: 50,
    details: { color: "green", size: "S" }
  },
  {
    productName: "Jubilee",
    price: 30,
    isOnSale: false,
    quantity: 100,
    details: { color: "pink", size: "M" }
  },
  {
    productName: "gcash",
    price: 80,
    isOnSale: true,
    quantity: 10,
    details: { color: "gray", size: "L" }
  }
];

console.log(inventory);

// PART 2



Object.freeze(inventory[1]);


inventory[1].price = 45;
console.log(inventory[1].price);

inventory[1].discount = 10;
console.log(inventory[1].discount);

delete inventory[1].quantity;
console.log(inventory[1].quantity);


inventory[1].details.color = "red";  
console.log(inventory[1].details.color);


//the difference between object freeze and object seal is object freeze values immutable, cant change or add,delete properties
//while the object seal is allow modification for existing properties but prevents adding new properties or deleting it
Object.seal(inventory[2]);


inventory.price = 59.99;
inventory.description = "Comfortable Sneakers";
delete inventory.quantity;

console.log(inventory[2]);

console.log(inventory.price);      
console.log(inventory.description);
console.log(inventory.quantity);

// Primitive data
let num = 20;
let anotherNum = num;  
anotherNum = 20;      

console.log(num);      
console.log(anotherNum);

// Non-Primitive 
let person = {
    name: "Jayvee",
    age: 21
  };
 
  let anotherPerson = person;
 
  anotherPerson.age = 26;
 
  console.log(person.age);      
  console.log(anotherPerson.age);


//PART 5

//const using inventory for managing inventory for allowing modification to quantity or price

const productInventory = [
    { productId: 1, productName: "T-Shirt", quantity: 100, price: 20 },
    { productId: 2, productName: "Jeans", quantity: 50, price: 40 }
  ];
 
 
  productInventory[0].quantity = 90;
  productInventory[1].price = 35;    
 
  console.log(productInventory);

 //object.freeze for user permission for defining admin or user for accessing web application which is user is set
 //for role like admin or user and want to ensure role cannot be change
 
 const user = {
    username: "Jayvee",
    role: "User",
    permissions: ["read", "write"]
  };
 

  Object.freeze(user);
 

  user.role = "Admin";  
  user.newProperty = "SomeValue";
 
  console.log(user.role);
  console.log(user.newProperty);
 
//object.seal for bank account to make sure no properties like accountnumber of balance are deleted
//but still updated the bank

const bankAccount = {
    accountNumber: "12345",
    balance: 5000,
    accountHolder: "jason"
  };
 

  Object.seal(bankAccount);
 

  delete bankAccount.accountHolder;
 

  bankAccount.balance += 1000;
 
  console.log(bankAccount);

