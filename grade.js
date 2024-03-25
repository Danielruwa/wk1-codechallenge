function calculateGrade(mark) {
    if (mark > 79 && mark <= 100) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else if (mark >= 0 && mark < 40) {
        return 'E';
    } else {
        return 'Invalid input! Please enter a mark between 0 and 100.';
    }
}

const userInput = parseFloat(prompt("Enter the student's mark (between 0 and 100):"));

if (!isNaN(userInput)) {
    const grade = calculateGrade(userInput);
    console.log(`Grade: ${grade}`);
} else {
    console.log('Invalid input! Please enter a valid number.');
}
 