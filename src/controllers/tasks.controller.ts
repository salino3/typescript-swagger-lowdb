import { Handler, Request, Response } from "express";
import {getConnection} from '../db';


export const getTasks: Handler = (req: Request, res: Response): void => {

 const data = getConnection().get('tasks').value();
 res.json(data);

};


export const createTask: Handler = async (req: Request, res: Response): Promise<void> => {

  const { name, description } = req.body;

    const { nanoid } = await import("nanoid");


  const newTask = {
    name,
    description,
    id: nanoid(),
  };

  res.json(newTask);
};


