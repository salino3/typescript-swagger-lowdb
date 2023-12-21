import {Router} from 'express';
import { createTask, deleteTask, getTask, getTasks } from '../controllers/tasks.controller';

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/count", (req, res) => res.send("Hellooooooo"));

router.post("/tasks", createTask);

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", (req, res) => res.send("Hellooooooo"));




export default router;