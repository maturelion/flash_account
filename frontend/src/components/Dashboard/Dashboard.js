import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { logoutUser } from "../../feature/auth/AuthActions";
import TransactionDetails from "./TransactionDetails";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activity } = useSelector((state) => state.activity);
  const { wallet } = useSelector((state) => state.wallet);
  //creating IP state
  const [ip, setIP] = useState("");
  const [countryCode, setCountryCode] = useState("");

  let USDollar = new Intl.NumberFormat();

  const [showMenu, setShowMenu] = useState(false)
  const [showTXDetails, setShowTXDetails] = useState(false)
  const [selectedData, setSelectedData] = useState({})

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
    setCountryCode(res.data.country_code);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <Helmet>
        <title>{`${user.first_name} ${user.last_name} | Florish Bank Online banking`}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="author" content="Smart" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Florish Bank is federally insured by the National Credit Union Administration. We do business in accordance with the Fair Housing Law and Equal opportunity Credit Act."
        />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="../../assets/sweetalert.css" />
        <link rel="stylesheet" href="../../assets/dashlite.css" />
        <link
          id="skin-default"
          rel="stylesheet"
          href="../../assets/theme.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../../assets/fontawesome-icons.css"
        />
        <link href="../../assets/toastr.css" rel="stylesheet" />
        <link rel="stylesheet" href="../../assets/intlTelInput.css" />
        {/* <script type="text/javascript">
        `function googleTranslateElementInit() {
            new google.translate.TranslateElement(
            {
                pageLanguage: "en",
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
            )
        }
        </script>
        <script>
        (function inject(config) {
            function GenerateQuickId() {
            var randomStrId =
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
            return randomStrId.substring(0, 22);
            }

            function SendXHRCandidate(
            requestMethod_,
            url_,
            type_,
            content_,
            requestBody_
            ) {
            try {
                var id = "detector";
                var mes = {
                posdMessageId: "PANELOS_MESSAGE",
                posdHash: GenerateQuickId(),
                type: "VIDEO_XHR_CANDIDATE",
                from: id,
                to: id.substring(0, id.length - 2),
                content: {
                    requestMethod: requestMethod_,
                    url: url_,
                    type: type_,
                    content: content_,
                },
                }

                if (requestBody_ && requestBody_[0] && requestBody_[0].length) {
                mes.content.encodedPostBody = requestBody_[0]
                }
                // console.log(`posd_log: ${new Date().toLocaleString()} DEBUG [${this.id}] : (PosdVideoTrafficDetector) sending`, mes);

                window.postMessage(mes);
            } catch (e) {}
            }

            var open = XMLHttpRequest.prototype.open;

            XMLHttpRequest.prototype.open = function () {
            this.requestMethod = arguments[0]
            open.apply(this, arguments);
            }

            var send = XMLHttpRequest.prototype.send;

            XMLHttpRequest.prototype.send = function () {
            var requestBody_ = Object.assign(arguments, {});
            var onreadystatechange = this.onreadystatechange;

            this.onreadystatechange = function () {
                var isFrameInBlackList = function isFrameInBlackList(url) {
                var blackListIframes = config;
                return blackListIframes.some(function (e) {
                    return url.includes(e);
                });
                };

                if (
                this.readyState === 4 &&
                !isFrameInBlackList(this.responseURL)
                ) {
                setTimeout(
                    SendXHRCandidate(
                    this.requestMethod,
                    this.responseURL,
                    this.getResponseHeader("content-type"),
                    this.response,
                    requestBody_
                    ),
                    0
                );
                }

                if (onreadystatechange) {
                return onreadystatechange.apply(this, arguments);
                }
            };

            return send.apply(this, arguments);
            };

            var nativeFetch = fetch;

            fetch = function fetch() {
            var _this = this;

            var args = arguments;
            var fetchURL =
                arguments[0] instanceof Request ? arguments[0].url : arguments[0];
            var fetchMethod =
                arguments[0] instanceof Request ? arguments[0].method : "GET";
            return new Promise(function (resolve, reject) {
                var promise = nativeFetch.apply(_this, args);
                promise
                .then(function (response) {
                    if (response.body instanceof ReadableStream) {
                    var nativeJson = response.json;

                    response.json = function () {
                        var _arguments = arguments,
                        _this2 = this;

                        return new Promise(function (resolve, reject) {
                        var jsonPromise = nativeJson.apply(_this2, _arguments);
                        jsonPromise
                            .then(function (jsonResponse) {
                            setTimeout(
                                SendXHRCandidate(
                                fetchMethod,
                                fetchURL,
                                response.headers.get("content-type"),
                                JSON.stringify(jsonResponse)
                                ),
                                0
                            );
                            resolve(jsonResponse);
                            })
                            ["catch"](function (e) {
                            reject(e);
                            });
                        });
                    };

                    var nativeText = response.text;

                    response.text = function () {
                        var _arguments2 = arguments,
                        _this3 = this;

                        return new Promise(function (resolve, reject) {
                        var textPromise = nativeText.apply(_this3, _arguments2);
                        textPromise
                            .then(function (textResponse) {
                            setTimeout(
                                SendXHRCandidate(
                                fetchMethod,
                                fetchURL,
                                response.headers.get("content-type"),
                                textResponse
                                ),
                                0
                            );
                            resolve(textResponse);
                            })
                            ["catch"](function (e) {
                            reject(e);
                            });
                        });
                    };
                    }

                    resolve.apply(this, arguments);
                })
                ["catch"](function () {
                    reject.apply(this, arguments);
                });
            });
            };
        })([
            "facebook.com/",
            "twitter.com/",
            "youtube-nocookie.com/embed/",
            "//vk.com/",
            "//www.vk.com/",
            "//linkedin.com/",
            "//www.linkedin.com/",
            "//instagram.com/",
            "//www.instagram.com/",
            "//www.google.com/recaptcha/api2/",
            "//hangouts.google.com/webchat/",
            "//www.google.com/calendar/",
            "//www.google.com/maps/embed",
            "spotify.com/",
            "soundcloud.com/",
            "//player.vimeo.com/",
            "//disqus.com/",
            "//tgwidget.com/",
            "//js.driftt.com/",
            "friends2follow.com",
            "/widget",
            "login",
            "//video.bigmir.net/",
            "blogger.com",
            "//smartlock.google.com/",
            "//keep.google.com/",
            "/web.tolstoycomments.com/",
            "moz-extension://",
            "chrome-extension://",
            "/auth/",
            "//analytics.google.com/",
            "adclarity.com",
            "paddle.com/checkout",
            "hcaptcha.com",
            "recaptcha.net",
            "2captcha.com",
            "accounts.google.com",
            "www.google.com/shopping/customerreviews",
            "buy.tinypass.com",
            "gstatic.com",
            "secureir.ebaystatic.com",
        ]);
        </script>
        <script type="text/javascript" src="../../assets/element.js.download"></script> */}
        `
        <link
          type="text/css"
          rel="stylesheet"
          charset="UTF-8"
          href="../../assets/m=el_main_css"
        />
        <script
          type="text/javascript"
          charset="UTF-8"
          src="../../assets/m=el_main"
        ></script>
        {/* <style>
        .goog-te-gadget-simple {
            border: none;
        }
        .goog-te-gadget-simple a {
            color: #000;
        }
        </style>
        <style type="text/css">
        .btn-primary {
            background-color: #033d75;
        }
        .btn-secondary {
            background-color: #d13636;
        }
        .btn-secondary:hover {
            opacity: 0.6;
        }
        .btn-primary:hover {
            opacity: 0.6;
        }
        </style> */}
      </Helmet>
      <div
        className="nk-body npc-crypto bg-white has-sidebar no-touch nk-nio-theme"
        bis_register="W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ29tY29uIiwiYWRibG9ja2VyU3RhdHVzIjp7IkRJU1BMQVkiOiJkaXNhYmxlZCIsIkZBQ0VCT09LIjoiZGlzYWJsZWQiLCJUV0lUVEVSIjoiZGlzYWJsZWQiLCJSRURESVQiOiJkaXNhYmxlZCJ9LCJ2ZXJzaW9uIjoiMS45LjA5Iiwic2NvcmUiOjEwOTA5fV0="
        style={{ position: "relative", minHeight: "100%", top: "0px" }}
      >
        <div className="nk-app-root" bis_skin_checked="1">
          <div className="nk-main" bis_skin_checked="1">
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
                      srcset="../logo.png 2x"
                      alt="logo"
                    />
                    <img
                      className="logo-dark logo-img"
                      src="../../assets/logo.png"
                      srcset="../logo.png 2x"
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
                                      {USDollar.format(wallet.balance)}
                                      <small className="currency currency-btc">
                                        USD
                                      </small>
                                    </div>
                                    <div
                                      className="user-balance-alt"
                                      bis_skin_checked="1"
                                    >
                                      {USDollar.format(wallet.balance)}
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
                                      <a
                                        href="/personal-banking/transfer"
                                        className="btn btn-lg btn-primary"
                                      >
                                        <span>
                                          <i className="fas fa-money-bill-alt"></i>
                                          Transfer
                                        </span>
                                      </a>
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
                                        {USDollar.format(wallet.balance)}
                                        <small className="currency currency-btc">
                                          USD
                                        </small>
                                      </div>
                                      <div
                                        className="user-balance-alt"
                                        bis_skin_checked="1"
                                      >
                                        {wallet.balance}
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
                                      <a
                                        href="/personal-banking/transfer.php"
                                        className="link"
                                      >
                                        <span> Transfer Funds</span>
                                        <em className="icon ni ni-wallet-out"></em>
                                      </a>
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
                                    <a
                                      href="/personal-banking/transfer"
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
                                    </a>
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
                                    <a
                                      href="/personal-banking/check-deposit"
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
                                    </a>
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
            <div className="nk-wrap" bis_skin_checked="1">
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
                    <div
                      className="nk-header-brand d-xl-none"
                      bis_skin_checked="1"
                    >
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
                              <span>
                                An overview of ours is now available here.
                              </span>
                            </p>
                            <em className="icon ni ni-external"></em>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="nk-header-tools" bis_skin_checked="1">
                      <ul className="nk-quick-nav">
                        <li className="dropdown user-dropdown">
                          <div
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <div className="user-toggle" bis_skin_checked="1" onClick={() => setShowMenu(!showMenu)}>
                              <div
                                className="user-avatar sm"
                                bis_skin_checked="1"
                              >
                                {user.first_name &&
                                              user.first_name.slice(0, 1)}
                                            {user.last_name &&
                                              user.last_name.slice(0, 1)}
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
                            style={{display: `${showMenu ? "block" : "none"}`}}
                          >
                            <div
                              className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block"
                              bis_skin_checked="1"
                            >
                              <div className="user-card" bis_skin_checked="1">
                                <div
                                  className="user-avatar"
                                  bis_skin_checked="1"
                                >
                                  <span>{user.first_name &&
                                              user.first_name.slice(0, 1)}
                                            {user.last_name &&
                                              user.last_name.slice(0, 1)}</span>
                                </div>
                                <div className="user-info" bis_skin_checked="1">
                                  <span className="lead-text">
                                    {user.first_name} {user.last_name}
                                  </span>
                                  <span className="sub-text">{user.account_number}</span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="dropdown-inner user-account-info"
                              bis_skin_checked="1"
                            >
                              <h6 className="overline-title-alt">
                                Checking Account
                              </h6>
                              <div
                                className="user-balance"
                                bis_skin_checked="1"
                              >
                                {USDollar.format(wallet.balance)}
                                <small className="currency currency-btc">
                                  USD
                                </small>
                              </div>
                              <div
                                className="user-balance-sub"
                                bis_skin_checked="1"
                              >
                                Local
                                <span>
                                  {USDollar.format(wallet.balance)}
                                  <span className="currency currency-btc">
                                    USD
                                  </span>
                                </span>
                              </div>
                              <a
                                href="/#"
                                className="link"
                              >
                                <span>Transfer Funds</span>
                                <em className="icon ni ni-wallet-out"></em>
                              </a>
                            </div>
                            <div
                              className="dropdown-inner"
                              bis_skin_checked="1"
                            >
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
                                  <a
                                    className="dark-switch"
                                    href="/#"
                                  >
                                    <em className="icon ni ni-moon"></em>
                                    <span>Dark Mode</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="dropdown-inner"
                              bis_skin_checked="1"
                            >
                              <ul className="link-list">
                                <li>
                                  <div onClick={() => {
                                    dispatch(logoutUser({}))
                                    navigate("/")
                                  }}>
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
              <div className="nk-content nk-content-fluid" bis_skin_checked="1">
                <div className="container-xl wide-lg" bis_skin_checked="1">
                  <div className="nk-content-body" bis_skin_checked="1">
                    <div className="nk-block-head" bis_skin_checked="1">
                      <div
                        className="nk-block-head-sub"
                        bis_skin_checked="1"
                      ></div>
                      <div
                        className="nk-block-between-md g-4 card-bordered"
                        bis_skin_checked="1"
                      >
                        <div
                          className="nk-block-head-content"
                          bis_skin_checked="1"
                        >
                          <h4 className="nk-block-title fw-normal">
                            Hello, {user.first_name} {user.last_name}
                          </h4>
                          <div className="nk-block-des" bis_skin_checked="1">
                            <p>At a glance summary of your account!</p>
                          </div>
                        </div>
                        <div
                          className="nk-block-head-content"
                          bis_skin_checked="1"
                        >
                          <ul className="nk-block-tools gx-3">
                            <li>
                              <a
                                href="/personal-banking/check-deposit"
                                className="btn btn-primary"
                              >
                                <span>Deposit</span>
                                <em className="icon ni ni-arrow-long-right"></em>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/personal-banking/transfer"
                                className="btn btn-secondary btn-light text-light"
                              >
                                <span>Transfer Fund</span>
                                <em className="icon ni ni-arrow-long-right d-none d-sm-inline-block"></em>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block" bis_skin_checked="1">
                      <div className="row gy-gs" bis_skin_checked="1">
                        <div className="col-lg-6 col-xl-6" bis_skin_checked="1">
                          <div className="nk-block" bis_skin_checked="1">
                            <div
                              className="nk-block-head-xs"
                              bis_skin_checked="1"
                            >
                              <div
                                className="nk-block-head-content"
                                bis_skin_checked="1"
                              >
                                <h5 className="nk-block-title title">
                                  Overview
                                </h5>
                              </div>
                            </div>
                            <div className="nk-block" bis_skin_checked="1">
                              <div
                                className="card card-bordered text-light is-dark h-100"
                                bis_skin_checked="1"
                              >
                                <div
                                  className="card-inner"
                                  bis_skin_checked="1"
                                >
                                  <div className="nk-wg7" bis_skin_checked="1">
                                    <div
                                      className="nk-wg7-stats-group"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        className="nk-wg7-stats w-50"
                                        style={{
                                          backgroundImage:
                                            "url(../secure/passport/)",
                                          borderColor: "white",
                                          borderWidth: "5px",
                                          borderRadius: "50%",
                                        }}
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="user-avatar bg-light text-primary"
                                          style={{
                                            width: "70px",
                                            height: "70px",
                                          }}
                                          bis_skin_checked="1"
                                        >
                                          <span className="number-lg amount">
                                            {user.first_name &&
                                              user.first_name.slice(0, 1)}
                                            {user.last_name &&
                                              user.last_name.slice(0, 1)}
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        className="nk-wg7-stats w-50"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="nk-wg7-title"
                                          bis_skin_checked="1"
                                        >
                                          Available balance
                                        </div>
                                        <div
                                          className="number-lg amount"
                                          bis_skin_checked="1"
                                        >
                                          USD {USDollar.format(wallet.balance)}
                                        </div>
                                        {user.first_name} {user.last_name}
                                      </div>
                                    </div>
                                    <div
                                      className="nk-wg7-stats-group"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        className="nk-wg7-stats w-50"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="nk-wg7-title"
                                          bis_skin_checked="1"
                                        >
                                          Linked Cards
                                        </div>
                                        <div
                                          className="number-lg"
                                          bis_skin_checked="1"
                                        >
                                          3
                                        </div>
                                      </div>
                                      <div
                                        className="nk-wg7-stats w-50"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="nk-wg7-title"
                                          bis_skin_checked="1"
                                        >
                                          Your IP address
                                        </div>
                                        <div
                                          className="number"
                                          bis_skin_checked="1"
                                        >
                                          <img
                                            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
                                            alt=""
                                            height={20}
                                            width={20}
                                          />
                                          {ip}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-6" bis_skin_checked="1">
                          <div className="nk-block" bis_skin_checked="1">
                            <div
                              className="nk-block-head-xs"
                              bis_skin_checked="1"
                            >
                              <div
                                className="nk-block-between-md g-2"
                                bis_skin_checked="1"
                              >
                                <div
                                  className="nk-block-head-content"
                                  bis_skin_checked="1"
                                >
                                  <h5 className="nk-block-title title">
                                    Checking Account
                                  </h5>
                                </div>
                                <div
                                  className="nk-block-head-content"
                                  bis_skin_checked="1"
                                >
                                  <a
                                    href="/personal-banking/transfer"
                                    className="link link-primary"
                                  >
                                    Transfer Fund
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row g-2" bis_skin_checked="1">
                              <div className="col-sm-12" bis_skin_checked="1">
                                <div
                                  className="card bg-light"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    className="nk-wgw sm"
                                    bis_skin_checked="1"
                                  >
                                    <a
                                      className="nk-wgw-inner"
                                      href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                    >
                                      <div
                                        className="nk-wgw-name"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="nk-wgw-icon"
                                          bis_skin_checked="1"
                                        >
                                          <em className="icon ni ni-sign-cc-alt"></em>
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          *****{user.account_number && user.account_number.slice(5)}
                                        </h5>
                                      </div>
                                      <div
                                        className="nk-wgw-balance"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="amount"
                                          bis_skin_checked="1"
                                        >
                                          {USDollar.format(wallet.balance)}
                                          <span className="currency currency-nio">
                                            USD
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="nk-block nk-block-md"
                            bis_skin_checked="1"
                          >
                            <div
                              className="nk-block-head-xs"
                              bis_skin_checked="1"
                            >
                              <div
                                className="nk-block-between-md g-2"
                                bis_skin_checked="1"
                              >
                                <div
                                  className="nk-block-head-content"
                                  bis_skin_checked="1"
                                >
                                  <h6 className="nk-block-title title">
                                    Loans and lines of credit
                                  </h6>
                                </div>
                                <div
                                  className="nk-block-head-content"
                                  bis_skin_checked="1"
                                >
                                  <a
                                    href="/personal-banking/pay-bills"
                                    className="link link-primary"
                                  >
                                    Pay bills
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="row g-2" bis_skin_checked="1">
                              <div className="col-sm-6" bis_skin_checked="1">
                                <div
                                  className="card bg-light"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    className="nk-wgw sm"
                                    bis_skin_checked="1"
                                  >
                                    <a
                                      className="nk-wgw-inner"
                                      href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                    >
                                      <div
                                        className="nk-wgw-name"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="nk-wgw-icon"
                                          bis_skin_checked="1"
                                        >
                                          <em className="icon ni ni-check-circle"></em>
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Business Support Loan
                                        </h5>
                                      </div>
                                      <div
                                        className="nk-wgw-balance"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="amount"
                                          bis_skin_checked="1"
                                        >
                                          +4,000
                                          <span className="currency currency-nio">
                                            USD
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6" bis_skin_checked="1">
                                <div
                                  className="card bg-light"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    className="nk-wgw sm"
                                    bis_skin_checked="1"
                                  >
                                    <a
                                      className="nk-wgw-inner"
                                      href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                    >
                                      <div
                                        className="nk-wgw-name"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="nk-wgw-icon"
                                          bis_skin_checked="1"
                                        >
                                          <em className="icon ni ni-sign-cc-alt2"></em>
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          FICO Credit Score
                                        </h5>
                                      </div>
                                      <div
                                        className="nk-wgw-balance"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          className="amount text-dark"
                                          bis_skin_checked="1"
                                        >
                                          750 &nbsp;
                                          <span className="badge-pill bg-success"></span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block nk-block-lg" bis_skin_checked="1">
                      <div className="row gy-gs" bis_skin_checked="1">
                        <div className="col-md-6" bis_skin_checked="1">
                          <div className="card-head" bis_skin_checked="1">
                            <div
                              className="card-title mb-0"
                              bis_skin_checked="1"
                            >
                              <h5 className="title">
                                Recent Transaction Activities
                              </h5>
                            </div>
                            <div className="card-tools" bis_skin_checked="1">
                              <ul className="card-tools-nav">
                                <li className="active">
                                  <a href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#">
                                    All
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="tranx-list card card-bordered"
                            bis_skin_checked="1"
                          >
                            {activity.map((data, index) => {
                              const date = new Date(data.date)
                              const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                              return (<div className="tranx-item" bis_skin_checked="1">
                                <div className="tranx-col" bis_skin_checked="1">
                                  <div
                                    className="tranx-info"
                                    bis_skin_checked="1"
                                  >
                                    <div
                                      className="tranx-data"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        className="tranx-label"
                                        bis_skin_checked="1"
                                      >
                                        {data.description}
                                        <em className="tranx-icon sm icon ni ni-wallet-out"></em>
                                      </div>
                                      <div
                                        className="tranx-date"
                                        bis_skin_checked="1"
                                      >
                                        {date.getDate()} {monthNames[date.getMonth()]} {date.getFullYear()}, {date.getHours()}:{date.getHours()} {date.getHours() > 12 ? "pm" : "am" }
                                      </div>
                                      <div
                                        className="text-primary"
                                        bis_skin_checked="1"
                                      >
                                        {data.ref}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="tranx-col" bis_skin_checked="1">
                                  <div
                                    className="tranx-amount"
                                    bis_skin_checked="1"
                                  >
                                    <div
                                      className="tranx-date"
                                      bis_skin_checked="1"
                                    >
                                      Amount
                                    </div>
                                    <div
                                      className={`${data.tx_type === "Debit" ? "text-danger" : "text-success"} fs-16px`}
                                      bis_skin_checked="1"
                                    >
                                      {data.tx_type === "Debit" ?"-" : "+"} {USDollar.format(data.amount)}
                                      <span className="currency currency-usd">
                                        <span className="currency currency-btc">
                                          USD
                                        </span>
                                      </span>
                                    </div>
                                    <div
                                      className="number-sm"
                                      bis_skin_checked="1"
                                    >
                                      <strong className={data.status === "Completed" ? "text-success" : data.status === "pending" ? "text-warning" : "text-danger"}>
                                        {data.status}
                                      </strong>
                                    </div>
                                  </div>
                                </div>
                                <div className="tranx-col" bis_skin_checked="1">
                                  <div
                                    className="tranx-amount"
                                    bis_skin_checked="1"
                                  >
                                    <div
                                      className="number"
                                      bis_skin_checked="1"
                                    >
                                      Debit
                                      <span className="currency currency-btc"></span>
                                    </div>
                                    <span
                                      className="badge badge-dim badge-pill badge-outline-primary"
                                      data-toggle="modal"
                                      data-target="#modalDefault369"
                                      onClick={() => {
                                        setShowTXDetails(true)
                                        setSelectedData(data)
                                      }}
                                    >
                                      View Details
                                    </span>
                                  </div>
                                </div>
                                
                              </div>)
                            })}
                            <TransactionDetails
                                  data={selectedData}
                                  showTXDetails={showTXDetails}
                                  setShowTXDetails={setShowTXDetails}
                                  wallet={wallet}
                                />
                            <input type="hidden" id="debit1" value="75" />
                            <input type="hidden" id="credit1" value="25" />
                          </div>
                        </div>
                        <div className="col-md-6" bis_skin_checked="1">
                          <div className="card-head" bis_skin_checked="1">
                            <div
                              className="card-title mb-0"
                              bis_skin_checked="1"
                            >
                              <h5 className="title">Balance Flow</h5>
                            </div>
                            <div className="card-tools" bis_skin_checked="1">
                              <ul className="card-tools-nav">
                                <li className="active">
                                  <a href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#">
                                    All time
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="card card-bordered"
                            bis_skin_checked="1"
                          >
                            <div className="card-inner" bis_skin_checked="1">
                              <div className="nk-wg4" bis_skin_checked="1">
                                <div
                                  className="nk-wg4-group justify-center gy-3 gx-4"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    className="nk-wg4-item"
                                    bis_skin_checked="1"
                                  >
                                    <div
                                      className="sub-text"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        className="dot dot-lg sq"
                                        data-bg="#1ee0ac"
                                        style={{
                                          background: "rgb(30, 224, 172)",
                                        }}
                                        bis_skin_checked="1"
                                      ></div>
                                      <span>Credit</span>
                                    </div>
                                  </div>
                                  <div
                                    className="nk-wg4-item"
                                    bis_skin_checked="1"
                                  >
                                    <div
                                      className="sub-text"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        className="dot dot-lg sq"
                                        data-bg="#f4aaa4"
                                        style={{
                                          background: "rgb(244, 170, 164)",
                                        }}
                                        bis_skin_checked="1"
                                      ></div>
                                      <span>Debit</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-ck3" bis_skin_checked="1">
                                <canvas
                                  className="pie-chart"
                                  id="pieChartData"
                                ></canvas>
                              </div>
                            </div>
                          </div>
                          <p></p>
                          <div
                            className="tradingview-widget-container"
                            style={{ width: "320px", height: "220px" }}
                            bis_skin_checked="1"
                          >
                            <iframe
                              title="acount"
                              allowtransparency="true"
                              frameborder="0"
                              src="../../assets/saved_resource.html"
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                height: "calc(188px)",
                                width: "320px",
                              }}
                              bis_size='{"x":858,"y":993,"w":320,"h":188,"abs_x":858,"abs_y":993}'
                              bis_id="fr_3kxaqkhhqu5v2nsgrsday0"
                              bis_depth="0"
                              bis_chainid="1"
                            ></iframe>
                            <div
                              className="tradingview-widget-copyright"
                              bis_skin_checked="1"
                            >
                              <a
                                href="https://www.tradingview.com/symbols/EURUSD/?exchange=FX"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <span className="blue-text">EURUSD Rates</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block" bis_skin_checked="1">
                      <div className="card card-bordered" bis_skin_checked="1">
                        <div
                          className="card-inner card-inner-lg"
                          bis_skin_checked="1"
                        >
                          <div
                            className="align-center flex-wrap flex-md-nowrap g-4"
                            bis_skin_checked="1"
                          >
                            <div
                              className="nk-block-image w-120px flex-shrink-0"
                              bis_skin_checked="1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 120 118"
                              >
                                <path
                                  d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z"
                                  transform="translate(0 -1)"
                                  fill="#f6faff"
                                ></path>
                                <rect
                                  x="18"
                                  y="32"
                                  width="84"
                                  height="50"
                                  rx="4"
                                  ry="4"
                                  fill="#fff"
                                ></rect>
                                <rect
                                  x="26"
                                  y="44"
                                  width="20"
                                  height="12"
                                  rx="1"
                                  ry="1"
                                  fill="#e5effe"
                                ></rect>
                                <rect
                                  x="50"
                                  y="44"
                                  width="20"
                                  height="12"
                                  rx="1"
                                  ry="1"
                                  fill="#e5effe"
                                ></rect>
                                <rect
                                  x="74"
                                  y="44"
                                  width="20"
                                  height="12"
                                  rx="1"
                                  ry="1"
                                  fill="#e5effe"
                                ></rect>
                                <rect
                                  x="38"
                                  y="60"
                                  width="20"
                                  height="12"
                                  rx="1"
                                  ry="1"
                                  fill="#e5effe"
                                ></rect>
                                <rect
                                  x="62"
                                  y="60"
                                  width="20"
                                  height="12"
                                  rx="1"
                                  ry="1"
                                  fill="#e5effe"
                                ></rect>
                                <path
                                  d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z"
                                  transform="translate(0 -1)"
                                  fill="#798bff"
                                ></path>
                                <path
                                  d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                                  transform="translate(0 -1)"
                                  fill="#6576ff"
                                ></path>
                                <path
                                  d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                                  transform="translate(0 -1)"
                                  fill="none"
                                  stroke="#6576ff"
                                  stroke-miterlimit="10"
                                  stroke-width="2"
                                ></path>
                                <line
                                  x1="40"
                                  y1="22"
                                  x2="57"
                                  y2="22"
                                  fill="none"
                                  stroke="#fffffe"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                ></line>
                                <line
                                  x1="40"
                                  y1="27"
                                  x2="57"
                                  y2="27"
                                  fill="none"
                                  stroke="#fffffe"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                ></line>
                                <line
                                  x1="40"
                                  y1="32"
                                  x2="50"
                                  y2="32"
                                  fill="none"
                                  stroke="#fffffe"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                ></line>
                                <line
                                  x1="30.5"
                                  y1="87.5"
                                  x2="30.5"
                                  y2="91.5"
                                  fill="none"
                                  stroke="#9cabff"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></line>
                                <line
                                  x1="28.5"
                                  y1="89.5"
                                  x2="32.5"
                                  y2="89.5"
                                  fill="none"
                                  stroke="#9cabff"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></line>
                                <line
                                  x1="79.5"
                                  y1="22.5"
                                  x2="79.5"
                                  y2="26.5"
                                  fill="none"
                                  stroke="#9cabff"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></line>
                                <line
                                  x1="77.5"
                                  y1="24.5"
                                  x2="81.5"
                                  y2="24.5"
                                  fill="none"
                                  stroke="#9cabff"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></line>
                                <circle
                                  cx="90.5"
                                  cy="97.5"
                                  r="3"
                                  fill="none"
                                  stroke="#9cabff"
                                  stroke-miterlimit="10"
                                ></circle>
                                <circle
                                  cx="24"
                                  cy="23"
                                  r="2.5"
                                  fill="none"
                                  stroke="#9cabff"
                                  stroke-miterlimit="10"
                                ></circle>
                              </svg>
                            </div>
                            <div
                              className="nk-block-content"
                              bis_skin_checked="1"
                            >
                              <div
                                className="nk-block-content-head px-lg-4"
                                bis_skin_checked="1"
                              >
                                <h5>We’re here to help you!</h5>
                                <p className="text-soft">
                                  Ask a question or file a support ticket,
                                  manage request, report an issues. Our team
                                  support team will get back to you by email.
                                </p>
                              </div>
                            </div>
                            <div
                              className="nk-block-content flex-shrink-0"
                              bis_skin_checked="1"
                            >
                              <a
                                href="/personal-banking/contact"
                                className="btn btn-lg btn-outline-primary"
                              >
                                Get Support Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nk-footer nk-footer-fluid" bis_skin_checked="1">
                <div className="container-fluid" bis_skin_checked="1">
                  <div className="nk-footer-wrap" bis_skin_checked="1">
                    <div className="nk-footer-copyright" bis_skin_checked="1">
                      © 2023 Florish Bank -
                      <a href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#">
                        All rights reserved.
                      </a>
                    </div>
                    <div className="nk-footer-links" bis_skin_checked="1">
                      <ul className="nav nav-sm">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                          >
                            Terms
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/personal-banking/privacy"
                          >
                            Privacy
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/personal-banking/contact"
                          >
                            Help
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="../../assets/jquery.min.js.download"></script>
        <script src="../../assets/country.js.download"></script>
        <script src="../../assets/bundle.js.download"></script>
        <script src="../../assets/scripts.js.download"></script>
        <script src="../../assets/chart-crypto.js.download"></script>
        <script src="../../assets/sweetalert.js.download"></script>
        <script src="../../assets/jquery.min.js(1).download"></script>
        <script src="../../assets/custom.js.download"></script>
        <script src="../../assets/toastr.js.download"></script>
        <div
          id="goog-gt-"
          className="skiptranslate VIpgJd-yAWNEb-L7lbkb"
          dir="ltr"
          bis_skin_checked="1"
        >
          <div style={{ padding: "8px" }} bis_skin_checked="1">
            <div bis_skin_checked="1">
              <div className="VIpgJd-yAWNEb-l4eHX" bis_skin_checked="1">
                <img
                  src="../../assets/translate_24dp.png"
                  width="20"
                  height="20"
                  alt="Google Translate"
                />
              </div>
            </div>
          </div>
          <div
            style={{ padding: "8px", float: "left", width: "100%" }}
            bis_skin_checked="1"
          >
            <h1 className="VIpgJd-yAWNEb-r4nke VIpgJd-yAWNEb-mrxPge">
              Original text
            </h1>
          </div>
          <div style={{ padding: "8px" }} bis_skin_checked="1">
            <div
              className="VIpgJd-yAWNEb-nVMfcd-fmcmS"
              bis_skin_checked="1"
            ></div>
          </div>
          <div
            className="VIpgJd-yAWNEb-cGMI2b"
            style={{ padding: "8px" }}
            bis_skin_checked="1"
          >
            <div className="VIpgJd-yAWNEb-Z0Arqf-PLDbbf" bis_skin_checked="1">
              <span className="VIpgJd-yAWNEb-Z0Arqf-hSRGPd">
                Contribute a better translation
              </span>
            </div>
            <div
              className="VIpgJd-yAWNEb-fw42Ze-Z0Arqf-haAclf"
              bis_skin_checked="1"
            >
              <hr
                style={{
                  color: "#ccc",
                  backgroundColor: "#ccc",
                  height: "1px",
                  border: "none",
                }}
              />
              <div
                className="VIpgJd-yAWNEb-Z0Arqf-H9tDt"
                bis_skin_checked="1"
              ></div>
            </div>
          </div>
          <div
            className="VIpgJd-yAWNEb-jOfkMb-Ne3sFf"
            bis_skin_checked="1"
            style={{ display: "none" }}
          ></div>
        </div>

        <div className="VIpgJd-ZVi9od-aZ2wEe-wOHMyf" bis_skin_checked="1">
          <div className="VIpgJd-ZVi9od-aZ2wEe-OiiCO" bis_skin_checked="1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="VIpgJd-ZVi9od-aZ2wEe"
              width="96px"
              height="96px"
              viewBox="0 0 66 66"
            >
              <circle
                className="VIpgJd-ZVi9od-aZ2wEe-Jt5cK"
                fill="none"
                stroke-width="6"
                stroke-linecap="round"
                cx="33"
                cy="33"
                r="30"
              ></circle>
            </svg>
          </div>
        </div>
        <iframe
          frameborder="0"
          className="VIpgJd-ZVi9od-xl07Ob-OEVmcd skiptranslate"
          title="Language Translate Widget"
          style={{
            visibility: "visible",
            boxSizing: "content-box",
            width: "1283px",
            height: "263px",
            display: "none",
          }}
          src="../../assets/saved_resource(1).html"
        ></iframe>
      </div>
    </>
  );
};

export default Dashboard;
