const Fert_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/fert";

fetch(Fert_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#fertilizer tbody");
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addFertilizerBtn");

  addBtn.addEventListener("click", async () => {
    const fertilizerId = document.getElementById("fertilizerIdInput").value.trim();
    const fertilizerName = document.getElementById("fertilizerNameInput").value.trim();
    const fertilizerQuantity = document.getElementById("fertilizerQuantityInput").value.trim();
    const fertilizerType = document.getElementById("fertilizerTypeInput").value.trim();
    const fertilizerPrice = document.getElementById("fertilizerPriceInput").value.trim();

    if (!fertilizerId || !fertilizerName || !fertilizerQuantity || !fertilizerType || !fertilizerPrice) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const fertilizerData = {
      fertilizer_id: parseInt(fertilizerId),
      fertilizer_name: fertilizerName,
      fertilizer_quantity: parseInt(fertilizerQuantity),
      fertilizer_type: fertilizerType,
      fertilizer_price: parseFloat(fertilizerPrice)
    };

    try {
      const response = await fetch("https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/fert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fertilizerData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Fertilizer added successfully!");
        location.reload(); // Refresh page to show updated data
      } else {
        alert("❌ Failed to add fertilizer:\n" + JSON.stringify(result));
      }
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  });
});

    data.forEach(f=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${f.fertilizer_id}</td>
        <td>${f.fertilizer_name}</td>
	<td>${f.fertilizer_quantity}</td>
	<td>${f.fertilizer_type}</td>
        <td>${f.fertilizer_price}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});