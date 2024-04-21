//
//
import { MyApi } from "../../hooks/MyApi";
import { PL, RT, T } from "../../../../__PKG__/X";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { UseRoot, RootCntxType } from "../../providers/RootCntx";
//
import MyInput from "../../hooks/MyInput";
//
//
export default function RegisterScreen() {
    //
    //
    const { takeRes, set_userDat, set_viewType, goHome } = UseRoot() as RootCntxType;
    const { fetch_POST } = MyApi();
    //
    const emailInput = MyInput("Email", "", false, T.Input.TXT);
    const userIdInput = MyInput("Alias", "", false, T.Input.TXT);
    const passwordInput = MyInput("Password", "", false, T.Input.PW);
    const passConfInput = MyInput("Confirm password", "", false, T.Input.PW);
    //
    //
    const registerHandler = async () => {
        //
        //
        if (passConfInput.value !== passwordInput.value) {
            window.alert("Password mismatch");
            //
            //
        } else {
            //
            //
            const payload: PL.Register = {
                email: emailInput.value as string,
                user_id: userIdInput.value as string,
                password: passwordInput.value as string,
            };
            //
            //
            const res = await fetch_POST(RT.POST.register, payload);
            console.log("[registerHandler] - result - ", res);
            takeRes(res);
            //
            //
            if (res.success === true && res.userDat) {
                set_userDat(res.userDat);
                set_viewType(T.ViewType.Profile);
            }
        }
    };
    //
    //
    return (
        <div className="SP-Y-1 M-auto">
            <div>{emailInput.component}</div>
            <div>{userIdInput.component}</div>
            <div>{passwordInput.component}</div>
            <div>{passConfInput.component}</div>
            <div className="SP-X-1 AC ML-auto">
                <button className="Btn FR" onClick={goHome}>
                    <FaAngleDoubleLeft size="2.5rem" />
                </button>
                <button className="Btn" onClick={registerHandler}>
                    Register
                </button>
            </div>
        </div>
    );
}
