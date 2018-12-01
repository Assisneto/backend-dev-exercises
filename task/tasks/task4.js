const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../exercise01.sqlite', sqlite3.OPEN_READWRITE, (err)=>{
  if(err){
    return console.log(err.message);
  }
  console.log('Deu certo')
})
//Analise I: Qual raça teve a maior porcentagem de pessoas que ganharam acima de 50.000
 let sql = `select race_id as id,races.name ,count(*) as 'count', sum(over_50k) as sum from (records 
  inner join races on races.id = records.race_id ) as result
   group by race_id  `
 
  db.all(sql,[],(err,rows)=>{
      if(err) console.log(err.message);
       let sum= 0 , count = 0
      for (i = 0 ;rows.length > i ; i++ ) {
        sum += rows[i].sum
        count += rows[i].count

      }
       for (i = 0 ;rows.length > i  ;i++ ) {
         let soma = (rows[i].sum/sum)
         console.log(`Porcentagem de pessoas da Raça ${(rows[i].name).toUpperCase()} que ganham acima de 50k: ${(soma*100).toPrecision(2)}`)
       }
    });

   

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});