//
//
import React from "react";
//
import { FaCaretRight } from "react-icons/fa";
import { RES } from "../../../../__PKG__/X";
//
//
function alerts(userAlerts: RES.UserAlert[]) {
    return (
        <div className="SP-Y-1 Scroll MPH-700 P-1">
            {userAlerts.map((m: any, i: number) => (
                <React.Fragment key={i}>
                    {m.details.length === 0 ? (
                        <div className="BG-D6 P-1">
                            <div className="FS-2-4 c-o">{m.header}</div>
                        </div>
                    ) : (
                        <div className="DF FDC BG-D6 P-1 SP-Y-05">
                            <div className="FS-2-5 BB-1-D3 PB-1 c-o">{m.header}</div>
                            {m.details.map((dir: string, i: number) => (
                                <div key={i} className="DF AC">
                                    <FaCaretRight size={"1.6em"} className="c-b" />
                                    <div className="FS-1-8 ML-025 c-blz PR-05">{dir}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

//
//
export default function MsgsModal({
    msgs: userAlerts,
    close,
}: {
    msgs: RES.UserAlert[];
    close: () => void;
}) {
    //
    //
    return (
        <div className="Pos-Abs BG-D13 Z90 H-100 W-100">
            <div className="SP-Y-1 Modal BG-D10">
                <button className="RBtn Rnd FR P-07 TopLeftCorner" onClick={close}>
                    X
                </button>
                {alerts(userAlerts)}
            </div>
        </div>
    );
}
