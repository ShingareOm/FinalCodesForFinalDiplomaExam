var student = [["amit", 70], ["sumit", 78], ["abhishek", 71]];
var avg = 0;

for (let i = 0; i < student.length; i++) {
  avg += student[i][1];
  for (let j = i + 1; j < student.length; j++) {
    if (student[i][1] > student[j][1]) {
      var temp = student[i];
      student[i] = student[j];
      student[j] = temp;
    }
  }
}

console.log("The array is ", student);
avg = avg / student.length;

// for (let k = 0; k < student.length; k++) {
//   console.log("Name : " + student[k][0] + ", Marks : " + student[k][1]);
// }

// console.log("Avrage  = " + avg);
