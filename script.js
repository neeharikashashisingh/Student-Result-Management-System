  // Modal Control
function openModal() { document.getElementById("studentModal").style.display = "flex"; }
function closeModal() { document.getElementById("studentModal").style.display = "none"; }

// Form Handling
document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Values
    const name = document.getElementById("stuName").value;
    const roll = document.getElementById("stuRoll").value;
    const s1 = parseInt(document.getElementById("sql").value);
    const s2 = parseInt(document.getElementById("java").value);
    const s3 = parseInt(document.getElementById("net").value);

    // Math
    const total = s1 + s2 + s3;
    const avg = total / 3;
    let grade = "F"; let gClass = "f";

    if (avg >= 80) { grade = "A+"; gClass = "a"; }
    else if (avg >= 60) { grade = "B"; gClass = "b"; }

    // Table Insert
    const tableBody = document.querySelector("#studentTable tbody");
    const row = tableBody.insertRow();
    row.innerHTML = `
        <td>${roll}</td>
        <td><strong>${name}</strong></td>
        <td>${s1}</td>
        <td>${s2}</td>
        <td>${s3}</td>
        <td>${total}/300</td>
        <td><span class="grade ${gClass}">${grade}</span></td>
        <td><button class="del-btn" onclick="deleteStudent(this)"><i class="fas fa-trash"></i></button></td>
    `;

    updateAnalytics();
    closeModal();
    this.reset();
});

function deleteStudent(btn) {
    btn.closest('tr').remove();
    updateAnalytics();
}

function searchTable() {
    let filter = document.getElementById("tableSearch").value.toUpperCase();
    let rows = document.querySelector("#studentTable tbody").rows;
    for (let row of rows) {
        let text = row.cells[0].textContent.toUpperCase();
        row.style.display = text.includes(filter) ? "" : "none";
    }
}

function updateAnalytics() {
    const rows = document.querySelector("#studentTable tbody").rows;
    document.getElementById("totalCount").innerText = rows.length;
    
    // Logic for Avg can be added here if needed
}