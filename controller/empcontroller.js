const Emp = require("../models/empmodel")
const Data = require("../constant/Data")

const adduser = async (req,res) => {
    try {
        const result = await Emp.find(Data)
        res.status(200).send({msg:"data inserted",result:result})

    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

const listalluser = async (req,res) => {
    try{
        const result = await Emp.find()
        res.status(200).send({msg:"data found",result:result})
    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

const findusers = async (req,res) => {
    try{
        const id = req.params.ques;
        let ques;
        switch (id) {
            case "1":
                ques = {salary:{$gt:"30000"}};
                break;
            case "2":
                ques = {overallExp:{$gt:"2"}};
                break;
            case "3":
                ques = {yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}};
                break;
        }
        if(ques){
            const result = await Emp.find(ques)
            return res.status(200).send({msg:"data found",result:result})
        }
       return res.status(200).send({msg:"You put wrong param"})
    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

const updateuser = async (req,res) => {
    try{
        const result = await Emp.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
        console.log(result)
        res.status(200).send({msg:"data updated",result:result})
    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

const deleteuser = async (req,res) => {
    try{
        const result = await Emp.deleteMany({lastCompany:"Y"})
        console.log(result)
        res.status(200).send({msg:"data inserted",result:result})
    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

module.exports = { adduser , listalluser , findusers , updateuser ,deleteuser }