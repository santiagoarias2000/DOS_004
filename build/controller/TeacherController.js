"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeacherDAOS_1 = __importDefault(require("../daos/TeacherDAOS"));
const teacher_sql_1 = require("../repository/teacher_sql");
class TeacherController extends TeacherDAOS_1.default {
    getMeTeacher(req, res) {
        TeacherController.getTheacher(teacher_sql_1.SQL_FACULTY.ALL, [], res);
    }
}
const teacherController = new TeacherController();
exports.default = teacherController;
