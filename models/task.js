const mongoose = require ("mongoose");

const taskSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required:[true, "Please add a Task "],
        },
        completed:{
            type:Boolean,
            required:true,
            default:false,
        },
    },
    {timestamps: true,versionakaey: false}
);

const Task =mongoose.model("Task",taskSchema);
module.exports = Task;