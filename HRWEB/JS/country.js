const country_link= "https://animated-space-system-g46jr6q4pg7gcw7r5-6006.app.github.dev/country";

fetch(country_link).then(response=>{
    if(!response.ok)
        throw new Error("FAiled to fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");
    data.forEach(c=>{
        const row= document.createElement("tr");

        row.innerHTML= `
        <td>${c.country_id} </td>
        <td>${c.country_name} </td>
        <td>${c.region_id} </td>
        `;
        tbody.appendChild(row);
    }); 
}).catch(err=>{
    console.log(err.message);
});