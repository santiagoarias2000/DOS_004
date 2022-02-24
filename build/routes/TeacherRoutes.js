"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeacherController_1 = __importDefault(require("../controller/TeacherController"));
class TeacherRoutes {
    constructor() {
        this.routeTeacherApi = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routeTeacherApi.get('/teacher', TeacherController_1.default.getMeTeacher);
    }
}
const teacherRoutes = new TeacherRoutes();
exports.default = teacherRoutes.routeTeacherApi;
