const empcount_link= "https://animated-space-system-g46jr6q4pg7gcw7r5-6006.app.github.dev/tolemp";

fetch(employee_link).then(response=>{
    if(!response.ok)
        throw new Error("FAiled to fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#employeetabletable tbody");
    data.forEach(e=>{
        const row= document.createElement("tr");

        row.innerHTML= `
        <td>${e.employee_id} </td>
        <td>${e.first_name} </td>
        <td>${e.last_name} </td>
        <td>${e.email} </td>
        <td>${e.phone_number} </td>
        <td>${e.hire_date} </td>
        <td>${e.job_id} </td>
        <td>${e.salary} </td>
        <td>${e.commission_pct} </td>
        <td>${e.manager_id} </td>
        <td>${e.department_id} </td>
        `;
        tbody.appendChild(row);
    }); 
}).catch(err=>{
    console.log(err.message);
});