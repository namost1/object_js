import input from './input.js'
let students = [];

let numberOfStudents = await input("Hány adatot szeretnél megadni?");

for (let i = 0; i < numberOfStudents; i++) {
    let name = await input("Név: ");
    let email = await input("E-mail: ");
    
    let student = {
        name: name,
        email: email
    };
    
    students.push(student);
}

console.log("A tanulók adatai:");
students.forEach((student) => {
    console.log(`Név: ${student.name} E-mail: ${student.email}`);
});

let weeklySchedule = [
    { day: "Hétfő", subjects: ["Matematika", "Irodalom", "Fizika"] },
    { day: "Kedd", subjects: ["Biológia", "Történelem", "Kémia"] },
    { day: "Szerda", subjects: ["Angol", "Fizika", "Tesi"] },
    { day: "Csütörtök", subjects: ["Matematika", "Kémia", "Földrajz"] },
    { day: "Péntek", subjects: ["Irodalom", "Biológia", "Művészetek"] }
];

console.log("A heti órarend:");
weeklySchedule.forEach((schedule) => {
    console.log(`${schedule.day}: ${schedule.subjects.join(", ")}`);
});
