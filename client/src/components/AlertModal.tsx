//
//
import { FaCaretRight } from "react-icons/fa";
import { RES } from "../../../__PKG__/exp";
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
            <div className="AlertModal__alertList Pos-Cen">
                {userAlerts.map((m: any, i: number) => (
                    <div className="AlertModal__alertList-item" key={i}>
                        {m.details.length === 0 ? (
                            <div>
                                <div className="AlertModal__alertList-header">
                                    {m.header}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="AlertModal__alertList-item-header">
                                    {m.header}
                                </div>
                                {m.details.map((dir: string, i: number) => (
                                    <div
                                        key={i}
                                        className="AlertModal__alertList-item-data"
                                    >
                                        <FaCaretRight />
                                        <div>{dir}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
