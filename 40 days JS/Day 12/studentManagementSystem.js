function students(name, age, grades) {
  return {
    name,
    age,
    grades,
    averageGrade() {
      let sum = 0;

      for (let i of grades) {
        sum += i;
      }
      return sum / grades.length;
    },
  };
}

let student1 = students("Tanvir", 28, [80, 85, 90]);
console.log(student1);
console.log(student1.averageGrade());
