const express= require('express');
const cors= require('cors');
const pool=require('./db');
require('dotenv').config();

const app= express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('Welcome to HR API');
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});


app.get('/emp',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, e.last_name, e.employee_id, jd.* from employees e join job_history jd on jd.employee_id=e.employee_id limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp42',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, e.last_name, e.employee_id, jd.* from employees e left join job_history jd on jd.employee_id=e.employee_id limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp43',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, e.last_name, e.employee_id, jd.*,d.department_name from employees e left join job_history jd on jd.employee_id=e.employee_id left join departments d on e.department_id=d.department_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp44',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, jd.start_date,jd.end_date,jd.job_id,d.department_name,l.street_address,l.city from employees e left join job_history jd on e.employee_id = jd.employee_id inner join departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp45',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, jd.start_date,jd.end_date,jd.job_id,c.country_name,l.city from employees e left join job_history jd on jd.employee_id = e.employee_id inner join departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id inner join countries c on l.country_id = c.country_id limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});


app.get('/jobhistory46',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, jd.start_date,jd.end_date,jd.job_id,d.department_name from job_history jd inner join employees e on e.employee_id = jd.employee_id inner join departments d on d.department_id = jd.department_id limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/jobhistory47',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, jd.start_date,jd.end_date,jd.job_id,j.job_title from job_history jd  inner join employees e on e.employee_id = jd.employee_id inner join jobs j on j.job_id = jd.job_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/jobhistory48',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, j.job_title,d.department_id, d.department_name from job_history jd inner join employees e on jd.employee_id = e.employee_id inner join departments d on d.department_id = jd.department_id inner join jobs j  on j.job_id = jd.job_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});


app.get('/jobhistory49',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, j.job_title,l.street_address from job_history jd inner join employees e on jd.employee_id= e.employee_id inner join departments d on d.department_id = jd.department_id inner join jobs j on j.job_id =jd.job_id inner join locations l on l.location_id = d.location_id limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});


