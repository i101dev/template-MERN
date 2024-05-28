//
import { RootCntxType, UseRoot } from "../providers/RootCtx";
//
export default function ProfileScreen() {
    //
    const { userDat, goHome } = UseRoot() as RootCntxType;
    //
    return (
        <section className="section" id="profile">
            <div className="container grid profile__container">
                <h1>Profile</h1>
                <div className="SP-Y-1 Panel-D profil__data">
                    <div className="FS-2 TXT-C c-b">{userDat?.user_id}</div>
                    <button className="Btn" onClick={goHome}>
                        Logout
                    </button>
                </div>
            </div>
        </section>
    );
}
