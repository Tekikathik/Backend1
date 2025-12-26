import mongoose from "mongoose";

const user = mongoose.Schema({
    stuid:{
        type: Number
    },
    stuRollno:{
        type: String
    },
    stuDecription:{
        type: String
    }
});

const student=mongoose.model('student',user);

export default student;
