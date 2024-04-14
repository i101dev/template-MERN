//
//
import { SoxCntxType, UseSox } from "../providers/SoxCntx";
import Header from "./Header";
//
//
export default function App() {
    //
    const { SX_init, debugSX, isConnected } = UseSox() as SoxCntxType;
    //
    //
    return (
        <>
            <div className="P-2 Body1">
                <div className="Pos-Rel H-100">
                    <Header />
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
                </div>
            </div>
        </>
    );
}
