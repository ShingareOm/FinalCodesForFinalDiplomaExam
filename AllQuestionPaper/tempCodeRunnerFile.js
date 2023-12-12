var student = {
  amit: 70,
  sumit: 78,
  abhishek: 71,
};
var avg = 0;

for (let i = 0; i < student.length; i++) {
  avg += student[i][1];
  for (let j = i + 1; j < student.length; j++) {
    if (student[i][1] > student[j][1]) {
      var temp = student[i];
      student[j] = student[i];
      student[i] = temp;
    }
  }
}

avg = avg / student.length;

for (let i = 0; i < student.length; i++) {
  console.log("Name : " + student[i][0] + ", Marks : " + student[i][1]);
}
