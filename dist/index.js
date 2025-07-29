"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students = [
    { id: 1, name: 'Alice', scores: [85, 90, 92] },
    { id: 2, name: 'Bob', scores: [78, 82, 88] },
    { id: 3, name: 'Charlie', scores: [92, 95, 97] },
];
function calculateAverage(scores) {
    const total = scores.reduce((a, b) => a + b, 0);
    return total / scores.length;
}
students.forEach((student) => {
    const avg = calculateAverage(student.scores);
    console.log(`${student.name}'s average score: ${avg.toFixed(2)}`);
});
