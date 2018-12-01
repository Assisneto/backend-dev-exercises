const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../exercise01.sqlite', sqlite3.OPEN_READWRITE, (err)=>{
  if(err){
    return console.log(err.message);
  }
  console.log('Deu certo')
})

db.serialize(() => {
  db.each(`SELECT id From records`, (err,row)=>{
    if(err) console.log(err.message);
    console.log(row.id+"\t");
  });

});


db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});