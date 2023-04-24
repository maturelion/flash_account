import React from "react";
import Helmet from "react-helmet";

const Dashboard = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Michael C Lukas | Florish Bank Online banking</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        {/* <style type="text/css">
      .swal-icon--error {
        border-color: #f27474;
        -webkit-animation: animateErrorIcon 0.5s;
        animation: animateErrorIcon 0.5s;
      }
      .swal-icon--error__x-mark {
        position: relative;
        display: block;
        -webkit-animation: animateXMark 0.5s;
        animation: animateXMark 0.5s;
      }
      .swal-icon--error__line {
        position: absolute;
        height: 5px;
        width: 47px;
        background-color: #f27474;
        display: block;
        top: 37px;
        border-radius: 2px;
      }
      .swal-icon--error__line--left {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        left: 17px;
      }
      .swal-icon--error__line--right {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        right: 16px;
      }
      @-webkit-keyframes animateErrorIcon {
        0% {
          -webkit-transform: rotateX(100deg);
          transform: rotateX(100deg);
          opacity: 0;
        }
        to {
          -webkit-transform: rotateX(0deg);
          transform: rotateX(0deg);
          opacity: 1;
        }
      }
      @keyframes animateErrorIcon {
        0% {
          -webkit-transform: rotateX(100deg);
          transform: rotateX(100deg);
          opacity: 0;
        }
        to {
          -webkit-transform: rotateX(0deg);
          transform: rotateX(0deg);
          opacity: 1;
        }
      }
      @-webkit-keyframes animateXMark {
        0% {
          -webkit-transform: scale(0.4);
          transform: scale(0.4);
          margin-top: 26px;
          opacity: 0;
        }
        50% {
          -webkit-transform: scale(0.4);
          transform: scale(0.4);
          margin-top: 26px;
          opacity: 0;
        }
        80% {
          -webkit-transform: scale(1.15);
          transform: scale(1.15);
          margin-top: -6px;
        }
        to {
          -webkit-transform: scale(1);
          transform: scale(1);
          margin-top: 0;
          opacity: 1;
        }
      }
      @keyframes animateXMark {
        0% {
          -webkit-transform: scale(0.4);
          transform: scale(0.4);
          margin-top: 26px;
          opacity: 0;
        }
        50% {
          -webkit-transform: scale(0.4);
          transform: scale(0.4);
          margin-top: 26px;
          opacity: 0;
        }
        80% {
          -webkit-transform: scale(1.15);
          transform: scale(1.15);
          margin-top: -6px;
        }
        to {
          -webkit-transform: scale(1);
          transform: scale(1);
          margin-top: 0;
          opacity: 1;
        }
      }
      .swal-icon--warning {
        border-color: #f8bb86;
        -webkit-animation: pulseWarning 0.75s infinite alternate;
        animation: pulseWarning 0.75s infinite alternate;
      }
      .swal-icon--warning__body {
        width: 5px;
        height: 47px;
        top: 10px;
        border-radius: 2px;
        margin-left: -2px;
      }
      .swal-icon--warning__body,
      .swal-icon--warning__dot {
        position: absolute;
        left: 50%;
        background-color: #f8bb86;
      }
      .swal-icon--warning__dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-left: -4px;
        bottom: -11px;
      }
      @-webkit-keyframes pulseWarning {
        0% {
          border-color: #f8d486;
        }
        to {
          border-color: #f8bb86;
        }
      }
      @keyframes pulseWarning {
        0% {
          border-color: #f8d486;
        }
        to {
          border-color: #f8bb86;
        }
      }
      .swal-icon--success {
        border-color: #a5dc86;
      }
      .swal-icon--success:after,
      .swal-icon--success:before {
        content: "";
        border-radius: 50%;
        position: absolute;
        width: 60px;
        height: 120px;
        background: #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      .swal-icon--success:before {
        border-radius: 120px 0 0 120px;
        top: -7px;
        left: -33px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transform-origin: 60px 60px;
        transform-origin: 60px 60px;
      }
      .swal-icon--success:after {
        border-radius: 0 120px 120px 0;
        top: -11px;
        left: 30px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transform-origin: 0 60px;
        transform-origin: 0 60px;
        -webkit-animation: rotatePlaceholder 4.25s ease-in;
        animation: rotatePlaceholder 4.25s ease-in;
      }
      .swal-icon--success__ring {
        width: 80px;
        height: 80px;
        border: 4px solid hsla(98, 55%, 69%, 0.2);
        border-radius: 50%;
        box-sizing: content-box;
        position: absolute;
        left: -4px;
        top: -4px;
        z-index: 2;
      }
      .swal-icon--success__hide-corners {
        width: 5px;
        height: 90px;
        background-color: #fff;
        padding: 1px;
        position: absolute;
        left: 28px;
        top: 8px;
        z-index: 1;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      .swal-icon--success__line {
        height: 5px;
        background-color: #a5dc86;
        display: block;
        border-radius: 2px;
        position: absolute;
        z-index: 2;
      }
      .swal-icon--success__line--tip {
        width: 25px;
        left: 14px;
        top: 46px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-animation: animateSuccessTip 0.75s;
        animation: animateSuccessTip 0.75s;
      }
      .swal-icon--success__line--long {
        width: 47px;
        right: 8px;
        top: 38px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: animateSuccessLong 0.75s;
        animation: animateSuccessLong 0.75s;
      }
      @-webkit-keyframes rotatePlaceholder {
        0% {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        5% {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        12% {
          -webkit-transform: rotate(-405deg);
          transform: rotate(-405deg);
        }
        to {
          -webkit-transform: rotate(-405deg);
          transform: rotate(-405deg);
        }
      }
      @keyframes rotatePlaceholder {
        0% {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        5% {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        12% {
          -webkit-transform: rotate(-405deg);
          transform: rotate(-405deg);
        }
        to {
          -webkit-transform: rotate(-405deg);
          transform: rotate(-405deg);
        }
      }
      @-webkit-keyframes animateSuccessTip {
        0% {
          width: 0;
          left: 1px;
          top: 19px;
        }
        54% {
          width: 0;
          left: 1px;
          top: 19px;
        }
        70% {
          width: 50px;
          left: -8px;
          top: 37px;
        }
        84% {
          width: 17px;
          left: 21px;
          top: 48px;
        }
        to {
          width: 25px;
          left: 14px;
          top: 45px;
        }
      }
      @keyframes animateSuccessTip {
        0% {
          width: 0;
          left: 1px;
          top: 19px;
        }
        54% {
          width: 0;
          left: 1px;
          top: 19px;
        }
        70% {
          width: 50px;
          left: -8px;
          top: 37px;
        }
        84% {
          width: 17px;
          left: 21px;
          top: 48px;
        }
        to {
          width: 25px;
          left: 14px;
          top: 45px;
        }
      }
      @-webkit-keyframes animateSuccessLong {
        0% {
          width: 0;
          right: 46px;
          top: 54px;
        }
        65% {
          width: 0;
          right: 46px;
          top: 54px;
        }
        84% {
          width: 55px;
          right: 0;
          top: 35px;
        }
        to {
          width: 47px;
          right: 8px;
          top: 38px;
        }
      }
      @keyframes animateSuccessLong {
        0% {
          width: 0;
          right: 46px;
          top: 54px;
        }
        65% {
          width: 0;
          right: 46px;
          top: 54px;
        }
        84% {
          width: 55px;
          right: 0;
          top: 35px;
        }
        to {
          width: 47px;
          right: 8px;
          top: 38px;
        }
      }
      .swal-icon--info {
        border-color: #c9dae1;
      }
      .swal-icon--info:before {
        width: 5px;
        height: 29px;
        bottom: 17px;
        border-radius: 2px;
        margin-left: -2px;
      }
      .swal-icon--info:after,
      .swal-icon--info:before {
        content: "";
        position: absolute;
        left: 50%;
        background-color: #c9dae1;
      }
      .swal-icon--info:after {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-left: -3px;
        top: 19px;
      }
      .swal-icon {
        width: 80px;
        height: 80px;
        border-width: 4px;
        border-style: solid;
        border-radius: 50%;
        padding: 0;
        position: relative;
        box-sizing: content-box;
        margin: 20px auto;
      }
      .swal-icon:first-child {
        margin-top: 32px;
      }
      .swal-icon--custom {
        width: auto;
        height: auto;
        max-width: 100%;
        border: none;
        border-radius: 0;
      }
      .swal-icon img {
        max-width: 100%;
        max-height: 100%;
      }
      .swal-title {
        color: rgba(0, 0, 0, 0.65);
        font-weight: 600;
        text-transform: none;
        position: relative;
        display: block;
        padding: 13px 16px;
        font-size: 27px;
        line-height: normal;
        text-align: center;
        margin-bottom: 0;
      }
      .swal-title:first-child {
        margin-top: 26px;
      }
      .swal-title:not(:first-child) {
        padding-bottom: 0;
      }
      .swal-title:not(:last-child) {
        margin-bottom: 13px;
      }
      .swal-text {
        font-size: 16px;
        position: relative;
        float: none;
        line-height: normal;
        vertical-align: top;
        text-align: left;
        display: inline-block;
        margin: 0;
        padding: 0 10px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.64);
        max-width: calc(100% - 20px);
        overflow-wrap: break-word;
        box-sizing: border-box;
      }
      .swal-text:first-child {
        margin-top: 45px;
      }
      .swal-text:last-child {
        margin-bottom: 45px;
      }
      .swal-footer {
        text-align: right;
        padding-top: 13px;
        margin-top: 13px;
        padding: 13px 16px;
        border-radius: inherit;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .swal-button-container {
        margin: 5px;
        display: inline-block;
        position: relative;
      }
      .swal-button {
        background-color: #7cd1f9;
        color: #fff;
        border: none;
        box-shadow: none;
        border-radius: 5px;
        font-weight: 600;
        font-size: 14px;
        padding: 10px 24px;
        margin: 0;
        cursor: pointer;
      }
      .swal-button:not([disabled]):hover {
        background-color: #78cbf2;
      }
      .swal-button:active {
        background-color: #70bce0;
      }
      .swal-button:focus {
        outline: none;
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(43, 114, 165, 0.29);
      }
      .swal-button[disabled] {
        opacity: 0.5;
        cursor: default;
      }
      .swal-button::-moz-focus-inner {
        border: 0;
      }
      .swal-button--cancel {
        color: #555;
        background-color: #efefef;
      }
      .swal-button--cancel:not([disabled]):hover {
        background-color: #e8e8e8;
      }
      .swal-button--cancel:active {
        background-color: #d7d7d7;
      }
      .swal-button--cancel:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(116, 136, 150, 0.29);
      }
      .swal-button--danger {
        background-color: #e64942;
      }
      .swal-button--danger:not([disabled]):hover {
        background-color: #df4740;
      }
      .swal-button--danger:active {
        background-color: #cf423b;
      }
      .swal-button--danger:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(165, 43, 43, 0.29);
      }
      .swal-content {
        padding: 0 20px;
        margin-top: 20px;
        font-size: medium;
      }
      .swal-content:last-child {
        margin-bottom: 20px;
      }
      .swal-content__input,
      .swal-content__textarea {
        -webkit-appearance: none;
        background-color: #fff;
        border: none;
        font-size: 14px;
        display: block;
        box-sizing: border-box;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.14);
        padding: 10px 13px;
        border-radius: 2px;
        transition: border-color 0.2s;
      }
      .swal-content__input:focus,
      .swal-content__textarea:focus {
        outline: none;
        border-color: #6db8ff;
      }
      .swal-content__textarea {
        resize: vertical;
      }
      .swal-button--loading {
        color: transparent;
      }
      .swal-button--loading ~ .swal-button__loader {
        opacity: 1;
      }
      .swal-button__loader {
        position: absolute;
        height: auto;
        width: 43px;
        z-index: 2;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        pointer-events: none;
        opacity: 0;
      }
      .swal-button__loader div {
        display: inline-block;
        float: none;
        vertical-align: baseline;
        width: 9px;
        height: 9px;
        padding: 0;
        border: none;
        margin: 2px;
        opacity: 0.4;
        border-radius: 7px;
        background-color: hsla(0, 0%, 100%, 0.9);
        transition: background 0.2s;
        -webkit-animation: swal-loading-anim 1s infinite;
        animation: swal-loading-anim 1s infinite;
      }
      .swal-button__loader div:nth-child(3n + 2) {
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
      }
      .swal-button__loader div:nth-child(3n + 3) {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }
      @-webkit-keyframes swal-loading-anim {
        0% {
          opacity: 0.4;
        }
        20% {
          opacity: 0.4;
        }
        50% {
          opacity: 1;
        }
        to {
          opacity: 0.4;
        }
      }
      @keyframes swal-loading-anim {
        0% {
          opacity: 0.4;
        }
        20% {
          opacity: 0.4;
        }
        50% {
          opacity: 1;
        }
        to {
          opacity: 0.4;
        }
      }
      .swal-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 0;
        overflow-y: auto;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .swal-overlay:before {
        content: " ";
        display: inline-block;
        vertical-align: middle;
        height: 100%;
      }
      .swal-overlay--show-modal {
        opacity: 1;
        pointer-events: auto;
      }
      .swal-overlay--show-modal .swal-modal {
        opacity: 1;
        pointer-events: auto;
        box-sizing: border-box;
        -webkit-animation: showSweetAlert 0.3s;
        animation: showSweetAlert 0.3s;
        will-change: transform;
      }
      .swal-modal {
        width: 478px;
        opacity: 0;
        pointer-events: none;
        background-color: #fff;
        text-align: center;
        border-radius: 5px;
        position: static;
        margin: 20px auto;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        z-index: 10001;
        transition: opacity 0.2s, -webkit-transform 0.3s;
        transition: transform 0.3s, opacity 0.2s;
        transition: transform 0.3s, opacity 0.2s, -webkit-transform 0.3s;
      }
      @media (max-width: 500px) {
        .swal-modal {
          width: calc(100% - 20px);
        }
      }
      @-webkit-keyframes showSweetAlert {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        1% {
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
        }
        45% {
          -webkit-transform: scale(1.05);
          transform: scale(1.05);
        }
        80% {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
        }
        to {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      @keyframes showSweetAlert {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        1% {
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
        }
        45% {
          -webkit-transform: scale(1.05);
          transform: scale(1.05);
        }
        80% {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
        }
        to {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        }
        </style> */}

        <meta name="author" content="Smart" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Florish Bank is federally insured by the National Credit Union Administration. We do business in accordance with the Fair Housing Law and Equal opportunity Credit Act."
        />
        <link
          rel="shortcut icon"
          href="https://florishbank.com/images/favicon.png"
        />
        <link rel="stylesheet" href="./assets/sweetalert.css" />
        <link rel="stylesheet" href="./assets/dashlite.css" />
        <link id="skin-default" rel="stylesheet" href="./assets/theme.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="./assets/fontawesome-icons.css"
        />
        <link href="./assets/toastr.css" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/intlTelInput.css" />
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
        <script type="text/javascript" src="./assets/element.js.download"></script> */}`
        <link
          type="text/css"
          rel="stylesheet"
          charset="UTF-8"
          href="./assets/m=el_main_css"
        />
        <script
          type="text/javascript"
          charset="UTF-8"
          src="./assets/m=el_main"
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
        class="nk-body npc-crypto bg-white has-sidebar no-touch nk-nio-theme"
        bis_register="W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ29tY29uIiwiYWRibG9ja2VyU3RhdHVzIjp7IkRJU1BMQVkiOiJkaXNhYmxlZCIsIkZBQ0VCT09LIjoiZGlzYWJsZWQiLCJUV0lUVEVSIjoiZGlzYWJsZWQiLCJSRURESVQiOiJkaXNhYmxlZCJ9LCJ2ZXJzaW9uIjoiMS45LjA5Iiwic2NvcmUiOjEwOTA5fV0="
        style={{ position: "relative", minHeight: "100%", top: "0px" }}
      >
        <div class="nk-app-root" bis_skin_checked="1">
          <div class="nk-main" bis_skin_checked="1">
            <div
              class="nk-sidebar nk-sidebar-fixed"
              data-content="sidebarMenu"
              bis_skin_checked="1"
            >
              <div
                class="nk-sidebar-element nk-sidebar-head"
                style={{ borderBottom: "solid #fe473a" }}
                bis_skin_checked="1"
              >
                <div class="nk-sidebar-brand" bis_skin_checked="1">
                  <a
                    href="https://florishbank.com/personal-banking/dashboard"
                    class="logo-link nk-sidebar-logo"
                  >
                    <img
                      class="logo-light logo-img"
                      src="./assets/logo.png"
                      srcset="../logo.png 2x"
                      alt="logo"
                    />
                    <img
                      class="logo-dark logo-img"
                      src="./assets/logo.png"
                      srcset="../logo.png 2x"
                      alt="logo-dark"
                    />
                  </a>
                </div>
                <div class="nk-menu-trigger mr-n2" bis_skin_checked="1">
                  <a
                    href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                    class="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                    data-target="sidebarMenu"
                  >
                    <em class="icon ni ni-arrow-left"></em>
                  </a>
                </div>
              </div>
              <div class="nk-sidebar-element" bis_skin_checked="1">
                <div
                  class="nk-sidebar-body"
                  data-simplebar="init"
                  bis_skin_checked="1"
                >
                  <div
                    class="simplebar-wrapper"
                    style={{ margin: "0px" }}
                    bis_skin_checked="1"
                  >
                    <div
                      class="simplebar-height-auto-observer-wrapper"
                      bis_skin_checked="1"
                    >
                      <div
                        class="simplebar-height-auto-observer"
                        bis_skin_checked="1"
                      ></div>
                    </div>
                    <div class="simplebar-mask" bis_skin_checked="1">
                      <div
                        class="simplebar-offset"
                        style={{ right: "0px", bottom: "0px" }}
                        bis_skin_checked="1"
                      >
                        <div
                          class="simplebar-content-wrapper"
                          style={{ height: "auto", overflow: "hidden scroll" }}
                          bis_skin_checked="1"
                        >
                          <div
                            class="simplebar-content"
                            style={{ padding: "0px" }}
                            bis_skin_checked="1"
                          >
                            <div
                              class="nk-sidebar-content"
                              bis_skin_checked="1"
                            >
                              <div
                                class="nk-sidebar-widget d-none d-xl-block"
                                bis_skin_checked="1"
                              >
                                <div
                                  class="user-account-info between-center"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    class="user-account-main"
                                    bis_skin_checked="1"
                                  >
                                    <h6 class="overline-title-alt">
                                      Available Balance
                                    </h6>
                                    <div
                                      class="user-balance"
                                      bis_skin_checked="1"
                                    >
                                      177,853,397
                                      <small class="currency currency-btc">
                                        USD
                                      </small>
                                    </div>
                                    <div
                                      class="user-balance-alt"
                                      bis_skin_checked="1"
                                    >
                                      177,853,397
                                      <span class="currency currency-btc">
                                        USD
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                    class="btn btn-white btn-icon btn-light"
                                  >
                                    <em class="icon ni ni-line-chart"></em>
                                  </a>
                                </div>
                                <ul class="user-account-data gy-1">
                                  <li>
                                    <div
                                      class="user-account-label"
                                      bis_skin_checked="1"
                                    >
                                      <span class="sub-text">Income</span>
                                    </div>
                                    <div
                                      class="user-account-value"
                                      bis_skin_checked="1"
                                    >
                                      <span class="text-success ml-2">
                                        25 %
                                        <em class="icon ni ni-arrow-long-up"></em>
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      class="user-account-label"
                                      bis_skin_checked="1"
                                    >
                                      <span class="sub-text">Debits</span>
                                    </div>
                                    <div
                                      class="user-account-value"
                                      bis_skin_checked="1"
                                    >
                                      <span class="text-danger ml-2">
                                        75 %
                                        <em class="icon ni ni-arrow-long-down"></em>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                                <div
                                  class="user-account-actions"
                                  bis_skin_checked="1"
                                >
                                  <ul class="g-3">
                                    <li>
                                      <a
                                        href="https://florishbank.com/personal-banking/transfer"
                                        class="btn btn-lg btn-primary"
                                      >
                                        <span>
                                          <i class="fas fa-money-bill-alt"></i>
                                          Transfer
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://florishbank.com/personal-banking/pay-bills"
                                        class="btn btn-lg btn-secondary"
                                      >
                                        <span>
                                          <i class="fas fa-file-invoice-dollar"></i>
                                          Pay Bills
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                class="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0"
                                bis_skin_checked="1"
                              >
                                <a
                                  class="nk-profile-toggle toggle-expand"
                                  data-target="sidebarProfile"
                                  href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                >
                                  <div
                                    class="user-card-wrap"
                                    bis_skin_checked="1"
                                  >
                                    <div class="user-card" bis_skin_checked="1">
                                      <div
                                        class="user-avatar"
                                        bis_skin_checked="1"
                                      >
                                        <span>MC</span>
                                      </div>
                                      <div
                                        class="user-info"
                                        bis_skin_checked="1"
                                      >
                                        <span class="lead-text">
                                          Michael Lukas C
                                        </span>
                                        <span class="sub-text">4460484609</span>
                                      </div>
                                      <div
                                        class="user-action"
                                        bis_skin_checked="1"
                                      >
                                        <em class="icon ni ni-chevron-down"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                <div
                                  class="nk-profile-content toggle-expand-content"
                                  data-content="sidebarProfile"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    class="user-account-info between-center"
                                    bis_skin_checked="1"
                                  >
                                    <div
                                      class="user-account-main"
                                      bis_skin_checked="1"
                                    >
                                      <h6 class="overline-title-alt">
                                        Available Balance
                                      </h6>
                                      <div
                                        class="user-balance"
                                        bis_skin_checked="1"
                                      >
                                        177,853,397
                                        <small class="currency currency-btc">
                                          USD
                                        </small>
                                      </div>
                                      <div
                                        class="user-balance-alt"
                                        bis_skin_checked="1"
                                      >
                                        177853397.4
                                        <span class="currency currency-btc">
                                          USD
                                        </span>
                                      </div>
                                    </div>
                                    <a
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                      class="btn btn-icon btn-light"
                                    >
                                      <em class="icon ni ni-line-chart"></em>
                                    </a>
                                  </div>
                                  <ul class="user-account-data">
                                    <li>
                                      <div
                                        class="user-account-label"
                                        bis_skin_checked="1"
                                      >
                                        <span class="sub-text">income</span>
                                      </div>
                                      <div
                                        class="user-account-value"
                                        bis_skin_checked="1"
                                      >
                                        <span class="text-success ml-2">
                                          25 %
                                          <em class="icon ni ni-arrow-long-up"></em>
                                        </span>
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        class="user-account-label"
                                        bis_skin_checked="1"
                                      >
                                        <span class="sub-text">Debits</span>
                                      </div>
                                      <div
                                        class="user-account-value"
                                        bis_skin_checked="1"
                                      >
                                        <span class="text-danger ml-2">
                                          75 %
                                          <em class="icon ni ni-arrow-long-up"></em>
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                  <ul class="user-account-links">
                                    <li>
                                      <a
                                        href="https://florishbank.com/personal-banking/transfer.php"
                                        class="link"
                                      >
                                        <span> Transfer Funds</span>
                                        <em class="icon ni ni-wallet-out"></em>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://florishbank.com/personal-banking/authenticate"
                                        class="link"
                                      >
                                        <span>Pay Bills</span>
                                        <em class="icon ni ni-wallet-in"></em>
                                      </a>
                                    </li>
                                  </ul>
                                  <ul class="link-list">
                                    <li>
                                      <a href="https://florishbank.com/personal-banking/profile">
                                        <em class="icon ni ni-user-alt"></em>
                                        <span>View Profile</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://florishbank.com/personal-banking/account-setting">
                                        <em class="icon ni ni-setting-alt"></em>
                                        <span>Account Setting</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://florishbank.com/personal-banking/activity-logs">
                                        <em class="icon ni ni-activity-alt"></em>
                                        <span>Login Activity</span>
                                      </a>
                                    </li>
                                  </ul>
                                  <ul class="link-list">
                                    <li>
                                      <a href="https://florishbank.com/personal-banking/logout">
                                        <em class="icon ni ni-signout"></em>
                                        <span>Sign out</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="nk-sidebar-menu" bis_skin_checked="1">
                                <ul class="nk-menu">
                                  <li class="nk-menu-heading">
                                    <h6 class="overline-title">Menu</h6>
                                  </li>
                                  <li class="nk-menu-item active current-page">
                                    <a
                                      href="https://florishbank.com/personal-banking/dashboard"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-dashboard"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Dashboard
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/myaccount"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-user-c"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        My Account
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/summary"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-report-profit"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Account summary
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/transfer"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-wallet-out"></em>
                                      </span>
                                      <span class="nk-menu-text">Transfer</span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/wire"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-money"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Cross-border Transfer
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/check-deposit"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-wallet-in"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Deposit Check
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/pay-bills"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-cc-secure"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Pay Bills
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/visual-card"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-cc-alt2-fill"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Visual Cards
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item has-sub">
                                    <a
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                      class="nk-menu-link bg-primary text-light nk-menu-toggle"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-bitcoin"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Crypto Currency
                                      </span>
                                    </a>
                                    <ul class="nk-menu-sub">
                                      <li class="nk-menu-item">
                                        <a
                                          href="https://florishbank.com/personal-banking/crypto"
                                          class="nk-menu-link"
                                          data-original-title=""
                                          title=""
                                        >
                                          <span class="nk-menu-text">
                                            Manage Assets
                                          </span>
                                        </a>
                                      </li>
                                      <li class="nk-menu-item">
                                        <a
                                          href="https://florishbank.com/personal-banking/crypto?action=deposit"
                                          class="nk-menu-link"
                                          data-original-title=""
                                          title=""
                                        >
                                          <span class="nk-menu-text">
                                            Deposit Crypto
                                          </span>
                                        </a>
                                      </li>
                                      <li class="nk-menu-item">
                                        <a
                                          href="https://florishbank.com/personal-banking/crypto?action=withdraw"
                                          class="nk-menu-link"
                                          data-original-title=""
                                          title=""
                                        >
                                          <span class="nk-menu-text">
                                            Fiat Withdrawal
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/kyc"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-file-check-fill"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        KYC Status
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/loan"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-invest"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Loan/Credit financing
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/card"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-cc-alt"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Link External card
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/account-setting"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-setting-alt-fill"></em>
                                      </span>
                                      <span class="nk-menu-text">
                                        Account Setting
                                      </span>
                                    </a>
                                  </li>
                                  <li class="nk-menu-item">
                                    <a
                                      href="https://florishbank.com/personal-banking/contact"
                                      class="nk-menu-link"
                                      data-original-title=""
                                      title=""
                                    >
                                      <span class="nk-menu-icon">
                                        <em class="icon ni ni-help-alt"></em>
                                      </span>
                                      <span class="nk-menu-text">Support</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div
                                class="nk-sidebar-footer"
                                bis_skin_checked="1"
                              >
                                <ul class="nk-menu nk-menu-footer">
                                  <a href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#">
                                    <div
                                      id="google_translate_element"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        class="skiptranslate goog-te-gadget"
                                        dir="ltr"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          id=":0.targetLanguage"
                                          class="goog-te-gadget-simple"
                                          bis_skin_checked="1"
                                          style={{ whiteSpace: "nowrap" }}
                                        >
                                          <img
                                            src="./assets/cleardot.gif"
                                            class="goog-te-gadget-icon"
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
                                              class="VIpgJd-ZVi9od-xl07Ob-lTBxed"
                                              href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                            >
                                              <span>Select Language</span>
                                              <img
                                                src="./assets/cleardot.gif"
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
                                                src="./assets/cleardot.gif"
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
                      class="simplebar-placeholder"
                      style={{ width: "auto", height: "1076px" }}
                      bis_skin_checked="1"
                    ></div>
                  </div>
                  <div
                    class="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                    bis_skin_checked="1"
                  >
                    <div
                      class="simplebar-scrollbar"
                      style={{ width: "0px", display: "none" }}
                      bis_skin_checked="1"
                    ></div>
                  </div>
                  <div
                    class="simplebar-track simplebar-vertical"
                    style={{ visibility: "visible" }}
                    bis_skin_checked="1"
                  >
                    <div
                      class="simplebar-scrollbar"
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
            <div class="nk-wrap" bis_skin_checked="1">
              <div
                class="nk-header nk-header-fluid nk-header-fixed is-secondary"
                bis_skin_checked="1"
              >
                <div class="container-fluid" bis_skin_checked="1">
                  <div class="nk-header-wrap" bis_skin_checked="1">
                    <div
                      class="nk-menu-trigger d-xl-none ml-n1"
                      bis_skin_checked="1"
                    >
                      <a
                        href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                        class="nk-nav-toggle nk-quick-nav-icon"
                        data-target="sidebarMenu"
                      >
                        <em class="icon ni ni-menu"></em>
                      </a>
                    </div>
                    <div class="nk-header-brand d-xl-none" bis_skin_checked="1">
                      <a
                        href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                        class="logo-link"
                      >
                        <img
                          class="logo-light logo-img"
                          src="./assets/logo.png"
                          srcset="../logo.png"
                          alt="logo"
                        />
                        <img
                          class="logo-dark logo-img"
                          src="./assets/logo.png"
                          srcset="../logo.png"
                          alt="logo-dark"
                        />
                      </a>
                    </div>
                    <div
                      class="nk-header-news d-none d-xl-block"
                      bis_skin_checked="1"
                    >
                      <div class="nk-news-list" bis_skin_checked="1">
                        <a
                          class="nk-news-item"
                          href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                        >
                          <div class="nk-news-icon" bis_skin_checked="1">
                            <em class="icon ni ni-card-view"></em>
                          </div>
                          <div class="nk-news-text" bis_skin_checked="1">
                            <p>
                              Do you know the latest update of Covid 2019?
                              <span>
                                An overview of ours is now available here.
                              </span>
                            </p>
                            <em class="icon ni ni-external"></em>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="nk-header-tools" bis_skin_checked="1">
                      <ul class="nk-quick-nav">
                        <li class="dropdown user-dropdown">
                          <a
                            href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <div class="user-toggle" bis_skin_checked="1">
                              <div class="user-avatar sm" bis_skin_checked="1">
                                <em class="icon ni ni-user-alt"></em>
                              </div>
                              <div
                                class="user-info d-none d-md-block"
                                bis_skin_checked="1"
                              >
                                <div
                                  class="user-status user-status-verified"
                                  bis_skin_checked="1"
                                >
                                  Connected
                                </div>
                                <div
                                  class="user-name dropdown-indicator"
                                  bis_skin_checked="1"
                                >
                                  Michael Lukas C
                                </div>
                              </div>
                            </div>
                          </a>
                          <div
                            class="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1"
                            bis_skin_checked="1"
                          >
                            <div
                              class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block"
                              bis_skin_checked="1"
                            >
                              <div class="user-card" bis_skin_checked="1">
                                <div class="user-avatar" bis_skin_checked="1">
                                  <span>CM</span>
                                </div>
                                <div class="user-info" bis_skin_checked="1">
                                  <span class="lead-text">Michael Lukas C</span>
                                  <span class="sub-text">4460484609</span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="dropdown-inner user-account-info"
                              bis_skin_checked="1"
                            >
                              <h6 class="overline-title-alt">
                                Checking Account
                              </h6>
                              <div class="user-balance" bis_skin_checked="1">
                                177,853,397
                                <small class="currency currency-btc">USD</small>
                              </div>
                              <div
                                class="user-balance-sub"
                                bis_skin_checked="1"
                              >
                                Local
                                <span>
                                  177,853,397
                                  <span class="currency currency-btc">USD</span>
                                </span>
                              </div>
                              <a
                                href="https://florishbank.com/personal-banking/transfer"
                                class="link"
                              >
                                <span>Transfer Funds</span>
                                <em class="icon ni ni-wallet-out"></em>
                              </a>
                            </div>
                            <div class="dropdown-inner" bis_skin_checked="1">
                              <ul class="link-list">
                                <li>
                                  <a href="https://florishbank.com/personal-banking/profile">
                                    <em class="icon ni ni-user-alt"></em>
                                    <span>View Profile</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://florishbank.com/personal-banking/account-setting">
                                    <em class="icon ni ni-setting-alt"></em>
                                    <span>Account Setting</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://florishbank.com/personal-banking/password-reset">
                                    <em class="icon ni ni-security"></em>
                                    <span>Reset Password</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://florishbank.com/personal-banking/activity-logs">
                                    <em class="icon ni ni-activity-alt"></em>
                                    <span>Login Activity</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dark-switch"
                                    href="https://florishbank.com/personal-banking/activity-logs"
                                  >
                                    <em class="icon ni ni-moon"></em>
                                    <span>Dark Mode</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="dropdown-inner" bis_skin_checked="1">
                              <ul class="link-list">
                                <li>
                                  <a href="https://florishbank.com/personal-banking/logout">
                                    <em class="icon ni ni-signout"></em>
                                    <span>Sign out</span>
                                  </a>
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
              <div class="nk-content nk-content-fluid" bis_skin_checked="1">
                <div class="container-xl wide-lg" bis_skin_checked="1">
                  <div class="nk-content-body" bis_skin_checked="1">
                    <div class="nk-block-head" bis_skin_checked="1">
                      <div class="nk-block-head-sub" bis_skin_checked="1"></div>
                      <div
                        class="nk-block-between-md g-4 card-bordered"
                        bis_skin_checked="1"
                      >
                        <div class="nk-block-head-content" bis_skin_checked="1">
                          <h4 class="nk-block-title fw-normal">
                            Good morning Michael Lukas C
                          </h4>
                          <div class="nk-block-des" bis_skin_checked="1">
                            <p>At a glance summary of your account!</p>
                          </div>
                        </div>
                        <div class="nk-block-head-content" bis_skin_checked="1">
                          <ul class="nk-block-tools gx-3">
                            <li>
                              <a
                                href="https://florishbank.com/personal-banking/check-deposit"
                                class="btn btn-primary"
                              >
                                <span>Deposit</span>
                                <em class="icon ni ni-arrow-long-right"></em>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://florishbank.com/personal-banking/transfer"
                                class="btn btn-secondary btn-light text-light"
                              >
                                <span>Transfer Fund</span>
                                <em class="icon ni ni-arrow-long-right d-none d-sm-inline-block"></em>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="nk-block" bis_skin_checked="1">
                      <div class="row gy-gs" bis_skin_checked="1">
                        <div class="col-lg-6 col-xl-6" bis_skin_checked="1">
                          <div class="nk-block" bis_skin_checked="1">
                            <div class="nk-block-head-xs" bis_skin_checked="1">
                              <div
                                class="nk-block-head-content"
                                bis_skin_checked="1"
                              >
                                <h5 class="nk-block-title title">Overview</h5>
                              </div>
                            </div>
                            <div class="nk-block" bis_skin_checked="1">
                              <div
                                class="card card-bordered text-light is-dark h-100"
                                bis_skin_checked="1"
                              >
                                <div class="card-inner" bis_skin_checked="1">
                                  <div class="nk-wg7" bis_skin_checked="1">
                                    <div
                                      class="nk-wg7-stats-group"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        class="nk-wg7-stats w-50"
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
                                          class="user-avatar bg-light text-primary"
                                          style={{
                                            width: "70px",
                                            height: "70px",
                                          }}
                                          bis_skin_checked="1"
                                        >
                                          <span class="number-lg amount">
                                            MI
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        class="nk-wg7-stats w-50"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="nk-wg7-title"
                                          bis_skin_checked="1"
                                        >
                                          Available balance
                                        </div>
                                        <div
                                          class="number-lg amount"
                                          bis_skin_checked="1"
                                        >
                                          USD 177,853,397
                                        </div>
                                        Michael Lukas C
                                      </div>
                                    </div>
                                    <div
                                      class="nk-wg7-stats-group"
                                      bis_skin_checked="1"
                                    >
                                      <div
                                        class="nk-wg7-stats w-50"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="nk-wg7-title"
                                          bis_skin_checked="1"
                                        >
                                          Linked Cards
                                        </div>
                                        <div
                                          class="number-lg"
                                          bis_skin_checked="1"
                                        >
                                          3
                                        </div>
                                      </div>
                                      <div
                                        class="nk-wg7-stats w-50"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="nk-wg7-title"
                                          bis_skin_checked="1"
                                        >
                                          Your IP address
                                        </div>
                                        <div
                                          class="number"
                                          bis_skin_checked="1"
                                        >
                                          <img src="./assets/ng.png" alt="" />
                                          105.113.19.232
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-xl-6" bis_skin_checked="1">
                          <div class="nk-block" bis_skin_checked="1">
                            <div class="nk-block-head-xs" bis_skin_checked="1">
                              <div
                                class="nk-block-between-md g-2"
                                bis_skin_checked="1"
                              >
                                <div
                                  class="nk-block-head-content"
                                  bis_skin_checked="1"
                                >
                                  <h5 class="nk-block-title title">
                                    Checking Account
                                  </h5>
                                </div>
                                <div
                                  class="nk-block-head-content"
                                  bis_skin_checked="1"
                                >
                                  <a
                                    href="https://florishbank.com/personal-banking/transfer"
                                    class="link link-primary"
                                  >
                                    Transfer Fund
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="row g-2" bis_skin_checked="1">
                              <div class="col-sm-12" bis_skin_checked="1">
                                <div class="card bg-light" bis_skin_checked="1">
                                  <div class="nk-wgw sm" bis_skin_checked="1">
                                    <a
                                      class="nk-wgw-inner"
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                    >
                                      <div
                                        class="nk-wgw-name"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="nk-wgw-icon"
                                          bis_skin_checked="1"
                                        >
                                          <em class="icon ni ni-sign-cc-alt"></em>
                                        </div>
                                        <h5 class="nk-wgw-title title">
                                          *****84609
                                        </h5>
                                      </div>
                                      <div
                                        class="nk-wgw-balance"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="amount"
                                          bis_skin_checked="1"
                                        >
                                          177,853,397
                                          <span class="currency currency-nio">
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
                            class="nk-block nk-block-md"
                            bis_skin_checked="1"
                          >
                            <div class="nk-block-head-xs" bis_skin_checked="1">
                              <div
                                class="nk-block-between-md g-2"
                                bis_skin_checked="1"
                              >
                                <div
                                  class="nk-block-head-content"
                                  bis_skin_checked="1"
                                >
                                  <h6 class="nk-block-title title">
                                    Loans and lines of credit
                                  </h6>
                                </div>
                                <div
                                  class="nk-block-head-content"
                                  bis_skin_checked="1"
                                >
                                  <a
                                    href="https://florishbank.com/personal-banking/pay-bills"
                                    class="link link-primary"
                                  >
                                    Pay bills
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="row g-2" bis_skin_checked="1">
                              <div class="col-sm-6" bis_skin_checked="1">
                                <div class="card bg-light" bis_skin_checked="1">
                                  <div class="nk-wgw sm" bis_skin_checked="1">
                                    <a
                                      class="nk-wgw-inner"
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                    >
                                      <div
                                        class="nk-wgw-name"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="nk-wgw-icon"
                                          bis_skin_checked="1"
                                        >
                                          <em class="icon ni ni-check-circle"></em>
                                        </div>
                                        <h5 class="nk-wgw-title title">
                                          Business Support Loan
                                        </h5>
                                      </div>
                                      <div
                                        class="nk-wgw-balance"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="amount"
                                          bis_skin_checked="1"
                                        >
                                          +4,000
                                          <span class="currency currency-nio">
                                            USD
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div class="col-sm-6" bis_skin_checked="1">
                                <div class="card bg-light" bis_skin_checked="1">
                                  <div class="nk-wgw sm" bis_skin_checked="1">
                                    <a
                                      class="nk-wgw-inner"
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                    >
                                      <div
                                        class="nk-wgw-name"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="nk-wgw-icon"
                                          bis_skin_checked="1"
                                        >
                                          <em class="icon ni ni-sign-cc-alt2"></em>
                                        </div>
                                        <h5 class="nk-wgw-title title">
                                          FICO Credit Score
                                        </h5>
                                      </div>
                                      <div
                                        class="nk-wgw-balance"
                                        bis_skin_checked="1"
                                      >
                                        <div
                                          class="amount text-dark"
                                          bis_skin_checked="1"
                                        >
                                          750 &nbsp;
                                          <span class="badge-pill bg-success"></span>
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
                    <div class="nk-block nk-block-lg" bis_skin_checked="1">
                      <div class="row gy-gs" bis_skin_checked="1">
                        <div class="col-md-6" bis_skin_checked="1">
                          <div class="card-head" bis_skin_checked="1">
                            <div class="card-title mb-0" bis_skin_checked="1">
                              <h5 class="title">
                                Recent Transaction Activities
                              </h5>
                            </div>
                            <div class="card-tools" bis_skin_checked="1">
                              <ul class="card-tools-nav">
                                <li class="active">
                                  <a href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#">
                                    All
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="tranx-list card card-bordered"
                            bis_skin_checked="1"
                          >
                            <div class="tranx-item" bis_skin_checked="1">
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-info" bis_skin_checked="1">
                                  <div class="tranx-data" bis_skin_checked="1">
                                    <div
                                      class="tranx-label"
                                      bis_skin_checked="1"
                                    >
                                      FLO/0DQTCTRCR-0423
                                      <em class="tranx-icon sm icon ni ni-wallet-out"></em>
                                    </div>
                                    <div
                                      class="tranx-date"
                                      bis_skin_checked="1"
                                    >
                                      21 Apr 2023, 12:51 pm
                                    </div>
                                    <div
                                      class="text-primary"
                                      bis_skin_checked="1"
                                    >
                                      ONLINE TRANSFER/FKDVP/3594
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-amount" bis_skin_checked="1">
                                  <div class="tranx-date" bis_skin_checked="1">
                                    Amount
                                  </div>
                                  <div
                                    class="text-danger fs-16px"
                                    bis_skin_checked="1"
                                  >
                                    - 1000
                                    <span class="currency currency-usd">
                                      <span class="currency currency-btc">
                                        USD
                                      </span>
                                    </span>
                                  </div>
                                  <div class="number-sm" bis_skin_checked="1">
                                    <strong class="text-success">
                                      Completed
                                    </strong>
                                  </div>
                                </div>
                              </div>
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-amount" bis_skin_checked="1">
                                  <div class="number" bis_skin_checked="1">
                                    Debit
                                    <span class="currency currency-btc"></span>
                                  </div>
                                  <span
                                    class="badge badge-dim badge-pill badge-outline-primary"
                                    data-toggle="modal"
                                    data-target="#modalDefault369"
                                  >
                                    View Details
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="modal fade"
                              tabindex="-1"
                              id="modalDefault369"
                              bis_skin_checked="1"
                            >
                              <div
                                class="modal-dialog"
                                role="document"
                                bis_skin_checked="1"
                              >
                                <div class="modal-content" bis_skin_checked="1">
                                  <div
                                    class="modal-header bg-primary text-light"
                                    bis_skin_checked="1"
                                  >
                                    <h5 class="modal-title text-light">
                                      Transaction Details
                                    </h5>
                                    <a
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                      class="close text-light"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <em class="icon ni ni-cross"></em>
                                    </a>
                                  </div>
                                  <div class="modal-body" bis_skin_checked="1">
                                    <ul class="buysell-overview-list">
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Amount Debited</span>
                                        </span>
                                        <span class="pm-title">USD 1000</span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Transaction refrence:</span>
                                        </span>
                                        <span class="pm-title">
                                          FLO/0DQTCTRCR-0423
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>
                                            Beneficiary Account holder:
                                          </span>
                                        </span>
                                        <span class="pm-title">
                                          werdufi78o77 7e688
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Bank name:</span>
                                        </span>
                                        <span class="pm-title">
                                          Nomura Bank International Plc
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Date:</span>
                                        </span>
                                        <span class="pm-title">
                                          21 Apr 2023, 12:51 pm
                                        </span>
                                      </li>

                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Available Balance:</span>
                                        </span>
                                        <span class="pm-title">
                                          USD 177,853,397
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    class="modal-footer bg-light"
                                    bis_skin_checked="1"
                                  >
                                    <span class="sub-text text-primary">
                                      Proccessed by Florish Bank Digital banking
                                      services.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="tranx-item" bis_skin_checked="1">
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-info" bis_skin_checked="1">
                                  <div class="tranx-data" bis_skin_checked="1">
                                    <div
                                      class="tranx-label"
                                      bis_skin_checked="1"
                                    >
                                      FLO/NRNAKMJOM-0622
                                      <em class="tranx-icon sm icon ni ni-wallet-out"></em>
                                    </div>
                                    <div
                                      class="tranx-date"
                                      bis_skin_checked="1"
                                    >
                                      13 Jun 2022, 4:44 pm
                                    </div>
                                    <div
                                      class="text-primary"
                                      bis_skin_checked="1"
                                    >
                                      ONLINE TRANSFER/WXW7R/1863
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-amount" bis_skin_checked="1">
                                  <div class="tranx-date" bis_skin_checked="1">
                                    Amount
                                  </div>
                                  <div
                                    class="text-danger fs-16px"
                                    bis_skin_checked="1"
                                  >
                                    - 130020
                                    <span class="currency currency-usd">
                                      <span class="currency currency-btc">
                                        USD
                                      </span>
                                    </span>
                                  </div>
                                  <div class="number-sm" bis_skin_checked="1">
                                    <strong class="text-success">
                                      Completed
                                    </strong>
                                  </div>
                                </div>
                              </div>
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-amount" bis_skin_checked="1">
                                  <div class="number" bis_skin_checked="1">
                                    Debit
                                    <span class="currency currency-btc"></span>
                                  </div>
                                  <span
                                    class="badge badge-dim badge-pill badge-outline-primary"
                                    data-toggle="modal"
                                    data-target="#modalDefault282"
                                  >
                                    View Details
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="modal fade"
                              tabindex="-1"
                              id="modalDefault282"
                              bis_skin_checked="1"
                            >
                              <div
                                class="modal-dialog"
                                role="document"
                                bis_skin_checked="1"
                              >
                                <div class="modal-content" bis_skin_checked="1">
                                  <div
                                    class="modal-header bg-primary text-light"
                                    bis_skin_checked="1"
                                  >
                                    <h5 class="modal-title text-light">
                                      Transaction Details
                                    </h5>
                                    <a
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                      class="close text-light"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <em class="icon ni ni-cross"></em>
                                    </a>
                                  </div>
                                  <div class="modal-body" bis_skin_checked="1">
                                    <ul class="buysell-overview-list">
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Amount Debited</span>
                                        </span>
                                        <span class="pm-title">USD 130020</span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Transaction refrence:</span>
                                        </span>
                                        <span class="pm-title">
                                          FLO/NRNAKMJOM-0622
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>
                                            Beneficiary Account holder:
                                          </span>
                                        </span>
                                        <span class="pm-title">
                                          Inland Revenue Services , Turkey
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Bank name:</span>
                                        </span>
                                        <span class="pm-title">
                                          Barclay Bank Ankara-Turkey
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Date:</span>
                                        </span>
                                        <span class="pm-title">
                                          13 Jun 2022, 4:44 pm
                                        </span>
                                      </li>

                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Available Balance:</span>
                                        </span>
                                        <span class="pm-title">
                                          USD 177,854,397
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    class="modal-footer bg-light"
                                    bis_skin_checked="1"
                                  >
                                    <span class="sub-text text-primary">
                                      Proccessed by Florish Bank Digital banking
                                      services.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="tranx-item" bis_skin_checked="1">
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-info" bis_skin_checked="1">
                                  <div class="tranx-data" bis_skin_checked="1">
                                    <div
                                      class="tranx-label"
                                      bis_skin_checked="1"
                                    >
                                      FLO/7QN3P1UJC-0622
                                      <em class="tranx-icon sm icon ni ni-wallet-out"></em>
                                    </div>
                                    <div
                                      class="tranx-date"
                                      bis_skin_checked="1"
                                    >
                                      10 Jun 2022, 2:58 pm
                                    </div>
                                    <div
                                      class="text-primary"
                                      bis_skin_checked="1"
                                    >
                                      purchase
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-amount" bis_skin_checked="1">
                                  <div class="tranx-date" bis_skin_checked="1">
                                    Amount
                                  </div>
                                  <div
                                    class="text-danger fs-16px"
                                    bis_skin_checked="1"
                                  >
                                    - 300960000
                                    <span class="currency currency-usd">
                                      <span class="currency currency-btc">
                                        USD
                                      </span>
                                    </span>
                                  </div>
                                  <div class="number-sm" bis_skin_checked="1">
                                    <strong class="text-success">
                                      Completed
                                    </strong>
                                  </div>
                                </div>
                              </div>
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-amount" bis_skin_checked="1">
                                  <div class="number" bis_skin_checked="1">
                                    Debit
                                    <span class="currency currency-btc"></span>
                                  </div>
                                  <span
                                    class="badge badge-dim badge-pill badge-outline-primary"
                                    data-toggle="modal"
                                    data-target="#modalDefault281"
                                  >
                                    View Details
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="modal fade"
                              tabindex="-1"
                              id="modalDefault281"
                              bis_skin_checked="1"
                            >
                              <div
                                class="modal-dialog"
                                role="document"
                                bis_skin_checked="1"
                              >
                                <div class="modal-content" bis_skin_checked="1">
                                  <div
                                    class="modal-header bg-primary text-light"
                                    bis_skin_checked="1"
                                  >
                                    <h5 class="modal-title text-light">
                                      Transaction Details
                                    </h5>
                                    <a
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                      class="close text-light"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <em class="icon ni ni-cross"></em>
                                    </a>
                                  </div>
                                  <div class="modal-body" bis_skin_checked="1">
                                    <ul class="buysell-overview-list">
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Amount Debited</span>
                                        </span>
                                        <span class="pm-title">
                                          USD 300960000
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Transaction refrence:</span>
                                        </span>
                                        <span class="pm-title">
                                          FLO/7QN3P1UJC-0622
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>
                                            Beneficiary Account holder:
                                          </span>
                                        </span>
                                        <span class="pm-title">
                                          GAC Trucks, China
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Bank name:</span>
                                        </span>
                                        <span class="pm-title">
                                          Barclays Bank Pic
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Date:</span>
                                        </span>
                                        <span class="pm-title">
                                          10 Jun 2022, 2:58 pm
                                        </span>
                                      </li>

                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Available Balance:</span>
                                        </span>
                                        <span class="pm-title">
                                          USD 177,984,417
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    class="modal-footer bg-light"
                                    bis_skin_checked="1"
                                  >
                                    <span class="sub-text text-primary">
                                      Proccessed by Florish Bank Digital banking
                                      services.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="tranx-item" bis_skin_checked="1">
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-info" bis_skin_checked="1">
                                  <div class="tranx-data" bis_skin_checked="1">
                                    <div
                                      class="tranx-label"
                                      bis_skin_checked="1"
                                    >
                                      FLO/KLDMGI6BF-0622
                                      <em class="tranx-icon sm icon ni ni-wallet-in"></em>
                                    </div>
                                    <div
                                      class="tranx-date"
                                      bis_skin_checked="1"
                                    >
                                      10 Jun 2022, 2:04 pm
                                    </div>
                                    <div
                                      class="text-primary"
                                      bis_skin_checked="1"
                                    >
                                      bills
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-amount" bis_skin_checked="1">
                                  <div class="tranx-date" bis_skin_checked="1">
                                    Amount
                                  </div>
                                  <div
                                    class="text-success fs-16px"
                                    bis_skin_checked="1"
                                  >
                                    + 452.40
                                    <span class="currency currency-usd">
                                      <span class="currency currency-btc">
                                        USD
                                      </span>
                                    </span>
                                  </div>
                                  <div class="number-sm" bis_skin_checked="1">
                                    <strong class="text-success">
                                      Completed
                                    </strong>
                                  </div>
                                </div>
                              </div>
                              <div class="tranx-col" bis_skin_checked="1">
                                <div class="tranx-amount" bis_skin_checked="1">
                                  <div class="number" bis_skin_checked="1">
                                    Credit
                                    <span class="currency currency-btc"></span>
                                  </div>
                                  <span
                                    class="badge badge-dim badge-pill badge-outline-primary"
                                    data-toggle="modal"
                                    data-target="#modalDefault280"
                                  >
                                    View Details
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="modal fade"
                              tabindex="-1"
                              id="modalDefault280"
                              bis_skin_checked="1"
                            >
                              <div
                                class="modal-dialog"
                                role="document"
                                bis_skin_checked="1"
                              >
                                <div class="modal-content" bis_skin_checked="1">
                                  <div
                                    class="modal-header bg-primary text-light"
                                    bis_skin_checked="1"
                                  >
                                    <h5 class="modal-title text-light">
                                      Transaction Details
                                    </h5>
                                    <a
                                      href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                                      class="close text-light"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <em class="icon ni ni-cross"></em>
                                    </a>
                                  </div>
                                  <div class="modal-body" bis_skin_checked="1">
                                    <ul class="buysell-overview-list">
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Amount Debited</span>
                                        </span>
                                        <span class="pm-title">USD 452.40</span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Transaction refrence:</span>
                                        </span>
                                        <span class="pm-title">
                                          FLO/KLDMGI6BF-0622
                                        </span>
                                      </li>
                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Date:</span>
                                        </span>
                                        <span class="pm-title">
                                          10 Jun 2022, 2:04 pm
                                        </span>
                                      </li>

                                      <li class="buysell-overview-item">
                                        <span class="pm-currency">
                                          <em class="icon ni ni-check-circle-fill"></em>
                                          <span>Available Balance:</span>
                                        </span>
                                        <span class="pm-title">
                                          USD 478,944,417
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    class="modal-footer bg-light"
                                    bis_skin_checked="1"
                                  >
                                    <span class="sub-text text-primary">
                                      Proccessed by Florish Bank Digital banking
                                      services.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <input type="hidden" id="debit1" value="75" />
                            <input type="hidden" id="credit1" value="25" />
                          </div>
                        </div>
                        <div class="col-md-6" bis_skin_checked="1">
                          <div class="card-head" bis_skin_checked="1">
                            <div class="card-title mb-0" bis_skin_checked="1">
                              <h5 class="title">Balance Flow</h5>
                            </div>
                            <div class="card-tools" bis_skin_checked="1">
                              <ul class="card-tools-nav">
                                <li class="active">
                                  <a href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#">
                                    All time
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="card card-bordered" bis_skin_checked="1">
                            <div class="card-inner" bis_skin_checked="1">
                              <div class="nk-wg4" bis_skin_checked="1">
                                <div
                                  class="nk-wg4-group justify-center gy-3 gx-4"
                                  bis_skin_checked="1"
                                >
                                  <div class="nk-wg4-item" bis_skin_checked="1">
                                    <div class="sub-text" bis_skin_checked="1">
                                      <div
                                        class="dot dot-lg sq"
                                        data-bg="#1ee0ac"
                                        style={{
                                          background: "rgb(30, 224, 172)",
                                        }}
                                        bis_skin_checked="1"
                                      ></div>
                                      <span>Credit</span>
                                    </div>
                                  </div>
                                  <div class="nk-wg4-item" bis_skin_checked="1">
                                    <div class="sub-text" bis_skin_checked="1">
                                      <div
                                        class="dot dot-lg sq"
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
                              <div class="nk-ck3" bis_skin_checked="1">
                                <canvas
                                  class="pie-chart"
                                  id="pieChartData"
                                ></canvas>
                              </div>
                            </div>
                          </div>
                          <p></p>
                          <div
                            class="tradingview-widget-container"
                            style={{ width: "320px", height: "220px" }}
                            bis_skin_checked="1"
                          >
                            <iframe
                              title="acount"
                              allowtransparency="true"
                              frameborder="0"
                              src="./assets/saved_resource.html"
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
                              class="tradingview-widget-copyright"
                              bis_skin_checked="1"
                            >
                              <a
                                href="https://www.tradingview.com/symbols/EURUSD/?exchange=FX"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <span class="blue-text">EURUSD Rates</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="nk-block" bis_skin_checked="1">
                      <div class="card card-bordered" bis_skin_checked="1">
                        <div
                          class="card-inner card-inner-lg"
                          bis_skin_checked="1"
                        >
                          <div
                            class="align-center flex-wrap flex-md-nowrap g-4"
                            bis_skin_checked="1"
                          >
                            <div
                              class="nk-block-image w-120px flex-shrink-0"
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
                            <div class="nk-block-content" bis_skin_checked="1">
                              <div
                                class="nk-block-content-head px-lg-4"
                                bis_skin_checked="1"
                              >
                                <h5>We’re here to help you!</h5>
                                <p class="text-soft">
                                  Ask a question or file a support ticket,
                                  manage request, report an issues. Our team
                                  support team will get back to you by email.
                                </p>
                              </div>
                            </div>
                            <div
                              class="nk-block-content flex-shrink-0"
                              bis_skin_checked="1"
                            >
                              <a
                                href="https://florishbank.com/personal-banking/contact"
                                class="btn btn-lg btn-outline-primary"
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

              <div class="nk-footer nk-footer-fluid" bis_skin_checked="1">
                <div class="container-fluid" bis_skin_checked="1">
                  <div class="nk-footer-wrap" bis_skin_checked="1">
                    <div class="nk-footer-copyright" bis_skin_checked="1">
                      © 2023 Florish Bank -
                      <a href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#">
                        All rights reserved.
                      </a>
                    </div>
                    <div class="nk-footer-links" bis_skin_checked="1">
                      <ul class="nav nav-sm">
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="https://florishbank.com/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
                          >
                            Terms
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="https://florishbank.com/personal-banking/privacy"
                          >
                            Privacy
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="https://florishbank.com/personal-banking/contact"
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
        <script src="./assets/jquery.min.js.download"></script>
        <script src="./assets/country.js.download"></script>
        <script src="./assets/bundle.js.download"></script>
        <script src="./assets/scripts.js.download"></script>
        <script src="./assets/chart-crypto.js.download"></script>
        <script src="./assets/sweetalert.js.download"></script>
        <script src="./assets/jquery.min.js(1).download"></script>
        <script src="./assets/custom.js.download"></script>
        <script src="./assets/toastr.js.download"></script>
        <div
          id="goog-gt-"
          class="skiptranslate VIpgJd-yAWNEb-L7lbkb"
          dir="ltr"
          bis_skin_checked="1"
        >
          <div style={{ padding: "8px" }} bis_skin_checked="1">
            <div bis_skin_checked="1">
              <div class="VIpgJd-yAWNEb-l4eHX" bis_skin_checked="1">
                <img
                  src="./assets/translate_24dp.png"
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
            <h1 class="VIpgJd-yAWNEb-r4nke VIpgJd-yAWNEb-mrxPge">
              Original text
            </h1>
          </div>
          <div style={{ padding: "8px" }} bis_skin_checked="1">
            <div class="VIpgJd-yAWNEb-nVMfcd-fmcmS" bis_skin_checked="1"></div>
          </div>
          <div
            class="VIpgJd-yAWNEb-cGMI2b"
            style={{ padding: "8px" }}
            bis_skin_checked="1"
          >
            <div class="VIpgJd-yAWNEb-Z0Arqf-PLDbbf" bis_skin_checked="1">
              <span class="VIpgJd-yAWNEb-Z0Arqf-hSRGPd">
                Contribute a better translation
              </span>
            </div>
            <div
              class="VIpgJd-yAWNEb-fw42Ze-Z0Arqf-haAclf"
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
                class="VIpgJd-yAWNEb-Z0Arqf-H9tDt"
                bis_skin_checked="1"
              ></div>
            </div>
          </div>
          <div
            class="VIpgJd-yAWNEb-jOfkMb-Ne3sFf"
            bis_skin_checked="1"
            style={{ display: "none" }}
          ></div>
        </div>

        <div class="VIpgJd-ZVi9od-aZ2wEe-wOHMyf" bis_skin_checked="1">
          <div class="VIpgJd-ZVi9od-aZ2wEe-OiiCO" bis_skin_checked="1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="VIpgJd-ZVi9od-aZ2wEe"
              width="96px"
              height="96px"
              viewBox="0 0 66 66"
            >
              <circle
                class="VIpgJd-ZVi9od-aZ2wEe-Jt5cK"
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
          class="VIpgJd-ZVi9od-xl07Ob-OEVmcd skiptranslate"
          title="Language Translate Widget"
          style={{
            visibility: "visible",
            boxSizing: "content-box",
            width: "1283px",
            height: "263px",
            display: "none",
          }}
          src="./assets/saved_resource(1).html"
        ></iframe>
      </div>
    </>
  );
};

export default Dashboard;
