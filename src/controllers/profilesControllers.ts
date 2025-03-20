import { Request, Response } from "express";
import db from "../config/db";

export default {
  async create(req: Request, res: Response) {
    const {
      type,
      name,
      business_name,
      company_name,
      description,
      province,
      district,
      product_service,
      creation_year,
      incubation,
      acceleration,
      connection,
      address,
      contact,
      email
    } = req.body;

    const sql = `INSERT INTO mdl_profiles 
      (type, name, business_name, company_name, description, province, district, product_service, 
      creation_year, incubation, acceleration, connection, address, contact, email) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      type,
      name,
      business_name,
      company_name,
      description,
      province,
      district,
      product_service,
      creation_year,
      incubation,
      acceleration,
      connection,
      address,
      contact,
      email
    ];

    db.query(sql, values, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profile: data });
    });
  },

  async getAll(req: Request, res: Response) {
    const sql = "SELECT * FROM mdl_profiles";

    db.query(sql, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profiles: data });
    });
  },
  async getAllEnteprise(req: Request, res: Response) {
    const sql = "SELECT * FROM mdl_profiles where type='Empresário'";

    db.query(sql, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profiles: data });
    });
  },
  async getAllInvestor(req: Request, res: Response) {
    const sql = "SELECT * FROM mdl_profiles where type='Investidor'";

    db.query(sql, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profiles: data });
    });
  },
  async getAllMentors(req: Request, res: Response) {
    const sql = "SELECT * FROM mdl_profiles where type='Mentor'";

    db.query(sql, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profiles: data });
    });
  },
  async getAllStartup(req: Request, res: Response) {
    const sql = "SELECT * FROM mdl_profiles where type='Empreendedor'";

    db.query(sql, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profiles: data });
    });
  },
  async getAllConsultants(req: Request, res: Response) {
    const sql = "SELECT * FROM mdl_profiles where type='Consultor'";

    db.query(sql, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profiles: data });
    });
  },
  async getAllTrainers(req: Request, res: Response) {
    const sql = "SELECT * FROM mdl_profiles where type='Formador'";

    db.query(sql, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profiles: data });
    });
  },
  async getAllOther(req: Request, res: Response) {
    const sql = "SELECT * FROM mdl_profiles where type='Estudante' or type='Outro'";

    db.query(sql, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profiles: data });
    });
  },
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const sql = "SELECT * FROM mdl_profiles WHERE id = ?";
    const values = [id];

    db.query(sql, values, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profile: data });
    });
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
      type,
      name,
      business_name,
      company_name,
      description,
      province,
      district,
      product_service,
      creation_year,
      incubation,
      acceleration,
      connection,
      address,
      contact,
      email
    } = req.body;

    const sql = `UPDATE mdl_profiles 
      SET type=?, name=?, business_name=?, company_name=?, description=?, province=?, district=?, 
      product_service=?, creation_year=?, incubation=?, acceleration=?, connection=?, address=?, 
      contact=?, email=? 
      WHERE id = ?`;

    const values = [
      type,
      name,
      business_name,
      company_name,
      description,
      province,
      district,
      product_service,
      creation_year,
      incubation,
      acceleration,
      connection,
      address,
      contact,
      email,
      id
    ];

    db.query(sql, values, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ profile: data });
    });
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const sql = "DELETE FROM mdl_profiles WHERE id = ?";
    const values = [id];

    db.query(sql, values, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({ message: "Profile deleted successfully" });
    });
  },

  async getUser(req:Request,res:Response){
    const {token} = req.params;
    const sql = "SELECT * FROM mdl_profiles WHERE token = ?";
    const values = [token]
    
    db.query(sql, values, (error, data) => {
      if (error) return res.json({ message: "Error encountered", error });

      res.status(200).json({profile:data});
    });

  }
};
