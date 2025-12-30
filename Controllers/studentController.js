import student from "../models/user.js";
const getStudentsDetails = (req, res) => {
    const mydata = {name: "thub", roll:"1234"};
    res.send(mydata);
}
const addStudents = async (req,res)=>{
    try{
        const data = req.body;
        const add=await student.create(data);
        console.log(add);
        res.status(201).json(add);
    }
    catch(error){
        res.status(500).json(error)

    }
};
const updataStudents =async(req,res)=>{
    const {id} =req.params;
    const data=req.body;
    console.log("Data");
    await student.findOneAndUpdate({stuid:id},data,{new:true})
    return res.status(200).json("message : User updated");
}
export {getStudentsDetails, addStudents,updataStudents};