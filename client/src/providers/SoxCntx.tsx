//
import React from "react";
//
import { URL, SX } from "../../../__PKG__/util/RT";
import { io, Socket } from "socket.io-client";
import { RootCntxType, UseRoot } from "./RootCntx";
//
//
// ---------------------------------------------------------
// =========================================================
export type SoxCntxType = {
    //
    socket: Socket | null;
    isConnected: boolean;
    //
    debugSX: () => void;
    //
    SX_init: () => void;
    SX_exit: () => void;
};
const SXCntx = React.createContext<SoxCntxType | null>(null);
export const UseSox = () => React.useContext(SXCntx);
// =========================================================
// ---------------------------------------------------------
//
//
export default function ({ children }: any) {
    //
    //
    // ------------------------------------------------------------------
    const { takeRes, set_loading, set_userAlerts } = UseRoot() as RootCntxType;
    //
    const [isConnected, setIsConnected] = React.useState<boolean>(false);
    //
    const sxRef = React.useRef<Socket | null>();
    // ------------------------------------------------------------------
    //
    //
    function debugSX() {
        //
        sxRef.current?.emit(SX.test);
        //
        //
        console.log("socket - ", sxRef.current);
        //
        //
        // ===========================================================
        console.log("\n*********************************************");
        //
        const userAlert = sxRef.current?.listeners(SX.userAlert);
        console.log(`SX - [${SX.userAlert}] => `, userAlert);
        //
        const directMsg = sxRef.current?.listeners(SX.directMsg);
        console.log(`SX - [${SX.directMsg}] => `, directMsg);
        //
        const update = sxRef.current?.listeners(SX.update);
        console.log(`SX - [${SX.update}] => `, update);
        //
        //
        console.log("*********************************************\n");
        // ===========================================================
        //
        //
        if (isConnected === false) {
            SX_exit();
            SX_init();
        }
    }
    function SX_init() {
        //
        set_loading(true);
        //
        try {
            //
            const newSocket = io(URL.BASE, {
                query: { user_id: "jimbo" },
            });
            //
            newSocket.on(SX.disconnect, () => setIsConnected(false));
            newSocket.on(SX.connection, () => setIsConnected(true));
            newSocket.on(SX.test, (data: any) => takeRes(data));
            //
            sxRef.current = newSocket;
            setIsConnected(true);
            //
        } catch (error: any) {
            //
            set_userAlerts([
                {
                    header: "No socket",
                    details: ["Failed to create websocket", error.message],
                },
            ]);
        }
        //
        set_loading(false);
        //
        //
    }
    function SX_exit() {
        //
        setIsConnected(false);
        //
        sxRef.current?.removeAllListeners();
        sxRef.current?.disconnect();
        sxRef.current?.close();
        sxRef.current = null;
    }
    //
    //
    React.useEffect((): any => {
        return () => SX_exit();
    }, []);
    //
    //
    return (
        <SXCntx.Provider
            value={{
                //
                socket: sxRef.current ? sxRef.current : null,
                isConnected,
                //
                debugSX,
                //
                SX_init,
                SX_exit,
            }}
        >
            {children}
        </SXCntx.Provider>
    );
}
