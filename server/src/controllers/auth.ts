//
import { Request, Response } from "express";
//
import { T, H } from "../../../__PKG__/X";
//
import jwt from "jsonwebtoken";
//
import UserDat from "../_models/UserDat";
//
// ===============================================================
// ---------------------------------------------------------------
//
function setCookieAndToken(user_id: any, res: Response) {
    //
    const token = jwt.sign({ user_id }, process.env.ADMIN_KEY!, {
        expiresIn: "2d",
    });
    //
    res.cookie(process.env.COOKIE_NAME!, token, {
        httpOnly: true,
        maxAge: 2 * 24 * 60 * 60 * 1000,
    });
    //
    return token;
}
//
// ===============================================================
// ---------------------------------------------------------------
//
export async function login(req: Request, res: Response) {
    //
    console.log("\n\n*** >>> [login] - ", req.body);
    //
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const { user_id, password } = req.body;
    //
    const userDat = (await UserDat.findOne({ user_id })) as T.UserDat;
    const pwChk = await userDat?.matchPassword!(password);
    //
    let token: string = "";
    let success: boolean = false;
    let userAlerts: T.UserAlert[] = [];
    // ************************************************
    //
    //
    if (!userDat || pwChk === false) {
        H.addUserAlert(userAlerts, "Invalid credentials", [
            "Be advised - usernames and passwords are case sensitive",
        ]);
        //
    } else if (userDat.enabled === false) {
        H.addUserAlert(userAlerts, "Not authorized", [
            "This account has been disabled",
            "Thank you for your understanding",
        ]);
        //
    } else {
        //
        success = true;
        //
        token = setCookieAndToken(user_id, res);
        //
        H.addUserAlert(userAlerts, "Welcome back", ["no updates to report"]);
    }
    // ************************************************
    //
    //
    res.status(success ? 200 : 404).send({ success, userAlerts, userDat, token });
}
export async function register(req: Request, res: Response) {
    //
    console.log("\n\n*** >>> [register] - ", req.body);
    //
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const { user_id, email, password } = req.body;
    //
    let userDat_byAlias = await UserDat.findOne({ user_id });
    let userDat_byEmail = await UserDat.findOne({ email });
    //
    let userDat;
    let token: string = "";
    let success: boolean = false;
    let userAlerts: T.UserAlert[] = [];
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //
    //
    // **************************************************
    if (userDat_byAlias) {
        H.addUserAlert(userAlerts, "Alias in use", [
            `another user has already claimed that alias`,
        ]);
        //
    } else if (userDat_byEmail) {
        H.addUserAlert(userAlerts, "Email in use", [
            `another user already uses that email`,
        ]);
        //
    } else {
        //
        //
        try {
            //
            //
            const newUserDat: T.UserDat = {
                email,
                user_id,
                password,
                enabled: true,
                mayRef: false,
            };
            //
            //
            userDat = await UserDat.create(newUserDat);
            //
            token = setCookieAndToken(user_id, res);
            //
            H.addUserAlert(userAlerts, "Welcome", ["registration success"]);
            //
            success = true;
            //
        } catch (error: any) {
            //
            success = false;
            //
            H.addUserAlert(userAlerts, "Error generating user data", [error!.message!]);
        }
    }
    // ************************************************
    //
    //
    //
    res.status(success ? 200 : 404).send({ success, userAlerts, userDat, token });
}
export async function tokenEntry(req: Request, res: Response) {
    //
    // console.log("\n\n*** >>> [tokenEntry] - ", req.body);
    //
    const { user_id } = req.body;
    //
    const userDat = (await UserDat.findOne({ user_id })) as T.UserDat;
    //
    //
    let token: string = "";
    let success: boolean = false;
    let userAlerts: T.UserAlert[] = [];
    //
    //
    // ************************************************
    if (!userDat) {
        H.addUserAlert(userAlerts, "Invalid token", [
            "usernames and passwords are case sensitive",
        ]);
        //
    } else if (userDat.enabled === false) {
        H.addUserAlert(userAlerts, "Not authorized", [
            "this account has been disabled",
            "perhaps you have offended the admin gods...?",
            "thank you for your understanding",
        ]);
        //
    } else {
        //
        token = setCookieAndToken(user_id, res);
        //
        success = true;
        //
        H.addUserAlert(userAlerts, "Welcome back", [
            "token entry success",
            "no updates to report",
        ]);
    }
    // ************************************************
    //
    //
    res.status(success ? 200 : 404).send({ success, userAlerts, userDat, token });
}
export async function allUsers(req: Request, res: Response) {
    //
    const { admin_key } = req.body;
    //
    let success: boolean = false;
    let userAlerts: T.UserAlert[] = [];
    let userDats: T.UserDat[] = [];
    //
    //
    if (admin_key !== process.env.ADMIN_KEY) {
        H.addUserAlert(userAlerts, "Denied", ["Invalid admin key"]);
        //
    } else {
        //
        try {
            //
            userDats = (await UserDat.find({})) as T.UserDat[];
            //
            success = true;
            //
        } catch (error: any) {
            //
            success = false;
            //
            H.addUserAlert(userAlerts, "Error fetching user data", [error!.message!]);
        }
    }
    //
    //
    res.status(success ? 200 : 404).send({ userAlerts, success, userDats });
}
export async function deleteUser(req: Request, res: Response) {
    //
    // console.log("\n\n*** >>> [deleteUser] - ", req.body);
    //
    const { admin_key, user_id } = req.body;
    //
    const userDat = await UserDat.findOne({ user_id });
    //
    let success: boolean = false;
    let userAlerts: T.UserAlert[] = [];
    //
    //
    if (admin_key !== process.env.ADMIN_KEY) {
        H.addUserAlert(userAlerts, "Denied", ["Invalid admin key"]);
        //
    } else if (!userDat) {
        H.addUserAlert(userAlerts, "Fail", ["user data not found"]);
        //
    } else {
        //
        try {
            //
            await UserDat.findByIdAndDelete(userDat.id);
            //
            success = true;
            //
        } catch (error: any) {
            //
            success = false;
            //
            H.addUserAlert(userAlerts, "[deleteUser] Error ", [error!.message!]);
        }
    }
    //
    //
    res.status(success ? 200 : 404).send({ success, userAlerts });
}
export async function toglUserEnabled(req: Request, res: Response) {
    //
    // console.log("\n\n*** >>> [toglUserEnabled] - ", req.body);
    //
    const { admin_key, user_id } = req.body;
    //
    let userDat = await UserDat.findOne({ user_id });
    let success: boolean = false;
    let userAlerts: T.UserAlert[] = [];
    //
    //
    if (admin_key !== process.env.ADMIN_KEY) {
        H.addUserAlert(userAlerts, "Denied", ["Invalid admin key"]);
        //
    } else if (!userDat) {
        H.addUserAlert(userAlerts, "Fail", ["user data not found"]);
        //
    } else {
        //
        try {
            //
            userDat = await UserDat.findByIdAndUpdate(
                userDat.id,
                {
                    $set: { enabled: !userDat.enabled },
                },
                { new: true }
            );
            //
            success = true;
            //
        } catch (error: any) {
            //
            success = false;
            //
            H.addUserAlert(userAlerts, "[toglUserEnabled] Error ", [error!.message!]);
        }
    }
    // ************************************************
    //
    //
    res.status(success ? 200 : 404).send({ success, userAlerts, userDat });
}
