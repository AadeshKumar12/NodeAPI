const Customers_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/cust";

fetch(Customers_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#customer tbody");
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addCustomerBtn");

  addBtn.addEventListener("click", async () => {
    const customerId = document.getElementById("customerIdInput").value.trim();
    const customerName = document.getElementById("customerNameInput").value.trim();
    const contactNumber = document.getElementById("contactNumberInput").value.trim();
    const address = document.getElementById("addressInput").value.trim();
    const loginInfo = document.getElementById("loginInfoInput").value.trim();

    if (!customerId || !customerName || !contactNumber || !address || !loginInfo) {
      alert("⚠️ All fields are required!");
      return;
    }

    const customerData = {
      customer_id: parseInt(customerId),
      customer_name: customerName,
      contact_number: contactNumber,
      address: address,
      login_info: loginInfo
    };

    try {
      const response = await fetch("https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/cust", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(customerData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Customer Added Successfully!");
        location.reload(); // Refresh to show new data
      } else {
        alert("❌ Failed to add customer:\n" + JSON.stringify(result));
      }
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  });
});

    data.forEach(cu=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${cu.customer_id}</td>
        <td>${cu.customer_name}</td>
	<td>${cu.contact_number}</td>
	<td>${cu.address}</td>
        <td>${cu.login_info}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});