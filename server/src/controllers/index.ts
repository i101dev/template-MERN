//
import { Request, Response } from "express";
import { redisClient } from "../../config/connectDB";
import { H, T } from "../../../__PKG__/X";
//
import mongoose from "mongoose";
//
// ===============================================================
// ---------------------------------------------------------------
//
export type ChatMsg = {
    channelName: string;
    address: string;
    alias: string;
    text: string;
};
//
export const user = (alias: string) => `user:${alias}`;
export const chatRoom = (channelName: string) => `chatroom:${channelName}`;
//
// ===============================================================
// ---------------------------------------------------------------
//
export async function test(req: Request, res: Response) {
    //
    const message = "Main landing page - server template - test check success";
    //
    res.status(200).send({ message, location: process.env.LOC });
}
export async function resetDatabse(req: Request, res: Response) {
    //
    //
    let redis_success: boolean = false;
    let mongo_success: boolean = false;
    let userAlerts: T.UserAlert[] = [];
    //
    //
    if (process.env.ADMIN_KEY !== req.body.admin_key) {
        H.addUserAlert(userAlerts, "Fail", [`Invalid admin key`]);
        //
    } else {
        //
        //
        try {
            //
            redisClient.flushAll();
            //
            H.addUserAlert(userAlerts, "Redis wipe success", [
                "Redis store wiped successfully",
            ]);
            //
            redis_success = true;
            //
        } catch (error) {
            //
            redis_success = false;
            //
            H.addUserAlert(userAlerts, "Redis - Internal Server Error", [
                "Error wiping Redis store",
            ]);
            //
            console.error("Error wiping Redis store", error);
        }
        //
        //
        try {
            //
            const collections = await mongoose.connection.db.listCollections().toArray();
            //
            for (const collection of collections) {
                await mongoose.connection.db.collection(collection.name).drop();
            }
            //
            H.addUserAlert(userAlerts, "Mongo wipe success", [
                `${process.env.REGION} - All collections dropped. The database is now empty`,
            ]);
            //
            mongo_success = true;
            //
        } catch (error) {
            //
            mongo_success = false;
            //
            H.addUserAlert(userAlerts, "MongoDB - Internal Server Error", [
                "An error occurred while dropping collections",
            ]);
        }
    }
    //
    //
    res.status(redis_success && mongo_success ? 200 : 404).send({
        success: mongo_success && redis_success,
        userAlerts,
    });
}
//
//
export async function getMsgs(req: Request, res: Response) {
    //
    const roomKey = chatRoom(req.params.channelName);
    const messages = await redisClient.lRange(roomKey, 0, -1);
    const parsedMessages = messages.map((message: string) => JSON.parse(message));
    //
    res.status(200).send({ parsedMessages });
}
export async function pushMsg(req: Request, res: Response) {
    //
    const payload = req.body;
    //
    let success = false;
    let msg = "";
    //
    try {
        //
        //
        const roomKey = chatRoom(payload.channelName);
        //
        const newMsg: ChatMsg = {
            channelName: payload.channelName,
            address: payload.address,
            alias: payload.alias,
            text: payload.text,
        };
        //
        await redisClient.rPush(roomKey, JSON.stringify(newMsg));
        //
        msg = "Message sent";
        //
        success = true;
        //
    } catch (error: any) {
        //
        success = false;
        //
        msg = error!.message!;
    }
    //
    //
    res.status(success ? 200 : 404).send({ msg: msg });
}
export async function getData(req: Request, res: Response) {
    //
    let data = null;
    //
    if (req.params.key) {
        data = await redisClient.get(req.params.key);
    }
    //
    res.status(200).send({ data });
}
export async function setData(req: Request, res: Response) {
    //
    //
    const { key, data } = req.body;
    //
    //
    let success = false;
    let msgs: string[] = [];
    //
    //
    try {
        //
        await redisClient.set(key, JSON.stringify(data));
        //
        success = true;
        //
    } catch (error: any) {
        //
        msgs.push("failed to set data", error!.message!);
    }
    //
    //
    res.status(success ? 200 : 404).send({ success, msgs });
}
