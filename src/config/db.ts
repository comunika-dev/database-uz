import mysql from 'mysql'

const db = mysql.createConnection({
  host     : "srv1385.hstgr.io",
  user     : "u803280130_incubator",
  password : "2GqBUuK!:",
  database : "u803280130_incubator"
});


 
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados do Moodle');
});

export default db;