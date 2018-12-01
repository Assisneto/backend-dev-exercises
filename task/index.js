const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../exercise01.sqlite', sqlite3.OPEN_READWRITE, (err)=>{
  if(err){
    return console.log(err.message);
  }
  console.log('Deu certo')
})

 let sql = `select * from ((((((((records inner join countries on records.country_id = countries.id) as result1
 inner join education_levels on result1.education_level_id = education_levels.id) as result2
 inner join marital_statuses on result2.relationship_id = marital_statuses.id) as result3
 inner join occupations on result3.occupation_id = occupations.id) as result4
 inner join races on result4.race_id = races.id) as result5
 inner join relationships on result5.relationship_id = relationships.id) as result6
 inner join sexes on result6.sex_id = sexes.id) as result7
 inner join workclasses on result7.workclass_id = workclasses.id)
`

    db.each(sql,[],(err,row)=>{
      if(err) console.log(err.message);
      console.log(row)
    
   });



db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});