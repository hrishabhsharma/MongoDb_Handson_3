const emprouting = require("express").Router()
const empcontroller = require("../controller/empcontroller")

emprouting.post("/adduser",empcontroller.adduser)
emprouting.get("/listalluser",empcontroller.listalluser)
emprouting.get("/findusers/:ques",empcontroller.findusers)
emprouting.put("/updateuser",empcontroller.updateuser)
emprouting.delete("/deleteuser",empcontroller.deleteuser)

module.exports = emprouting