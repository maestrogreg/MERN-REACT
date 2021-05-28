import express, {Request, Response} from 'express'
import student from '../models/students';

 export const getStudent = async (req:Request, res:Response)=>{
    try {
        const allStudents = await student.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({status:"error", message: error.message})
    }
}

export const createStudent = async(req:Request, res:Response)=>{
    const studentCreated = req.body;

    const newStudent = new student(studentCreated);
    try {
        await newStudent.save();
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(409).json({status:"error", message: error.message})
    }
}
