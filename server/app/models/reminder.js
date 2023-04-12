import mongoose from 'mongoose';


/**
 * Defining Mongoose Schema for databse
 */


const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: 'title is required.'
    },
    description: {
        type: String,
        required: 'description is required.'
    },
   
    completed :{
        type : Boolean,
        default : false
        //required: "Completed is a required property."

    },

    createDate: {
        type: Date,
        default: Date.now // setting current date and time
    },
    modifiedDate: {
        type: Date,
        default: Date.now // setting current date and time
    }
}, {skipVersioning: true}); // to make newer versions in state

const model = mongoose.model('reminderList', Schema);

export default model;   // exporting model to be used