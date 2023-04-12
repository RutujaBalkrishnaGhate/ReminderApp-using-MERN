import ReminderList from "../models/reminder.js";

import ReminderListRouter from "../routes/reminderList-route.js";
import express from "express";
const router  = express.Router();

export const save =async  (newReminder) => {
    const reminderList = new ReminderList(newReminder);
    return reminderList.save();
}

/** 
 * search callback function to call a query
 */


export const search = async (query) => {
    const params = {...query};
    const reminderList = ReminderList.find(params).exec(); //models find function is used to pass a query parameter and execute
    return reminderList;
}


/** 
 * This will find a reminder item by ID
 */

export const get = async(id) => {

    const reminderList = ReminderList.findById(id).exec(); // Calling function to findById and passing ID to execute operation
    return reminderList;
}

/** 
 * Update function to update data
 */

export const update = async(updatedReminderList) => {
    //Callback function to findById and passing ID to perform update operation
    updatedReminderList.modifiedDate=new Date()
    const reminderList = ReminderList.findByIdAndUpdate(updatedReminderList.id, updatedReminderList, { new: true }).exec();
    return reminderList;
}


/** 
 * 
 * Delete function to delete data
 * 
 */
export const remove= async (id) => {
    
    const reminderList = ReminderList.findByIdAndDelete(id).exec();     //Callback function to findById and passing ID to perform delete operation

    return reminderList;
}