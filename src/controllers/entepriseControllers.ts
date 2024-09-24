import { Request,Response } from "express";
import db from "../config/db";

export default {
  async create(req:Request, res:Response){
    const {name, description, sector, phone1,phone2, province, district, product_and_or_service, website, address, year_of_creation, user_name, acceleration} = req.body;
    const sql = 'INSERT INTO mdl_enteprise(name, description, phone1,phone2, province, district, product_and_or_service, website, address, year_of_creation,acceleration) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
    const mentor = [name, description, phone1,phone2, province, district, product_and_or_service, website, address, year_of_creation,acceleration];

    db.query(sql,mentor,(error,data)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      res.status(200).json({enteprise:data});
    }) 
  },
  async getAll(req:Request, res:Response){
    const sql = 'SELECT * FROM mdl_enteprise';

    db.query(sql, (error,data)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      res.status(200).json({enteprises:data});
    })
  },
  async getById(req:Request, res:Response){
   const {id} = req.params
   const sql = 'SELECT * FROM mdl_enteprise WHERE id = ?'
   const mentor =[id]

   db.query(sql, mentor,(error,data)=>{
    if(error) return res.json({message:"erro encontrado",erro:error});

    res.status(200).json({enteprise:data});
  }) 
  },
  async update(req:Request, res:Response){
    const {id} = req.params
    const {name, description, sector, phone1,phone2, province, district, product_and_or_service, website, address, year_of_creation, user_name,acceleration} = req.body;
    const mentor = [name, description, sector, phone1,phone2, province, district, product_and_or_service, website, address, year_of_creation, user_name,acceleration,id]
   const sql = 'UPDATE mdl_enteprise SET name=?, description=?, sector=?, phone1=?,phone2=?, province=?, district=?, product_and_or_service=?, website=?, address=?, year_of_creation=?, user_name=?,acceleration=? WHERE id = ?'

   db.query(sql,mentor,(error,data)=>{
    if(error) return res.json({message:"erro encontrado",erro:error});

    res.status(200).json({enteprise:data});
  }) 
  },
  async delete(req:Request, res:Response){
    const {id} = req.params
    const sql = 'DELETE FROM mdl_enteprise WHERE id = ?'

    const mentor = [id];
 
    db.query(sql,mentor,(error,data)=>{
     if(error) return res.json({message:"erro encontrado",erro:error});
 
     res.status(200).json({mentor:data});
   }) 
  },
}