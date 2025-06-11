const owner_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/owner";

fetch(owner_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const form = document.getElementById('ownerForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const ownerData = {
    owner_id: document.getElementById('owner_id').value,
    owner_name: document.getElementById('owner_name').value,
    owner_contact_number: document.getElementById('owner_contact_number').value,
    login_info: document.getElementById('login_info').value,
  };

  try {
    const response = await fetch('https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/owner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ownerData),
    });

    if (!response.ok) throw new Error("Failed to add owner");

    alert('✅ Owner Added Successfully!');
    form.reset();

    // Optionally reload table data
    location.reload(); // or manually append the new row
  } catch (error) {
    alert(`❌ ${error.message}`);
  }
});


    data.forEach(o=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${o.owner_id}</td>
        <td>${o.owner_name}</td>
	<td>${o.owner_contact_number}</td>
        <td>${o.login_info}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});