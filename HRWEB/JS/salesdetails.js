const details_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/sdetail";

fetch(details_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#SALEDETAILS tbody");

    data.forEach(sd=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${sd.sales_detail_id}</td>
        <td>${sd.sale_id}</td>
	<td>${sd.product_id}</td>
	<td>${sd.sale_detail_quantity}</td>
	<td>${sd.sale_detail_price}</td>
        <td>${sd.product_type}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});