//
//
import { RootCntxType, UseRoot } from "../providers/RootCntx";
import { ReactElement } from "react";
import { T } from "../../../__PKG__/X";
//
import Header from "./Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
//
//
export default function App() {
    //
    const { viewType } = UseRoot() as RootCntxType;
    //
    let viewComp: ReactElement<any, any> = <></>;
    //
    switch (viewType) {
        //
        case T.ViewType.Home:
            viewComp = <HomeScreen />;
            break;
        //
        case T.ViewType.Login:
            viewComp = <LoginScreen />;
            break;
        //
        case T.ViewType.Profile:
            viewComp = <ProfileScreen />;
            break;
        //
        case T.ViewType.Register:
            viewComp = <RegisterScreen />;
            break;
        //
        default:
            break;
    }
    //
    return (
        <>
            <div className="P-2 Body1">
                <div className="Pos-Rel H-100">
                    <Header />
                    {viewComp}
                </div>
            </div>
        </>
    );
}
