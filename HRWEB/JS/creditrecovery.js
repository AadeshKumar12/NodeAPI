const CreditRecovery_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/crdtrec";

fetch(CreditRecovery_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#creditrec tbody");
document.addEventListener("DOMContentLoaded", () => {
  const addRecoveryBtn = document.getElementById("addRecoveryBtn");

  addRecoveryBtn.addEventListener("click", async () => {
    const recoveryId = document.getElementById("recoveryIdInput").value.trim();
    const saleId = document.getElementById("saleIdInput").value.trim();
    const dueDate = document.getElementById("dueDateInput").value;
    const recoveryStatus = document.getElementById("recoveryStatusInput").value.trim();
    const recoveryAmount = document.getElementById("recoveryAmountInput").value.trim();

    if (!recoveryId || !saleId || !dueDate || !recoveryStatus || !recoveryAmount) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const recoveryData = {
      recovery_id: parseInt(recoveryId),
      sale_id: parseInt(saleId),
      due_date: dueDate,
      recovery_status: recoveryStatus,
      recovery_amount: parseFloat(recoveryAmount)
    };

    try {
      const response = await fetch("https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/crdtrec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recoveryData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Credit Recovery Record Added Successfully!");
        location.reload();
      } else {
        alert("❌ Failed to add record:\n" + JSON.stringify(result));
      }
    } catch (error) {
      alert("❌ Network Error:\n" + error.message);
    }
  });
});

    data.forEach(cd=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${cd.recovery_id}</td>
        <td>${cd.sale_id}</td>
	    <td>${cd.due_date}</td>
        <td>${cd.recovery_amount}</td>
	    <td>${cd.recovery_status}</td>
        
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});