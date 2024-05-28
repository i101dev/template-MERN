//
import { Request, Response, NextFunction } from "express";
import { H, T } from "../../../__PKG__/exp";
import { verify } from "jsonwebtoken";
//
//
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    //
    //
    const { token, user_id } = req.body;
    //
    let userAlerts: T.UserAlert[] = [];
    //
    if (!token) {
        //
        H.addUserAlert(userAlerts, "Fail", ["Unauthorized: No token provided"]);
        //
        return res.status(200).json({ success: false, userAlerts });
    }
    //
    verify(token, process.env.ADMIN_KEY!, (err: any, decoded: any) => {
        //
        if (err) {
            //
            H.addUserAlert(userAlerts, "Fail", ["Unauthorized: Invalid token"]);
            //
            return res.status(200).json({ success: false, userAlerts });
            //
        } else if (decoded.user_id !== user_id) {
            //
            console.log("\n\n*** >>> [decoded.user_id] - ", decoded.user_id);
            //
            H.addUserAlert(userAlerts, "Token mismatch", [
                "[user_id] does not match decoded value",
            ]);
            //
            return res.status(200).json({ success: false, userAlerts });
        }
        //
        req.body["user_id"] = decoded.user_id;
        //
        next();
    });
};
