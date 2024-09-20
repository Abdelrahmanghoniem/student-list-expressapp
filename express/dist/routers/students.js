"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_1 = require("../models/student");
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_1.studentModel.find();
        res.status(200).send(students);
    }
    catch (_a) {
        res.status(500).send({ message: "Error fetching students" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const student = yield student_1.studentModel.findById(id);
    if (!student) {
        res.status(404).send({ message: "Student not found" });
    }
    res.send(student);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log({ data });
        const newStudent = yield student_1.studentModel.create(data);
        newStudent.save;
        res.status(201).send(newStudent);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const student = yield student_1.studentModel.findByIdAndUpdate(id, data, { new: true });
    if (!student) {
        return res.status(404).send("student not found");
    }
    res.send(student);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const student = yield student_1.studentModel.findByIdAndDelete(id);
    if (!student) {
        return res.status(404).send("student not found");
    }
    res.send("deleted");
}));
exports.default = router;
