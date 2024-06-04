import express from "express";
import { fetch } from "../controller/userController";

const route = express.Router();

route.get("/fetch", fetch);
export default route;
