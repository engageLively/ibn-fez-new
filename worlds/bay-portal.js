    // Copyright 2022 by Croquet Corporation, Inc. AlFfp0l Rights Reserved.
    // https://croquet.io
    // info@croquet.io
    
    export function init(Constants) {
        Constants.AvatarNames = ["newwhite",  "marchhare", "queenofhearts", "cheshirecat", "alice"];
    
        /* Alternatively, you can specify a card spec for an avatar,
           instead of a string for the partical file name, to create your own avatar.
           You can add behaviorModules here. Also, if the system detects a behavior module
           named AvatarEventHandler, that is automatically installed to the avatar.
            {
                type: "3d",
                modelType: "glb",
                name: "rabbit",
                dataLocation: "./assets/avatars/newwhite.zip",
                dataRotation: [0, Math.PI, 0],
                dataScale: [0.3, 0.3, 0.3],
            }
        */
    
        Constants.ExcludedSystemBehaviorModules = ["avatarEvents.js"];
        Constants.UserBehaviorDirectory = "behaviors/default";
        Constants.UserBehaviorModules = [
            "avatarEvents.js", "canvasPawn.js", "csmLights.js", 'jumpWorld.js', 'synchronousLoad.js', 'urlLink.js'
        ];
    
        Constants.DefaultCards = [
            {
                card: {
                    name:"world model",
                    layers: ["walk"],
                    type: "3d",
                    singleSided: true,
                    shadow: true,
                    translation:[0, -1.7, 0],
                    placeholder: true,
                    placeholderSize: [400, 0.1, 400],
                    placeholderColor: 0x808080,
                    placeholderOffset: [0, 0, 0],
                    timeout: 30000,
                    // behaviorModules: ['PlaceholderPawn']
                    // behaviorModules: ['LoadCards']
                    behaviorModules: ['SynchronousCardLoader']
                }
            },
            {
                card: {
                    name: "light",
                    layers: ["light"],
                    type: "lighting",
                    behaviorModules: ["Light"],
                    dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                    fileName: "/abandoned_parking_4k.jpg",
                    dataType: "jpg",
                }
            },
            /* {
                card: {
                    name: "canvas",
                    translation: [0.568, -0.318, -0.957],
                    rotation: [0, 0, 0],
                    scale: [3, 3, 3],
                    type: "2d",
                    textureType: "canvas",
                    textureWidth: 1024,
                    textureHeight: 768,
                    width: 1,
                    height: 0.75,
                    // color: 0xffffff,
                    depth: 0.05,
                    cornerRadius: 0.1,
                    behaviorModules: ["CanvasPawn"],
                }
            }, */
           
            
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "Christmas-Poster.png",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "Christmas-Poster.png",
                    "rotation": [
                        0,
                        0.7237099543549771,
                        0,
                        0.6901042689097902
                    ],
                    "scale": [
                        4.020703324814061,
                        4.020703324814061,
                        4.020703324814061
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3C7pLwmb9qZ1NFKCbS9kisDowpe_bBG-_9Dh5qgOWzfYKzc3MzB5bGwlKi8mMG02MG0gMSwyNiY3bSosbDZsLSoMMQgFdXZxKw0EFi0QcTMtNwh1BxIRcQoycWwgLC5tNi83KjAqLm0vKi0nIm0hJjEtIjEnbS4qIDEsNSYxMCZsEnQkJRs3LBszO3AhNwdzIgp7d3p2EAEndSQSDxAAFnEZKCUsdhtwCjoce2wnIjcibAZzCDIpFC0tKgg5GhEIDRQqcBIWBjkhMBsXCQsaegcWLXo5DAglMS5ydw4",
                    "textureType": "image",
                    "translation": [
                        -0.9824268760068162,
                        -0.2990113590235549,
                        -11.980274028730268
                    ],
                    "type": "2d"
                }
            },

            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "Summer-Poster.png",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "Summer-Poster.png",
                    "rotation": [
                        0,
                        0,
                        0,
                        0
                    ],
                    "scale": [
                        4.899302937007668,
                        4.899302937007668,
                        4.899302937007668
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "34uXMvNRPx9GuFj7bp5s9eiMLJHT-z3WChRt7Ii2_BXoXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbWl17Rn9yAgEGXHpzYVpnBkRaQH8CcGVmBn1FBhtXW1kaQVhAXUddWRpYXVpQVRpWUUZaVUZQGlldV0ZbQlFGR1EbZQNTUmxAW2xETAdWQHAEVX0MAA0BZ3ZQAlNleGd3YQZuX1JbAWwHfU1rDBtQVUBVG3pWeE5_WUd9Akx3BmZTU01SQXtWUHx5XVlkYlVnRXJ_e3Z5AV18cm1MXWE",
                    "textureType": "image",
                    "translation": [
                        -2.4777855657131433,
                        0.923600081551349,
                        -9.058288163543128
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "behaviorModules": [],
                    "cornerRadius": 0.02,
                    "fileName": "Easter-Shop.png",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "Easter-Shop.png",
                    "rotation": [
                        0,
                        -0.704586136866266,
                        0,
                        0.7096184719522679
                    ],
                    "scale": [
                        5.151613918539466,
                        5.151613918539466,
                        5.151613918539466
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3PdMexo-NDIIXeyQWJmeWw4CfGshwkbDtFeAnUKSaKx8OCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_PjkfIhsWZmViOB4XBT4DYiA-JBtmFAECYhkhYn8zPz1-JTwkOSM5PX48OT40MX4yNSI-MSI0fj05MyI_JjUiIzV_AWc3NggkPwggKGMyJBRgMRloZGllAxI0ZjcBHAMTBWIKOzY_ZQhjGSkPaH80MSQxfxplGDlnGmABMwISAWIAYCgYITkzCjsZNTUCaR0fYSooZyNhNGEXGQAJFSc",
                    "textureType": "image",
                    "translation": [
                        4.328580661947529,
                        -0.5974997141291118,
                        -11.93433912152826
                    ],
                    "type": "2d"
                }
            },
            {
                card:{
                    jumpCheckInterval: 50,
                    jumpDistance: 1,
                    translationAfterJump: [-49, -0.01, 123.46],
                    targetURL: "https://engagelively.github.io/halloween-farm/?",
                    cornerRadius: 0.02,
                    fileName: "HALLOWEEN.png",
                    fullBright: true,
                    layers: ["pointer"],
                    behaviorModules: [ "JumpWorld" ],
                    reuseTab: true,
                    // replaceWorldTargetURL: "https://lin564.github.io/playground/?q=iumpzdabw0#pw=HuTXLIZY72VpemmSharYQg",
                    modelType: "img",
                    name: "HALLOWEEN.png",
                    "rotation": [
                        0.0006869564851698009,
                        -0.012977217723439094,
                        -0.002929736170799331,
                        0.9999112643414494
                    ],
                    "scale": [
                        6.343163384224089,
                        6.343163384224089,
                        6.343163384224089
                    ],
                    shadow: true,
                    singleSided: true,
                    // textureLocation: "3YRRea1Kjzl1bhpnaZg5VRtrrXd2rs0LWS7HIKP4qO9EMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2NzAWKxIfb2xrMRceDDcKayk3LRJvHQgLaxAoa3Y6NjR3LDUtMCowNHc1MDc9OHc7PCs3OCs9dzQwOis2LzwrKjx2CG4-PwEtNgEpIWo7LR1pOBBhbWBsChs9bz4IFQoaDGsDMj82bAFqECAGYXY9OC04dh50EQ8-DwAObAYJLBA7Gho4NjUzbBwQGBcbGioPbTMOdBhtCj49ND41FG0",
                    textureLocation: "./assets/images/Halloween_Poster_with_arch.png",
                    textureType: "image",
                    "translation": [
                        1.4328390765797603,
                        1.315532783985745,
                        -24.989503537329156
                    ],
                    type: "2d"
                }
            },
            {
                "card": {
                    "dataLocation": "3osaNvZ4wYTwHpRDt10uB6XnJUad8ozLG3ktK1TgVEX8BxsbHxxVQEAJBgMKHEEaHEEMHQAeGgobQQYAQBpAAQYgHSQpWVpdByEoOgE8XR8BGyRZKz49XSYeXUAMAAJBGgMbBhwGAkEDBgELDkENCh0BDh0LQQIGDB0AGQodHApABFonDT1bFjUgAiApXhkoIjoVGzcIJV4-PzxbHwIKNQg6Vw5bLV4pXRgmIkALDhsOQCI4NRkKJR8GPiAnJwk3Hi0aPgk3K10JWCEaPg02NwkHBTwXCDkpIjkgDRw",
                    "dataScale": [
                        0.06388637900599145,
                        0.06388637900599145,
                        0.06388637900599145
                    ],
                    "fileName": "/Untitled.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/Untitled.glb",
                    "rotation": [
                        -0.008108574420876218,
                        -0.0028630859027421567,
                        -0.003781287086955304,
                        -0.9999558768405431
                    ],
                    "scale": [
                        10.131048105501707,
                        10.131048105501707,
                        10.131048105501707
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        1.625331674486722,
                        -1.5401324421970113,
                        -16.170105583440584
                    ],
                    "type": "3d"
                }
            },
            /* {
                "card": {
                    "dataLocation": "3-3VogCBX12eOQUsKcOprw2ApA8ZIWWdZwk3aJED4pg4Q19fW1gRBARNQkdOWAVeWAVIWURaXk5fBUJEBF4ERUJkWWBtHR4ZQ2VsfkV4GVtFX2Adb3p5GWJaGQRIREYFXkdfQlhCRgVHQkVPSgVJTllFSllPBUZCSFlEXU5ZWE4EehxMTXNfRHNbUxhJX28bSmITHxIeeGlPHUx6Z3hofhlxQE1EHnMYYlJ0EwRPSl9KBB8ZH0B0T0ZZH15HGFFvE3R5WHQGbnppWm9GE09CBmRKbGlidFJYZR9GQWY",
                    "dataScale": [
                        1.012301534197556,
                        1.012301534197556,
                        1.012301534197556
                    ],
                    "fileName": "/store_shelves.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/store_shelves.glb",
                    "rotation": [
                        -0.002699200135557262,
                        0.17810073441367574,
                        0.0003283459215084048,
                        0.9840085034738741
                    ],
                    "scale": [
                        1.5828360211495835,
                        1.5828360211495835,
                        1.5828360211495835
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        5.238433738949451,
                        -1.2232305372097274,
                        -24.398759096356393
                    ],
                    "type": "3d"
                }
            }, */
           
            {
                "card": {
                    "dataLocation": "3LKtXuLmD1-xrJZ-DIzSs0UO8U8nvWCUsZcne4C24RdIJDg4PD92Y2MqJSApP2I5P2IvPiM9OSk4YiUjYzljIiUDPgcKenl-JAILGSIffjwiOAd6CB0efgU9fmMvIyFiOSA4JT8lIWIgJSIoLWIuKT4iLT4oYiElLz4jOik-PyljHXsrKhQ4IxQ8NH8uOAh8LQV0eHV5Hw4oeisdAB8PGX4WJyojeRR_BTUTdGMoLTgtY3Q_JAkvIS0VfQIdJz91Lz0DJ3oYHwUaFiMrfyk4fyUaKzs5HCYkOTQCOHg",
                    "dataScale": [
                        0.5931322557908479,
                        0.5931322557908479,
                        0.5931322557908479
                    ],
                    "fileName": "/beach_scene.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_scene.glb",
                    "rotation": [
                        0,
                        0.8344098041320194,
                        0,
                        0.5511445171353566
                    ],
                    "scale": [
                        1.2483295843262197,
                        1.2483295843262197,
                        1.2483295843262197
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -4.415557468829602,
                        -1.2273771488701564,
                        -6.326939772837574
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3nRQCOrqAF66wOnysEYGT1p24K-Xi8BxWl39GvC3PzkgBhoaHh1UQUEIBwILHUAbHUANHAEfGwsaQAcBQRtBAAchHCUoWFtcBiApOwA9XB4AGiVYKj88XCcfXEENAQNAGwIaBx0HA0ACBwAKD0AMCxwADxwKQAMHDRwBGAscHQtBP1kJCDYaATYeFl0MGipeDydWWldbPSwKWAk_Ij0tO1w0BQgBWzZdJxcxVkEKDxoPQVwcPAkHQx5WJBtaI0MHXSEHK18sOgQoLCQhFikFHgVfPQIhGhwCWy8-Bl4",
                    "dataScale": [
                        1.9999999999999996,
                        1.9999999999999996,
                        1.9999999999999996
                    ],
                    "fileName": "/beach_ball_free_download.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_ball_free_download.glb",
                    "rotation": [
                        0,
                        -0.8456681201022835,
                        0,
                        0.5337091255006512
                    ],
                    "scale": [
                        0.18062810903092286,
                        0.18062810903092286,
                        0.18062810903092286
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -0.9458489798614356,
                        -0.9161039068567318,
                        -8.579609156043283
                    ],
                    "type": "3d"
                }
            },
        
            
            {
                "card": {
                    "dataLocation": "3Jqz_m218YKRjK_28wiqU7VjZ5rXKrosq3bderkVzexMIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lG30tLBI-JRI6MnkoPg56KwNyfnN_GQgufC0bBhkJH3gQISwlfxJ5AzMVcmUuKz4rZR4pGD4nOHwNOA0HPw0LDzp6AXsuECU8HgQmOxkbFS8TIBw_MzsCFT8eLxM",
                    "dataScale": [
                        1.9999999999999996,
                        1.9999999999999996,
                        1.9999999999999996
                    ],
                    "fileName": "/beach_ball_free_download.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_ball_free_download.glb",
                    "rotation": [
                        0,
                        0.42197014328630394,
                        0,
                        0.9066097275977884
                    ],
                    "scale": [
                        0.11721267796532309,
                        0.11721267796532309,
                        0.11721267796532309
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -8.023283702095553,
                        -0.8338559017564808,
                        -8.171703558363703
                    ],
                    "type": "3d"
                }
            }, 
           {
                "card": {
                    "cornerRadius": 0.02,
                    // "fileName": "/Summer Sale Announcement Post-1.jpg",
                    fileName: "./assets/images/Summer_Sale_Poster.jpg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/Summer Sale Announcement Post-1.jpg",
                    "rotation": [
                        0,
                        0.2713432865409491,
                        0,
                        0.962482634050691
                    ],
                    "scale": [
                        5.378246148967929,
                        5.378246148967929,
                        5.378246148967929
                    ],
                    "shadow": true,
                    "singleSided": true,
                    textureLocation: "./assets/images/Summer_Sale_Poster.jpg",
                    // "textureLocation": "3NKVt12_8a_h-zkMHssR7SY4FKVLdfk7RWcZUA4edKuwJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthICcBPAUIeHt8JgAJGyAdfD4gOgV4Ch8cfAc_fGEtISNgOyI6Jz0nI2AiJyAqL2AsKzwgLzwqYCMnLTwhOCs8PSthH3kpKBY6IRY-Nn0sOgp-Lwd2end7HQwqeCkfAh0NG3wUJSghexZ9BzcRdmEqLzovYX5-JBchFiJ4KhspDAw7HXkrfhYIOR4NPiN2DRoJfikfFxE7DCM-eX8cB3Y",
                    "textureType": "image",
                    "translation": [
                        -8.921957571427829,
                        0.7352324731028392,
                        -11.498287145535441
                    ],
                    "type": "2d"
                }
            },
            /* {
                "card": {
                    "dataLocation": "3JJcGl3mCiUuCugwZ4TLpK2K4n5iwK7FYF0mjsa8K0CYIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lG30tLBI-JRI6MnkoPg56KwNyfnN_GQgufC0bBhkJH3gQISwlfxJ5AzMVcmUuKz4rZSJ9ASAYLCg9JD8ABy4CMBJ7BTwZGj0QZxscLH1nJAwLGAMhejAFAQ0cDH4",
                    "dataScale": [
                        0.22024011724700326,
                        0.22024011724700326,
                        0.22024011724700326
                    ],
                    "fileName": "/Ghost.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/Ghost.glb",
                    "rotation": [
                        0,
                        0.5279902766687085,
                        0,
                        0.8492504152152653
                    ],
                    "scale": [
                        0.350826502209824,
                        0.350826502209824,
                        0.350826502209824
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -3.5944071706849696,
                        -1.0627166468690248,
                        -20.08623928940154
                    ],
                    "type": "3d"
                }
            }, */
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/My project-1.jpg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/My project-1.jpg",
                    "rotation": [
                        -0.0027706773629466073,
                        -0.4910022916059908,
                        -0.005237073527305849,
                        0.8711381325860359
                    ],
                    "scale": [
                        10.166861929367794,
                        10.166861929367794,
                        10.166861929367794
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3HItMrumtEoAaAy5yhSeSVfUJyPOZsUlj-FifJ2dhGtcIDw8ODtyZ2cuISQtO2Y9O2YrOic5PS08ZiEnZz1nJiEHOgMOfn16IAYPHSYbejgmPAN-DBkaegE5emcrJyVmPSQ8ITshJWYkISYsKWYqLTomKTosZiUhKzonPi06Oy1nGX8vLhA8JxA4MHsqPAx4KQFwfHF9Gwosfi8ZBBsLHXoSIy4nfRB7ATEXcGcsKTwpZzwvJ34ABxIrAiIaLSocJwYfIw0qfioEO3gCAgAZAXocMisNKgEtKicEIgk",
                    "textureType": "image",
                    "translation": [
                        6.206571203611363,
                        0.9790311026558243,
                        -22.7503940237865
                    ],
                    "type": "2d"
                }
            },
            
           
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/AdobeStock_439674303.jpeg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/AdobeStock_439674303.jpeg",
                    "rotation": [
                        0.00329658388397064,
                        -0.4959315027209391,
                        0.004826588652979507,
                        0.8683419724887322
                    ],
                    "scale": [
                        7.724439120837788,
                        7.724439120837788,
                        7.724439120837788
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3BHsTZyMhuHQQ6Fdvuonrea0aQkRNDsIQr1RMAoHJnCAKjY2MjF4bW0kKy4nMWw3MWwhMC0zNyc2bCstbTdtLCsNMAkEdHdwKgwFFywRcDIsNgl0BhMQcAszcG0hLS9sNy42KzErL2wuKywmI2wgJzAsIzAmbC8rITAtNCcwMSdtE3UlJBo2LRoyOnEgNgZyIwt6dnt3EQAmdCUTDhEBF3AYKSQtdxpxCzsdem0mIzYjbSQHMSETCgUxcQA7dyF6BxAIDSgdLAYHLiF7Ey8sFBg2dSA0KAYIdjA2Gi0",
                    "textureType": "image",
                    "translation": [
                         -2.588281428422073, 0.42018966608970376, -18.01981272488489
                    ],
                    "type": "2d"
                }
            },
           
            
            
           
            {
                "card": {
                    "animationClipIndex": 0,
                    "animationStartTime": 25614421,
                    "dataLocation": "35IYFdWJDDzWxRL52Si4yGf0mEtI9Rmo4HUcO930gnwMXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaW1x6R35zAwAHXXtyYFtmB0VbQX4DcWRnB3xEBxpWWlgbQFlBXEZcWBtZXFtRVBtXUEdbVEdRG1hcVkdaQ1BHRlAaZAJSU21BWm1FTQZXQXEFVHwNAQwAZndRA1JkeWZ2YAdvXlNaAG0GfExqDRpRVEFUGl4DXkJ7YFsGcgR5WXpSQ2Z3DVJ6BWVNBn9wT0QNVwFzfn1zdnoYcwNmQnw",
                    "dataScale": [
                        2.8063229172069737,
                        2.8063229172069737,
                        2.8063229172069737
                    ],
                    "fileName": "/bat.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/bat.glb",
                    "rotation": [
                        -0.010876081607638711,
                        0.9643494189780518,
                        0.03466504881087899,
                        -0.26212638813461225
                    ],
                    "scale": [
                        0.567824643194094,
                        0.567824643194094,
                        0.567824643194094
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        6.47258314944623,
                        -0.011999999254941773,
                        -20.341698974907857
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/McFarlane-Toy-Grey.gif",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/McFarlane-Toy-Grey.gif",
                    "rotation": [
                        0,
                        -0.4864131412514064,
                        0,
                        0.8737289373815769
                    ],
                    "scale": [
                        5.2827406354948225,
                        5.2827406354948225,
                        5.2827406354948225
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "355ta6Kyh2OxV_nwBtxxvu2Bx3G8-ZGA9751zGo5KkZwXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaW1x6R35zAwAHXXtyYFtmB0VbQX4DcWRnB3xEBxpWWlgbQFlBXEZcWBtZXFtRVBtXUEdbVEdRG1hcVkdaQ1BHRlAaZAJSU21BWm1FTQZXQXEFVHwNAQwAZndRA1JkeWZ2YAdvXlNaAG0GfExqDRpRVEFUGntlU2Bfc2V8fHBSZExiYkBganJbYEZTUVN6YEQAeXp7cmFYWAdmbGFTYwU",
                    "textureType": "image",
                    "translation": [
                        18.50241353767057,
                        0.8813794261186808,
                        -22.431750527172323
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    // "fileName": "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    textureLocation: "./assets/images/Spiderman_poster_low_poly.jpg",
                    "fullBright": true,
                    behaviorModules: ["URLLink"],
                    "layers": [
                        "pointer"
                    ],
                    cardURL: "https://www.target.com/p/marvel-spider-man-legends-series-peter-b-parker-action-figure/-/A-87012329",
                    "modelType": "img",
                    "name": "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    "rotation": [
                        0,
                        -0.01599184336182358,
                        0,
                        -0.999872122296592
                    ],
                    "scale": [
                        4.016608579621155,
                        4.016608579621155,
                        4.016608579621155
                    ],
                    "shadow": true,
                    "singleSided": true,
                    textureLocation: "./assets/images/Spiderman_poster_low_poly.jpg",
                    // "textureLocation": "3K6ZG4PZ_7g1rrTPdSR31goHswJ08EvAMgC1K7w2WII8Iz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kJSIEOQANfX55IwUMHiUYeTslPwB9DxoZeQI6eWQoJCZlPic_IjgiJmUnIiUvKmUpLjklKjkvZSYiKDkkPS45OC5kGnwsLRM_JBM7M3gpPw97KgJzf3J-GAkvfSwaBxgIHnkRIC0kfhN4AjIUc2QvKj8qZAYgCgI9LSEoBCZ7GX8PGxQDLzp4fDE5BiIMMXw5KDM5PQUHfB0iOg8pJR4",
                    "textureType": "image",
                    "translation": [
                        6.093040091560714,
                        0.7894101221239387,
                        -9.223571070903429
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "animationClipIndex": 0,
                    "animationStartTime": 28172044,
                    "dataLocation": "3_vHRevvJ1p-mAKt2wGMoNy1MrdDpzadx77ogXUk4rSUR1tbX1wVAABJRkNKXAFaXAFMXUBeWkpbAUZAAFoAQUZgXWRpGRodR2FoekF8HV9BW2QZa359HWZeHQBMQEIBWkNbRlxGQgFDRkFLTgFNSl1BTl1LAUJGTF1AWUpdXEoAfhhISXdbQHdfVxxNW2sfTmYXGxYafG1LGUh-Y3xseh11RElAGnccZlZwFwBLTltOAFp9flZWH2hDAlZGfXluGX5FVRxuZn5gRExCY2tOHQJdSmhLHBtsZGEXflw",
                    "dataScale": [
                        226.00709485280012,
                        226.00709485280012,
                        226.00709485280012
                    ],
                    "fileName": "/spiderman_rigged.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/spiderman_rigged.glb",
                    "rotation": [
                        0.04905166985777451,
                        -0.11925331718766614,
                        -0.1528827112926592,
                        0.979795619816555
                    ],
                    "scale": [
                        0.6842442551859657,
                        0.6842442551859657,
                        0.6842442551859657
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        6.290157754339941,
                        0.545634665735858,
                        -8.525680758799048
                    ],
                    "type": "3d"
                }
            },
           
        ];
    }
    
