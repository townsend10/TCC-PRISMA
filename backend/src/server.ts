import express from "express";
import { router } from "./router";
var cors = require('cors')


const app = express();

app.use(cors())





app.use(express.json())

app.use(router);

app.listen(4003, () => console.log("Server is running on PORT 4003"));