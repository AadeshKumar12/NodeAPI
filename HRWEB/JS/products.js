const prod_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/prod";

fetch(prod_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#products tbody");

    data.forEach(p=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${p.product_id}</td>
        <td>${p.product_name}</td>
	<td>${p.product_type}</td>
        <td>${p.product_description}</td>
        
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});