import { Router } from "express";
import teacherController from "../controller/TeacherController";

class TeacherRoutes{
    public routeTeacherApi: Router;
    constructor(){
        this.routeTeacherApi = Router();
        this.setting();
    }
    public setting(){
        this.routeTeacherApi.get('/teacher', teacherController.getMeTeacher);
    }
}
const teacherRoutes = new TeacherRoutes();
export default teacherRoutes.routeTeacherApi;