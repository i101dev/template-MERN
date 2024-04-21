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
        <div className="SP-Y-1 FG-1 Pos-Cen">
            <div className="SP-Y-1 P-1 Panel-D">
                <div className="FS-2 TXT-C c-b">
                    <span className="FS-1-6 C-M6 MR-2">Username:</span> {userDat?.user_id}
                </div>
                <button className="OBtn" onClick={goHome}>
                    Logout
                </button>
            </div>
        </div>
    );
}
