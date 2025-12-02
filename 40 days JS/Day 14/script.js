// runtime error
// console.log(x); //Reference error: x is not defined

// let obj = null;
// console.log(obj.name); //TypeError: cannot read properties of null

// console.log("hi"; // Uncaught SyntexError

// let arr = new Array(-1); // Range Error

try {
  console.log("Execution starts here");

  abc;

  console.log("Execution ends here");
} catch (err) {
  console.error("An error has occured: ");
  console.log(err.name);
  console.log(err.message);
  // console.log(err.stack);
}

// Real world use cases

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }

    const result = a / b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.error("Got a math error: ", error.message);
  }
}

divideNumbers(15, 3);
divideNumbers(15, 0);

const person = {
  name: "Tanvir",
  address: {
    city: "Sylhet",
  },
};

function getPostalCode(user) {
  try {
    console.log(user.address.country.postalCode);
  } catch (error) {
    console.error("Error accessing property: ", error.message);
  }
}

getPostalCode(person);

function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error(
        `Invalid input: Age must be a number. Your input is ${age}`
      );
    }
    console.log(`Users age: ${age}`);
  } catch (error) {
    console.error("Validatiion error:", error.message);
  }
}

validateAge("Tanvir");

// rethrow error

function validateForm(formData) {
  try {
    if (!formData.username) throw new Error("username is mandatory");
    if (!formData.email.includes("@")) throw new Error("Invalid email format");
  } catch (error) {
    console.error("Validation issues found:", error.message);
    throw error;
  }
}

try {
  validateForm({ username: "Tanvir", email: "bademail" });
} catch (error) {
  console.error("Showing error message for user creation:", error.message);
}

// finally

function processInformation(information) {
  try {
    console.log("Processing Information...");

    if (!information) throw new Error("No information to process");

    console.log("Information processed");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Cleanup: Closing database connection");
  }
}

processInformation("Tanvir is learning JS");
processInformation();

// Custom Error

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
  this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
  if (age < 60) {
    throw new ValidationError("You are not a senior citizen");
  }
  return "You are a senior citizen";
}

try {
  const message = validateCitizen(65);
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
