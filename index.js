class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactions = [{type: "deposit", amount: 300}, {type: "withdraw", amount: 200}, {type: "deposit", amount: 450}];
  }

  getAccountNumber() {
    return this.accountNumber;
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactions;
  }

  getBalances() {
    return this.transactions.map((elem) => {
      if (elem.type === "deposit") {
        return "+" + elem.amount;
      } else {
        return "-" + elem.amount;
      }
    })
  }

  getOverallBalance() {
    return this.transactions.reduce((acc, elem) => {
      if (elem.type === "deposit") {
        return acc += elem.amount;
      } else {
        return acc -= elem.amount;
      }
    }, 0)
  }
}

//let account = new BankAccount(1, 5000);
//console.log(account.getBalances());
//console.log(account.getOverallBalance());

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(products) {
    for (let i of products) {
      this.products.push(i);
    }
    
  }

  getProducts() {
    return this.products;
  }

  totalCostOfEach() {
    return this.products.map((elem) => {
      return elem.price * elem.quantity;
    })
  }

  overallCost() {
    return this.products.reduce((acc, elem) => {
      return acc += (elem.price * elem.quantity);
    }, 0)
  }
}


class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getQuantity() {
    return this.quantity;
  }
}

//let cart = new ShoppingCart();
//cart.addProduct([new Product("Eggs", 2, 800),
//                 new Product("Potatoes", 1, 2000), 
//                new Product("Rice", 3, 6000), 
//                new Product("Fairy Liquid", 4, 1000)]);
//console.log(cart.getProducts());
//console.log(cart.totalCostOfEach());
//console.log(cart.overallCost());
 
class Employee {
  constructor(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }

  getDepartment() {
    return this.department;
  }

  empToSalary(arr) {
    return arr.map((elem) => {
      return elem.salary;
    })
  }

  totalSalary(arr) {
    return arr.reduce((acc, elem) => {
      return acc += elem.salary;
    }, 0)
  }
}

class Manager extends Employee{
  constructor(name, salary, department, bonus) {
    super(name, salary, department);
    this.bonus = bonus;
  }

  getBonus() {
    return this.bonus;
  }
}

class Engineer extends Employee {
  constructor(name, salary, department, tools) {
    super(name, salary, department);
    this.tools = tools;
  }

  getTools() {
    return this.tools;
  }
}

let employee = new Employee("Jezza", 50000, "Prostitution");
let num1 = employee.empToSalary([new Employee("Jezza", 50000, "Prostitution"),
                     new Manager("Joshy", 70000, "Hr", 1000),
                     new Engineer("Joe", 120000, "Software")]);

let num2 = employee.totalSalary([new Employee("Jezza", 50000, "Prostitution"),
                     new Manager("Joshy", 70000, "Hr", 1000),
                     new Engineer("Joe", 120000, "Software")]);

console.log(num1, num2);