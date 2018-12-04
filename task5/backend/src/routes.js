const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const routes = express.Router();

let db = new sqlite3.Database('../../../exercise01.sqlite', sqlite3.OPEN_READWRITE, (err)=>{
  if(err){
    return console.log(err.message);
  }
  console.log('db online')
});



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



async function task5 (req,res){
  let sql = `select race_id as id,races.name ,count(*) as 'count', sum(over_50k) as sum from (records 
    inner join races on races.id = records.race_id ) as result
     group by race_id  `
  rows = await db.allAsync(sql)
  let soma = [];
  if (!rows){
    console.log('erro')
    return
  }else{
    let sum= 0 , count = 0
    for (i = 0 ;rows.length > i ; i++ ) {
      sum += rows[i].sum
      count += rows[i].count
   }
    for (i = 0 ;rows.length > i  ;i++ ) {
      let total = (rows[i].sum/sum)
      row = rows[i];
      soma.push({row,'soma':(total*100).toPrecision(2)})
      
      
    }
    return res.json(soma)
  }  
}

async function task6 (req,res){
  let sql = `select * from ${req.params.table} where id < 100` //limitação de apresentação
  rows = await db.allAsync(sql)
  if (!rows){
    console.log('erro');
    return
  }else{
    return res.json(rows);      
    }
  }  
  async function task7 (req,res){
    let sql = `select age, sum(case when age then 1 else 0 end) as qAge,
    sum(case when age then hours_week else 0 end) as hour
    from records
    group by age`
    rows = await db.allAsync(sql)
    let soma = []
    for (i = 0 ;rows.length > i ; i++ ) {
      total ={'total':(rows[i].hour/rows[i].qAge).toPrecision(2)};
      row = rows[i];
      json = Object.assign({},row,total)
      soma.push(json);
   }
    
    if (!rows){
      console.log('erro');
      return
    }else{
      return res.json(soma);      
      }
    }  
  



routes.get('/task5',task5);
routes.get('/task6/:table',task6);
routes.get('/task7',task7);


module.exports = routes;