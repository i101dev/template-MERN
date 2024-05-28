//
//
import React from "react";
//
import { FaCaretRight } from "react-icons/fa";
import { RES } from "../../../__PKG__/exp";
//
//
function alerts(userAlerts: RES.UserAlert[]) {
    return (
        <div className="SP-Y-1 Scroll MPH-500 P-1">
            {userAlerts.map((m: any, i: number) => (
                <React.Fragment key={i}>
                    {m.details.length === 0 ? (
                        <div className="BG-D9 B-1-D13 P-1">
                            <div className="AlertModal__list-header">{m.header}</div>
                        </div>
                    ) : (
                        <div className="DF FDC BG-D9 B-1-D13 P-1 SP-Y-1">
                            <div className="AlertModal__list-header">{m.header}</div>
                            {m.details.map((dir: string, i: number) => (
                                <div key={i} className="DF AS">
                                    <FaCaretRight size="1rem" className="c-b" />
                                    <div className="AlertModal__list-item">{dir}</div>
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
export default function ({
    msgs: userAlerts,
    close,
}: {
    msgs: RES.UserAlert[];
    close: () => void;
}) {
    //
    //
    return (
        <div className="AlertModal" onClick={close}>
            <div className="AlertModal__list SP-Y-1 Pos-Cen">{alerts(userAlerts)}</div>
        </div>
    );
}
