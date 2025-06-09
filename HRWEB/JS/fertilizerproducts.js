const Fert_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/fert";

fetch(Fert_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#fertilizer tbody");

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