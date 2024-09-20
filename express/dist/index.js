"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const students_1 = __importDefault(require("./routers/students"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    origin: "http://localhost:5173"
}));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://127.0.0.1:27017/students')
    .then(() => console.log('Connected!'));
app.use('/students', students_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
