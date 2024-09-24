import { Request,Response } from "express";
import db from "../config/db";

export default {
  async create(req:Request, res:Response){
    const {name, status,product, business_idea,description, address,picture, business_name, province,district, state,phone2,email,phone1,business_year,category} = req.body;
    const sql = 'INSERT INTO mdl_startups(name,product, business_idea,description, address, business_name, province, state,phone2,email,phone1,business_year,category) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    const mentor = [name,product, business_idea,description, address, business_name, province, state,phone2,email,phone1,business_year,category];

    db.query(sql,mentor,(error,data)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      res.status(200).json({startup:data});
    }) 
  },
  async getAll(req:Request, res:Response){
    const sql = 'SELECT * FROM mdl_startups';

    db.query(sql, (error,data)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      res.status(200).json({startups:data});
    })
  },
  async getById(req:Request, res:Response){
   const {id} = req.params
   const sql = 'SELECT * FROM mdl_startups WHERE id = ?'
   const mentor =[id]

   db.query(sql, mentor,(error,data)=>{
    if(error) return res.json({message:"erro encontrado",erro:error});

    res.status(200).json({startup:data});
  }) 
  },
  async update(req:Request, res:Response){
    const {id} = req.params
    const {name, status,product, business_idea,description, address,picture, business_name, province,district, state,phone2,email,phone1,business_year,category} = req.body;
    const mentor = [name, status,product, business_idea,description, address,picture, business_name, province,district, state,phone2,email,phone1,business_year,category,id]
   const sql = 'UPDATE mdl_startups SET name=?, status=?,product=?, business_idea=?,description=?, address=?,picture=?, business_name=?, province=?,district=?, state=?,phone2=?,email=?,phone1=?,business_year=?,category=? WHERE id = ?'

   db.query(sql,mentor,(error,data)=>{
    if(error) return res.json({message:"erro encontrado",erro:error});

    res.status(200).json({startup:data});
  }) 
  },
  async delete(req:Request, res:Response){
    const {id} = req.params
    const sql = 'DELETE FROM mdl_startups WHERE id = ?'

    const mentor = [id];
 
    db.query(sql,mentor,(error,data)=>{
     if(error) return res.json({message:"erro encontrado",erro:error});
 
     res.status(200).json({startup:data});
   }) 
  },
}