function outer() {
  let x = 5;

  return function () {
    console.log(x);
  };
}

let func = outer();
// console.log(func);
// func();

function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log(`Deposited: ${amount} Balance: ${balance}`);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.warn("Insufficient Balance");
      } else {
        balance = balance - amount;
        console.log(`Withdrawn: ${amount} Balance: ${balance}`);
      }
    },

    checkBalance: () => console.log(`Current Balance: ${balance}`),
  };
}

let accountDetails = bankAccount(100);
// console.log(accountDetails);

accountDetails.deposit(300);
accountDetails.withdraw(200);
accountDetails.checkBalance();
accountDetails.withdraw(500);
