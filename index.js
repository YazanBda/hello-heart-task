const csv = require('csv-parser')
const fs = require('fs')
const path = './' + process.argv[2] +'/';
const files = fs.readdirSync(path);
const results = [];

const getClientName = function(file_name)
{
  return file_name.split(".")[0];
}

const CreateClient= (clientName)=>{
  return {
    client:clientName,
    employees:[]
  }
}

const CreateEmployee = (firstName,lastName,birth,id)=>{
  return {
    first_name: firstName,
    last_name: lastName,
    date_of_birth:birth,
    employee_id:id
    }
}

const ReadData = function(file)
{
  let client = CreateClient(getClientName(file));
  results.push(client); 
  
  fs.createReadStream(path+file) 
  .pipe(csv())
  .on('data' , (data) => {
      const CurrentClient = results.find(x => x.client === getClientName(file));
      const employee = CreateEmployee(data.first_name,data.last_name,data.date_of_birth,data.employee_id);
      CurrentClient.employees.push(employee)
  })
  .on('end',()=> {
    fs.writeFileSync('clients.json', JSON.stringify(results))
  })
}

const ParseData = function()
{
  files.map(ReadData);
}
ParseData();


