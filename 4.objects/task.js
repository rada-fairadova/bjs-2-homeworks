function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; 
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName; 
};

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.excluded) {
        console.log("Студент ${this.name} исключен и не может добавлять оценки.");
        return;
    }
  
    if (Array.isArray(this.marks)) {
        this.marks.push(...marksToAdd); 
    }
};

Student.prototype.getAverage = function () {
    if (!Array.isArray(this.marks) || this.marks.length === 0) {
        return 0; 
    }
    
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length; 
};

Student.prototype.exclude = function (reason) {
    this.subject = undefined;
    this.marks = undefined; 
    this.excluded = reason; 
};
