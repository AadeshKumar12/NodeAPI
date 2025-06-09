const CreditRecovery_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/crdtrec";

fetch(CreditRecovery_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#creditrec tbody");

    data.forEach(cd=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${cd.recovery_id}</td>
        <td>${cd.sale_id}</td>
	    <td>${cd.due_date}</td>
        <td>${cd.recovery_amount}</td>
	    <td>${cd.recovery_status}</td>
        
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});