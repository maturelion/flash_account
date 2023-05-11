import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../feature/auth/AuthActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { wallet } = useSelector((state) => state.wallet);

  let USDollar = new Intl.NumberFormat();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className="nk-header nk-header-fluid nk-header-fixed is-secondary"
        bis_skin_checked="1"
      >
        <div className="container-fluid" bis_skin_checked="1">
          <div className="nk-header-wrap" bis_skin_checked="1">
            <div
              className="nk-menu-trigger d-xl-none ml-n1"
              bis_skin_checked="1"
            >
              <a
                href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                className="nk-nav-toggle nk-quick-nav-icon"
                data-target="sidebarMenu"
              >
                <em className="icon ni ni-menu"></em>
              </a>
            </div>
            <div className="nk-header-brand d-xl-none" bis_skin_checked="1">
              <a
                href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                className="logo-link"
              >
                <img
                  className="logo-light logo-img"
                  src="../../assets/logo.png"
                  srcset="../logo.png"
                  alt="logo"
                />
                <img
                  className="logo-dark logo-img"
                  src="../../assets/logo.png"
                  srcset="../logo.png"
                  alt="logo-dark"
                />
              </a>
            </div>
            <div
              className="nk-header-news d-none d-xl-block"
              bis_skin_checked="1"
            >
              <div className="nk-news-list" bis_skin_checked="1">
                <a
                  className="nk-news-item"
                  href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                >
                  <div className="nk-news-icon" bis_skin_checked="1">
                    <em className="icon ni ni-card-view"></em>
                  </div>
                  <div className="nk-news-text" bis_skin_checked="1">
                    <p>
                      Do you know the latest update of Covid 2019?
                      <span>An overview of ours is now available here.</span>
                    </p>
                    <em className="icon ni ni-external"></em>
                  </div>
                </a>
              </div>
            </div>
            <div className="nk-header-tools" bis_skin_checked="1">
              <ul className="nk-quick-nav">
                <li className="dropdown user-dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    <div
                      className="user-toggle"
                      bis_skin_checked="1"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <div className="user-avatar sm" bis_skin_checked="1">
                        {user.first_name && user.first_name.slice(0, 1)}
                        {user.last_name && user.last_name.slice(0, 1)}
                      </div>
                      <div
                        className="user-info d-none d-md-block"
                        bis_skin_checked="1"
                      >
                        <div
                          className="user-status user-status-verified"
                          bis_skin_checked="1"
                        >
                          Connected
                        </div>
                        <div
                          className="user-name dropdown-indicator"
                          bis_skin_checked="1"
                        >
                          {user.first_name} {user.last_name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1"
                    bis_skin_checked="1"
                    style={{ display: `${showMenu ? "block" : "none"}` }}
                  >
                    <div
                      className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block"
                      bis_skin_checked="1"
                    >
                      <div className="user-card" bis_skin_checked="1">
                        <div className="user-avatar" bis_skin_checked="1">
                          <span>
                            {user.first_name && user.first_name.slice(0, 1)}
                            {user.last_name && user.last_name.slice(0, 1)}
                          </span>
                        </div>
                        <div className="user-info" bis_skin_checked="1">
                          <span className="lead-text">
                            {user.first_name} {user.last_name}
                          </span>
                          <span className="sub-text">
                            {user.account_number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dropdown-inner user-account-info"
                      bis_skin_checked="1"
                    >
                      <h6 className="overline-title-alt">Checking Account</h6>
                      <div className="user-balance" bis_skin_checked="1">
                        {USDollar.format(wallet.balance)}
                        <small className="currency currency-btc">USD</small>
                      </div>
                      <div className="user-balance-sub" bis_skin_checked="1">
                        Local
                        <span>
                          {USDollar.format(wallet.balance)}
                          <span className="currency currency-btc">USD</span>
                        </span>
                      </div>
                      <Link to="/transfer" className="link">
                        <span>Transfer Funds</span>
                        <em className="icon ni ni-wallet-out"></em>
                      </Link>
                    </div>
                    <div className="dropdown-inner" bis_skin_checked="1">
                      <ul className="link-list">
                        <li>
                          <a href="/#">
                            <em className="icon ni ni-user-alt"></em>
                            <span>View Profile</span>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <em className="icon ni ni-setting-alt"></em>
                            <span>Account Setting</span>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <em className="icon ni ni-security"></em>
                            <span>Reset Password</span>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <em className="icon ni ni-activity-alt"></em>
                            <span>Login Activity</span>
                          </a>
                        </li>
                        <li>
                          <a className="dark-switch" href="/#">
                            <em className="icon ni ni-moon"></em>
                            <span>Dark Mode</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-inner" bis_skin_checked="1">
                      <ul className="link-list">
                        <li>
                          <div
                            onClick={() => {
                              dispatch(logoutUser({}));
                              navigate("/");
                            }}
                          >
                            <em className="icon ni ni-signout"></em>
                            <span>Sign out</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
