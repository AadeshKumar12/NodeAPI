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

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Succefully....on PORT ${PORT}`);});