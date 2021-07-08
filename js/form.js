
/* creating function for collecting data from input fields - returning array */
function collectData(sub, stud, gr) {

  var subject_name = sub;
  var student_name = stud;
  var grade_value = parseInt(gr);
  var array = [subject_name, student_name, grade_value];
  return array;  
};

/* creating function for validate data from collectData - returning Exam object*/
function validateData(collect){

  var collectedSubject = collect[0];
  var collectedStudent = collect[1];
  var collectedGrade = collect[2];
  if( collectedSubject !== "" && collectedStudent !== "" && collectedGrade !== "") {

    if(isFinite(collectedGrade)) {

      if(confirm("Are you sure that data is correct?!!")) {
        var student_name_split = collectedStudent.split(" ");
        var first_name = student_name_split.shift();
        var last_name = student_name_split.join(" ");
        
        var student_obj = new Student(first_name, last_name);
        var subject_obj = new Subject(collectedSubject);
        var exam_obj = new Exam(subject_obj, student_obj, collectedGrade);

        return exam_obj;
      } else {
        return false;
      }
      

    } else {

    alert("Only numbers and integers are allowed for grades!!");

  }

  } else {

    alert("You have empty fields. All fields are required!!");

  }
}

/* creating function for update lists of passed and failed students */
function updateGivenList (list) {

  if(list.hassPassed(list.grade)) {

    statistics.passedStudents.push(list.getExamInfo());
    var passedIndex = statistics.passedStudents.length - 1;
    var passedLi = document.createElement("li");
    passedLi.setAttribute("passed-id-", passedIndex);
    passedLi.textContent = statistics.passedStudents[passedIndex];
    passed_list.appendChild(passedLi);

  } else {

    statistics.failedStudents.push(list.getExamInfo());
    var failedIndex = statistics.failedStudents.length - 1;
    var failedLi = document.createElement("li");
    failedLi.setAttribute("failed-id-", failedIndex);
    failedLi.textContent = statistics.failedStudents[failedIndex];
    failed_list.appendChild(failedLi);
  }
}

/* creating function for update students statistics*/
function studentsStatistic () {

  total.textContent = statistics.getTotalStudents();
  passed.textContent = statistics.getTotalPassed();
  failed.textContent = statistics.getTotalFailed();

}


