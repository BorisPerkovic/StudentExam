/* creating instance for statistics */
var statistics = new Statistics();

/* input fields and btn handlers */
var subject = document.querySelector("#subject");
var student = document.querySelector("#name-lastname");
var grade = document.querySelector("#grade");
var add_btn = document.querySelector("#add-btn");

/* passed and failed students list handlers */
var passed_list = document.querySelector("#passed-list");
var failed_list = document.querySelector("#failed-list");

/* statistics handlers */
var total = document.querySelector("#total-students-span");
var passed = document.querySelector("#students-passed-span");
var failed = document.querySelector("#students-failed-span");


/* run program on btn click */
add_btn.addEventListener("click", function() {
  var valid = validateData(collectData(subject.value, student.value, grade.value));
  updateGivenList(valid);
  studentsStatistic();
  subject.value = "";
  student.value = "";
  grade.value = "";
});