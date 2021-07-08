/* creating class for chosen student */
class Student {
  constructor(name, lastname) {
    this.student_name = name;
    this.student_lastname = lastname;
  }

  getStudentData() {
    return this.student_name + " " + this.student_lastname;
  }

};