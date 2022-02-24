import { Request, Response } from "express";
import TeacherDAOS from "../daos/TeacherDAOS";
import { SQL_FACULTY } from "../repository/teacher_sql";

class TeacherController extends TeacherDAOS {
    public getMeTeacher(req: Request, res: Response): void{
        TeacherController.getTheacher(SQL_FACULTY.ALL, [], res);
    }
}

const teacherController = new TeacherController();
export default teacherController;