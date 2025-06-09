const pest_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/pest";

fetch(pest_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#pesticide tbody");

    data.forEach(pp=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${pp.pesticide_id}</td>
        <td>${pp.pesticide_name}</td>
	<td>${pp.pesticide_price}</td>
	<td>${pp.pesticide_quantity}</td>
        <td>${pp.pesticide_type}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});