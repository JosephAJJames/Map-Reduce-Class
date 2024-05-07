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

let cart = new ShoppingCart();
cart.addProduct([new Product("Eggs", 2, 800),
                 new Product("Potatoes", 1, 2000), 
                new Product("Rice", 3, 6000), 
                new Product("Fairy Liquid", 4, 1000)]);
console.log(cart.getProducts());