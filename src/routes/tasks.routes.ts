import {Router} from 'express';
import { getTasks } from '../controllers/tasks.controller';

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/count", (req, res) => res.send("Hellooooooo"));

router.post("/tasks", (req, res) => res.send("Hellooooooo"));

router.get("/tasks/:id", (req, res) => res.send("Hellooooooo"));

router.delete("/tasks/:id", (req, res) => res.send("Hellooooooo"));

router.put("/tasks/:id", (req, res) => res.send("Hellooooooo"));




export default router;