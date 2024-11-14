import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Task from "../models/taskModel.js";
const getTasks = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const tasks = await Task.find({ user: req.user.id });

    res.status(200).json(tasks);
})
const getTask = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    res.status(200).json(task);
})
const createTask = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const { title, description, priority, startDate, endDate } = req.body;

    if (!title || !description || !priority) {
        res.status(400);
        throw new Error('Please add a title, description and priority');
    }

    const task = await Task.create({
        title,
        description,
        priority,
        user: req.user.id,
        startDate,
        endDate
    })

    res.status(201).json(task);
})
const updateTask = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedTask);
})
const deleteTask = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    await task.remove();

    res.status(200).json({ message: 'Task deleted' });
})
const deleteTasks = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const tasks = await Task.find({ user: req.user.id });
    console.log(tasks);

    if (!tasks) {
        res.status(404);
        throw new Error('There is no tasks for that user');
    }

    tasks.forEach(task => {
        task.remove()
    });

    res.status(200).json({ success: true });
})

export { getTasks, getTask, createTask, updateTask, deleteTask, deleteTasks }
