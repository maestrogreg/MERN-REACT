"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var students_1 = require("../controllers/students");
var router = express_1.Router();
router.get('/', students_1.getStudent);
router.post('/', students_1.createStudent);
exports.default = router;
