//
import React from "react";
//
import { RootCntxType, UseRoot, ViewType } from "./providers/RootCtx";
//
const NavItem = ({ name, onClick }: { name: string; onClick: () => void }) => {
    return (
        <li className="nav__item">
            <a href={`#${name.toLowerCase()}`} onClick={onClick} className="nav__link">
                {name.toUpperCase()}
            </a>
        </li>
    );
};
const NavActions = ({
    userDat,
    viewType,
    clk_navMenu,
    clk_navAction,
}: {
    userDat: any;
    viewType: string;
    clk_navMenu: () => void;
    clk_navAction: (viewType: ViewType) => void;
}) => (
    <div className="nav__actions">
        {userDat ? (
            <div onClick={() => clk_navAction(ViewType.Profile)} className="nav__link">
                Profile
            </div>
        ) : (
            <>
                {viewType !== ViewType.Login && (
                    <div
                        onClick={() => clk_navAction(ViewType.Login)}
                        className="nav__link"
                    >
                        Login
                    </div>
                )}
                {viewType !== ViewType.Register && (
                    <div
                        onClick={() => clk_navAction(ViewType.Register)}
                        className="nav__link"
                    >
                        Join
                    </div>
                )}
            </>
        )}
        <div onClick={clk_navMenu} className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
        </div>
    </div>
);
const CloseMenu = ({ onClick }: { onClick: () => void }) => (
    <div onClick={onClick} className="nav__close" id="nav-close">
        <i className="ri-close-line"></i>
    </div>
);
//
export default function Header() {
    //
    const [navMenuCls, set_navMenuCls] = React.useState("nav__menu");
    //
    const { viewType, userDat, set_viewType } = UseRoot() as RootCntxType;
    //
    //
    const clk_navMenu = () => set_navMenuCls("nav__menu show-menu");
    const clk_closeMenu = () => set_navMenuCls("nav__menu");
    //
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
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <div className="nav__item">
                    <a onClick={clk_navItem} href="#key1" className="nav__logo">
                        <i className="ri-box-1-line"></i>Template.app
                    </a>
                </div>
                <div className={navMenuCls} id="nav-menu">
                    <ul className="nav__list">
                        <NavItem name="key1" onClick={clk_navItem} />
                        <NavItem name="data1" onClick={clk_navItem} />
                        <NavItem name="key2" onClick={clk_navItem} />
                        <NavItem name="data2" onClick={clk_navItem} />
                    </ul>
                    <CloseMenu onClick={clk_closeMenu} />
                </div>
                <NavActions
                    userDat={userDat}
                    viewType={viewType}
                    clk_navMenu={clk_navMenu}
                    clk_navAction={clk_navAction}
                />
            </nav>
        </header>
    );
}
