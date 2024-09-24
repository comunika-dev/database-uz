import { Request,Response } from "express";
import db from "../config/db";

export default {
  async create(req:Request, res:Response){
    const {name, investment_area, description, address, phone1, phone2, province,user_name, state, email} = req.body;
    const sql = 'INSERT INTO mdl_investor(name, investment_area, description, address, phone1, phone2, province, state, email) VALUES (?,?,?,?,?,?,?,?,?)';
    const mentor = [name, investment_area, description, address, phone1, phone2, province, state, email];

    db.query(sql,mentor,(error,data)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      res.status(200).json({investor:data});
    }) 
  },
  async getAll(req:Request, res:Response){
    const sql = 'SELECT * FROM mdl_investor';

    db.query(sql, (error,data)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      res.status(200).json({investors:data});
    })
  },
  async getById(req:Request, res:Response){
   const {id} = req.params
   const sql = 'SELECT * FROM mdl_investor WHERE id = ?'
   const mentor =[id]

   db.query(sql, mentor,(error,data)=>{
    if(error) return res.json({message:"erro encontrado",erro:error});

    res.status(200).json({investor:data});
  }) 
  },
  async update(req:Request, res:Response){
    const {id} = req.params
    const {name, investment_area, description, address, phone1, phone2, province,user_name, state, email} = req.body;
    const mentor = [name, investment_area, description, address, phone1, phone2, province,user_name, state, email,id]
   const sql = 'UPDATE mdl_investor SET name=?, investment_area=?, description=?, address=?, phone1=?, phone2=?, province=?,user_name=?, state=?, email=? WHERE id = ?'

   db.query(sql,mentor,(error,data)=>{
    if(error) return res.json({message:"erro encontrado",erro:error});

    res.status(200).json({investor:data});
  }) 
  },
  async delete(req:Request, res:Response){
    const {id} = req.params
    const sql = 'DELETE FROM mdl_investor WHERE id = ?'

    const mentor = [id];
 
    db.query(sql,mentor,(error,data)=>{
     if(error) return res.json({message:"erro encontrado",erro:error});
 
     res.status(200).json({investor:data});
   }) 
  },
}