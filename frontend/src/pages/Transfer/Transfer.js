import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Helmet from "react-helmet";
import SideBar from "../../components/SideBar/SideBar";
import { useGetUser } from "../../hooks/user.hooks";
import { useAddActivities } from "../../hooks/activity.hook";

const Transfer = () => {
  const { data: user, isLoading: userIsLoading } = useGetUser()
  const {mutate: addActivities} = useAddActivities()

  const [formData, setFormData] = useState({
    user: user?.id,
    amount: 0,
    bank_name: '',
    account_name: '',
    account_number: '',
    routine_nunmber: '',
    description: '',
    tx_type: "Debit"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        user: formData.user,
        amount: formData.amount,
        bank_name: formData.bank_name,
        account_name: formData.account_name,
        account_number: formData.account_number,
        routine_nunmber: formData.routine_nunmber,
        description: formData.description,
        tx_type: formData.tx_type
    }
    addActivities(data)
    };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  if(userIsLoading) {
    return <></>
  }

  return (
    <>
      <Helmet>
        <title>{`${user?.first_name} ${user?.last_name} | Florish Bank Online banking`}</title>
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
      <div>
        <div className="nk-app-root" bis_skin_checked="1">
          <div className="nk-main" bis_skin_checked="1">
            <SideBar />
            <div className="nk-wrap" bis_skin_checked="1">
              <Header />
              <div className="nk-content nk-content-fluid" bis_skin_checked="1">
                <div className="container-xl wide-lg" bis_skin_checked="1">
                  <div className="nk-content-body" bis_skin_checked="1">
                    <div className="nk-block-head" bis_skin_checked="1">
                      <div style={{width: "90%", marginInline: "auto", border: "1px solid grey", borderRadius: "3px", backgroundColor: "#fff", padding: "20px"}}>
                          <form onSubmit={handleSubmit}>
                            <div style={{display: "flex", flexDirection: "column", marginBlock: "10px"}}>
                              <label style={{marginBlock: "5px"}}>Bank Name</label>
                              <input type="text" name="bank_name" value={formData.bank_name} onChange={handleChange} />
                            </div>
                            <div style={{display: "flex", flexDirection: "column", marginBlock: "10px"}}>
                              <label style={{marginBlock: "5px"}}>Account Number</label>
                              <input type="text" name="account_number" value={formData.account_number} onChange={handleChange} />
                            </div>
                            <div style={{display: "flex", flexDirection: "column", marginBlock: "10px"}}>
                              <label style={{marginBlock: "5px"}}>Routine Number</label>
                              <input type="text" name="routine_nunmber" value={formData.routine_nunmber} onChange={handleChange} />
                            </div>
                            <div style={{display: "flex", flexDirection: "column", marginBlock: "10px"}}>
                              <label style={{marginBlock: "5px"}}>Account Name</label>
                              <input type="text" name="account_name" value={formData.account_name} onChange={handleChange} />
                            </div>
                            <div style={{display: "flex", flexDirection: "column", marginBlock: "10px"}}>
                              <label style={{marginBlock: "5px"}}>Amount</label>
                              <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Transfer</button>
                          </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
