import { Handler, Request, Response } from "express";


export const getTasks: Handler = async (req: Request, res: Response): Promise<void> => {

 res.send("Good morning");

};