import { Auth } from "./auth.interface";
import { ObjectId } from "mongoose";

export interface User extends Auth {
    name: string;
    surname: string;
    role: "admin" | "need" | "help";
    log?: ObjectId[];
}