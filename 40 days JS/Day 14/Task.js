// 1
//
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  // console.log("An error occurred:", error.name);
}

// 2
//
function processPayment(amount) {
  try {
    let balance = 200;
    if (amount < 0) throw new Error("Enter a positive amount");
    if (amount > balance)
      throw new Error("The amount is bigger than current balance");
    console.log(`The entered amount: ${amount}`);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// processPayment(-10);

// 3

function UserError(message) {
  this.name = "UserError";
  this.message = message;
}

function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
}

function ServerError(message) {
  this.name = "Server Error";
  this.message = message;
}

function EmailError(message) {
  this.name = "Email Error";
  this.message = message;
}

function eCommerce(balance) {
  if (isNaN(balance)) throw new UserError("Give a proper amount");
  if (balance < 0) throw new PaymentError("Insufficient Balance");
  if (0 < balance && balance < 50) throw new ServerError("Too low");
  if (50 < balance && balance < 100) throw new EmailError("Still low");

  console.log(`the balance: ${balance}`);
}

try {
  let newFunc = eCommerce(100);
} catch (error) {
  console.error(`${error.name}:  ${error.message}`);
}

// 4

function fetchData(url) {
  try {
    if (!url.startsWith("https")) throw new Error("Invalid URL");

    console.log("Thanks for the request");
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}

fetchData("http://google.com");

// 5
//

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function validateUser(userInput) {
  try {
    if (userInput.username === "")
      throw new ValidationError("Username can not be empty");
    if (userInput.age <= 0)
      throw new ValidationError("Age must be a positive number");

    console.log(`Name: ${userInput.username}, Age: ${userInput.age}`);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}

let userInput = { username: "Tanvir", age: 0 };

validateUser(userInput);

// 6

function readFile(filePath) {
  try {
    if (!filePath) throw new Error("File not found");

    console.log("Found the file...");
  } catch (error) {
    console.error(error.message);
  }
}

readFile("F:media_files/audio/New");

// 7
//
function parseJSON(str) {
  try {
    let result = JSON.parse(str);
    console.log(result);
  } catch (error) {
    // console.error(error.message);
    console.error("Invalid JSON");
  }
}

parseJSON('{ "name": "Tanvir" }');
