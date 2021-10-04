//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.classes={
    }
  }
  roster() {
    //deep copy to prevent mutability outside of module
    return JSON.parse(JSON.stringify(this.classes));
  }

  add(name, grade) {
    //prevent same name from being placed into two grades
    let gradeLevels=Object.keys(this.classes);
    for (const gradeLevel of gradeLevels) {
      //if grade level already exists...
      if (gradeLevel!==undefined) {
        //...store its index as a variable
        let indexOfGradeLevel=this.classes[gradeLevel].indexOf(name)
        //if name is already present
        if (indexOfGradeLevel!==-1) {
          this.classes[gradeLevel].splice(indexOfGradeLevel, 1);
        }
      }
    }
    this.classes[grade]=this.classes[grade] || []
    this.classes[grade].push(name);
    this.classes[grade].sort();
  }

  grade(level) {
    return this.classes[level]===undefined ? [] : Array.from(this.classes[level])

  }
}
