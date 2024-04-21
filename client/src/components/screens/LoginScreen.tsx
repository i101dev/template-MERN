//
//
import MyInput from "../../hooks/MyInput";
//
//
import { MyApi } from "../../hooks/MyApi";
import { PL, RT, T } from "../../../../__PKG__/X";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { UseRoot, RootCntxType } from "../../providers/RootCntx";
//
//
export default function LoginScreen() {
    //
    //
    const { fetch_POST } = MyApi();
    const {
        //
        set_token,
        takeRes,
        set_userDat,
        set_viewType,
        goHome,
        //
    } = UseRoot() as RootCntxType;
    //
    //
    const userIdInput = MyInput("Alias", "", false, T.Input.TXT);
    const passwordInput = MyInput("Password", "", false, T.Input.PW);
    //
    //
    const loginHandler = async () => {
        //
        //
        const payload: PL.Login = {
            user_id: userIdInput.value as string,
            password: passwordInput.value as string,
        };
        //
        //
        const res = await fetch_POST(RT.POST.login, payload);
        console.log("[loginHandler] - result - ", res);
        takeRes(res);
        //
        //
        if (res.success === true && res.userDat) {
            set_viewType(T.ViewType.Profile);
            set_userDat(res.userDat);
            set_token(res.token);
        }
    };
    //
    //
    return (
        <div className="SP-Y-1 M-auto">
            <div>{userIdInput.component}</div>
            <div>{passwordInput.component}</div>
            <div className="SP-X-1 AC ML-auto">
                <button className="Btn FR" onClick={goHome}>
                    <FaAngleDoubleLeft size="2.5rem" />
                </button>
                <button className="Btn" onClick={loginHandler}>
                    Login
                </button>
            </div>
        </div>
    );
}
