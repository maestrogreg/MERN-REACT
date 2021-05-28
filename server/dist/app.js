"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var connection_1 = require("./database/connection");
var student_1 = __importDefault(require("./routes/student"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//database connection
connection_1.connect();
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ limit: "20mb", extended: true }));
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.get('/', function (req, res) {
    res.status(200).send('welcome');
});
app.use('/student', student_1.default);
var port = process.env.PORT || 3060;
app.listen(port, function () {
    console.log("server is live on http://localhost:" + port);
});
