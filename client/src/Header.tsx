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
    const clk_navItem = () => {
        clk_closeMenu();
        set_viewType(ViewType.Home);
    };
    const clk_navAction = (viewType: string) => {
        clk_closeMenu();
        set_viewType(viewType);
    };
    //
    //
    const NavItem = (name: string) => {
        return (
            <li className="nav__item">
                <a
                    onClick={clk_navItem}
                    href={`#${name.toLowerCase()}`}
                    className="nav__link"
                >
                    {name.toUpperCase()}
                </a>
            </li>
        );
    };
    const NavActions = () => {
        //
        //
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
                {viewType !== ViewType.Login && (
                    <div onClick={() => clk_navAction("Login")} className="nav__link">
                        Login
                    </div>
                )}
                {viewType !== ViewType.Register && (
                    <div onClick={() => clk_navAction("Register")} className="nav__link">
                        Register
                    </div>
                )}
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
                <div className="nav__item">
                    <a onClick={clk_navItem} href="#key1" className="nav__logo">
                        <i className="ri-box-1-line"></i>i101.app
                    </a>
                </div>
                <div className={navMenuCls} id="nav-menu">
                    <ul className="nav__list">
                        {NavItem("key1")}
                        {NavItem("data1")}
                        {NavItem("key2")}
                        {NavItem("data2")}
                    </ul>

                    {CloseMenu()}
                </div>

                {NavActions()}
            </nav>
        </header>
    );
}
