const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./../../exercise01.sqlite', sqlite3.OPEN_READWRITE, (err)=>{
  if(err){
    return console.log(err.message);
  }
  console.log('Deu certo')
})
//Analise I: Qual raça teve a maior porcentagem de pessoas que ganharam acima de 50.000
 let sql = `select race_id as id,races.name ,count(*) as 'count', sum(over_50k) as sum from (records 
  inner join races on races.id = records.race_id ) as result
   group by race_id  `
 
   db.allAsync = function (sql) {
    var that = this;
    return new Promise(function (resolve, reject) {
      that.all(sql, function (err, rows) {
        if (err)
        reject(err);
        else
        resolve(rows);
      });
    });
  };
  
  
  
  async function task4 (){
    rows = await db.allAsync(sql)
    let soma = [];
    if (!rows){
      console.log('erro')
      return
    }else{

     console.log(rows)
    }  
  }

  task4()

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});