//
import { SoxCntxType, UseSox } from "../../providers/SoxCntx";
//
export default function HomeScreen() {
    //
    const { SX_init, debugSX, isConnected } = UseSox() as SoxCntxType;
    //
    return (
        <div className="SP-Y-2 Pos-Cen">
            <div className="FS-3 C-L2">Landing Page</div>

            {isConnected ? (
                <>
                    <button className="Btn" onClick={debugSX}>
                        Test socket
                    </button>
                </>
            ) : (
                <button className="Btn" onClick={SX_init}>
                    Connect socket
                </button>
            )}
        </div>
    );
}
