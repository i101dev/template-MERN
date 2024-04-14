//
//
import { FaDiscord, FaTwitter } from "react-icons/fa";
//
import { RootCntxType, UseRoot, headerLinks } from "../providers/RootCntx";
//
//
export default function Header() {
    //
    //
    const { viewType, set_viewType } = UseRoot() as RootCntxType;
    //
    //
    return (
        <div className="DF A JSB MB-2">
            <div className="Panel-D SH DF AC">
                <a
                    href="https://twitter.com"
                    className="SP DF"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter size="2em" className="c-b" />
                </a>
                <a
                    href="https://discord.gg/Ddvppf72"
                    className="SP DF"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaDiscord size="2em" className="c-o" />
                </a>
                {headerLinks.map((link, key: number) => {
                    //
                    const c0 = viewType === link ? "c-y BG-D10" : "c-btn";
                    const c1 = " FS-1-8 HCP NTS H-100 PY-05 PX-2";
                    //
                    return (
                        <div
                            key={key}
                            className={c0 + c1}
                            onClick={() => set_viewType(link)}
                        >
                            {link}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
