const Customers_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/cust";

fetch(Customers_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#customer tbody");

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