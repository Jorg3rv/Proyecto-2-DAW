const connection = require('../connectionDb');



exports.getAllProfesores=async (req,res,next)=>{
    connection.query('SELECT * FROM profesor', (error, results, fields) => {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
    }
  });
}