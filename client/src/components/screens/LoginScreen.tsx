//
//
import MyInput from "../../hooks/MyInput";
//
//
import { MyApi } from "../../hooks/MyApi";
import { PL, RT, T } from "../../../../__PKG__/X";
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
        //
    } = UseRoot() as RootCntxType;
    //
    //
    const userIdInput = MyInput("Alias", "", false, T.Input.TXT);
    const passwordInput = MyInput("Password", "", false, T.Input.PW);
    //
    //
    const loginHandler = async (e: any) => {
        //
        e.preventDefault();
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
        <form className="SP-Y-1 M-auto Pos-Cen Panel-D P-1" onSubmit={loginHandler}>
            <div>{userIdInput.component}</div>
            <div>{passwordInput.component}</div>
            <input type="submit" className="Btn" value="Login" />
        </form>
    );
}
