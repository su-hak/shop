import React from "react";
import FooterScript from "./FooterScript.js";

function Footer() {
    return (
        <>

            <footer className="footer" data-container="footer" data-context="FOOTER" role="contentinfo">
                <div>
                    <div className="c-backtotop" data-component="backToTop">
                        <div className="c-backtotop__content">
                            <button className="c-backtotop__iconlink" data-action="toTop">
            <span className="c-backtotop__text">
                위로 돌아가기
            </span>
                                <span className="c-icon--longarrow-up"></span>
                            </button>
                        </div>
                    </div>
                    <div className="l-footer__wrapper l-footer__wrapper--light" data-ref="footerWrapper"
                         data-component="footerTracking">
                        <div className="l-footer__section l-footer__section--country" data-ref="countrySection"
                             style={{minHeight: 'auto'}}>
                            <div className="c-storechoice">
                                <div className="c-storechoice" data-url="/ko-kr/locale"
                                     data-component="countryLocaleTrigger">
                                    <p className="c-storechoice__content c-storechoice__content--country">
                                        <span className="c-storechoice__label">배송지</span>
                                        <a href="/ko-kr/countryselection"
                                           className="c-storechoice__link c-storechoice__countrylink" role="button"
                                           data-action="openCountryChoice">
                                            <span className="u-sronly">배송 지역 / 국가 변경</span>
                                            <span className="u-hidden@md">&nbsp;대한민국</span>
                                            <span className="u-hidden-from@md">&nbsp;대한민국</span>
                                            <span className="u-hidden@md">(수정)</span>
                                            <span className="c-icon c-icon--arrow-right" aria-hidden="true"></span>
                                        </a>
                                    </p>
                                    <p className="c-storechoice__content c-storechoice__content--language">
                                        <span className="c-storechoice__label">언어</span>
                                        <a href="/ko-kr/languagesselection" role="button"
                                           className="c-storechoice__link c-storechoice__langlink"
                                           data-action="openLangChoice">
                                            <span className="u-sronly">언어 변경</span>
                                            <span className="u-hidden@md">한국어</span>
                                            <span className="u-hidden-from@md">ko</span>
                                            <span className="u-hidden@md">(수정)</span>
                                            <span className="c-icon c-icon--arrow-right" aria-hidden="true"></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="l-footer__section l-footer__section--clientservice" data-ref="clientService">
                            <ul>
                                <li><a href="https://www.ysl.com/ko-kr/displayname-faq" title="Client service">고객서비스</a>
                                </li>
                                <li><a
                                    href="https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/Order-GuestForm?orderType=order"
                                    title="Track order">주문 추적</a></li>
                                <li className="u-hidden@lg"><a
                                    href="https://www.ysl.com/ko-kr/displayname-faq?faqCategory=FAQShipping"
                                    title="Shipping">배송</a></li>
                                <li className="u-hidden@lg"><a
                                    href="https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/Order-GuestForm?orderType=return"
                                    title="Returns">반품</a></li>
                                <li className="u-hidden@lg"><a href="https://www.ysl.com/ko-kr/contactus">+82 261052228
                                    이메일 라이브 채팅</a></li>
                                <li data-component="bookAnAppointmentCTA">
                                    <a href="https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/StoreAvailability-BookAnAppointmentList"
                                       data-action="showBookAnAppointment" className="c-footerlinks" title="방문 예약하기"
                                       role="button">
                                        방문 예약하기
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="l-footer__section l-footer__section--careers" data-ref="clientCarreers">
                            <div className="content-asset">
                                <ul>
                                    <li><a href="https://kering.wd3.myworkdayjobs.com/ko-KR/SaintLaurent">커리어</a></li>
                                    <li><a
                                        href="https://www.ysl.com/ko-kr/legal-notices/name/terms-and-conditions-use.html">법적고지</a>
                                    </li>
                                    <li><a
                                        href="https://www.ysl.com/ko-kr/legal-notices/name/web-accessibility-content-page.html"
                                        rel="noopener noreferrer" target="_blank"
                                        title="Accessibility">Accessibility</a></li>
                                    <li><a className="c-footerlinks__item"></a><a href="#"
                                                                                  className="ot-sdk-show-settings">쿠키
                                        설정</a></li>
                                </ul>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                        <div className="l-footer__section l-footer__section--networks">
                            <h2 className="l-footer__title">소셜미디어</h2>
                            <div className="l-footer__networks" data-component="social">
                                <div className="content-asset">
                                    <a href="https://pf.kakao.com/_rAMaxb" target="_blank"
                                       className="c-networks__link c-networks__link--kakaotalk">
                                        <span className="c-networks__link--label">Kakaotalk</span>
                                    </a>
                                    <a href="https://www.facebook.com/ysl" target="_blank" className="c-networks__link">
                                        <img className="u-hidden-from@lg" alt="Facebook"
                                             src="https://www.ysl.com/on/demandware.static/-/Library-Sites-Library-SLP/default/dwa7b1d330/images/footer/networks/facebook.svg"
                                             title="Facebook"/>
                                        <span className="c-networks__link--label u-hidden@md">Facebook</span>
                                    </a>
                                    <a href="https://www.twitter.com/ysl" target="_blank" className="c-networks__link">
                                        <img className="u-hidden-from@lg" alt="Twitter"
                                             src="https://www.ysl.com/on/demandware.static/-/Library-Sites-Library-SLP/default/dw2008d7fc/images/footer/networks/twitter-x.svg"
                                             title="Twitter"/>
                                        <span className="c-networks__link--label u-hidden@md">X</span>
                                    </a>
                                    <a href="https://www.instagram.com/ysl/" target="_blank"
                                       className="c-networks__link">
                                        <img className="u-hidden-from@lg" alt="Instagram"
                                             src="https://www.ysl.com/on/demandware.static/-/Library-Sites-Library-SLP/default/dwd08e3ca9/images/footer/networks/instagram.svg"
                                             title="Instagram"/>
                                        <span className="c-networks__link--label u-hidden@md">Instagram</span>
                                    </a>
                                    <a href="https://www.youtube.com/ysl" target="_blank" className="c-networks__link">
                                        <img className="u-hidden-from@lg" alt="Youtube"
                                             src="https://www.ysl.com/on/demandware.static/-/Library-Sites-Library-SLP/default/dw025b5a82/images/footer/networks/youtube.svg"
                                             title="Youtube"/>
                                        <span className="c-networks__link--label u-hidden@md">Youtube</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="l-footer__section l-footer__section--newsletter">
                            <div className="l-footer__newsletterlink" data-component="newsletterSubscriptionPopin">
                                <button data-action="showEmailSubscription" role="button"
                                        className="c-newsletter__subscribelink">
                                    뉴스레터
                                    <span className="c-icon c-icon--arrow-right"></span>
                                </button>
                                <div className="c-popin c-popin--newslettersubscribe" role="dialog"
                                     data-popin="newsletterSubscriptionPopin" aria-labelledby="newsletter_label"
                                     tabIndex="-1" aria-hidden="true">
                                    <div role="document">
                                        <div className="c-popin__head">
                                            <h2 className="c-popin__title" id="newsletter_label">
                                                뉴스레터
                                            </h2>
                                            <button type="button" data-ref="closePopinTrigger" data-element="closebtn">
                <span className="u-visually-hidden">
                    팝인 버튼 닫기
                </span>
                                            </button>
                                        </div>
                                        <div className="c-popin__content" data-component="newsLetterSubscribe">
                                            <div data-container="newsletterSubscribeContainer">
                                                <div className="c-newsletter" data-component="newsletterSubscription">
                                                    <form
                                                        action="/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/NewsLetter-Submit"
                                                        className="c-newsletter__form" method="POST" id="newsletterForm"
                                                        name="newsletterForm" data-action="submitNewsletterForm"
                                                        data-tokenurl="https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/NewsLetter-GetToken"
                                                        noValidate="true">

                                                        <div className="c-form__errorblock" data-ref="formErrorBlock">
                                                            <div data-bind="formErrorBlock"></div>
                                                        </div>


                                                        <div>
                                                            <div className="c-newsletter__form-inputs"
                                                                 data-ref="newsletterFormInputs">
                                                                <div className="c-newsletter__notice">
                                                                    <p>
                                                                        생 로랑 뉴스레터를 구독하고 새로운 컬렉션, 패션쇼, 이벤트와 관련된 독점 정보를
                                                                        받아볼 수 있습니다.
                                                                    </p>
                                                                </div>
                                                                <div className="c-newsletter__required">
                                                                    <p>
                                                                        <span className="c-form__star">*</span> 필수 필드
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="c-newsletter__row c-newsletter__row--option">
                                                                    <div
                                                                        className="c-form__group c-newsletter__formgroup"
                                                                        data-formgroup="newsletteroptin"
                                                                        data-error-value=" newsletter.error.optin">
                                                                        <div className="c-newsletter__option">
                                                                            <div className="c-newsletter__checkbox">
                                                                                <fieldset
                                                                                    className="c-form__row c-form__row--radioinline required"
                                                                                    data-formid="civility"
                                                                                    data-error-missing="호칭을 선택해 주세요(예: &quot;Mr&quot;, &quot;Mrs&quot;).">

                                                                                    <legend
                                                                                        className="c-form__radiolabel"
                                                                                        htmlFor="dwfrm_newsletter_civility_d0xaidgiopvu">
        <span>
            호칭
        </span>
                                                                                        <span
                                                                                            className="c-form__labelrequired ">
            *
        </span>
                                                                                    </legend>
                                                                                    <div className="c-form__flexwrap">

                                                                                        <div
                                                                                            className="c-form__customfield">
                                                                                            <input type="radio"
                                                                                                   id="dwfrm_newsletter_civility_newsletter1"
                                                                                                   className="c-form__radio"
                                                                                                   name="dwfrm_newsletter_civility"
                                                                                                   required=""
                                                                                                   undefined=""
                                                                                                   data-qa="field_civility_newsletter1"
                                                                                                   value="newsletter1"/>
                                                                                                <label
                                                                                                    className="c-form__label"
                                                                                                    htmlFor="dwfrm_newsletter_civility_newsletter1">
                                                                                                    Miss, Mrs, Ms
                                                                                                </label>
                                                                                        </div>

                                                                                        <div
                                                                                            className="c-form__customfield">
                                                                                            <input type="radio"
                                                                                                   id="dwfrm_newsletter_civility_newsletter0"
                                                                                                   className="c-form__radio"
                                                                                                   name="dwfrm_newsletter_civility"
                                                                                                   required=""
                                                                                                   undefined=""
                                                                                                   data-qa="field_civility_newsletter0"
                                                                                                   value="newsletter0"/>
                                                                                                <label
                                                                                                    className="c-form__label"
                                                                                                    htmlFor="dwfrm_newsletter_civility_newsletter0">
                                                                                                    Mr.
                                                                                                </label>
                                                                                        </div>

                                                                                        <div
                                                                                            className="c-form__customfield">
                                                                                            <input type="radio"
                                                                                                   id="dwfrm_newsletter_civility_newsletter2"
                                                                                                   className="c-form__radio"
                                                                                                   name="dwfrm_newsletter_civility"
                                                                                                   required=""
                                                                                                   undefined=""
                                                                                                   data-qa="field_civility_newsletter2"
                                                                                                   value="newsletter2"/>
                                                                                                <label
                                                                                                    className="c-form__label"
                                                                                                    htmlFor="dwfrm_newsletter_civility_newsletter2">
                                                                                                    Mx
                                                                                                </label>
                                                                                        </div>

                                                                                        <div
                                                                                            className="c-form__customfield">
                                                                                            <input type="radio"
                                                                                                   id="dwfrm_newsletter_civility_newsletter3"
                                                                                                   className="c-form__radio"
                                                                                                   name="dwfrm_newsletter_civility"
                                                                                                   required=""
                                                                                                   undefined=""
                                                                                                   data-qa="field_civility_newsletter3"
                                                                                                   value="newsletter3"/>
                                                                                                <label
                                                                                                    className="c-form__label"
                                                                                                    htmlFor="dwfrm_newsletter_civility_newsletter3">
                                                                                                    선택하지&nbsp;않음
                                                                                                </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="c-form__error"
                                                                                         aria-live="polite">
                                                                                    </div>
                                                                                </fieldset>
                                                                            </div>
                                                                        </div>
                                                                        <div class="c-form__grouperror"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="c-newsletter__row c-newsletter__row--input">
                                                                    <div class="c-newsletter__field">
                                                                        <div class="c-form__row  required">
                                                                            <label class="c-form__label"
                                                                                   for="dwfrm_newsletter_email_d0grddgishuq">
                                                                                이메일
                                                                                <span class="c-form__labelrequired ">*</span>
                                                                            </label>
                                                                            <input type="email" class="c-form__input"
                                                                                   placeholder=""
                                                                                   id="dwfrm_newsletter_email_d0grddgishuq"
                                                                                   name="dwfrm_newsletter_email"
                                                                                   required="" value="" maxlength="80"
                                                                                   pattern="^([a-zA-Z0-9_\.\-\+]+)@([\da-zA-Z\.\-]+)\.([a-zA-Z\.]{2,12})$"
                                                                                   data-formid="email"
                                                                                   data-error-parse="유효하지 않은 이메일 형식입니다. 다시 시도해 주세요(예: &quot;john.smith@email.com&quot;)."
                                                                                   data-error-missing="이메일 주소를 추가해 주세요"
                                                                                   autocomplete="email"/>
                                                                                <div class="c-form__error" aria-live="polite">
                                                                                </div>
                                                                        </div>

                                                                    </div>


                                                                    <div
                                                                        class="c-newsletter__row c-newsletter__row--privacypolicy">
                                                                        <div class="c-newsletter__informations">


                                                                            <div class="content-asset">

                                                                                당사는 최신 컬렉션, 시책, 이벤트, 제품 및 서비스에 대한 맞춤형 정보
                                                                                및 업데이트 사항을 전달하기 위한 목적으로, 귀하가 당사에 자발적으로
                                                                                공유하는 것이 가능한 귀하의 이메일 주소 및 기타 정보를 5년의 기간동안
                                                                                수집하고 사용할 수 있습니다.

                                                                                귀하는 이러한 정보의 수집 및 사용에 대해 동의하지 않을 권리가
                                                                                있습니다. 그러나, 동의를 거부할 경우, 당사는 저희의 사업 활동에 대한
                                                                                정보를 제공받지 못할 수도 있습니다. 당사는 이메일, SMS, MMS,
                                                                                우편, 인터넷 또는 소셜 미디어 이메일을 통해 귀하에게 맞춤형 정보 및
                                                                                업데이트 사항을 전달할 수 있습니다. <u><a
                                                                                class="c-newsletter__informationslink"
                                                                                href="https://www.ysl.com/ko-kr/legal-notices/name/privacy-policy.html"
                                                                                target="_blank">개인 정보 보호 정책</a></u>
                                                                            </div>


                                                                        </div>


                                                                    </div>


                                                                    <div class="c-newsletter__cta">
                                                                        <button type="submit" name="save"
                                                                                class="c-button c-button--primary c-newsletter__btn"
                                                                                data-ref="newsletterSubmitBtn">
                                                                            발송
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <input type="hidden" data-ref="csrfToken" name=""
                                                                       value=""/>
                                                            </div>
                                                        </div>

                                                        <div
                                                            class="c-newsletter__thankyou c-newsletter__thankyou--hidden"
                                                            data-ref="thankYouMessage" tabindex="-1">
                                                            <h2 class="c-newsletter__title c-newsletter__title--valid"
                                                                data-ref="successTitle">
                                                                뉴스레터 신청 확인
                                                            </h2>
                                                            <p class="c-newsletter__confirm-message"
                                                               data-bind="newsletterConfirmMessage"
                                                               data-ref="newsletterConfirmMessageContainer"></p>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>


                                <div class="l-footer__section l-footer__section--appredirection">
                                    <div class="l-footer__appredirection">


                                        <div class="content-asset">

                                            <h2 class="l-footer__title">어플리케이션 다운로드</h2>
                                            <span>
<a class="c-redirection__item" href="https://apps.apple.com/app/saint-laurent/id1623343549">
  <img alt=""
       src="https://www.ysl.com/on/demandware.static/-/Library-Sites-Library-SLP/default/dwab76ec51/images/apple.svg"
       title="Apple Store"/>
</a>
<a class="c-redirection__item" href="https://play.google.com/store/apps/details?id=com.kering.slp.saintlaurent">
  <img alt=""
       src="https://www.ysl.com/on/demandware.static/-/Library-Sites-Library-SLP/default/dw6570f5ef/images/googlestore.svg"
       title="Google Store"/>
</a>
</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>

                            <div>


                                <div class="c-apacmessage">
                                    고객 서비스에 문의하는 것으로 고객님은 개인정보가 국외로 전송되는 것에 동의합니다.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="c-footerspecific">


                        <div className="content-asset">

                            <div className="c-footerspecific__block">
                                <p>YVES SAINT LAURENT KOREA LLC | BUSINESS REGISTRATION NO. 211-88-87468</p>

                                <p>ADDRESS OF THE COMPANY : 13F, 517, YEONGDONG-DAERO, GANGNAM-GU, SEOUL, REPUBLIC OF
                                    KOREA | <a
                                        href="https://www.ysl.com/en-kr/legal-notices/name/terms-and-conditions-use.html">LEGAL
                                        NOTICE</a></p>

                                <p>NAME OF REPRESENTATIVE AS RECORDED IN THE BUSINESS REGISTRATION CERTIFICATE :
                                    HIROFUMI
                                    TAMBO</p>

                                <p>TELECOMMUNICATION REGISTRATION NUMBER : <a
                                    href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118887468">2022-서울강남-06159</a>
                                </p>

                                <p>ORGANIZATION WHO ISSUED TELECOMMUNICAITON REGISTRATION NUMBER: SEOUL GANGNAM GU
                                    OFFICE</p>

                                <p><a
                                    href="https://www.ysl.com/on/demandware.static/-/Library-Sites-Library-SLP/ko_KR/v1718152085794/footer/InsurranceForBankTransfer.pdf"
                                    target="_blank" className="c-footerspecific__link">Certificate of insurance
                                    subscription</a>
                                </p>

                                <p>HOSTING SERVICE : SALESFORCE</p>

                                <p>CUSTOMER CENTER : <a href="tel:+82261052228">+ 82 2-6105-2228</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
)
}

export default Footer;