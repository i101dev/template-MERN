//
//
import { ReactElement } from "react";
import { RootCntxType, UseRoot, ViewType } from "./providers/RootCtx";
//
import Header from "./Header";
import Footer from "./Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
//
//
function App() {
    //
    //
    const { viewType } = UseRoot() as RootCntxType;
    //
    let viewComp: ReactElement<any, any> = <></>;
    //
    switch (viewType) {
        //
        case ViewType.Home:
            viewComp = <HomeScreen />;
            break;
        //
        case ViewType.Login:
            viewComp = <LoginScreen />;
            break;
        //
        case ViewType.Register:
            viewComp = <RegisterScreen />;
            break;
        //
        case ViewType.Profile:
            viewComp = <ProfileScreen />;
            break;
        //
        default:
            break;
    }
    //
    //
    const ScrollUp = () => {
        return (
            <a href="#" className="scrollup" id="scroll-up">
                <i className="ri-arrow-up-line"></i>
            </a>
        );
    };
    //
    //
    return (
        <div className="Body1">
            <Header />

            <main className="main">{viewComp}</main>

            <Footer />

            {ScrollUp()}
        </div>
    );
}

export default App;
