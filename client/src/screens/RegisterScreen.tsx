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
    const { takeRes, set_token, set_userDat, set_viewType } = UseRoot() as RootCntxType;
    const { fetch_POST } = MyApi();
    //
    const emailInput = MyInput("Email", "", false, T.Input.TXT);
    const aliasInput = MyInput("Alias", "", false, T.Input.TXT);
    const passwordInput = MyInput("Password", "", false, T.Input.PW);
    const passConfInput = MyInput("Confirm password", "", false, T.Input.PW);
    //
    //
    const registerHandler = async (e: any) => {
        //
        e.preventDefault();
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
                user_id: aliasInput.value as string,
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
                set_viewType(ViewType.Profile);
                set_userDat(res.userDat);
                set_token(res.token);
            }
        }
    };
    //
    //
    return (
        <section className="section" id="login">
            <div className="form__container container grid">
                <h1>Create Account</h1>
                <form className="form__group" onSubmit={registerHandler}>
                    {emailInput.component}
                    {aliasInput.component}
                    {passwordInput.component}
                    {passConfInput.component}
                    <input type="submit" className="form__button" value="Confirm" />
                </form>
            </div>
        </section>
    );
}
