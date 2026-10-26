function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Please enter all details");
        return;
    }

    let li = document.createElement("li");
    li.textContent = name + " - " + roll;
    document.getElementById("list").appendChild(li);
}
