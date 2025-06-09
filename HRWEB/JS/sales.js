const sales_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/prodsale";

fetch(sales_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#SALES tbody");

    data.forEach(ss=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${ss.sales_id}</td>
        <td>${ss.customer_id}</td>
	<td>${ss.staff_id}</td>
	<td>${ss.sale_date}</td>
	<td>${ss.pay_type}</td>
        <td>${ss.total}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});