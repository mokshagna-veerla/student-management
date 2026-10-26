
let students = [];

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();

    if (name === "" || roll === "") {
        document.getElementById("message").textContent =
            "Please enter name and roll number";
        return;
    }

    students.push({ name: name, roll: roll });

    let li = document.createElement("li");
    li.textContent = name + " - " + roll;
    document.getElementById("list").appendChild(li);

    document.getElementById("message").textContent =
        "Student registered successfully";
}

function searchStudent() {
    let roll = document.getElementById("searchRoll").value.trim();

    let student = students.find(function(s) {
        return s.roll === roll;
    });

    if (student) {
        document.getElementById("result").textContent =
            "Found: " + student.name + " - " + student.roll;
    } else {
        document.getElementById("result").textContent =
            "Student not found";
    }
}
