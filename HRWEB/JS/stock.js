const Stock_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/stck";

fetch(Stock_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#stock tbody");

    data.forEach(sk=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${sk.stock_id}</td>
	<td>${sk.product_id}</td>
	<td>${sk.product_quantity}</td>
        <td>${sk.product_type}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});