import { Handler, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import {getConnection} from '../db';


export const getTasks: Handler = (req: Request, res: Response): void => {

 const data = getConnection().get('tasks').value();
 res.json(data);

}; 


export const createTask: Handler = (req: Request, res: Response): void => {

  const { name, description } = req.body;

  const newTask = {
    name,
    description,
    id: uuidv4(),
  };

 try {
     getConnection().get("tasks").push(newTask).write();

     res.status(200).json(newTask);
 } catch (error) {
    res.status(500).send(error);
 }
};


export const getTask: Handler = (req: Request, res: Response): void => {

    const taskFound = getConnection().get('tasks').find({id: req.params.id}).value();

    if (!taskFound) {
        res.status(404).json({msg: "Task not found"});
        return;
    };

    res.json(taskFound);

};


export const deleteTask: Handler = (req: Request, res: Response): void => {

  const taskFound = getConnection()
    .get("tasks")
    .find({ id: req.params.id })
    .value();

  if (!taskFound) {
    res.status(404).json({ msg: "Task not found" });
    return;
  };

  const deletedTask = getConnection()
    .get("tasks")
    .remove({ id: req.params.id })
    .write();

  res.status(200).json(deletedTask);
};


