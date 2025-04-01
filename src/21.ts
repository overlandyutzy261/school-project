interface Student {
  name: string;
  age: number;
}

function calculateAverageGrade(scores: number[]): number {
  const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
  return totalScore / scores.length;
}

function processStudents(students: Student[], teacherName: string): void {
  students.forEach(student => {
    if (student.name === teacherName) {
      console.log(`Hello, ${teacherName}!`);
    }
  });
}
