import {Request, Response} from 'express'
import db from '../config/db'
import crypt from 'crypt'
import * as crypto from 'crypto';

// Função para criar o hash SHA-512 com o salt
function hashPassword(password: string, salt: string): string {
  return crypto.createHash('sha512')
    .update(password + salt)
    .digest('base64');
}

// Função para comparar a senha fornecida com o hash armazenado
function comparePasswords(providedPassword: string, storedHash: string): boolean {
  const [algorithm, salt, hash] = storedHash.split('$').slice(2); // Extrai o salt e o hash
  const resultHash = hashPassword(providedPassword, salt); // Gera o hash com a senha fornecida
  console.log(resultHash)
  return resultHash === hash; // Compara o hash gerado com o hash armazenado
}
export default {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const sql = `SELECT * FROM mdl_user where username = ?`
    const log = [username]

    db.query(sql,log,async(error, data,)=>{
      if(error) return res.json({message:"erro encontrado",erro:error});

      const isPasswordCorrect = comparePasswords(password, data[0].password);

      console.log(isPasswordCorrect, data[0].password)

      // if () {
      //   return res.status(401).json({ message: 'usuário ou senha é invalida' });
      // }
      return res.json(data)
    })
  },
  async getUsers(req:Request, res:Response){
    const sql = "SELECT * FROM mdl_user"
    db.query(sql,(err,data)=>{
      if(err) return res.json({message:"erro encontrado",erro:err});

      return res.json(data)
    })
  }
}