const student = {
  name: "Tanvir Ahmed",
  age: 28,
  std: 3,
  subjects: ["JS", "DSA", "node"],
  parents: {
    father: "Monirul Hoq",
    mother: "Ferdausy Begum",
    email: "mobilecare100@gmail.com",
  },
  address: {
    street: "16, Burhanbug, shibgonj",
    city: "Sylhet",
    country: "Bangladesh",
    zip: 3001,
  },
};

const { name, meal = "bread" } = student;
// const city = student.address.city;

console.log(name, meal);

const { subjects, numberOfSubjects = subjects.length } = student;

console.log(subjects, numberOfSubjects);

const { std: standard } = student;
console.log(standard);

const {
  address: { zip },
} = student;
console.log(zip);

function sendEmail({ parents: { email } }) {
  console.log(`send an email to the parents at ${email}`);
}

sendEmail(student);

const getStudent = () => {
  return {
    name: "Tanvir Ahmed",
    age: 28,
    std: 3,
    subjects: ["JS", "DSA", "node"],
    parents: {
      father: "Monirul Hoq",
      mother: "Ferdausy Begum",
      email: "mobilecare100@gmail.com",
    },
    address: {
      street: "16, Burhanbug, shibgonj",
      city: "Sylhet",
      country: "Bangladesh",
      zip: 3001,
    },
  };
};

// const anotherStudent = getStudent();
// const anotherName = anotherStudent.name;
// const anotherSubject = anotherStudent.subjects;

const { name: anotherName, subjects: anotherSubjects } = getStudent();

console.log(anotherName, anotherSubjects);
