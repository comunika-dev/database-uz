import { Request,Response } from "express";
import db from "../config/db";

export default {
  async create(req:Request, res:Response){
    const {name, phone1,phone2,address, description,email, province, district, user_name} = req.body;
    const sql = 'INSERT INTO mdl_mentor(name, phone1,phone2,address, description,email, province, district) VALUES (?,?,?,?,?,?,?,?)';
    const mentor = [name, phone1,phone2,address, description,email, province, district];

    db.query(sql,mentor,(error,data)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      res.status(200).json({mentor:data});
    }) 
  },
  async getAll(req:Request, res:Response){
    const sql = 'SELECT * FROM mdl_mentor';

    db.query(sql, (error,data)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      res.status(200).json({mentors:data});
    })
  },
  async getById(req:Request, res:Response){
   const {id} = req.params
   const sql = 'SELECT * FROM mdl_mentor WHERE id = ?'
   const mentor =[id]

   db.query(sql, mentor,(error,data)=>{
    if(error) return res.json({message:"erro encontrado",erro:error});

    res.status(200).json({mentor:data});
  }) 
  },
  async update(req:Request, res:Response){
    const {id} = req.params
    const {name, phone1,phone2,address, description,email,district, province, state, user_name} = req.body;
    const mentor = [name, phone1,phone2,address, description,email,district, province, state, user_name,id]
   const sql = 'UPDATE mdl_mentor SET name=?, phone1=?,phone2=?,address=?, description=?,email=?,district=?, province=?, state=?, user_name=? WHERE id = ?'

   db.query(sql,mentor,(error,data)=>{
    if(error) return res.json({message:"erro encontrado",erro:error});

    res.status(200).json({mentor:data});
  }) 
  },
  async delete(req:Request, res:Response){
    const {id} = req.params
    const sql = 'DELETE FROM mdl_mentor WHERE id = ?'

    const mentor = [id];
 
    db.query(sql,mentor,(error,data)=>{
     if(error) return res.json({message:"erro encontrado",erro:error});
 
     res.status(200).json({mentor:data});
   }) 
  },
}