function addStudent() {
  var studentName = prompt("Please add the student's name:");
  if (studentName) {
    var studentList = document.querySelector('.student-list');
    var newStudent = document.createElement('li');
    newStudent.textContent = studentName;
    studentList.appendChild(newStudent);
  }
}

function addGrade() {
  var gradeName = prompt("Please add the student's Grade:");
  if (gradeName) {
    var gradeList = document.querySelector('.grade-list');
    var newGrade = document.createElement('li');
    newGrade.textContent = gradeName;
    gradeList.appendChild(newGrade);
  }
}