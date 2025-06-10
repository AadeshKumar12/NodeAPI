const Accounts_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/accs";

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.querySelector("#accstable tbody");
  const form = document.getElementById("accountForm");

  const entryType = document.getElementById("entry_type");
  const accDesc = document.getElementById("account_description");
  const accDate = document.getElementById("account_date");

  // Load accounts on page load
  loadAccounts();

  // Submit form handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newAccount = {
      entry_type: entryType.value,
      account_description: accDesc.value,
      account_date: accDate.value,
    };

    fetch(Accounts_Link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccount),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Insert failed");
        return res.json();
      })
      .then((data) => {
        alert("Account inserted successfully");
        form.reset();
        loadAccounts(); // Refresh table
      })
      .catch((err) => {
        console.error(err.message);
        alert("Error inserting account.");
      });
  });

  // Fetch and display all accounts
  function loadAccounts() {
    fetch(Accounts_Link)
      .then((response) => {
        if (!response.ok) throw new Error("Fetch failed");
        return response.json();
      })
      .then((data) => {
        tbody.innerHTML = ""; // clear table
        if (data.length === 0) {
          tbody.innerHTML = "<tr><td colspan='4' class='text-center'>No data available</td></tr>";
          return;
        }

        data.forEach((a) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${a.account_id || "N/A"}</td>
            <td>${a.entry_type}</td>
            <td>${a.account_description}</td>
            <td>${a.account_date}</td>
          `;
          tbody.appendChild(row);
        });
      })
      .catch((err) => {
        console.error("Error loading data:", err.message);
        tbody.innerHTML = "<tr><td colspan='4' class='text-danger text-center'>Failed to load data</td></tr>";
      });
  }
});
