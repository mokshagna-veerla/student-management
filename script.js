function searchStudent() {
    let roll = document.getElementById("searchRoll").value.trim();

    if (roll === "") {
        document.getElementById("result").textContent =
            "Please enter a roll number";
        return;
    }

    document.getElementById("result").textContent =
        "Searching for roll number: " + roll;
}