var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    port:'3306',
    database : 'ssm'
});
connection.connect();

var addSql ='INSERT INTO tbl_dept(dept_id,dept_name) VALUES(?,?)';
var addSqlParams=['11','郭亚文'];

connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }        

   console.log('--------------------------INSERT----------------------------');
   //console.log('INSERT ID:',result.insertId);        
   console.log('INSERT ID:',result);        
   console.log('-----------------------------------------------------------------\n\n');  
});
connection.query('SELECT * from tbl_dept ', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
connection.end();