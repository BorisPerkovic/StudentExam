/* creating class statistics */
class Statistics {
  constructor() {
    this.failedStudents = [];
    this.passedStudents = [];
  };

  getTotalPassed() {
    return this.passedStudents.length;
  }

  getTotalFailed() {
    return this.failedStudents.length;
  }

  getTotalStudents() {
    return this.passedStudents.length + this.failedStudents.length;
  }
  
};