//
import React from "react";
//
import { RootCntxType, UseRoot, ViewType } from "./providers/RootCtx";
import { SoxCntxType, UseSox } from "./providers/SoxCtx";
import { SiSocketdotio } from "react-icons/si";
import { PL, RT } from "../../__PKG__/exp";
import { MyApi } from "./hooks/MyAPI";
//
export default function Header() {
    //
    const [navMenuCls, set_navMenuCls] = React.useState("nav__menu");
    //
    const { viewType, token, userDat, takeRes, set_viewType } = UseRoot() as RootCntxType;
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
        console.log("[loginHandler] - result - ", res);
        takeRes(res);
    };
    //
    //
    const clk_navMenu = () => {
        set_navMenuCls("nav__menu show-menu");
    };
    const clk_closeMenu = () => {
        set_navMenuCls("nav__menu");
    };
    const clk_navItem = (viewType: string) => {
        clk_closeMenu();
        set_viewType(viewType);
    };
    //
    //
    const NavItem = (name: string) => {
        //
        let cls = "";
        if (viewType === name) {
            cls = "c-r";
        }
        //
        return (
            <li className="nav__item">
                <a
                    // href={`#${name.toLowerCase()}`}
                    onClick={() => clk_navItem(name)}
                    className={"nav__link " + cls}
                >
                    {name}
                </a>
            </li>
        );
    };
    const NavActions = () => {
        return (
            <div className="nav__actions">
                <div className="DF AC JC" onClick={debugSX}>
                    <SiSocketdotio />
                </div>
                <div className="DF AC JC" onClick={tokenCheck}>
                    <i className="ri-nft-line"></i>
                </div>
                <a
                    href="https://discord.gg/Ddvppf72"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="C-L10"
                >
                    <i className="ri-discord-fill"></i>
                </a>

                <div onClick={clk_navMenu} className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        );
    };
    const CloseMenu = () => {
        return (
            <div onClick={clk_closeMenu} className="nav__close" id="nav-close">
                <i className="ri-close-line"></i>
            </div>
        );
    };
    //
    //
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <div onClick={() => clk_navItem("Home")} className="nav__logo">
                    <i className="ri-box-1-line"></i>i101.app
                </div>
                <div className={navMenuCls} id="nav-menu">
                    <ul className="nav__list">
                        {Object.values(ViewType).map((t) => (
                            <React.Fragment key={t}>{NavItem(t)}</React.Fragment>
                        ))}
                    </ul>

                    {CloseMenu()}
                </div>

                {NavActions()}
            </nav>
        </header>
    );
}
