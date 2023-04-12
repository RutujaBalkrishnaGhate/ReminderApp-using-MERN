import * as reminderListService from '../services/reminderList-service.js';
import {request, response} from "express";   


/** 
 * Search - to search by title in the URL
 */
export const index = async (request, response) => {
    try {
        const title = request.query.title;
        const description = request.query.description;
        const query = {};

        //to check if query parameter is available or not
        if (title) {
            query.title = title;
        }

        if (description) {
            query.description = description;
        }

        const reminderList = await reminderListService.search(query);   // await to return a call back function
        setSuccessResponse(reminderList, response);

    } catch (error) {
        setErrorResponse(error, response);
    }
}


/** 
 * 
 * GET by id - function to search a data entry by id
 * 
 */

export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const reminderList = await reminderListService.get(id); // await to return a call back function
        setSuccessResponse(reminderList, response);
    } catch (error) {
        setErrorResponse(error, response);

        
    }
}


/** 
 * 
 * POST method - to enter data in the database
 * 
 */


export const post = async (request, response) => {
    try {
        const payload = request.body;
        const reminder = await reminderListService.save(payload);   // await to return a call back function
        setSuccessResponse(reminder, response);


    } catch (error) {
         //console.log(error);
         return response.status(400).send(error.message);
       //setErrorResponse(error, response);
       



    }
}

/** 
 * 
 * UPDATE method - to update data in the database
 * 
 */
export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const reminderList = await reminderListService.update(updated); // await to return a call back function
        setSuccessResponse(reminderList, response);

    } catch (error) {
        setErrorResponse(error, response);
    }
}

/** 
 * 
 * DELETE method - to delete data in the database
 * 
 */
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const reminderList = await reminderListService.remove(id);      // await to return a call back function
        setSuccessResponse({message: `Successfully removed.`},response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

// Creating error promt
const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

// Creating success promt

const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}
