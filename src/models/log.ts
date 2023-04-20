import { Model, Schema, Types, model, PaginateModel } from "mongoose";
import { Log } from "../interfaces/log.interface";

const LogSchema = new Schema<Log>(
    {
        logged:{ 
            type: Boolean,
            required:true,
        },
        start:{
            type: String,
            required:true,
        },
        duration:{
            type: Number,
            required:true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const LogModel = model('logs', LogSchema);

export default LogModel;