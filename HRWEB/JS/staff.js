const staff_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/stff";

// Fetch staff data
fetch(staff_Link)
  .then(response => {
    if (!response.ok) throw new Error("Failed to fetch staff data");
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#staff tbody");
    data.forEach(st => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${st.staff_id}</td>
        <td>${st.staff_name}</td>
        <td>${st.staff_role}</td>
        <td>${st.login_info}</td>
        <td>${st.salary}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Fetch error:", err);
  });

// Add staff form
document.getElementById("StaffForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const staff_name = document.getElementById("staff_name").value.trim();
  const staff_role = document.getElementById("staff_role").value.trim();
  const login_info = document.getElementById("login_info").value.trim();
  const salary = parseFloat(document.getElementById("salary").value.trim());

  if (!staff_name || !staff_role || !login_info || isNaN(salary)) {
    alert("Please fill all fields correctly.");
    return;
  }

  const bodyData = {
    staff_name,
    staff_role,
    login_info,
    salary
  };

  console.log("Sending staff data:", bodyData); // Debug line

  try {
    const response = await fetch(staff_Link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Server responded with:", errText); // Debug server error
      throw new Error("Failed to add staff: " + errText);
    }

    const addedStaff = await response.json();

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${addedStaff.staff_id}</td>
      <td>${addedStaff.staff_name}</td>
      <td>${addedStaff.staff_role}</td>
      <td>${addedStaff.login_info}</td>
      <td>${addedStaff.salary}</td>
    `;
    document.querySelector("#staff tbody").appendChild(row);

    document.getElementById("StaffForm").reset();
    alert("Staff added successfully!");

  } catch (err) {
    console.error("Add staff error:", err);
    alert("Error adding staff: " + err.message);
  }
});
