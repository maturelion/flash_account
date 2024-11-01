import React from 'react'
import {
    Link,
} from 'react-router-dom'
import { useGetUser } from '../../hooks/user.hooks';
import { useGetWallet } from '../../hooks/wallet.hook';

const SideBar = () => {
  const { data: user } = useGetUser();
  const { data: wallet } = useGetWallet();
  let USDollar = new Intl.NumberFormat();
  return (
    <div
              className="nk-sidebar nk-sidebar-fixed"
              data-content="sidebarMenu"
              bis_skin_checked="1"
            >
              <div
                className="nk-sidebar-element nk-sidebar-head"
                style={{ borderBottom: "solid #fe473a" }}
                bis_skin_checked="1"
              >
                <div className="nk-sidebar-brand" bis_skin_checked="1">
                  <a
                    href="/personal-banking/dashboard"
                    className="logo-link nk-sidebar-logo"
                  >
                    <img
                      className="logo-light logo-img"
                      src="../../assets/logo.png"
                      srcSet="../logo.png 2x"
                      alt="logo"
                    />
                    <img
                      className="logo-dark logo-img"
                      src="../../assets/logo.png"
                      // srcSet="../logo.png 2x"
                      alt="logo-dark"
                    />
                  </a>
                </div>
                <div className="nk-menu-trigger mr-n2" bis_skin_checked="1">
                  <a
                    href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                    className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                    data-target="sidebarMenu"
                  >
                    <em className="icon ni ni-arrow-left"></em>
                  </a>
                </div>
              </div>
              <div className="nk-sidebar-element" bis_skin_checked="1">
                <div
                  className="nk-sidebar-body"
                  data-simplebar="init"
                  bis_skin_checked="1"
                >
                  <div
                    className="simplebar-wrapper"
                    style={{ margin: "0px" }}
                    bis_skin_checked="1"
                  >
                    <div
                      className="simplebar-height-auto-observer-wrapper"
                      bis_skin_checked="1"
                    >
                      <div
                        className="simplebar-height-auto-observer"
                        bis_skin_checked="1"
                      ></div>
                    </div>
                    <div className="simplebar-mask" bis_skin_checked="1">
                      <div
                        className="simplebar-offset"
                        style={{ right: "0px", bottom: "0px" }}
                        bis_skin_checked="1"
                      >
                        <div
                          className="simplebar-content-wrapper"
                          style={{ height: "auto", overflow: "hidden scroll" }}
                          bis_skin_checked="1"
                        >
                          <div
                            className="simplebar-content"
                            style={{ padding: "0px" }}
                            bis_skin_checked="1"
                          >
                            <div
                              className="nk-sidebar-content"
                              bis_skin_checked="1"
                            >
                              <div
                                className="nk-sidebar-widget d-none d-xl-block"
                                bis_skin_checked="1"
                              >
                                <div
                                  className="user-account-info between-center"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    className="user-account-main"
                                    bis_skin_checked="1"
                                  >
                                    <h6 className="overline-title-alt">
                                      Available Balance
                                    </h6>
                                    <div
                                      className="user-balance"
                                      bis_skin_checked="1"
                                    >
                                      {USDollar.format(wallet?.balance)}
                                      <small className="currency currency-btc">
                                        USD
                                      </small>
                                    </div>
                                    <div
                                      className="user-balance-alt"
                                      bis_skin_checked="1"
                                    >
                                      {USDollar.format(wallet?.balance)}
                                      <span className="currency currency-btc">
                                        USD
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                    className="btn btn-white btn-icon btn-light"
                                  >
                                    <em className="icon ni ni-line-chart"></em>
                                  </a>
                                </div>
                                <ul className="user-account-data gy-1">
                                  <li>
                                    <div
                                      className="user-account-label"
                                      bis_skin_checked="1"
                                    >
                                      <span className="sub-text">Income</span>
                                    </div>
                                    <div
                                      className="user-account-value"
                                      bis_skin_checked="1"
                                    >
                                      <span className="text-success ml-2">
                                        25 %
                                        <em className="icon ni ni-arrow-long-up"></em>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      className="user-account-label"
                                      bis_skin_checked="1"
                                    >
                                      <span className="sub-text">Debits</span>
                                    </div>
                                    <div
                                      className="user-account-value"
                                      bis_skin_checked="1"
                                    >
                                      <span className="text-danger ml-2">
                                        75 %
                                        <em className="icon ni ni-arrow-long-down"></em>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                                <div
                                  className="user-account-actions"
                                  bis_skin_checked="1"
                                >
                                  <ul className="g-3">
                                    <li>
                                      <Link
                                        to="/transfer"
                                        className="btn btn-lg btn-primary"
                                      >
                                        <span>
                                          <i className="fas fa-money-bill-alt"></i>
                                          Transfer
                                        </span>
                                      </Link>
                                    </li>
                                    <li>
                                      <a
                                        href="/personal-banking/pay-bills"
                                        className="btn btn-lg btn-secondary"
                                      >
                                        <span>
                                          <i className="fas fa-file-invoice-dollar"></i>
                                          Pay Bills
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0"
                                bis_skin_checked="1"
                              >
                                <a
                                  className="nk-profile-toggle toggle-expand"
                                  data-target="sidebarProfile"
                                  href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                >
                                  <div
                                    className="user-card-wrap"
                                    bis_skin_checked="1"
                                  >
                                    <div
                                      className="user-card"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        className="user-avatar"
                                        bis_skin_checked="1"
                                      >
                                        <span>{user.first_name &&
                                              user.first_name.slice(0, 1)}
                                            {user.last_name &&
                                              user.last_name.slice(0, 1)}</span>
                                      </div>
                                      <div
                                        className="user-info"
                                        bis_skin_checked="1"
                                      >
                                        <span className="lead-text">
                                          {user.first_name} {user.last_name}
                                        </span>
                                        <span className="sub-text">
                                          {user.account_number}
                                        </span>
                                      </div>
                                      <div
                                        className="user-action"
                                        bis_skin_checked="1"
                                      >
                                        <em className="icon ni ni-chevron-down"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                <div
                                  className="nk-profile-content toggle-expand-content"
                                  data-content="sidebarProfile"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    className="user-account-info between-center"
                                    bis_skin_checked="1"
                                  >
                                    <div
                                      className="user-account-main"
                                      bis_skin_checked="1"
                                    >
                                      <h6 className="overline-title-alt">
                                        Available Balance
                                      </h6>
                                      <div
                                        className="user-balance"
                                        bis_skin_checked="1"
                                      >
                                        {USDollar.format(wallet?.balance)}
                                        <small className="currency currency-btc">
                                          USD
                                        </small>
                                      </div>
                                      <div
                                        className="user-balance-alt"
                                        bis_skin_checked="1"
                                      >
                                        {wallet?.balance}
                                        <span className="currency currency-btc">
                                          USD
                                        </span>
                                      </div>
                                    </div>
                                    <a
                                      href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                      className="btn btn-icon btn-light"
                                    >
                                      <em className="icon ni ni-line-chart"></em>
                                    </a>
                                  </div>
                                  <ul className="user-account-data">
                                    <li>
                                      <div
                                        className="user-account-label"
                                        bis_skin_checked="1"
                                      >
                                        <span className="sub-text">income</span>
                                      </div>
                                      <div
                                        className="user-account-value"
                                        bis_skin_checked="1"
                                      >
                                        <span className="text-success ml-2">
                                          25 %
                                          <em className="icon ni ni-arrow-long-up"></em>
                                        </span>
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        className="user-account-label"
                                        bis_skin_checked="1"
                                      >
                                        <span className="sub-text">Debits</span>
                                      </div>
                                      <div
                                        className="user-account-value"
                                        bis_skin_checked="1"
                                      >
                                        <span className="text-danger ml-2">
                                          75 %
                                          <em className="icon ni ni-arrow-long-up"></em>
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                  <ul className="user-account-links">
                                    <li>
                                      <Link
                                        to="/transfer"
                                        className="link"
                                      >
                                        <span> Transfer Funds</span>
                                        <em className="icon ni ni-wallet-out"></em>
                                      </Link>
                                    </li>
                                    <li>
                                      <a
                                        href="/personal-banking/authenticate"
                                        className="link"
                                      >
                                        <span>Pay Bills</span>
                                        <em className="icon ni ni-wallet-in"></em>
                                      </a>
                                    </li>
                                  </ul>
                                  <ul className="link-list">
                                    <li>
                                      <a href="/personal-banking/profile">
                                        <em className="icon ni ni-user-alt"></em>
                                        <span>View Profile</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/personal-banking/account-setting">
                                        <em className="icon ni ni-setting-alt"></em>
                                        <span>Account Setting</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/personal-banking/activity-logs">
                                        <em className="icon ni ni-activity-alt"></em>
                                        <span>Login Activity</span>
                                      </a>
                                    </li>
                                  </ul>
                                  <ul className="link-list">
                                    <li>
                                      <a href="/personal-banking/logout">
                                        <em className="icon ni ni-signout"></em>
                                        <span>Sign out</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="nk-sidebar-menu"
                                bis_skin_checked="1"
                              >
                                <ul className="nk-menu">
                                  <li className="nk-menu-heading">
                                    <h6 className="overline-title">Menu</h6>
                                  </li>
                                  <li className="nk-menu-item active current-page">
                                    <a
                                      href="/personal-banking/dashboard"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-dashboard"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Dashboard
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/myaccount"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-user-c"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        My Account
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/summary"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-report-profit"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Account summary
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <Link
                                      to="/transfer"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-wallet-out"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Transfer
                                      </span>
                                    </Link>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/wire"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-money"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Cross-border Transfer
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <Link
                                      to="/check-deposit"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-wallet-in"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Deposit Check
                                      </span>
                                    </Link>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/pay-bills"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-cc-secure"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Pay Bills
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/visual-card"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-cc-alt2-fill"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Visual Cards
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item has-sub">
                                    <a
                                      href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                      className="nk-menu-link bg-primary text-light nk-menu-toggle"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-bitcoin"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Crypto Currency
                                      </span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                      <li className="nk-menu-item">
                                        <a
                                          href="/personal-banking/crypto"
                                          className="nk-menu-link"
                                          data-original-title=""
                                          title=""
                                        >
                                          <span className="nk-menu-text">
                                            Manage Assets
                                          </span>
                                        </a>
                                      </li>
                                      <li className="nk-menu-item">
                                        <a
                                          href="/personal-banking/crypto?action=deposit"
                                          className="nk-menu-link"
                                          data-original-title=""
                                          title=""
                                        >
                                          <span className="nk-menu-text">
                                            Deposit Crypto
                                          </span>
                                        </a>
                                      </li>
                                      <li className="nk-menu-item">
                                        <a
                                          href="/personal-banking/crypto?action=withdraw"
                                          className="nk-menu-link"
                                          data-original-title=""
                                          title=""
                                        >
                                          <span className="nk-menu-text">
                                            Fiat Withdrawal
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/kyc"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-file-check-fill"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        KYC Status
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/loan"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-invest"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Loan/Credit financing
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/card"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-cc-alt"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Link External card
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/account-setting"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-setting-alt-fill"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Account Setting
                                      </span>
                                    </a>
                                  </li>
                                  <li className="nk-menu-item">
                                    <a
                                      href="/personal-banking/contact"
                                      className="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span className="nk-menu-icon">
                                        <em className="icon ni ni-help-alt"></em>
                                      </span>
                                      <span className="nk-menu-text">
                                        Support
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div
                                className="nk-sidebar-footer"
                                bis_skin_checked="1"
                              >
                                <ul className="nk-menu nk-menu-footer">
                                  <a href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#">
                                    <div
                                      id="google_translate_element"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        className="skiptranslate goog-te-gadget"
                                        dir="ltr"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          id=":0.targetLanguage"
                                          className="goog-te-gadget-simple"
                                          bis_skin_checked="1"
                                          style={{ whiteSpace: "nowrap" }}
                                        >
                                          <img
                                            src="../../assets/cleardot.gif"
                                            className="goog-te-gadget-icon"
                                            alt=""
                                            style={{
                                              backgroundImage:
                                                "url('https://translate.googleapis.com/translate_static/img/te_ctrl3.gif')",
                                              backgroundPosition: "-65px 0px",
                                            }}
                                          />
                                          <span
                                            style={{
                                              verticalAlign: "middle",
                                            }}
                                          >
                                            <a
                                              aria-haspopup="true"
                                              className="VIpgJd-ZVi9od-xl07Ob-lTBxed"
                                              href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                            >
                                              <span>Select Language</span>
                                              <img
                                                src="../../assets/cleardot.gif"
                                                alt=""
                                                width="1"
                                                height="1"
                                              />
                                              <span
                                                style={{
                                                  borderLeft:
                                                    "1px solid rgb(187, 187, 187);",
                                                }}
                                              >
                                                ​
                                              </span>
                                              <img
                                                src="../../assets/cleardot.gif"
                                                alt=""
                                                width="1"
                                                height="1"
                                              />
                                              <span
                                                aria-hidden="true"
                                                style={{
                                                  color: "rgb(118, 118, 118)",
                                                }}
                                              >
                                                ▼
                                              </span>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "auto", height: "1076px" }}
                      bis_skin_checked="1"
                    ></div>
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                    bis_skin_checked="1"
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{ width: "0px", display: "none" }}
                      bis_skin_checked="1"
                    ></div>
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "visible" }}
                    bis_skin_checked="1"
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        height: "1076px",
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "block",
                      }}
                      bis_skin_checked="1"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default SideBar