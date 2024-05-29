//
//
import React from "react";
import UserAlertModal from "../components/AlertModal";
//
import { RES, T } from "../../../__PKG__/exp";
import { FaSpinner } from "react-icons/fa";
//
//
function LoadingWall() {
    return (
        <div className="LoadingWall">
            <div className="Pos-Cen LoadingWall__panel">
                <div className="LoadingWall__panel-message">Please wait</div>
                <FaSpinner className="LoadingWall__panel-spinner" />
            </div>
        </div>
    );
}
//
export enum ViewType {
    Home = "Home",
    Login = "Login",
    Register = "Register",
    Profile = "Profile",
}
export const headerLinks: string[] = Object.values(ViewType);
//
export type RootCntxType = {
    //
    takeRes: (x: any) => void;
    ExitRoot: () => void;
    goHome: () => void;
    //
    token: string | null;
    set_token: (s: string) => void;
    //
    loading: boolean;
    set_loading: (loading: boolean) => void;
    //
    userDat: T.UserDat | null;
    set_userDat: (userDat: T.UserDat | null) => void;
    //
    viewType: string;
    set_viewType: (viewType: string) => void;
    //
    userAlerts: RES.UserAlert[];
    set_userAlerts: (userAlerts: React.SetStateAction<RES.UserAlert[]>) => void;
    //
};
const RootCntx = React.createContext<RootCntxType | null>(null);
export const UseRoot = () => React.useContext(RootCntx);
// =============================================================
// ------------------------------------------------------------
//
// ------------------------------------------------------------
// =============================================================
export default function RootProvider({ children }: any) {
    //
    //
    const [token, set_token] = React.useState<string | null>(null);
    const [userDat, set_userDat] = React.useState<T.UserDat | null>(null);
    //
    const [loading, set_loading] = React.useState<boolean>(false);
    const [viewType, set_viewType] = React.useState<string>(ViewType.Home);
    const [userAlerts, set_userAlerts] = React.useState<RES.UserAlert[]>([]);
    //
    //
    function ExitRoot(): void {
        set_token("");
        set_userDat(null);
        set_loading(false);
        set_userAlerts([]);
    }
    function goHome() {
        set_token("");
        set_userDat(null);
        set_viewType(ViewType.Home);
    }
    //
    //
    function takeRes(res: any) {
        if (res.errors?.length > 0) {
            set_userAlerts(res.errors);
        } else if (res.userAlerts?.length > 0) {
            set_userAlerts(res.userAlerts);
        }
    }
    //
    //
    React.useEffect((): any => {
        return () => {
            ExitRoot();
        };
    }, []);
    //
    //
    return (
        <RootCntx.Provider
            value={{
                //
                takeRes,
                ExitRoot,
                goHome,
                //
                token,
                set_token,
                //
                loading,
                set_loading,
                //
                userDat,
                set_userDat,
                //
                viewType,
                set_viewType,
                //
                userAlerts,
                set_userAlerts,
            }}
        >
            {loading && <LoadingWall />}
            {userAlerts?.length > 0 && (
                <UserAlertModal msgs={userAlerts} close={() => set_userAlerts([])} />
            )}
            {children}
        </RootCntx.Provider>
    );
}
