import { Log } from "../interfaces/log.interface";
import LogModel from "../models/log";

const insertLog = async(item: Log) => {
    const responseInsert = await LogModel.create(item);
    return responseInsert;
};

const getLog = async(id: string) => {
    const responseItem = await LogModel.findOne({_id: id});
    return responseItem;
};

const getLogs = async() => {
    const responseItem = await LogModel.find({});
    return responseItem;
};


const changeLog = async(id: string, data: Log) => {
    const responseItem = await LogModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const eraseLog = async(id: string) => {
    const responseItem = await LogModel.findOneAndRemove({_id: id});
    return responseItem;
}

export { insertLog, getLog, getLogs, changeLog, eraseLog};

