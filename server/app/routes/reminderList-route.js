import express from "express";
import * as reminderListController from '../controllers/reminderList_controller.js';
import {get} from "mongoose";


const router = express.Router();

/**
 * Get all  reminders - GET / reminder
 * Create a  reminder - POST / reminder
*/

router.route('/reminderList')
    .post( reminderListController.post)
.get( reminderListController.index);


router.route('/reminderList/:id')
    .get( reminderListController.get)                // Get  reminder by id - GET / reminderList/${id}
    .put( reminderListController.update)             // Update  reminder by id - GET / reminderList/${id}
    .delete( reminderListController.remove);         // Delete  reminder by id - DELETE /reminderList/${id}

export default router;