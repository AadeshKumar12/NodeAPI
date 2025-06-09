const owner_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/owner";

fetch(owner_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#owner tbody");

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