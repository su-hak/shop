import React, { useEffect } from 'react';

const FooterScript = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window) {
            // window.exposedData가 undefined이거나 null인 경우 초기화
            if (!window.exposedData) {
                window.exposedData = {};
            }

            // window.exposedData.customerData가 undefined이거나 null인 경우 초기화
            if (!window.exposedData.customerData) {
                window.exposedData.customerData = {};
            }
            Object.assign(window.exposedData, {
                "errorCaptcha": "죄송합니다. 오류가 발생했으니 나중에 다시 시도해 주세요.",
                "siteID": "SLP-APAC",
                "brandID": "YSL",
                "sitePreferences": {
                    "enableMinicartMobile": false,
                    "disableMinicartAddToCart": false,
                    "blacklistedEmailAddressDomains": [
                        ".con", ".comn", ".cpm", ".cmo", "@gmal", "@gmai.", "@gmaill", "@gamil", "@hotnail", "@hotmaol",
                        "@hotmai.", "@yahooo", "@yhoo", "@ickoud", ".come", "@yhaoo", "@hitmail", ".om", "@hotmil",
                        "@hoymail", "@hotmal", "@hitmail", "@hormail", "@hotmal", "@gmil", "@yaho.com", "@email.tst",
                        "@hmail.com", "@gmail.vom", "@gmaim.com", "@gamil.com", "@gmail.cm", "@hotamail.com",
                        "@htomail.com", "@gmail.con", "@gmmail.com", "@yaboo.com", "@yahooo.com"
                    ],
                    "newsletterSound": "",
                    "notFoundSound": "",
                    "enableBookAnAppointment": true,
                    "hoursPreparationBookAnAppointment": "24",
                    "openingDelayBookAnAppointment": "0",
                    "timeStepsBookAnAppointment": "{\"default\": 60}",
                    "bookAnAppointmentClosingDelay": 0,
                    "reCaptchaEnabled": true,
                    "reCaptchaPublicKey": "6Leixb0UAAAAAP46wTfqwZBWO5ipm_IVQtoQTz7A",
                    "isSeoTitleActiveForCurrentLanguage": false,
                    "klarnaJSAPIPath": "https://credit.klarnacdn.net/lib/v1/api.js",
                    "autoScrollCarrouselForCurrentCountry": false,
                    "sessionTimeoutMinutes": 381600,
                    "openMinicartOnHover": false,
                    "isWishlistEnabled": false,
                    "tossClientKey": "live_gck_mBZ1gQ4YVX9kgZew99J2rl2KPoqN",
                    "eWalletTossVariantKey": "YS-Ewallet",
                    "bankTransferTossVariantKey": "YS-Transfer",
                    "algoliaIndexRegion": "kor",
                    "headlessDomain": null
                },
                "constants": {},
                "regExps": {},
                "resources": {},
                "headlessUrlDomain": null,
                "wishlist": "https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/Wishlist-GetListJson",
                "miniCartScriptUrl": "https://www.ysl.com/on/demandware.static/Sites-SLP-APAC-Site/-/ko_KR/v1718152085794/js/minicart.js",
                "bookAnAppointmentScriptUrl": "https://www.ysl.com/on/demandware.static/Sites-SLP-APAC-Site/-/ko_KR/v1718152085794/js/bookAnAppointment.js",
                "appointmentFormURL": "https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/StoreAvailability-GetBookAnAppointmentForm",
                "gmapUrl": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvC1lKFKfLjLAtIlX4XKOI3ElbfGSQBQA&libraries=geometry&language=ko-KR",
                "defaultIcon": "https://www.ysl.com/on/demandware.static/Sites-SLP-APAC-Site/-/default/dwa5131ea2/images/pin.png",
                "activeIcon": "https://www.ysl.com/on/demandware.static/Sites-SLP-APAC-Site/-/default/dwf59da1c4/images/pin_active.png",
                "mapStyles": "[{\"featureType\": \"water\", \"elementType\": \"geometry\", \"stylers\": [{\"color\": \"#e9e9e9\"},{\"lightness\": 17}]},{\"featureType\": \"landscape\", \"stylers\": [{\"color\": \"#F5F5F5\"},{\"lightness\": 20}]},{\"featureType\": \"road.highway\", \"elementType\": \"geometry.fill\", \"stylers\": [{\"color\": \"#ffffff\"},{\"lightness\": 17}]},{\"featureType\": \"road.highway\", \"elementType\": \"geometry.stroke\", \"stylers\": [{\"color\": \"#ffffff\"},{\"lightness\": 29},{\"weight\": 0.2}]},{\"featureType\": \"road.arterial\", \"elementType\": \"geometry\", \"stylers\": [{\"color\": \"#ffffff\"},{\"lightness\": 18}]},{\"featureType\": \"road.local\", \"elementType\": \"geometry\", \"stylers\": [{\"color\": \"#ffffff\"},{\"lightness\": 16}]},{\"featureType\": \"poi\", \"elementType\": \"geometry\", \"stylers\": [{\"color\": \"#f5f5f5\"},{\"lightness\": 21}]},{\"featureType\": \"poi.park\", \"elementType\": \"geometry\", \"stylers\": [{\"color\": \"#dedede\"},{\"lightness\": 21}]},{\"elementType\": \"labels.text.stroke\", \"stylers\": [{\"visibility\": \"on\"},{\"color\": \"#ffffff\"},{\"lightness\": 21}]},{\"elementType\": \"labels.text.fill\", \"stylers\": [{\"saturation\": 36},{\"color\": \"#333333\"},{\"lightness\": 40}]},{\"elementType\": \"labels.icon\", \"stylers\": [{\"visibility\": \"off\"}]},{\"featureType\": \"transit\", \"elementType\": \"geometry\", \"stylers\": [{\"color\": \"#f2f2f2\"},{\"lightness\": 19}]},{\"featureType\": \"administrative\", \"elementType\": \"geometry.fill\", \"stylers\": [{\"color\": \"#fefefe\"},{\"lightness\": 20}]},{\"featureType\": \"administrative\", \"elementType\": \"geometry.stroke\", \"stylers\": [{\"color\": \"#fefefe\"},{\"lightness\": 17},{\"weight\": 1.2}]}]",
                "locale": "ko_KR",
                "countryCode": "KR",
                "language": "ko",
                "isGuestCheckoutEnabled": true,
                "segmentation": "",
                "currentCountryName": "대한민국",
                "setSocialLoginTypeURL": "https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/Login-SetSocialLoginType",
                "merchantValidationUrl": "https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/ApplePay-MerchantValidation",
                "authUrl": "https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/ApplePay-Authorise",
                "placeApplePayOrder": "https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/COPlaceOrder-Submit",
                "appleVersion": 3,
                "zipCodeFormats": {
                    "PT": {"delimiter": "-", "blocks": [4, 3]},
                    "PL": {"delimiter": "-", "blocks": [2, 3]},
                    "JP": {"delimiter": "-", "blocks": [3, 4]},
                    "CA": {"delimiter": " ", "blocks": [3, 3]},
                    "IE": {"delimiter": " ", "blocks": [3, 4]},
                    "NL": {"delimiter": " ", "blocks": [4, 2]},
                    "SE": {"delimiter": " ", "blocks": [3, 2]},
                    "CZ": {"delimiter": " ", "blocks": [3, 2]},
                    "SK": {"delimiter": " ", "blocks": [3, 2]},
                    "MT": {"delimiter": " ", "blocks": [3, 4]},
                    "GR": {"delimiter": " ", "blocks": [3, 2]}
                },
                "shippingUrl": "https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/ApplePay-AppleShippingMethodSelection",
                "placeOrderUrl": "https://www.ysl.com/on/demandware.store/Sites-SLP-APAC-Site/ko_KR/COPlaceOrder-ApplePaySubmit",
                "blockedProfileOrderRate": 4
            });
        }
    }, []);

    return null;
};

export default FooterScript;
