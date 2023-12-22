import { Router } from "express";
import {
  createTask,
  count,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        name:
 *          type: string
 *          description: the name of the task
 *        description:
 *          type: string
 *          description: the description of the task
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: My first Task
 *        description: I have to do Something
 *
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Retorna una lista de tareas
 *    responses:
 *      200:
 *        description: La lista de tareas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
router.get("/tasks", getTasks);


/**
 * @swagger
 * /tasks/count:
 *  get: 
 *    summary: Get total task count
 *    responses:
 *      200:
 *       description: Totla number of tasks
 *       content:
 *         text/plain:
 *           schema:
 *             type: integer
 *             example: 15
 * 
 */
router.get("/tasks/count", count);

router.post("/tasks", createTask);

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;
