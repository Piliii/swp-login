    function addStudent() {
      var studentName = prompt("الرجاء إدخال اسم الطالب:");
      if (studentName) {
        var studentList = document.querySelector('.student-list');
        var newStudent = document.createElement('li');
        newStudent.textContent = studentName;
        studentList.appendChild(newStudent);
      }
    }