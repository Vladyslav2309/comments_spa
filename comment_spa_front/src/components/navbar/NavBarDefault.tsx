import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthUserActionType, IAuthUser} from "../auth/types";
import http from "../../http";
import {APP_ENV} from "../../env";
import {Link} from "react-router-dom";
const NavBarDefault=()=>{


    const dispatch = useDispatch();

    const {isAuth, user} = useSelector((store: any) => store.auth as IAuthUser);

    const logout = () => {
        delete http.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
        dispatch({type: AuthUserActionType.LOGOUT_USER});
    }


    return(
        <>
            <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ms-5">
                    <Link className="navbar-brand" to="/">
                        Comments SPA
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <ul className="navbar-nav mx-5">
                            {isAuth ? (
                                <>

                                    <img src={`${APP_ENV.BASE_URL}/uploads/50_${user?.image}`} alt="foto"
                                         width={20}/>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/profile">
                                            {user?.email}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            aria-current="page"
                                            to="/logout"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                logout();
                                            }}
                                        >
                                            Вихід
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/register">
                                            Реєстрація
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <Link className="nav-link" aria-current="page" to="/login">
                                            Вхід
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </ul>
                    </div>
                </div>
            </nav>
            </header>
        </>
    )
}
export default NavBarDefault;
