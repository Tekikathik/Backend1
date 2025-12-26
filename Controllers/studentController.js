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
export {getStudentsDetails, addStudents};