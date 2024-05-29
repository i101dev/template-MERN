//
import { SiSocketdotio } from "react-icons/si";
//
import { RootCntxType, UseRoot } from "../providers/RootCtx";
import { SoxCntxType, UseSox } from "../providers/SoxCtx";
import { PL, RT } from "../../../__PKG__/exp";
import { MyApi } from "../hooks/MyAPI";
//
export default function ProfileScreen() {
    //
    const { token, userDat, goHome, takeRes } = UseRoot() as RootCntxType;
    //
    const { debugSX } = UseSox() as SoxCntxType;
    const { fetch_POST } = MyApi();
    //
    //
    const tokenCheck = async () => {
        //
        if (!userDat) {
            return window.alert("No user");
        }
        if (!token) {
            return window.alert("No token");
        }
        //
        const payload: PL.TokenCheck = {
            user_id: userDat?.user_id,
            token,
        };
        //
        //
        const res = await fetch_POST(RT.POST.checkToken, payload);
        // console.log("[loginHandler] - result - ", res);
        takeRes(res);
    };
    //
    return (
        <section className="section" id="profile">
            <div className="container grid profile__container">
                <div className="profile__header">
                    <h1>Profile</h1>
                    <div className="profile__links">
                        <SiSocketdotio
                            className="profile__links-buttonIcon"
                            onClick={debugSX}
                        />
                        <div className="profile__links-buttonIcon" onClick={tokenCheck}>
                            <i className="ri-nft-line"></i>
                        </div>
                        <a
                            className={"profile__links-buttonIcon"}
                            href="https://discord.gg/Ddvppf72"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="ri-discord-fill"></i>
                        </a>
                    </div>
                </div>
                <div className="profile__data">
                    <div className="profile__data-username">{userDat?.user_id}</div>
                    <div className="profile__data-username">{userDat?.email}</div>
                    {/* <div
                        className={
                            isConnected
                                ? "profile__data-isconnected"
                                : "profile__data-notconnected"
                        }
                    >
                        {isConnected ? "Connected" : "No connection"}
                    </div> */}
                </div>
                <button className="Btn" onClick={goHome}>
                    Logout
                </button>
            </div>
        </section>
    );
}
