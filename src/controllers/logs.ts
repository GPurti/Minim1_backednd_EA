import { Request,Response } from "express";
import { insertLog, getLog, getLogs, changeLog, eraseLog } from "../services/logs";
import { handleHttp } from "../utils/error.handle";

const getAllLogs=async(req:Request,res:Response)=>{
    try{
        const response=await getLogs();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_LOGS");
    }
};
const getTheLog = async({params}:Request,res:Response) => {
    try {
        const {idLog} = params;
        const response = await getLog(idLog);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_LOG");
    }
};

const postLog=async ({body}:Request,res:Response)=>{
    try{
        const responseOrganization=await insertLog(body);
        res.send(responseOrganization);
    }catch(e){
        handleHttp(res,"ERROR_POST_LOG");
    }
};
const updateLog=async ({params,body}:Request,res:Response)=>{
    try{
        const {idLog}=params;
        const response=await changeLog(idLog,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_LOG");
    }
};
const deleteLog=async ({params}:Request,res:Response)=>{
    try{
        const {idLog}=params;
        const response=await eraseLog(idLog);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_LOG");
    }
};

export{getAllLogs, postLog, updateLog, deleteLog, getTheLog};