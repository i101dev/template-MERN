//
import { RootCntxType, UseRoot } from "../../providers/RootCntx";
//
export default function ProfileScreen() {
    //
    //
    const { goHome, userDat } = UseRoot() as RootCntxType;
    //
    //
    if (!userDat) {
        return "";
    }
    //
    //
    return (
        <div className="SP-Y-1 FG-1">
            <div className="DF JSB AS">
                <div className="Split-2 AS GG-1 FG-1">
                    <div className="B-1-D10 Split-2">
                        <div className="FS-2 c-b BG-D12 P-1 BR-1-D10">
                            {userDat?.email}
                        </div>
                        <div className="FS-2 c-b BG-D12 P-1">{userDat?.user_id}</div>
                    </div>
                </div>
                <button className="Btn" onClick={goHome}>
                    Logout
                </button>
            </div>
        </div>
    );
}
