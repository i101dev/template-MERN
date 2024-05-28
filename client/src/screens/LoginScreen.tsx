//
import { RootCntxType, UseRoot, ViewType } from "../providers/RootCtx";
import { PL, RT, T } from "../../../__PKG__/exp";
import { MyApi } from "../hooks/MyAPI";
//
import MyInput from "../hooks/MyInput";
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
    const aliasInput = MyInput("Alias", "", false, T.Input.TXT);
    const passwordInput = MyInput("Password", "", false, T.Input.PW);
    //
    //
    const loginHandler = async (e: any) => {
        //
        e.preventDefault();
        //
        const payload: PL.Login = {
            user_id: aliasInput.value as string,
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
            set_viewType(ViewType.Profile);
            set_userDat(res.userDat);
            set_token(res.token);
        }
    };
    //
    //
    return (
        <section className="section" id="login">
            <div className="form__container container grid">
                <h1>Login</h1>
                <form className="form__group" onSubmit={loginHandler}>
                    {aliasInput.component}
                    {passwordInput.component}
                    <input type="submit" className="form__button" value="Login" />
                </form>
            </div>
        </section>
    );
}
