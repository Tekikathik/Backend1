const getStudentsDetails = (req, res) => {
    const mydata = {name: "thub", roll:"1234"};
    res.send(mydata);
}
const addStudents = (req,res)=>{
    const data = req.body;
    console.log(data);
    res.send("data addedf");
};
export {getStudentsDetails, addStudents};