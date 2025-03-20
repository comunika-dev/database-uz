import mysql from 'mysql'

const db = mysql.createConnection({
  host     : `${process.env.INCUBATOR_DB_HOST}`,
  user     : `${process.env.INCUBATOR_DB_USER}`,
  password : `${process.env.INCUBATOR_DB_PASSWORD}`,
  database : `${process.env.INCUBATOR_DB_NAME}`
});


 
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados do Moodle');
});

export default db;