app.get('/jobhistory50',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, j.job_title,c.country_name from job_history jd  join employees e on jd.employee_id = e.employee_id join departments d on d.department_id = jd.department_id  join jobs j on j.job_id = jd.job_id join locations l on l.location_id = d.location_id join countries c on c.country_id = l.country_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/region51',async(req,res)=>{
    try{
        const result= await pool.query('select c.*, l.*, r.region_name from regions r join countries c on r.region_id= c.region_id join locations l on c.country_id = l.country_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/country52',async(req,res)=>{
    try{
        const result= await pool.query(' select c.country_name, r.region_name,l.city,l.street_address,l.postal_code from countries c left join regions r on c.region_id =r.region_id left join locations l on c.country_id = l.country_id limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/location53',async(req,res)=>{
    try{
        const result= await pool.query('select c.country_name, r.region_name,l.city,l.street_address,l.postal_code from locations l join countries c on l.country_id = c.country_id join regions r on c.region_id =r.region_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/department54',async(req,res)=>{
    try{
        const result= await pool.query('select e.employee_id, e.first_name, d.department_id ,d.department_name,l.city,l.street_address from departments d left join employees e on d.department_id = e.department_id join locations l on d.location_id =l.location_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp55',async(req,res)=>{
    try{
        const result= await pool.query('select e.employee_id, e.first_name,d.department_id,l.city,l.street_address, c.country_name from employees e left join departments d on e.department_id = d.department_id left join locations l on l.location_id =d.location_id left join countries c on c.country_id = l.country_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp56',async(req,res)=>{
    try{
        const result= await pool.query('select e.employee_id, e.first_name, m.first_name as manager_name, d.department_name,l.city,l.street_address from employees e left join employees m on e.manager_id = m.employee_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/location57',async(req,res)=>{
    try{
        const result= await pool.query('select e.employee_id,e.first_name,j.job_title,d.department_name,l.postal_code,l.city,l.street_address from locations l join departments d on l.location_id = d.location_id join employees e on d.department_id = e.department_id join jobs j on  e.job_id = j.job_id limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp58',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, e.employee_id, m.first_name as manager_name,j.job_title, d.department_name from employees e join jobs j on e.job_id =j.job_id join departments d on e.department_id = d.department_id join employees m on e.manager_id = m.employee_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp59',async(req,res)=>{
    try{
        const result= await pool.query('select e. first_name ,e.employee_id, m.first_name as manager_id, j.job_id,j.job_title,d.department_name,l.city,l.street_address from employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id left join employees m on e.manager_id = m.manager_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/country60',async(req,res)=>{
    try{
        const result= await pool.query('select c.country_name, c.country_id, r.region_name, r.region_id from countries c join regions r on c.region_id =r.region_id where r.region_id =1 limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/department61',async(req,res)=>{
    try{
        const result= await pool.query(`select d.department_name,d.department_id,l.postal_code,l.city from departments d join locations l on d.location_id = l.location_id where lower (l.city) like 'n%' order by l.city limit 4`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp62',async(req,res)=>{
    try{
        const result= await pool.query('select e.employee_id, e.first_name,e.last_name,d.department_name,e.commission_pct from employees e join departments d on e.department_id =d.department_id where e.commission_pct > 0.15 limit 3');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp63',async(req,res)=>{
    try{
        const result= await pool.query('select e.employee_id, e.first_name,e.first_name as manager_name,j.job_title,j.job_id from employees e join jobs j on e.job_id= j.Job_id where e.employee_id in (select manager_id from employees where manager_id is not null) limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/location64',async(req,res)=>{
    try{
        const result= await pool.query(`select l.city,l.street_address,l.postal_code,c.country_name,r.region_name from locations l join countries c on l.country_id =c.country_id join regions r on c.region_id= r.region_id where r.region_name = 'Asia' limit 6`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp65',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.last_name,e.employee_id,e.commission_pct , d.department_name from employees e inner join departments d on e.department_id = d.department_id where e.commission_pct <(select avg (commission_pct) from employees ) limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp66',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, e.salary,j.job_title from employees e join jobs j on e.job_id = j.job_id where e.salary > (select avg (e2.salary) from employees e2  where e2.department_id = e.department_id) limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp67',async(req,res)=>{
    try{
        const result= await pool.query('select first_name,last_name,employee_id ,department_id from employees where  department_id is null limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp68',async(req,res)=>{
    try{
        const result= await pool.query('select e.employee_id, e.first_name,e.last_name from employees e join job_history jd on e.employee_id = jd.employee_id group by e.employee_id having count (jd.job_id)>1 limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/department69',async(req,res)=>{
    try{
        const result= await pool.query('select d.department_name,d.department_id, count(employee_id) as CountOf_Employee from departments d left join employees e on d.department_id= e.department_id group by d.department_id ,d.department_name limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/job70',async(req,res)=>{
    try{
        const result= await pool.query('select j.job_id, j.job_title, sum(e.salary) as total_SALARY from jobs j  join employees e on j.job_id = e.job_id group by j.job_id ,j.job_title limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/department71',async(req,res)=>{
    try{
        const result= await pool.query('select d.department_name,d.department_id, avg (e.commission_pct) as AVerage_Commission from departments d join employees e on d.department_id = e.department_id group by d.department_id,d.department_name limit 4');
        
res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/country72',async(req,res)=>{
    try{
        const result= await pool.query('select c.country_id,c.country_name, max(e.salary) as MAX_SALARY from countries c join locations l  on c.country_id = l.country_id  join departments d on l.location_id = d.location_id  join employees e on d.department_id = e.department_id group by c.country_id, c.country_name limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp73',async(req,res)=>{
    try{
        const result= await pool.query(`select e.first_name,e.last_name, d.department_name,l.city,l.state_province from employees e join departments d on e.department_id= d.department_id join locations l on d.location_id =l.location_id where e.first_name like '%z%' limit 6`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/job74',async(req,res)=>{
    try{
        const result= await pool.query(`select concat(e.first_name, e.last_name) as FULL_NAME,j.job_title, jd.start_date,jd.end_date,d.department_name from jobs j join job_history jd on j.job_id =jd.job_id join employees e on jd.employee_id = e.employee_id join departments d on e.department_id= d.department_id where jd.start_date > '1993-01-01' and end_date < '1997-08-31' limit 6`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp75',async(req,res)=>{
    try{
        const result= await pool.query('select c.country_name, l.city, d.department_name,count(d.department_id) as DPT_NUM from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id group by c.country_name, d.department_name,l.city having count(e.employee_id)>= 2 limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/job76',async(req,res)=>{
    try{
        const result= await pool.query('select concat(e.first_name, e.last_name) as FULL_NAME, j.job_title, jd.start_date, jd.end_date, e.commission_pct from jobs j join job_history jd on j.job_id = jd.job_id join employees e on jd.employee_id = e.employee_id where e.commission_pct is  null limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp77',async(req,res)=>{
    try{
        const result= await pool.query('select concat(e.first_name, e.last_name) as FULL_NAME, c.country_id, c.country_name from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp78',async(req,res)=>{
    try{
        const result= await pool.query('select concat(e.first_name, e.last_name) as FULL_NAME, e.salary, e.department_id from employees e where e.salary in(select min(e2.salary) from employees e2 group by e2.department_id) limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp79',async(req,res)=>{
    try{
        const result= await pool.query('select * from employees where salary = (select max(salary) from employees where salary <(select max(salary) from employees where salary <(select max (salary) from employees))) limit 8');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp80',async(req,res)=>{
    try{
        const result= await pool.query(`select e.employee_id, concat(e.first_name, e.last_name) as FULL_NAME, e.salary from employees e where e.salary >(select avg (salary) from employees) and e.department_id in(select e2.department_id from employees e2 where e2.first_name like '%j%' or e2.last_name like '%j%') limit 6`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/job81',async(req,res)=>{
    try{
        const result= await pool.query(`select e.employee_id, concat(e.first_name, e.last_name) as FULL_NAME, l.city, j.job_title from jobs j  join employees e on j.job_id =e.job_id  join departments d on e.department_id = d.department_id  join locations l on d.location_id = l.location_id where l.city = 'Toronto' limit 6`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp82',async(req,res)=>{
    try{
        const result= await pool.query('select department_id , sum (salary) as TOTAL_SALARY from employees  where department_id >=1 group by department_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp83',async(req,res)=>{
    try{
        const result= await pool.query(`select e.first_name, e.last_name, e.employee_id,c.country_name from employees e join departments d  on e.department_id =d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id where c.country_name ='United Kingdom' limit 4`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp84',async(req,res)=>{
    try{
        const result= await pool.query('select e.employee_id, e.first_name, e.last_name,e.salary, d.department_name from employees e join departments d on e.department_id = d.department_id  where e.salary >(select sum(salary) /2 from employees where department_id = e.department_id) limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp85',async(req,res)=>{
    try{
        const result= await pool.query('select first_name,last_name,employee_id,salary from employees where employee_id in (select manager_id from employees where manager_id is not null) limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp86',async(req,res)=>{
    try{
        const result= await pool.query(`select e.employee_id, concat(e.first_name,'',e.last_name)as FULL_NAME,e.salary, d.department_name,l.city from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id where e.salary = (select max (salary)from employees where hire_date between '2002-01-01' and '2003-12-31') limit 6`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp87',async(req,res)=>{
    try{
        const result= await pool.query(`select e.employee_id, e.first_name,e.last_name,e.department_id,e.salary from employees e where salary < (select avg (salary) from employees) and e.department_id = (select department_id from employees where first_name = 'Laura') limit 5`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/department88',async(req,res)=>{
    try{
        const result= await pool.query('select d.department_name, d.department_id, j.max_salary  from departments d join employees e  on d.department_id = e.department_id join jobs j on e.job_id = j.job_id where max_salary >= 7000  and e.employee_id in (select employee_id from job_history) limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/region89',async(req,res)=>{
    try{
        const result= await pool.query('select r.region_name, min(length(l.postal_code)) as MIn_POSTAL_CODe from regions r join countries c on r.region_id= c.region_id join locations l on c.country_id =l.country_id  where l.postal_code is not null group by r.region_name limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp90',async(req,res)=>{
    try{
        const result= await pool.query('select * from employees order by hire_date desc limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/emp91',async(req,res)=>{
    try{
        const result= await pool.query('select * from employees order by salary asc limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/country92',async(req,res)=>{
    try{
        const result= await pool.query('select c.country_name, count(l.location_id) as TOTAL_LOCATION from countries c join locations l  on c.country_id =l.country_id group by c.country_name order by TOTAL_LOCATION desc limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/department93',async(req,res)=>{
    try{
        const result= await pool.query('select d.department_id, d.department_name,count(e.employee_id) as TOTAL_EMPLOYEES from departments d join employees e on d.department_id = e.department_id group by d.department_id,d.department_name having count(e.employee_id) >5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/job94',async(req,res)=>{
    try{
        const result= await pool.query('select j.job_title, avg(e.salary) as AVERAGE_SALARY from jobs j join employees e on j.job_id =e.job_id group by j.job_title having avg(e.salary) > 15000 limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/country95',async(req,res)=>{
    try{
        const result= await pool.query('select c.country_name, count(l.location_id) as TOTAL_LOCATION from countries c join locations l on c.country_id =l.country_id group by c.country_name having count (l.location_id)>3 limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/emp96',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, length(e.first_name) as F_name_LENGTH from employees e limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/country97',async(req,res)=>{
    try{
        const result= await pool.query('select upper (c.country_name) as _COUNTRY_NAME_IN_UPPERCASE from countries c limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/job98',async(req,res)=>{
    try{
        const result= await pool.query('select j.job_title, substring(j.job_title,1,3) as JOB_TITLE_FIRST_THREE from jobs j limit 8');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/location99',async(req,res)=>{
    try{
        const result= await pool.query('select l.postal_code, substring(l.postal_code, length(l.postal_code) -3,4) as LAST_FOUR_POSTAL_CODE from locations l limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
}); 

app.get('/country',async(req,res)=>{
    try{
        const result= await pool.query('select * from countries ');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/Employeee',async(req,res)=>{
    try{
        const result= await pool.query('select * from employees ');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/tolemp',async(req,res)=>{
    try{
        const result= await pool.query('select count(employee_id) from employees ');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/toldpt',async(req,res)=>{
    try{
        const result= await pool.query('select count(department_id) from departments ');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/tolregion',async(req,res)=>{
    try{
        const result= await pool.query('select count(region_id) from regions ');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

const PORT= process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully.... on PORT ${PORT}`);
});

