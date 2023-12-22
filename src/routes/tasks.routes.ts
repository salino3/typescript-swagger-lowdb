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
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found task
 *      example:
 *        msg: Task was not found
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Retorna una lista de tareas
 *    tags: [Tasks]
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
 *    tags: [Tasks]
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


/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create a new Task
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *          200:
 *            description: The task is succesfully created
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#components/schema/Task'
 *          500: 
 *            description: Some server error
 */

router.post("/tasks", createTask);


/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: get a task by Id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: The Found Task
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 */

router.get("/tasks/:id", getTask);


/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a Task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     responses:
 *       200:
 *         description: The Task was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The Task was not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskNotFound'
 */

router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The updated task 
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */

router.put("/tasks/:id", updateTask);

export default router;
