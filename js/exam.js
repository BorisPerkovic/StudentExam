/* creating class exam (instance of subject, instance of student, grade) */
class Exam {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
  }

  getExamInfo() {
    return this.subject.getSubjectName() + " - " + this.student.getStudentData() + " " + this.grade;
  }

  hassPassed(gr) {
    if(gr > 5) {
      return true;
    } 
    return false;
  }
};