const staff_Link = "https://probable-cod-jj9v795jg6762wxj-6006.app.github.dev/stff";

fetch(staff_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#staff tbody");

    data.forEach(st=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${st.staff_id}</td>
        <td>${st.staff_name}</td>
	<td>${st.staff_role}</td>
	<td>${st.salary}</td>
        <td>${st.login_info}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});