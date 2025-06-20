import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.get("/", (req, res)=>{
  res.send("Hello employees!");
})

app.get("/employees", (req, res) => {
  res.send(employees);
})

app.get("/employees/random", (req, res) =>{
  res.send(employees[Math.floor(Math.random() * employees.length)]);
})

app.get("/employees/:id", (req, res) => {
  const {id} = req.params;
  const employee = employees.find((employee) => employee.id === Number(id));

  if(!employee){
    return res.status(404).send("That employee does not exist");
  }

  res.send(employee);
})