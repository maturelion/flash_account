import React from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Helmet from "react-helmet";
import { useLogin } from "../../hooks/auth.hooks";

const Home = () => {
  const {mutate: login, isPending: loading} = useLogin()
  const minUserChar = 3
  const initialValues = {
    id: "",
    pass: ""
  }

  const onSubmit = (values) => {
    login(values)
  }

  const validationSchema = Yup.object({
    id: Yup.string().min(minUserChar, `Username must be ${minUserChar}`).required("Username is required"),
    pass: Yup.string().required("Password is required")
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Helmet>
        <title>Golden West</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link
          rel="stylesheet"
          href="../../assets/clientlib-default.min.001bf72e86ac4a5150822ce748c8d0ae.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="../../assets/site.min.css"
          type="text/css"
        />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <link href="../../assets/css" rel="stylesheet" />
        <link href="../../assets/bootstrap.min.css" rel="stylesheet" />
        <link href="../../assets/font-awesome.min.css" rel="stylesheet" />
        <link href="../../assets/animate.css" rel="stylesheet" />
        <link href="../../assets/bootstrap-4-navbar.css" rel="stylesheet" />
        <link href="../../assets/filterizer.css" rel="stylesheet" />
        <link href="../../assets/jquery.fancybox.css" rel="stylesheet" />
        <link rel="stylesheet" href="../../assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="../../assets/owl.theme.default.min.css" />
        <link href="../../assets/fakeLoader.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          type="text/css"
          href="../../assets/sweetalert.css"
        />
        <link href="../../assets/style.css" rel="stylesheet" />
        <link href="../../assets/default.css" rel="stylesheet" />
        <link rel="stylesheet" href="../../assets/color-switcher.css" />
        <link href="../../assets/default.css" rel="stylesheet" />
        <link rel="stylesheet" href="../../assets/color-switcher.css" />
        <link href="../../assets/responsive.css" rel="stylesheet" />
        <link href="../../assets/customcss.css" rel="stylesheet" />
        <link href="../../assets/css(1)" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="../../assets/toastr.css" />
      </Helmet>
      <div
        bis_register="W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ29tY29uIiwiYWRibG9ja2VyU3RhdHVzIjp7IkRJU1BMQVkiOiJkaXNhYmxlZCIsIkZBQ0VCT09LIjoiZGlzYWJsZWQiLCJUV0lUVEVSIjoiZGlzYWJsZWQiLCJSRURESVQiOiJkaXNhYmxlZCJ9LCJ2ZXJzaW9uIjoiMS45LjA5Iiwic2NvcmUiOjEwOTA5fV0="
        style={{ position: "relative", minHeight: "100%", top: "0px" }}
        className="no-outlines"
      >
        <div className="top-menu-1x" bis_skin_checked="1">
          <div className="container" bis_skin_checked="1">
            <div className="row" bis_skin_checked="1">
              <div className="col-md-6" bis_skin_checked="1">
                <div className="top-menu-left" bis_skin_checked="1">
                  <p>Need help? Contact Us</p>
                  <b>
                    <i className="fa fa-envelope"></i>
                    <a
                      style={{ color: "##fff" }}
                      href="/customercare@goldenwestcu.com:support@goldenwestcu.com"
                    >
                      support@goldenwestcu.com{" "}
                    </a>
                  </b>
                </div>
              </div>
              <div className="col-md-6" bis_skin_checked="1">
                <div className="top-menu-right" bis_skin_checked="1">
                  <div className="footer-info-right" bis_skin_checked="1">
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ paddingTop: "25px" }}>
                            <a
                              href="#login-form"
                              style={{
                                backgroundColor: "white",
                                height: "40px",
                                width: "150px",
                                color: "black",
                                border: "2px red",
                                padding: "10px",
                              }}
                            >
                              sign in
                            </a>
                          </td>
                          <td> &nbsp;&nbsp;&nbsp;</td>
                          <td>
                            <ul>
                              <br />
                              {/* <select onchange="doGTranslate(this);">
        <option value="">Select Language</option>
        <option value="en|af">Afrikaans</option>
        <option value="en|sq">Albanian</option>
        <option value="en|ar">Arabic</option>
        <option value="en|hy">Armenian</option>
        <option value="en|az">Azerbaijani</option>
        <option value="en|eu">Basque</option>
        <option value="en|be">Belarusian</option>
        <option value="en|bg">Bulgarian</option>
        <option value="en|ca">Catalan</option>
        <option value="en|zh-CN">Chinese (Simplified)</option>
        <option value="en|zh-TW">Chinese (Traditional)</option>
        <option value="en|hr">Croatian</option>
        <option value="en|cs">Czech</option>
        <option value="en|da">Danish</option>
        <option value="en|nl">Dutch</option>
        <option value="en|en">English</option>
        <option value="en|et">Estonian</option>
        <option value="en|tl">Filipino</option>
        <option value="en|fi">Finnish</option>
        <option value="en|fr">French</option>
        <option value="en|gl">Galician</option>
        <option value="en|ka">Georgian</option>
        <option value="en|de">German</option>
        <option value="en|el">Greek</option>
        <option value="en|ht">Haitian Creole</option>
        <option value="en|iw">Hebrew</option>
        <option value="en|hi">Hindi</option>
        <option value="en|hu">Hungarian</option>
        <option value="en|is">Icelandic</option>
        <option value="en|id">Indonesian</option>
        <option value="en|ga">Irish</option>
        <option value="en|it">Italian</option>
        <option value="en|ja">Japanese</option>
        <option value="en|ko">Korean</option>
        <option value="en|lv">Latvian</option>
        <option value="en|lt">Lithuanian</option>
        <option value="en|mk">Macedonian</option>
        <option value="en|ms">Malay</option>
        <option value="en|mt">Maltese</option>
        <option value="en|no">Norwegian</option>
        <option value="en|fa">Persian</option>
        <option value="en|pl">Polish</option>
        <option value="en|pt">Portuguese</option>
        <option value="en|ro">Romanian</option>
        <option value="en|ru">Russian</option>
        <option value="en|sr">Serbian</option>
        <option value="en|sk">Slovak</option>
        <option value="en|sl">Slovenian</option>
        <option value="en|es">Spanish</option>
        <option value="en|sw">Swahili</option>
        <option value="en|sv">Swedish</option>
        <option value="en|th">Thai</option>
        <option value="en|tr">Turkish</option>
        <option value="en|uk">Ukrainian</option>
        <option value="en|ur">Urdu</option>
        <option value="en|vi">Vietnamese</option>
        <option value="en|cy">Welsh</option>
    <option value="en|yi">Yiddish</option>
    </select> */}
                              <div
                                id="google_translate_element2"
                                bis_skin_checked="1"
                              >
                                <div
                                  className="skiptranslate goog-te-gadget"
                                  dir="ltr"
                                  bis_skin_checked="1"
                                >
                                  <div
                                    id=":0.targetLanguage"
                                    bis_skin_checked="1"
                                  >
                                    {/* <select className="goog-te-combo" aria-label="Language Translate Widget">
        <option value="">Select Language</option>
        <option value="af">Afrikaans</option>
        <option value="sq">Albanian</option>
        <option value="am">Amharic</option>
        <option value="ar">Arabic</option>
        <option value="hy">Armenian</option>
        <option value="as">Assamese</option>
        <option value="ay">Aymara</option>
        <option value="az">Azerbaijani</option>
        <option value="bm">Bambara</option>
        <option value="eu">Basque</option>
        <option value="be">Belarusian</option>
        <option value="bn">Bengali</option>
        <option value="bho">Bhojpuri</option>
        <option value="bs">Bosnian</option>
        <option value="bg">Bulgarian</option>
        <option value="my">Burmese</option>
        <option value="ca">Catalan</option>
        <option value="ceb">Cebuano</option>
        <option value="ny">Chichewa</option>
        <option value="zh-CN">Chinese (Simplified)</option>
        <option value="zh-TW">Chinese (Traditional)</option>
        <option value="co">Corsican</option>
        <option value="hr">Croatian</option>
        <option value="cs">Czech</option>
        <option value="da">Danish</option>
        <option value="dv">Dhivehi</option>
        <option value="doi">Dogri</option>
        <option value="nl">Dutch</option>
        <option value="eo">Esperanto</option>
        <option value="et">Estonian</option>
        <option value="ee">Ewe</option>
        <option value="tl">Filipino</option>
        <option value="fi">Finnish</option>
        <option value="fr">French</option>
        <option value="fy">Frisian</option>
        <option value="gl">Galician</option>
        <option value="ka">Georgian</option>
        <option value="de">German</option>
        <option value="el">Greek</option>
        <option value="gn">Guarani</option>
        <option value="gu">Gujarati</option>
        <option value="ht">Haitian Creole</option>
        <option value="ha">Hausa</option>
        <option value="haw">Hawaiian</option>
        <option value="iw">Hebrew</option>
        <option value="hi">Hindi</option>
        <option value="hmn">Hmong</option>
        <option value="hu">Hungarian</option>
        <option value="is">Icelandic</option>
        <option value="ig">Igbo</option>
        <option value="ilo">Ilocano</option>
        <option value="id">Indonesian</option>
        <option value="ga">Irish Gaelic</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="jw">Javanese</option>
        <option value="kn">Kannada</option>
        <option value="kk">Kazakh</option>
        <option value="km">Khmer</option>
        <option value="rw">Kinyarwanda</option>
        <option value="gom">Konkani</option>
        <option value="ko">Korean</option>
        <option value="kri">Krio</option>
        <option value="ku">Kurdish (Kurmanji)</option>
        <option value="ckb">Kurdish (Sorani)</option>
        <option value="ky">Kyrgyz</option>
        <option value="lo">Lao</option>
        <option value="la">Latin</option>
        <option value="lv">Latvian</option>
        <option value="ln">Lingala</option>
        <option value="lt">Lithuanian</option>
        <option value="lg">Luganda</option>
        <option value="lb">Luxembourgish</option>
        <option value="mk">Macedonian</option>
        <option value="mai">Maithili</option>
        <option value="mg">Malagasy</option>
        <option value="ms">Malay</option>
        <option value="ml">Malayalam</option>
        <option value="mt">Maltese</option>
        <option value="mi">Maori</option>
        <option value="mr">Marathi</option>
        <option value="mni-Mtei">Meiteilon (Manipuri)</option>
        <option value="lus">Mizo</option>
        <option value="mn">Mongolian</option>
        <option value="ne">Nepali</option>
        <option value="no">Norwegian</option>
        <option value="or">Odia (Oriya)</option>
        <option value="om">Oromo</option>
        <option value="ps">Pashto</option>
        <option value="fa">Persian</option>
        <option value="pl">Polish</option>
        <option value="pt">Portuguese</option>
        <option value="pa">Punjabi</option>
        <option value="qu">Quechua</option>
        <option value="ro">Romanian</option>
        <option value="ru">Russian</option>
        <option value="sm">Samoan</option>
        <option value="sa">Sanskrit</option>
        <option value="gd">Scots Gaelic</option>
        <option value="nso">Sepedi</option>
        <option value="sr">Serbian</option>
        <option value="st">Sesotho</option>
        <option value="sn">Shona</option>
        <option value="sd">Sindhi</option>
        <option value="si">Sinhala</option>
        <option value="sk">Slovak</option>
        <option value="sl">Slovenian</option>
        <option value="so">Somali</option>
        <option value="es">Spanish</option>
        <option value="su">Sundanese</option>
        <option value="sw">Swahili</option>
        <option value="sv">Swedish</option>
        <option value="tg">Tajik</option>
        <option value="ta">Tamil</option>
        <option value="tt">Tatar</option>
        <option value="te">Telugu</option>
        <option value="th">Thai</option>
        <option value="ti">Tigrinya</option>
        <option value="ts">Tsonga</option>
        <option value="tr">Turkish</option>
        <option value="tk">Turkmen</option>
        <option value="ak">Twi</option>
        <option value="uk">Ukrainian</option>
        <option value="ur">Urdu</option>
        <option value="ug">Uyghur</option>
        <option value="uz">Uzbek</option>
        <option value="vi">Vietnamese</option>
        <option value="cy">Welsh</option>
        <option value="xh">Xhosa</option>
        <option value="yi">Yiddish</option>
        <option value="yo">Yoruba</option>
        <option value="zu">Zulu</option>
        </select> */}
                                  </div>
                                  {/* Powered by 
        <span style={{whiteSpace:"nowrap"}}>
            <a className="VIpgJd-ZVi9od-l4eHX-hSRGPd" href="https://translate.google.com/" rel="noreferrer" target="_blank">
                <img src="../../assets/googlelogo_color_42x16dp.png" width="37px" height="14px" style={{paddingRight: "3px"}} alt="Google Translate" />Translate
            </a>
        </span> */}
                                </div>
                              </div>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-wrapper"
          className="sticky-wrapper"
          style={{ height: "74px" }}
          bis_skin_checked="1"
        >
          <div
            className="bussiness-main-menu-1x"
            // style={{ width: "1349px" }}
            bis_skin_checked="1"
          >
            <div className="container" bis_skin_checked="1">
              <div className="row" bis_skin_checked="1">
                <div className="col-md-12" bis_skin_checked="1">
                  <div className="business-main-menu" bis_skin_checked="1" >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light btco-hover-menu">
                      <a className="navbar-brand" href="/index-2">
                        <img
                          style={{ maxWidth: "100px", width: "100px", height: "100px" }}
                          src="../../assets/logo.png"
                          className="d-inline-block align-top"
                          alt=""
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                        bis_skin_checked="1"
                      >
                        <ul className="navbar-nav ml-auto business-nav">
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link"
                              href="/"
                              id="navbarDropdownMenuLink2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Banking Services <i className="fa fa-angle-down"></i>
                              <span
                                style={{ display: "block", fontSize: "11px" }}
                              >
                                Accounts &amp; services
                              </span>
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink2"
                              style={{
                                width: "100%",
                                backgroundColor: "##fff",
                              }}
                            >
                              <div className="container" bis_skin_checked="1">
                                <div
                                  className="business-services nav1"
                                  bis_skin_checked="1"
                                >
                                  <div className="row" bis_skin_checked="1">
                                    <div
                                      className="col-md-12 service-content"
                                      bis_skin_checked="1"
                                    >
                                      <div className="row" bis_skin_checked="1">
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/current-accounts"
                                                  className="menuhead"
                                                >
                                                  Current Accounts
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier-accounts"
                                                  >
                                                    Golden West Bank Account
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/advance-accounts"
                                                  >
                                                    Advance Account
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/student-accounts"
                                                  >
                                                    Student Account
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/bank-accounts"
                                                  >
                                                    Bank Account
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/saving-accounts"
                                                  className="menuhead"
                                                >
                                                  Savings
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/isas-accounts"
                                                  >
                                                    ISAs
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/online-bonus-saver"
                                                  >
                                                    Online Bonus Saver
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/flexible-saver"
                                                  >
                                                    Flexible Saver
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/credit-cards"
                                                  className="menuhead"
                                                >
                                                  Credit cards
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/32-month-balance-transfer"
                                                  >
                                                    32 Month Transfer Credit
                                                    Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/advance"
                                                  >
                                                    Advance Credit Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/dual"
                                                  >
                                                    Dual Credit Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/classic"
                                                  >
                                                    Classic Credit Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier"
                                                  >
                                                    Golden West Credit Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier-world-elite"
                                                  >
                                                    Golden West World Elite
                                                    Mastercard
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/student"
                                                  >
                                                    Student Credit Card
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/contactandsupport"
                                                  className="menuhead"
                                                >
                                                  Services
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/ways-to-bank"
                                                  >
                                                    Ways to bank
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/phone-banking"
                                                  >
                                                    Voice ID
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/contactandsupport"
                                                  >
                                                    Contact &amp; Support
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/branch-locator"
                                                  >
                                                    Find a Branch
                                                  </a>
                                                </li>
                                                <a
                                                  style={{ marginTop: "15px" }}
                                                  href="/international"
                                                  className="menuhead"
                                                >
                                                  International services
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/currency-account"
                                                  >
                                                    Currency Account
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/money-transfer"
                                                  >
                                                    International Payments
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/travel-money"
                                                  >
                                                    Travel money
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link"
                              href="/index"
                              id="navbarDropdownMenuLink3"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Borrowing <i className="fa fa-angle-down"></i>
                              <span
                                style={{ display: "block", fontSize: "11px" }}
                              >
                                Loans &amp; mortgages
                              </span>
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink2"
                              style={{
                                width: "100%",
                                backgroundColor: "##fff",
                              }}
                            >
                              <div className="container" bis_skin_checked="1">
                                <div
                                  className="business-services nav2"
                                  bis_skin_checked="1"
                                >
                                  <div className="row" bis_skin_checked="1">
                                    <div
                                      className="col-md-12 service-content"
                                      bis_skin_checked="1"
                                    >
                                      <div className="row" bis_skin_checked="1">
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/loans"
                                                  className="menuhead"
                                                >
                                                  Loans
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/personal-loans"
                                                  >
                                                    Personal Loan
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/car-loans"
                                                  >
                                                    Car Loan
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/flexible"
                                                  >
                                                    Flexiloan
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier-personal"
                                                  >
                                                    Golden West Personal Loan
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/graduate-loans"
                                                  >
                                                    Graduate Loan
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/overdrafts"
                                                  className="menuhead"
                                                >
                                                  Overdrafts
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/mortgages"
                                                  className="menuhead"
                                                >
                                                  Mortgages
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/first-time-buyers"
                                                  >
                                                    First time buyer
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/95-mortgages"
                                                  >
                                                    95% Mortgages
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/remortgage"
                                                  >
                                                    Remortgage
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/buy-to-let-mortgages"
                                                  >
                                                    Buy to let
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/existing-customers"
                                                  >
                                                    Existing homeowner
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/mortgage-rates"
                                                  >
                                                    Mortgage rates
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/armed-forces"
                                                  >
                                                    Armed Forces Personnel
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/credit-cards"
                                                  className="menuhead"
                                                >
                                                  Credit cards
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/32-month-balance-transfer"
                                                  >
                                                    32 Month Transfer Credit
                                                    Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/advance"
                                                  >
                                                    Advance Credit Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/dual"
                                                  >
                                                    Dual Credit Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/classic"
                                                  >
                                                    Classic Credit Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier"
                                                  >
                                                    Golden West Credit Card
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier-world-elite"
                                                  >
                                                    Golden West World Elite
                                                    Mastercard
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/student"
                                                  >
                                                    Student Credit Card
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/contactandsupport"
                                                  className="menuhead"
                                                >
                                                  Services
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/contactandsupport"
                                                  >
                                                    Help &amp; Support
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/money-worries"
                                                  >
                                                    Money Worries
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/branch-locator"
                                                  >
                                                    Find a Branch
                                                  </a>
                                                </li>

                                                <a
                                                  style={{ marginTop: "15px" }}
                                                  href="/tools-and-guides"
                                                  className="menuhead"
                                                >
                                                  Tools &amp; Guides
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/overpayment-calculator"
                                                  >
                                                    Overpayment calculator
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/repayment-calculator"
                                                  >
                                                    Repayment calculator
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/bank-of-england-base-rate"
                                                  >
                                                    Base rate information
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </li>

                          <li className="nav-item dropdown">
                            <a
                              className="nav-link"
                              href="/index"
                              id="navbarDropdownMenuLink3"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Investing <i className="fa fa-angle-down"></i>
                              <span
                                style={{ display: "block", fontSize: "11px" }}
                              >
                                Products &amp; analysis
                              </span>
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink2"
                              style={{
                                width: "100%",
                                backgroundColor: "##fff",
                              }}
                            >
                              <div className="container" bis_skin_checked="1">
                                <div
                                  className="business-services nav3"
                                  bis_skin_checked="1"
                                >
                                  <div className="row" bis_skin_checked="1">
                                    <div
                                      className="col-md-12 service-content"
                                      bis_skin_checked="1"
                                    >
                                      <div className="row" bis_skin_checked="1">
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/investing"
                                                  className="menuhead"
                                                >
                                                  Investments
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/investment-funds"
                                                  >
                                                    Investment funds
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/world-selection-isa"
                                                  >
                                                    World Selection ISA
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/sharedealing"
                                                  >
                                                    Sharedealing
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier-financial-advice"
                                                  >
                                                    Golden West Financial
                                                    Advice
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/stand-alone-investment-advice"
                                                  >
                                                    Stand-alone Investment
                                                    Advice
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/onshore-investment-bond"
                                                  >
                                                    Onshore Investment Bond
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/child-trust-funds"
                                                  >
                                                    Child Trust fund
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/investing"
                                                  >
                                                    View all
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/news"
                                                  className="menuhead"
                                                >
                                                  Financial news &amp; analysis
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/why-invest-with-us"
                                                  className="menuhead"
                                                >
                                                  Why invest with us?
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/why-invest-with-us"
                                                  >
                                                    Find out more
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/wealth-insights"
                                                  className="menuhead"
                                                >
                                                  Wealth Insights{" "}
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/investment-funds-online"
                                                  className="menuhead"
                                                >
                                                  Global Investment Centre
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/investment-funds-online"
                                                  >
                                                    Find out more
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/contactandsupport"
                                                  className="menuhead"
                                                >
                                                  Customer support
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/gsa"
                                                  >
                                                    Log on to Global Investment
                                                    <br />
                                                    Centre
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/gsa"
                                                  >
                                                    Log on to Sharedealing
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/contactandsupport"
                                                  >
                                                    Investments contacts
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/selected-investment-funds"
                                                  >
                                                    Existing Selected
                                                    Investments
                                                    <br />
                                                    Customers
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/getting-started"
                                                  >
                                                    Getting started with
                                                    investing
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/contactandsupport"
                                                  >
                                                    View all
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </li>

                          <li className="nav-item dropdown">
                            <a
                              className="nav-link"
                              href="/index"
                              id="navbarDropdownMenuLink3"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Insurance <i className="fa fa-angle-down"></i>
                              <span
                                style={{ display: "block", fontSize: "11px" }}
                              >
                                Property &amp; family
                              </span>
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink2"
                              style={{
                                width: "100%",
                                backgroundColor: "##fff",
                              }}
                            >
                              <div className="container" bis_skin_checked="1">
                                <div
                                  className="business-services nav4"
                                  bis_skin_checked="1"
                                >
                                  <div className="row" bis_skin_checked="1">
                                    <div
                                      className="col-md-12 service-content"
                                      bis_skin_checked="1"
                                    >
                                      <div className="row" bis_skin_checked="1">
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/insurance"
                                                  className="menuhead"
                                                >
                                                  Insurance
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/home-insurance"
                                                  >
                                                    Home Insurance
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/travel-insurance"
                                                  >
                                                    Travel Insurance
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/student-insurance"
                                                  >
                                                    Student Insurance
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/insurance"
                                                  >
                                                    View all
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/life-insurance"
                                                  className="menuhead"
                                                >
                                                  Life Insurance
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/life-cover"
                                                  >
                                                    Life Cover
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/critical-illness-cover"
                                                  >
                                                    Critical Illness Cover
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/income-cover"
                                                  >
                                                    Income Cover
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/protection-telephone-advice"
                                                  >
                                                    Telephone Protection Advice
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/life-insurance"
                                                  >
                                                    View all
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/insurance"
                                                  className="menuhead"
                                                >
                                                  Insurance Claims
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/home-insurance-claims"
                                                  >
                                                    Home Insurance Claims
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/travel-insurance"
                                                  >
                                                    Travel Insurance Claims
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/car-insurance-claims"
                                                  >
                                                    Car Insurance Claims
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/premier-accounts"
                                                  className="menuhead"
                                                >
                                                  Golden West Customers
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier-travel"
                                                  >
                                                    Travel Insurance Claims
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/premier-car"
                                                  >
                                                    Car Insurance Claims
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </li>

                          <li className="nav-item dropdown">
                            <a
                              className="nav-link"
                              href="/index"
                              id="navbarDropdownMenuLink3"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Life events <i className="fa fa-angle-down"></i>
                              <span
                                style={{ display: "block", fontSize: "11px" }}
                              >
                                Help &amp; support
                              </span>
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink2"
                              style={{
                                width: "100%",
                                backgroundColor: "##fff",
                              }}
                            >
                              <div className="container" bis_skin_checked="1">
                                <div
                                  className="business-services nav5"
                                  bis_skin_checked="1"
                                >
                                  <div className="row" bis_skin_checked="1">
                                    <div
                                      className="col-md-12 service-content"
                                      bis_skin_checked="1"
                                    >
                                      <div className="row" bis_skin_checked="1">
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/life-events"
                                                  className="menuhead"
                                                >
                                                  Life events
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/dealing-with-bereavement"
                                                  >
                                                    Bereavement support
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/dealing-with-separation"
                                                  >
                                                    Separation support
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/settling-in-the-uk"
                                                  >
                                                    Settling in the UK
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/getting-married"
                                                  >
                                                    Getting married
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/planning-your-retirement"
                                                  >
                                                    Planning your retirement
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/growing-your-wealth"
                                                  >
                                                    Growing your wealth
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/moving-abroad"
                                                  >
                                                    Moving abroad
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/life-events"
                                                  >
                                                    View all
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/planningtools"
                                                  className="menuhead"
                                                >
                                                  Planning tools
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/financial-health-check"
                                                  >
                                                    Financial health check
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/planningtools"
                                                  >
                                                    View All
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/protecting-what-matters"
                                                  className="menuhead"
                                                >
                                                  Protecting what matters
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/protecting-what-matters"
                                                  >
                                                    Learn more
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-3"
                                          bis_skin_checked="1"
                                        >
                                          <div
                                            className="single-services"
                                            bis_skin_checked="1"
                                          >
                                            <div
                                              className="media"
                                              bis_skin_checked="1"
                                            >
                                              <div
                                                className="media-body"
                                                bis_skin_checked="1"
                                              >
                                                <a
                                                  href="/contactandsupport"
                                                  className="menuhead"
                                                >
                                                  Customer support
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/ways-we-can-help"
                                                  >
                                                    Ways we can help
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/money-worries"
                                                  >
                                                    Money Worries
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/ways-we-can-help"
                                                  >
                                                    Frequently asked questions
                                                  </a>
                                                </li>
                                                <a
                                                  style={{ marginTop: "15px" }}
                                                  href="/quality-conversations"
                                                  className="menuhead"
                                                >
                                                  Individual Review
                                                </a>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="/quality-conversations"
                                                  >
                                                    Book your review today for a
                                                    <br />
                                                    quick financial checkup
                                                  </a>
                                                </li>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <style>
        ##userpinid,##useridtextid {
        color: ##717171;
        font-size: 1em;
        line-height: 1.375em;
        background: none;
        border: none;
            border-bottom-color: currentcolor;
            border-bottom-style: none;
            border-bottom-width:medium;
        border-bottom-color: currentcolor;
        border-bottom-style: none;
        border-bottom-width:medium;
        border-bottom: 1px solid ##ccc;
        padding: .313em;
        margin: .188em 0;
    }
    </style> */}
        <div className="business-main-slider1" bis_skin_checked="1">
          <div className="owl-carousel1 main-slider1" bis_skin_checked="1">
            <div className="item1" bis_skin_checked="1">
              <div className="hvrbox" bis_skin_checked="1">
                <img
                  src="../../assets/b1.jpg"
                  alt="Mountains"
                  className="hvrbox-layer_bottom"
                />
                <div className="business-main-slider" bis_skin_checked="1">
                  <div className="banner-content" bis_skin_checked="1">
                    <div
                      className="owl-carousel main-slider owl-loaded owl-drag"
                      bis_skin_checked="1"
                    >
                      <div className="owl-stage-outer" bis_skin_checked="1">
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(-1116px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: "3906px",
                          }}
                          bis_skin_checked="1"
                        >
                          <div
                            className="owl-item cloned"
                            style={{ width: "558px" }}
                            bis_skin_checked="1"
                          >
                            <div className="item" bis_skin_checked="1">
                              <div
                                className="innerBannerContent row"
                                bis_skin_checked="1"
                              >
                                <div className="col-sm-7" bis_skin_checked="1">
                                  <h2>Investment Banking </h2>
                                  <p>
                                    Investment Banking provides comprehensive
                                    financial advisory, capital raising,
                                    financing and risk management services to
                                    corporations.
                                  </p>
                                  <a href="/#">Find out more</a>
                                  <p></p>
                                </div>
                                <div className="col-sm-5" bis_skin_checked="1">
                                  <img src="../../assets/visa.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="owl-item cloned"
                            style={{ width: "558px" }}
                            bis_skin_checked="1"
                          >
                            <div className="item" bis_skin_checked="1">
                              <div
                                className="innerBannerContent row"
                                bis_skin_checked="1"
                              >
                                <div className="col-sm-7" bis_skin_checked="1">
                                  <h2>Global Finance</h2>
                                  <p>
                                    Our M&amp;A team works in partnership with
                                    coverage bankers in providing solutions,
                                    using a highly analytical approach,
                                    providing unique insights.
                                  </p>
                                  <a href="/##">Find out more</a>
                                  <p></p>
                                </div>
                                <div className="col-sm-5" bis_skin_checked="1">
                                  <img src="../../assets/visa2.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="owl-item active"
                            style={{ width: "558px" }}
                            bis_skin_checked="1"
                          >
                            <div className="item" bis_skin_checked="1">
                              <div
                                className="innerBannerContent row"
                                bis_skin_checked="1"
                              >
                                <div className="col-sm-7" bis_skin_checked="1">
                                  <h2>Discover our new 82% mortgages</h2>
                                  <p>
                                    This Credit Union is federally insured by
                                    the National Credit Union Administration.
                                  </p>
                                  <a href="/#">Find out more</a>
                                  <p></p>
                                </div>
                                <div className="col-sm-5" bis_skin_checked="1">
                                  <img
                                    src="../../assets/visa1 (2).png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "558px" }}
                            bis_skin_checked="1"
                          >
                            <div className="item" bis_skin_checked="1">
                              <div
                                className="innerBannerContent row"
                                bis_skin_checked="1"
                              >
                                <div className="col-sm-7" bis_skin_checked="1">
                                  <h2>Investment Banking </h2>
                                  <p>
                                    Investment Banking provides comprehensive
                                    financial advisory, capital raising,
                                    financing and risk management services to
                                    corporations.
                                  </p>
                                  <a href="/#">Find out more</a>
                                  <p></p>
                                </div>
                                <div className="col-sm-5" bis_skin_checked="1">
                                  <img src="../../assets/visa.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "558px" }}
                            bis_skin_checked="1"
                          >
                            <div className="item" bis_skin_checked="1">
                              <div
                                className="innerBannerContent row"
                                bis_skin_checked="1"
                              >
                                <div className="col-sm-7" bis_skin_checked="1">
                                  <h2>Global Finance</h2>
                                  <p>
                                    Our M&amp;A team works in partnership with
                                    coverage bankers in providing solutions,
                                    using a highly analytical approach,
                                    providing unique insights.
                                  </p>
                                  <a href="/##">Find out more</a>
                                  <p></p>
                                </div>
                                <div className="col-sm-5" bis_skin_checked="1">
                                  <img src="../../assets/visa2.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="owl-item cloned"
                            style={{ width: "558px" }}
                            bis_skin_checked="1"
                          >
                            <div className="item" bis_skin_checked="1">
                              <div
                                className="innerBannerContent row"
                                bis_skin_checked="1"
                              >
                                <div className="col-sm-7" bis_skin_checked="1">
                                  <h2>Discover our new 82% mortgages</h2>
                                  <p>
                                    This Credit Union is federally insured by
                                    the National Credit Union Administration.
                                  </p>
                                  <a href="/#">Find out more</a>
                                  <p></p>
                                </div>
                                <div className="col-sm-5" bis_skin_checked="1">
                                  <img
                                    src="../../assets/visa1 (2).png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="owl-item cloned"
                            style={{ width: "558px" }}
                            bis_skin_checked="1"
                          >
                            <div className="item" bis_skin_checked="1">
                              <div
                                className="innerBannerContent row"
                                bis_skin_checked="1"
                              >
                                <div className="col-sm-7" bis_skin_checked="1">
                                  <h2>Investment Banking </h2>
                                  <p>
                                    Investment Banking provides comprehensive
                                    financial advisory, capital raising,
                                    financing and risk management services to
                                    corporations.
                                  </p>
                                  <a href="/#">Find out more</a>
                                  <p></p>
                                </div>
                                <div className="col-sm-5" bis_skin_checked="1">
                                  <img src="../../assets/visa.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled" bis_skin_checked="1">
                        <div className="owl-prev" bis_skin_checked="1">
                          prev
                        </div>
                        <div className="owl-next" bis_skin_checked="1">
                          next
                        </div>
                      </div>
                      <div className="owl-dots" bis_skin_checked="1">
                        <div className="owl-dot active" bis_skin_checked="1">
                          <span></span>
                        </div>
                        <div className="owl-dot" bis_skin_checked="1">
                          <span></span>
                        </div>
                        <div className="owl-dot" bis_skin_checked="1">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="loginbox" bis_skin_checked="1">
                  <div className="innerlogin" id="login-form" bis_skin_checked="1">
                    <script src="../../assets/jquery.min.js.download"></script>
                    <form
                      className="form-horizontal"
                      id="pcLogForm"
                      encType="multipart/form-data"
                      method="post"
                      onSubmit={formik.handleSubmit}
                    >
                      <h3>INTERNET BANKING</h3>
                      <div className="logResult" bis_skin_checked="1"></div>
                      &nbsp;
                      <div className="form-group" bis_skin_checked="1">
                        <div className="col-sm-10" bis_skin_checked="1">
                          <span
                            id="sprytextfield1"
                            style={{ textAlign: "left" }}
                          >
                            <input
                              className="form-control"
                              name="id"
                              type="text"
                              id="id"
                              onChange={formik.handleChange}
                              value={formik.values.id}
                              autoComplete="off"
                              maxLength="20"
                              placeholder="User ID"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="form-group" bis_skin_checked="1">
                        <div className="col-sm-10" bis_skin_checked="1">
                          <span
                            id="sprypassword1"
                            style={{ textAlign: "left" }}
                          >
                            <input
                              className="form-control"
                              name="pass"
                              type="password"
                              id="pass"
                              onChange={formik.handleChange}
                              value={formik.values.pass}
                              placeholder="Password"
                              autoComplete="off"
                              maxLength="20"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="form-group" bis_skin_checked="1">
                        <div
                          className="col-sm-offset-2 col-sm-10"
                          bis_skin_checked="1"
                        >
                          <div className="checkbox" bis_skin_checked="1">
                            <label>
                              <input type="checkbox" /> Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group" bis_skin_checked="1">
                        <div
                          className="col-sm-offset-2 col-sm-10"
                          bis_skin_checked="1"
                        >
                          <button
                            disabled={loading}
                            type="submit"
                            className="btn btn-default loginbtn"
                          >
                            {loading ? "Processing..." : "Sign in"}
                          </button>
                        </div>
                      </div>
                      <div
                        className="form-group"
                        style={{ marginBottom: "0", lineHeight: "28px" }}
                        bis_skin_checked="1"
                      >
                        <center>
                          {" "}
                          <div
                            className="col-sm-offset-2 col-sm-10"
                            bis_skin_checked="1"
                          >
                            <a href="/secure/register">
                              Not enrolled? Sign up now.
                              <i
                                className="fa fa-angle-right"
                                style={{ marginLeft: "5px" }}
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                          <div
                            className="col-sm-offset-2 col-sm-10"
                            bis_skin_checked="1"
                          >
                            <a href="/secure/customer_reset">
                              Forget Password.
                              <i
                                className="fa fa-angle-right"
                                style={{ marginLeft: "5px" }}
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </center>
                      </div>
                    </form>
                  </div>

                  {/* <script type="text/javaScript">
                $(document).ready(function() {
                $('.loginbtn').on('click', function() {
            var $this = $(this);
             var loadingText = '<i className="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></i>&nbsp;Processing...';
             
              
            if ($(this).html() !== loadingText) {
          $this.data('original-text', $(this).html());
          $this.html(loadingText);
          }
        setTimeout(function() {
          $this.html($this.data('original-text'));
        },5000);
      });
    })
      
      $(document).ready(function () {
        $('.loginbtn').click(function (e) {
          e.preventDefault();
          var id = $('#id').val();
          var pass = $('#pass').val(); 
           
          $.ajax
            ({
              type: "POST",
              url: "login.php",
              data: { "id": id, "pass": pass},
              success: function (data) {
                $('.logResult').html(data);
                $('#formPC')[0].reset();
              }
            });
        });
      });
    </script> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="business-features-3x"
          style={{ marginTop: "60px" }}
          bis_skin_checked="1"
        >
          <div className="colourful-features-content" bis_skin_checked="1">
            <div className="row" bis_skin_checked="1">
              <div className="container" bis_skin_checked="1">
                <div className="col-sm-12 bankservice" bis_skin_checked="1">
                  <div
                    className="business-title-middle"
                    style={{ marginBottom: "15px" }}
                    bis_skin_checked="1"
                  >
                    <h2>Choose what's right for you</h2>
                    <span className="title-border-middle"></span>
                  </div>
                  <div
                    className="bx-wrapper"
                    style={{ maxWidth: "100%" }}
                    bis_skin_checked="1"
                  >
                    <div
                      className="bx-viewport"
                      style={{
                        width: "100%",
                        overflow: "hidden",
                        position: "relative",
                        height: "101px",
                      }}
                      bis_skin_checked="1"
                    >
                      <ul
                        className="bxsliderwr"
                        style={{
                          width: "1115%",
                          position: "relative",
                          transitionDuration: "0.5s",
                          transform: "translate3d(-7910px, 0px, 0px)",
                        }}
                      >
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/advance">
                            <i
                              className="icon-credit-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Find a credit card</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/home-insurance">
                            <i
                              className="icon-mortgage2-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Home Lending</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/income-cover">
                            <i
                              className="icon-Auto-loan-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Car Buying &amp; Loans</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/investment-funds">
                            <i
                              className="icon-business-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Golden West for Business</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/personal-loans">
                            <i className="icon-cpc-medium" aria-hidden="true"></i>
                            <span>Golden West Private Client</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/investing">
                            <i
                              className="icon-checking-small"
                              aria-hidden="true"
                            ></i>
                            <span>Invest</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/32-month-balance-transfer">
                            <i
                              className="icon-credit-score-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Free credit score</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/premier-accounts">
                            <i
                              className="icon-savings-bank-medium"
                              aria-hidden="true"
                            ></i>
                            <span>
                              Savings Accounts <br />
                              &amp; CDs
                            </span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/bank-accounts">
                            <i
                              className="icon-checking-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Checking Accounts</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/advance">
                            <i
                              className="icon-credit-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Find a credit card</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/home-insurance">
                            <i
                              className="icon-mortgage2-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Home Lending</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/income-cover">
                            <i
                              className="icon-Auto-loan-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Car Buying &amp; Loans</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/investment-funds">
                            <i
                              className="icon-business-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Golden West for Business</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                        >
                          <a href="/personal-loans">
                            <i className="icon-cpc-medium" aria-hidden="true"></i>
                            <span>Golden West Private Client</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/investing">
                            <i
                              className="icon-checking-small"
                              aria-hidden="true"
                            ></i>
                            <span>Invest</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/32-month-balance-transfer">
                            <i
                              className="icon-credit-score-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Free credit score</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/premier-accounts">
                            <i
                              className="icon-savings-bank-medium"
                              aria-hidden="true"
                            ></i>
                            <span>
                              Savings Accounts <br />
                              &amp; CDs
                            </span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/bank-accounts">
                            <i
                              className="icon-checking-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Checking Accounts</span>
                          </a>
                        </li>
                        <li
                          style={{
                            float: "left",
                            listStyle: "none",
                            position: "relative",
                            width: "1080px",
                            marginRight: "50px",
                          }}
                          className="bx-clone"
                        >
                          <a href="/advance">
                            <i
                              className="icon-credit-medium"
                              aria-hidden="true"
                            ></i>
                            <span>Find a credit card</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="bx-controls bx-has-pager bx-has-controls-direction"
                      bis_skin_checked="1"
                    >
                      <div
                        className="bx-pager bx-default-pager"
                        bis_skin_checked="1"
                      >
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="0"
                            className="bx-pager-link"
                          >
                            1
                          </a>
                        </div>
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="1"
                            className="bx-pager-link"
                          >
                            2
                          </a>
                        </div>
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="2"
                            className="bx-pager-link active"
                          >
                            3
                          </a>
                        </div>
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="3"
                            className="bx-pager-link"
                          >
                            4
                          </a>
                        </div>
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="4"
                            className="bx-pager-link"
                          >
                            5
                          </a>
                        </div>
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="5"
                            className="bx-pager-link"
                          >
                            6
                          </a>
                        </div>
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="6"
                            className="bx-pager-link"
                          >
                            7
                          </a>
                        </div>
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="7"
                            className="bx-pager-link"
                          >
                            8
                          </a>
                        </div>
                        <div className="bx-pager-item" bis_skin_checked="1">
                          <a
                            href="/"
                            data-slide-index="8"
                            className="bx-pager-link"
                          >
                            9
                          </a>
                        </div>
                      </div>
                      <div className="bx-controls-direction" bis_skin_checked="1">
                        <a className="bx-prev" href="/">
                          Prev
                        </a>
                        <a className="bx-next" href="/">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 no-padding" bis_skin_checked="1">
                <div
                  className="single-colorful-feature feature-color-1"
                  bis_skin_checked="1"
                >
                  <h2>
                    <a href="/saving-accounts">
                      Bank Accounts
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </h2>
                  <p>
                    Discover the benefits of a bank account from Golden West.
                  </p>
                </div>
              </div>
              <div className="col-md-3 no-padding" bis_skin_checked="1">
                <div
                  className="single-colorful-feature feature-color-2"
                  bis_skin_checked="1"
                >
                  <h2>
                    <a href="/mortgages">
                      Mortgages
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </h2>
                  <p>Find one that’s right for your needs and circumstances.</p>
                </div>
              </div>
              <div className="col-md-3 no-padding" bis_skin_checked="1">
                <div
                  className="single-colorful-feature feature-color-3"
                  bis_skin_checked="1"
                >
                  <h2>
                    <a href="/travel-insurance">
                      Travel Money
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </h2>
                  <p>Check rates and order online now.</p>
                </div>
              </div>
              <div className="col-md-3 no-padding" bis_skin_checked="1">
                <div
                  className="single-colorful-feature feature-color-4"
                  bis_skin_checked="1"
                >
                  <h2>
                    <a href="/flexible-saver">
                      Savings
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </h2>
                  <p>See how we could help your money work harder.</p>
                </div>
              </div>
              <div className="col-md-3 no-padding" bis_skin_checked="1">
                <div
                  className="single-colorful-feature feature-color-3"
                  bis_skin_checked="1"
                >
                  <h2>
                    <a href="/insurance">
                      Insurance
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </h2>
                  <p>Protect your family and property.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="business-wr" bis_skin_checked="1">
          <div className="container" bis_skin_checked="1">
            <div className="row" bis_skin_checked="1">
              <div className="col-md-4" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-1.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/isas-accounts">
                      Up to $20,000 this tax year
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      Make the most of your 2019/
                      {/* <script>
    function myFunction() {
      var d = new Date();
      var n = d.getFullYear();
      document.getElementById("demo").innerHTML = n;
    }
    </script>  */}
                      ISA allowance with an bank Selection Stocks and Shares
                      ISA.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-2.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/contactandsupport">
                      Book an appointment
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      You can now book an appointment online. Existing customers
                      may prefer to log on to Online Banking to make booking
                      even simpler.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-3.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/sharedealing">
                      Ring-fencing
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      We’re changing the way bank is structured in the EU.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="business-portfolio-1x" id="portfolio" bis_skin_checked="1">
          <div className="container" bis_skin_checked="1">
            <div className="row" style={{ padding: "30px 0" }} bis_skin_checked="1">
              <div className="col-md-3" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-4.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/insurance">
                      Insurance
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>Protect your family and property.</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-5.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/premier">
                      Activate your card
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      There are several ways to easily activate your card.
                      Choose the option that's best for you.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-6.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/quality-conversations">
                      Security centre
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      Handy tips designed to help you stay safe online.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-7.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/ways-we-can-help">
                      Helpful guides
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      A range of guides and articles from understanding APRs to
                      saving tips.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12"
                style={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: "##EF454D",
                }}
                bis_skin_checked="1"
              ></div>
              <div className="col-md-3" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/bl-840.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/life-events">
                      Secure Key
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      Handy demos to help you activate, reset and use your
                      Secure Key
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-9.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/premier-accounts">
                      Voice ID
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      Make your voice your password for telephone banking
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img src="../../assets/blog-8.jpg" alt="slide 1" className="" />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/advance">
                      Card support
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>
                      Activate, lost or stolen, and general card support
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3" bis_skin_checked="1">
                <div className="single-bolg hover01" bis_skin_checked="1">
                  <figure>
                    <img
                      src="../../assets/couple-hiking-840.jpg"
                      alt="slide 1"
                      className=""
                    />
                  </figure>
                  <div className="blog-content" bis_skin_checked="1">
                    <a href="/insurance">
                      PPI
                      <i
                        style={{ marginLeft: "10px" }}
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <span>Payment Protection Insurance claim deadlines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-top-large" bis_skin_checked="1"></div>

        <div className="business-app-present-2x" bis_skin_checked="1">
          <div className="app-present-content-2" bis_skin_checked="1">
            <div className="container" bis_skin_checked="1">
              <div className="row" bis_skin_checked="1">
                <div className="col-md-12" bis_skin_checked="1">
                  <div className="business-title-middle" bis_skin_checked="1">
                    <h2>Your news and information</h2>
                    <span className="title-border-middle"></span>
                  </div>
                </div>

                <div className="col-md-5" bis_skin_checked="1">
                  <div className="app-present-left-2" bis_skin_checked="1">
                    <img
                      src="../../assets/Question-mark.jpg"
                      alt="Mountains"
                      className=""
                    />
                  </div>
                </div>
                <div
                  className="col-md-6"
                  style={{ backgroundColor: "rgba(3, 61, 117, .1)" }}
                  bis_skin_checked="1"
                >
                  <div className="app-present-right-2" bis_skin_checked="1">
                    <div className="single-app-present" bis_skin_checked="1">
                      <div className="media" bis_skin_checked="1">
                        <div className="media-body" bis_skin_checked="1">
                          <h2>Account questions? Just ask me.</h2>
                          <p>
                            I'm just a few taps away — open your Golden West®
                            mobile app and say hello.
                          </p>
                          <a
                            className="bussiness-btn-larg"
                            href="/contactandsupport"
                          >
                            ask questions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-top-large" bis_skin_checked="1"></div>

        <div className="business-cta-1x" bis_skin_checked="1">
          <div className="container" bis_skin_checked="1">
            <div className="row" bis_skin_checked="1">
              <div className="col-md-12" bis_skin_checked="1">
                <div className="cta-content" bis_skin_checked="1">
                  <h2>Open our most popular savings account</h2>
                  <h3>
                    Apply for a new Savings<sup>℠</sup> account in minutes.
                  </h3>
                  <a href="/register" className="bussiness-btn-larg">
                    apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 connectus" bis_skin_checked="1">
          <div className="container" bis_skin_checked="1">
            <div className="inner-connect" bis_skin_checked="1">
              <h5> Connect with us </h5>
              <a href="/index">
                Listening to what you have to say about our services matters to
                us.
              </a>
            </div>
          </div>
        </div>
        <footer className="bussiness-footer-1x">
          <div className="bussiness-footer-content " bis_skin_checked="1">
            <div className="container" bis_skin_checked="1">
              <div className="row" bis_skin_checked="1">
                <div className="col-md-3" bis_skin_checked="1">
                  <h5> Help &amp; support </h5>
                  <a href="/contactandsupport">
                    Got a question? We are here to help you{" "}
                  </a>
                </div>
                <div className="col-md-3" bis_skin_checked="1">
                  <h5> Find a branch </h5>
                  <a href="/ways-we-can-help">
                    Find your nearest Golden West Banking location
                  </a>
                </div>
                <div className="col-md-3" bis_skin_checked="1">
                  <h5> Our performance </h5>
                  <a href="/investing">
                    View our service dashboard to see how we're doing
                  </a>
                </div>

                <div className="col-md-3" bis_skin_checked="1">
                  <h5> About Golden West </h5>
                  <a href="/news">
                    Careers, media, investor and corporate information
                  </a>
                </div>

                <div className="container" bis_skin_checked="1">
                  <div className="" bis_skin_checked="1">
                    <div className="col-md-12 footer-info" bis_skin_checked="1">
                      <div className="row" bis_skin_checked="1">
                        <p className="text-center">
                          Golden West is federally insured by the National
                          Credit Union Administration. We do business in
                          accordance with the Fair Housing Law and Equal
                          opportunity Credit Act.
                        </p>

                        <div className="col-md-3" bis_skin_checked="1">
                          <div className="footer-info-left" bis_skin_checked="1">
                            <img
                              style={{ maxWidth: "125px" }}
                              src="../../assets/footerlogo.jpg"
                              className="d-inline-block align-top"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6 text-center" bis_skin_checked="1">
                          301 East Water Street, Charlottesville, VA 22904
                          Virginia.
                          <br />
                          <strong>Call us : &lt;+1 360 203 4850 &gt;</strong>
                        </div>

                        <div className="col-md-3" bis_skin_checked="1">
                          <div className="footer-info-right" bis_skin_checked="1">
                            <ul>
                              <li>
                                <a href="/##">
                                  {" "}
                                  <i className="fa fa-facebook"></i>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/##">
                                  {" "}
                                  <i className="fa fa-twitter"></i>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/##">
                                  {" "}
                                  <i className="fa fa-google"></i>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/##" target="_blank" rel="noreferrer">
                                  {" "}
                                  <i className="fa fa-linkedin"></i>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="col-md-12 text-center text-muted"
                          bis_skin_checked="1"
                        >
                          © 2023 Golden West- All rights reserved.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="../../assets/jquery.min.js.download"></script>
        <script
          src="../../assets/popper.min"
          integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
          crossOrigin="anonymous"
        ></script>
        <script src="../../assets/bootstrap.min.js.download"></script>
        {/* <script src="../../assets/jquery.min.js(2).download"></script> */}
        <script src="../../assets/wow.min.js.download"></script>
        <script src="../../assets/waypoints.min.js.download"></script>
        <script src="../../assets/jquery.counterup.min.js.download"></script>
        <script src="../../assets/jquery.filterizr.min.js.download"></script>
        <script src="../../assets/filterizer-controls.js.download"></script>
        <script src="../../assets/owl.carousel.min.js.download"></script>
        <script src="../../assets/jquery.fancybox.pack.js.download"></script>
        <script src="../../assets/lightbox.js.download"></script>
        <script src="../../assets/js"></script>
        <script src="../../assets/map.js.download"></script>
        <script src="../../assets/fakeLoader.min.js.download"></script>
        <script src="../../assets/scrolltopcontrol.js.download"></script>
        <script src="../../assets/bootstrap-4-navbar.js.download"></script>
        <script src="../../assets/jquery.sticky.js.download"></script>
        <script src="../../assets/jquery.magnific-popup.min.js.download"></script>
        <script src="../../assets/color-switcher.js.download"></script>
        <script src="../../assets/color-switcher-active.js.download"></script>
        <div className="ColorSwitcher" bis_skin_checked="1">
          <button className="ColorSwitcher__control"></button>
          <div className="ColorSwitcher__switchs" bis_skin_checked="1">
            <button
              className="ColorSwitcher__switch"
              title="Blue to Red"
              data-index="0"
              style={{ backgroundColor: "rgb(3, 61, 117)" }}
            ></button>
            <button
              className="ColorSwitcher__switch"
              title="Cyan to Orange"
              data-index="1"
              style={{ backgroundColor: "rgb(31, 166, 154)" }}
            ></button>
            <button
              className="ColorSwitcher__switch"
              title="Blue to Orange"
              data-index="2"
              style={{ backgroundColor: "rgb(6, 116, 236)" }}
            ></button>
            <button
              className="ColorSwitcher__switch"
              title="Green to Violet"
              data-index="3"
              style={{ backgroundColor: "rgb(46, 158, 4)" }}
            ></button>
            <button
              className="ColorSwitcher__switch"
              title="Sky"
              data-index="4"
              style={{ backgroundColor: "rgb(88, 201, 233)" }}
            ></button>
            <button
              className="ColorSwitcher__switch"
              title="Red"
              data-index="5"
              style={{ backgroundColor: "rgb(255, 106, 109)" }}
            ></button>
          </div>
        </div>
        <script src="../../assets/custom.js.download"></script>
        <script src="../../assets/jquery.bxslider.min.js.download"></script>
        <script src="../../assets/toastr.js.download"></script>
        <script src="../../assets/sweetalert.js.download"></script>
        <script
          type="text/javascript"
          src="../../assets/clientlib-all.min.2f2dbb3959c1dcdb1f3b1f52f1375b62.js.download"
        ></script>
        <script
          type="text/javascript"
          src="../../assets/clientlib.min.b3ec3a2325eaa4cbc74a2e2f0b755b0f.js.download"
        ></script>
      </div>
    </>
  );
};

export default Home;
