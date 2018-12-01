const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../exercise01.sqlite', sqlite3.OPEN_READWRITE, (err)=>{
  if(err){
    return console.log(err.message);
  }
  console.log('Deu certo')
})
//Analise I: Qual raça teve a maior porcentagem de pessoas que ganharam acima de 50.000
 let sql = `select race_id as id, sum(over_50k) as sum, count(*) as 'count' from records 
 group by race_id`
 
  db.all(sql,[],(err,rows)=>{
      if(err) console.log(err.message);
      
     const counts = rows.map((row,count) => {
        count += row.count;
        return count;
      });
      const count = counts.reduce(function(soma, num){
        return soma + num
     },0);

     console.log(count)
    });

   

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});