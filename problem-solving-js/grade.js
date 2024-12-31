let score = 85;

if (score >= 0 && score <= 100) {
    let grade;

    if (score >= 80) {
        grade = 'A+';
    } else if (score >= 70) {
        grade = 'A';
    } else if (score >= 60) {
        grade = 'A-';
    } else if (score >= 50) {
        grade = 'B';
    }else if (score >= 50) {
        grade = 'C';
    }else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`Your grade is: ${grade}`);
} else {
    console.log('Invalid input.');
}
