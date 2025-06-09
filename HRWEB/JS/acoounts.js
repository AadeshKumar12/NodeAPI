const Accounts_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/accs";

fetch(Accounts_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#accstable tbody");

    data.forEach(a=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${a.account_id}</td>
        <td>${a.entry_type}</td>
	<td>${a.account_description}</td>
        <td>${a.account_date}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});