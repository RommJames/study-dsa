// Create an array with 5 students name, after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user "StudentName".

// My Solution
const allStudents = ["Romm", "James", "Picar", "Cuya", "Lea"]; // Data Structure

// Algorithm for finding a specific user
function findStudent(allStudents, studentName) {
  const getStudent = allStudents.filter((student) => student === studentName);
  if (getStudent.length <= 0) return "Student doesn't exist.";

  return getStudent[0];
}

console.log(findStudent(allStudents, "Picar"));

// Other Solution
const studentDatabase = ["jordan", "erick", "john", "michael", "romm", "Picar"];

function findStudent2(allStudents, studentName) {
  for (let index = 0; index < studentDatabase.length; index++) {
    if (studentName === allStudents[index]) {
      return allStudents[index];
    }

    if (index >= studentDatabase.length - 1) return "Student doesn't exist";
  }
}
console.log(findStudent2(studentDatabase, "Picar"));
