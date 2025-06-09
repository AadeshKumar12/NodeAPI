const rem_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/remnd";

fetch(rem_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#reminder tbody");

    data.forEach(rr=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${rr.reminder_id}</td>
        <td>${rr.reminder_type}</td>
	<td>${rr.reminder_message}</td>
        <td>${rr.target_date}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});