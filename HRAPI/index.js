const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO FERTILIZER AND PESTICIDE MANAGEMENT SYSTEM');
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/owner',async(req,res)=>{
    try{
        const result = await pool.query('select * from owner');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/cust',async(req,res)=>{
    try{
        const result = await pool.query('select * from customers');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/accs',async(req,res)=>{
    try{
        const result = await pool.query('select * from Accounts');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/prod',async(req,res)=>{
    try{
        const result = await pool.query('select * from products');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/remnd',async(req,res)=>{
    try{
        const result = await pool.query('select * from Reminders');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/crdtrec',async(req,res)=>{
    try{
        const result = await pool.query('select * from Credit_Recovery');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/Sdetail',async(req,res)=>{
    try{
        const result = await pool.query('select * from Sales_Details');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});


app.get('/prodsale',async(req,res)=>{
    try{
        const result = await pool.query('select * from Sales');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});


app.get('/stck',async(req,res)=>{
    try{
        const result = await pool.query('select * from Stock');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});


app.get('/pest',async(req,res)=>{
    try{
        const result = await pool.query('select * from Pesticide_Products');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/fert',async(req,res)=>{
    try{
        const result = await pool.query('select * from Fertilizer_Products');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});



app.get('/stff',async(req,res)=>{
    try{
        const result = await pool.query('select * from Staff');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});
app.post('/accs', async (req, res) => {
  const { account_id, entry_type, account_description, account_date } = req.body;

  if (!account_id || !entry_type || !account_description || !account_date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Save to database
  const newAccount = new Account({ account_id, entry_type, account_description, account_date });
  await newAccount.save();

  res.status(201).json({ message: "Account added", data: newAccount });
});


app.post('/stff', async (req, res) => {
  try {
    const { staff_id, staff_name, staff_role, login_info, salary } = req.body;

    if (!staff_id || !staff_name || !staff_role || !login_info || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await pool.query(
      `INSERT INTO Staff (staff_id, staff_name, staff_role, login_info, salary)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [staff_id, staff_name, staff_role, login_info, salary]
    );

    res.status(201).json({ message: "Staff added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// POST /owner
app.post('/owner', async (req, res) => {
  try {
    const { owner_id, owner_name, login_info } = req.body;
    if (!owner_id || !owner_name || !login_info) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Owner (owner_id, owner_name, login_info) VALUES ($1, $2, $3) RETURNING *',
      [owner_id, owner_name, login_info]
    );
    res.status(201).json({ message: "Owner added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /cust
app.post('/cust', async (req, res) => {
  try {
    const { customer_id, customer_name, contact_info } = req.body;
    if (!customer_id || !customer_name || !contact_info) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Customers (customer_id, customer_name, contact_info) VALUES ($1, $2, $3) RETURNING *',
      [customer_id, customer_name, contact_info]
    );
    res.status(201).json({ message: "Customer added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /prod
app.post('/prod', async (req, res) => {
  try {
    const { product_id, product_name, product_type, price } = req.body;
    if (!product_id || !product_name || !product_type || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Products (product_id, product_name, product_type, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [product_id, product_name, product_type, price]
    );
    res.status(201).json({ message: "Product added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /remnd
app.post('/remnd', async (req, res) => {
  try {
    const { reminder_id, reminder_text, reminder_date } = req.body;
    if (!reminder_id || !reminder_text || !reminder_date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Reminders (reminder_id, reminder_text, reminder_date) VALUES ($1, $2, $3) RETURNING *',
      [reminder_id, reminder_text, reminder_date]
    );
    res.status(201).json({ message: "Reminder added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /crdtrec
app.post('/crdtrec', async (req, res) => {
  try {
    const { recovery_id, customer_id, amount_recovered, recovery_date } = req.body;
    if (!recovery_id || !customer_id || !amount_recovered || !recovery_date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Credit_Recovery (recovery_id, customer_id, amount_recovered, recovery_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [recovery_id, customer_id, amount_recovered, recovery_date]
    );
    res.status(201).json({ message: "Recovery added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /Sdetail
app.post('/Sdetail', async (req, res) => {
  try {
    const { sale_detail_id, sale_id, product_id, quantity } = req.body;
    if (!sale_detail_id || !sale_id || !product_id || !quantity) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Sales_Details (sale_detail_id, sale_id, product_id, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
      [sale_detail_id, sale_id, product_id, quantity]
    );
    res.status(201).json({ message: "Sales detail added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /prodsale
app.post('/prodsale', async (req, res) => {
  try {
    const { sale_id, customer_id, sale_date, total_amount, payment_type } = req.body;
    if (!sale_id || !customer_id || !sale_date || !total_amount || !payment_type) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Sales (sale_id, customer_id, sale_date, total_amount, payment_type) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [sale_id, customer_id, sale_date, total_amount, payment_type]
    );
    res.status(201).json({ message: "Sale added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /stck
app.post('/stck', async (req, res) => {
  try {
    const { stock_id, product_id, quantity, last_updated } = req.body;
    if (!stock_id || !product_id || !quantity || !last_updated) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Stock (stock_id, product_id, quantity, last_updated) VALUES ($1, $2, $3, $4) RETURNING *',
      [stock_id, product_id, quantity, last_updated]
    );
    res.status(201).json({ message: "Stock added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /pest
app.post('/pest', async (req, res) => {
  try {
    const { pesticide_id, name, type, price } = req.body;
    if (!pesticide_id || !name || !type || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Pesticide_Products (pesticide_id, name, type, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [pesticide_id, name, type, price]
    );
    res.status(201).json({ message: "Pesticide product added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /fert
app.post('/fert', async (req, res) => {
  try {
    const { fertilizer_id, name, type, price } = req.body;
    if (!fertilizer_id || !name || !type || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      'INSERT INTO Fertilizer_Products (fertilizer_id, name, type, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [fertilizer_id, name, type, price]
    );
    res.status(201).json({ message: "Fertilizer product added", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Succefully....on PORT ${PORT}`);});