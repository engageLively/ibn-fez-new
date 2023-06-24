export function init(Constants) {
    
    Constants.AvatarNames = [
      "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
   ].map(name => ({
      type: "3d",
      name: name,
      modelType: "glb",
      avatarType: "wonderland",
      dataLocation: `./assets/avatars/${name}.zip`,
      dataRotation: [0, Math.PI, 0],
      dataScale: [0.3, 0.3, 0.3],
      xBounds: [-26, 20],
      zBounds: [-75, 75],
      behaviorModules: ["FezWalker"]
    }));
    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "ambientSound.js", "animateOnApproach.js", "csmLights.js", "drawingCanvas.js", "fezWalker.js", "showSalesOnApproach.js", 'synchronousLoad.js', 'text3D.js'
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
            "card": {
                "layers": [
                    "walk"
                ],
                "name": "world model",
                "placeholder": true,
                "placeholderColor": 8421504,
                "placeholderOffset": [
                    0,
                    0,
                    0
                ],
                "placeholderSize": [
                    400,
                    0.1,
                    400
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    0,
                    -1.7,
                    0
                ],
                "type": "3d",
                timeout: 10000,
                behaviorModules: ['SynchronousCardLoader']
            },
            "id": "0001"
        },
        {
            "card": {
                "behaviorModules": [
                    "Light"
                ],
                "dataLocation": "3VaI7mtuRF7yCjegxX7rZNsO1LzAhxdVX9giltjyhiS0PiIiJiVseXkwPzozJXgjJXg1JDknIzMieD85eSN5LAMiIQYZLBAjGQVnHT8xGww_Y2VvLhASEW5mZHk_OXg1JDknIzMieDs_NSQ5IDMkJTN4Ojk1NzoyMyAyMzA3IzoieRc1HAYeMBQTAHsnDDsuETMDYjAcJWclEzcnYTBvHhszJwEYBwIFMQEiFWZ5MjciN3keb2RiGy4DbwYlF2QXLjQUZiAeAAZgJhpuMWRgOiEXMQ8CMx8iBAklMTk1",
                "dataType": "exr",
                /* "dataLocation": "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                "dataType": "jpg", */
                "fileName": "/abandoned_parking_4k.jpg",
                "layers": [
                    "light"
                ],
                "name": "light",
                "type": "lighting"
            },
            "id": "0002"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/1. Reduced Archway.png",
                "fullBright": true,
                "layers": [
                    "pointer", "walk"
                ],
                "modelType": "img",
                "name": "/1. Reduced Archway.png",
                "rotation": [
                    0.00040599335429602286,
                    -0.0045423517910550895,
                    -0.00697293085806391,
                    0.9999652896200205
                ],
                "scale": [
                    17.335647152658012,
                    17.335647152658012,
                    17.335647152658012
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "32Jn5AearVTjYa0MZb_KoYCJcXLhNLo8WLTIxPBBkw7kWkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcdXFt9QHl0BAcAWnx1Z1xhAEJcRnkEdmNgAHtDAB1RXV8cR15GW0FbXxxeW1xWUxxQV0BcU0BWHF9bUUBdRFdAQVcdWUNqBncGQFx_AnBcQlhdcUBeVApeAEttVXVmeAQLUH9qQ0VDR0QDawsBVR1WU0ZTHUtTS3EAUHBeYXh2WWVrdFZGXUMffgFLSgULY2d-c2pCSFZBd1FnZUdkdQI",
                "textureType": "image",
                "translation": [
                    0.33519384413791675,
                    3.103070371388944,
                    -12.624275380559036
                ],
                "type": "2d"
            },
            "id": "0003"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Nyasa_medieval_moroccan_bazaar_7199ce13-105c-47ce-bd35-bcf450993d91.png",
                "fullBright": true,
                "layers": [
                    "pointer", "walk"
                ],
                "modelType": "img",
                "name": "/Nyasa_medieval_moroccan_bazaar_7199ce13-105c-47ce-bd35-bcf450993d91.png",
                "rotation": [
                    0,
                    0.703799067562385,
                    0,
                    -0.7103990938186209
                ],
                "scale": [
                    7.920159791782299,
                    7.920159791782299,
                    7.920159791782299
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "3frTtdu0gsD9qfrS2K1rgqZUD41PQcAu3gWL16aV7TiwDhISFhVcSUkADwoDFUgTFUgFFAkXEwMSSA8JSRNJCA8pFC0gUFNUDighMwg1VBYIEi1QIjc0VC8XVEkFCQtIEwoSDxUPC0gKDwgCB0gEAxQIBxQCSAsPBRQJEAMUFQNJDRc-UiNSFAgrViQIFgwJJRQKAF4KVB85ASEyLFBfBCs-FxEXExBXP19VAUkCBxIHSQsEPj5UPywoCiwfDhMTSwwMEwUlVAApFV4SSwkuLAMsLxYUCQQCXgQxUg0",
                "textureType": "image",
                "translation": [
                    -29.706654921681587,
                    2.2321964630442803,
                    -14.336101520636927
                ],
                "type": "2d"
            },
            "id": "0004"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Wall-Image-3.jpg",
                "fullBright": true,
                "layers": [
                    "pointer"
                ],
                "modelType": "img",
                "name": "/Wall-Image-3.jpg",
                "rotation": [
                    0,
                    0.7192557397701013,
                    0,
                    -0.6947454071872405
                ],
                "scale": [
                    7.940132477389096,
                    7.940132477389096,
                    7.940132477389096
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "3LVsRzSvLvqljSPySlphOX_tuDFzKBSb7vdIGzl83jzIJDg4PD92Y2MqJSApP2I5P2IvPiM9OSk4YiUjYzljIiUDPgcKenl-JAILGSIffjwiOAd6CB0efgU9fmMvIyFiOSA4JT8lIWIgJSIoLWIuKT4iLT4oYiElLz4jOik-PyljJz0UeAl4PiIBfA4iPCYjDz4gKnQgfjUTKwsYBnp1LgEUPTs9OTp9FXV_K2MoLTgtYzklfx8qCno_FS4jKTUeDn8jdQoHBxYgJw16IQIPLSQ-Cj4-eioTIi4WLSM",
                "textureType": "image",
                "translation": [
                    -29.995893325835745,
                    2.3700263814271225,
                    -24.459295022081154
                ],
                "type": "2d"
            },
            "id": "0005"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Wall-Image-6.jpg",
                "fullBright": true,
                "layers": [
                    "pointer"
                ],
                "modelType": "img",
                "name": "/Wall-Image-6.jpg",
                "rotation": [
                    0,
                    -0.7052488665277385,
                    0,
                    0.7089598269728267
                ],
                "scale": [
                    7.814605398387085,
                    7.814605398387085,
                    7.814605398387085
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "3jssy0fBpgYd2Ye8wxVN6QJgBi587eO1cSEmTvRZaFMUAh4eGhlQRUUMAwYPGUQfGUQJGAUbHw8eRAMFRR9FBAMlGCEsXF9YAiQtPwQ5WBoEHiFcLjs4WCMbWEUJBQdEHwYeAxkDB0QGAwQOC0QIDxgECxgORAcDCRgFHA8YGQ9FARsyXi9eGAQnWigEGgAFKRgGDFIGWBM1DS0-IFxTCCcyGx0bHxxbM1NZDUUOCx4LRR8CKxMfCQYwBhspGyAaGj4HLS5TCRo6PlkwAjUOGhIfEwxaLC0FUwtaHAU",
                "textureType": "image",
                "translation": [
                    -30.04033052115329,
                    2.3554169861040526,
                    -4.567623284073427
                ],
                "type": "2d"
            },
            "id": "0006"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Tile for SIM.png",
                "fullBright": true,
                "layers": [
                    "pointer"
                ],
                "modelType": "img",
                "name": "/Tile for SIM.png",
                "rotation": [
                    0,
                    -0.6973602769341234,
                    0,
                    0.7167207574462752
                ],
                "scale": [
                    5.260307386303003,
                    5.260307386303003,
                    5.260307386303003
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
                "textureType": "image",
                "translation": [
                    -8.411803008994447,
                    2.1878765584272952,
                    -17.286866382809762
                ],
                "type": "2d"
            },
            "id": "0007"
        },
        {
            "card": {
                "dataLocation": "3PTKvrHcKpR-CnndmVUqTAMTyXfQfo_hOp6DuB2G860oOCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_PjkfIhsWZmViOB4XBT4DYiA-JBtmFAECYhkhYn8zPz1-JTwkOSM5PX48OT40MX4yNSI-MSI0fj05MyI_JjUiIzV_OyEIZBVkIj4dYBI-IDo_EyI8Nmg8YikPNxcEGmZpMh0IISchJSZhCWljN380MSQxfwpoKDgYJmIiaRciMxUVaGIlYDIbICYjFz4JCDoUEzMfYRc0GigiFwgVYRE",
                "dataScale": [
                    0.270806472383646,
                    0.270806472383646,
                    0.270806472383646
                ],
                "fileName": "/6.Lets See Fez Market Inclusive Model.glb",
                "layers": [
                    "pointer", "walk"
                ],
                "modelType": "glb",
                "name": "/6.Lets See Fez Market Inclusive Model.glb",
                "rotation": [
                    0,
                    0.14719197380520557,
                    0,
                    0.9891079429704969
                ],
                "scale": [
                    45.734416015634096,
                    45.734416015634096,
                    45.734416015634096
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    11.195271195154533,
                    -2.9896591712675855,
                    -22.597219557877082
                ],
                "type": "3d"
            },
            "id": "0008"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Wall-image-LARGE-22.jpg",
                "fullBright": true,
                "layers": [
                    "pointer"
                ],
                "modelType": "img",
                "name": "/Wall-image-LARGE-22.jpg",
                "rotation": [
                    0,
                    0.9991124400590873,
                    0,
                    0.042122821833023946
                ],
                "scale": [
                    19.48083659492732,
                    19.48083659492732,
                    19.48083659492732
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "3JUpbwwKcAYfw4SUOklEhJumDX6YiZmOq5qcPWcaMc7IIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lITsSfg9-OCQHeggkOiAlCTgmLHImeDMVLQ0eAHxzKAcSOz07Pzx7E3N5LWUuKz4rZTMTA3Jyemc9Eng9FXk6eA45Onl8MjB_MyUNHgAkP3xyZ3kCMy0hGHMNAQs",
                "textureType": "image",
                "translation": [
                    -19.446543366197165,
                    3.3144870130567154,
                    -75.29942372439042
                ],
                "type": "2d"
            },
            "id": "0009"
        },
        {
            "card": {
                "dataLocation": "3JNO_M2_cRyzImmuyrv43j3C43knyAqdr4I1zje8zOMEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lITsSfg9-OCQHeggkOiAlCTgmLHImeDMVLQ0eAHxzKAcSOz07Pzx7E3N5LWUuKz4rZSYuGC8kPhsIOQY-DgZ-Jw9nDHIrMBAyPwIrLh8EPg0oej0BMBp4chxzDhs",
                "dataScale": [
                    0.01913807166136353,
                    0.01913807166136353,
                    0.01913807166136353
                ],
                "fileName": "/old_awning.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/old_awning.glb",
                "rotation": [
                    0,
                    0.8603763107469988,
                    0,
                    -0.5096593017942318
                ],
                "scale": [
                    7.18653598244698,
                    7.18653598244698,
                    7.18653598244698
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    16.563136928168724,
                    11.129245464201341,
                    -23.68623044564331
                ],
                "type": "3d"
            },
            "id": "0010"
        },
        {
            "card": {
                "animationClipIndex": 0,
                "animationStartTime": 21436535,
                "dataLocation": "30GR708HcDGezrcJF5Pw9KNLH_ZVZCkQDj6br9Rru3tMWEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfXll_Qnt2BgUCWH53ZV5jAkBeRHsGdGFiAnlBAh9TX10eRVxEWUNZXR5cWV5UUR5SVUJeUUJUHl1ZU0JfRlVCQ1UfeHdHVXJXYEF-CHgCAHZHfVNJZnl-SXt-AgN5ZFFJBgEEWUZhUn1EYWpFYR9UUURRHwhGdlVZY3Nkc3hJWWRWBwQGXXlGXltKVEhFVUoEXHhjXlF-V1JEc1NkZXU",
                "dataScale": [
                    8.777463145724749,
                    8.777463145724749,
                    8.777463145724749
                ],
                "fileName": "/chicken_rig.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/chicken_rig.glb",
                "rotation": [
                    0,
                    -0.05523609150223219,
                    0,
                    0.9984733217245001
                ],
                "scale": [
                    0.14141536703580285,
                    0.14141536703580285,
                    0.14141536703580285
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    -16.947686789857638,
                    -1.4869190080554646,
                    -48.53110271099833
                ],
                "type": "3d"
            },
            "id": "0011"
        },
        {
            "card": {
                "dataLocation": "3ksSboA_h4aH4stv12a6UbbGsQZG_hydPNxP8gfE-7LUAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5EBQIkGSAtXV5ZAyUsPgU4WRsFHyBdLzo5WSIaWUQIBAZFHgcfAhgCBkUHAgUPCkUJDhkFChkPRQYCCBkEHQ4ZGA5EABozXy5fGQUmWykFGwEEKBkHDVMHWRI0DCw_IV1SCSYzGhwaHh1aMlJYDEQPCh8KRDIOIFs-PwkNJlgFOygmGh88OzsZWVwuHC0EAj44DCRcAF8JAQMdNBhYMQg",
                "dataScale": [
                    12.445587585443599,
                    12.445587585443599,
                    12.445587585443599
                ],
                "fileName": "/goat.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/goat.glb",
                "rotation": [
                    0,
                    -0.05523609150223219,
                    0,
                    0.9984733217245001
                ],
                "scale": [
                    0.520077479639816,
                    0.520077479639816,
                    0.520077479639816
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    -21.405477397110364,
                    -1.533724873734006,
                    -73.78764454070742
                ],
                "type": "3d"
            },
            "id": "0012"
        },
        {
            "card": {
                "dataLocation": "34smqRgngv7mEHyLIcmTDAYunBeo5ZW-8lGdx_2oVfTQXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbWl17Rn9yAgEGXHpzYVpnBkRaQH8CcGVmBn1FBhtXW1kaQVhAXUddWRpYXVpQVRpWUUZaVUZQGlldV0ZbQlFGR1EbX0VsAHEARlp5BHZaRF5bd0ZYUgxYBk1rU3NgfgINVnlsRUNFQUIFbQ0HUxtQVUBVG3xreXBeBW16DENxflEDBl8FBFkAbVhDQE1Ad1pOAl15YFNZf0BlcEcDZn0",
                "dataScale": [
                    12.445587585443599,
                    12.445587585443599,
                    12.445587585443599
                ],
                "fileName": "/goat.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/goat.glb",
                "rotation": [
                    0,
                    0.41576044971988074,
                    0,
                    0.9094741604073874
                ],
                "scale": [
                    0.5502951304712639,
                    0.5502951304712639,
                    0.5502951304712639
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    -20.527433797455693,
                    -1.5537470930978121,
                    -74.25467415707142
                ],
                "type": "3d"
            },
            "id": "0013"
        },
        {
            "card": {
                "dataLocation": "3rf-J2Ft_AqaqpI3tlPP9kxuC1EFNbmElifbEZOMAXPsGgYGAgFIXV0UGx4XAVwHAVwRAB0DBxcGXBsdXQddHBs9ADk0REdAGjw1JxwhQAIcBjlENiMgQDsDQF0RHR9cBx4GGwEbH1weGxwWE1wQFwAcEwAWXB8bEQAdBBcAARddGQMqRjdGABw_QjAcAhgdMQAeFEoeQAstFTUmOERLED8qAwUDBwRDK0tBFV0WEwYTXS08Q0tEIEMRHD4YG0sbHTw7GwEWCAEoJhpBHSILBhA4RyInFCo5AkYVBiM",
                "dataScale": [
                    1.308969663775078,
                    1.308969663775078,
                    1.308969663775078
                ],
                "fileName": "/low_poly_horse.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/low_poly_horse.glb",
                "rotation": [
                    0,
                    -0.9985962513085036,
                    0,
                    -0.052967224512938935
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    -25.40960354621249,
                    -1.550698077154457,
                    -36.79133661408076
                ],
                "type": "3d"
            },
            "id": "0014"
        },
        {
            "card": {
                "dataLocation": "3rf-J2Ft_AqaqpI3tlPP9kxuC1EFNbmElifbEZOMAXPsGgYGAgFIXV0UGx4XAVwHAVwRAB0DBxcGXBsdXQddHBs9ADk0REdAGjw1JxwhQAIcBjlENiMgQDsDQF0RHR9cBx4GGwEbH1weGxwWE1wQFwAcEwAWXB8bEQAdBBcAARddGQMqRjdGABw_QjAcAhgdMQAeFEoeQAstFTUmOERLED8qAwUDBwRDK0tBFV0WEwYTXS08Q0tEIEMRHD4YG0sbHTw7GwEWCAEoJhpBHSILBhA4RyInFCo5AkYVBiM",
                "dataScale": [
                    1.308969663775078,
                    1.308969663775078,
                    1.308969663775078
                ],
                "fileName": "/low_poly_horse.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/low_poly_horse.glb",
                "rotation": [
                    0,
                    -0.9833602351793898,
                    0,
                    -0.1816663091162896
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    -25.745965714111488,
                    -1.550698077154457,
                    -37.99209294400884
                ],
                "type": "3d"
            },
            "id": "0015"
        },
        {
            "card": {
                "animationClipIndex": 1,
                animationDistantAnimationClip: 1,
                animationProximateAnimationClip: 0,
                animationCheckInterval: 50,
                animationProximateDistance: 40,
                "animationStartTime": 3669678,
                "dataLocation": "3zMmADA2h6svaZE7pMW8-HPdxlDHBMP7ObX6KjKcxghUEg4OCglAVVUcExYfCVQPCVQZCBULDx8OVBMVVQ9VFBM1CDE8TE9IEjQ9LxQpSAoUDjFMPisoSDMLSFUZFRdUDxYOEwkTF1QWExQeG1QYHwgUGwgeVBcTGQgVDB8ICR9VEQsiTj9OCBQ3SjgUChAVOQgWHEIWSAMlHT0uMExDGDciCw0LDwxLI0NJHVUeGw4bVRxOMz4DGxQ3EjlNLjcTCRlIDQIRGws7HBAZEwxNNBMjHk8PESsWHzQTPDs",
                "dataScale": [
                    0.0159300933342758,
                    0.0159300933342758,
                    0.0159300933342758
                ],
                "fileName": "/2Camel Seller 24 frame ratemerge material ts 1024 2 animations.Fbx",
                "layers": [
                    "pointer"
                ],
                "modelType": "fbx",
                "name": "/2Camel Seller 24 frame ratemerge material ts 1024 2 animations.Fbx",
    
                "shadow": true,
                "singleSided": true,
                "translation": [-22.433594421113224, -1.5129714868153492, -45.23414159691042],
                rotation: [-0.6982105654371599, 0, 0, 0.715892454431475],
                "type": "3d",
                behaviorModules: ['ShowSalesOnApproach', 'AnimateOnApproach'],
                showSalesProximateDistance: 40
            },
            "id": "0016"
        },
        {
            card: {
                name: "ambient sound",
                type: "object",
                behaviorModules: ["AmbientSound"],
                // dataType: "mp3",
                // dataLocation: "./assets/sounds/FemaleCamelMerchant.mp3",
                // textureLocation: "./assets/images/mythos.png",
                dataType: "wav",
                dataLocation: "./assets/sounds/female_camel_merchant_v2.wav",
                loop: false,
                volume: 0.6,
                maxVolume: 0.8
            },
            id: "ambientSound"
         },
        
        {
            "card": {
                "animationClipIndex": 1,
                "animationStartTime": 21436535,
               
                "dataLocation": "30GR708HcDGezrcJF5Pw9KNLH_ZVZCkQDj6br9Rru3tMWEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfXll_Qnt2BgUCWH53ZV5jAkBeRHsGdGFiAnlBAh9TX10eRVxEWUNZXR5cWV5UUR5SVUJeUUJUHl1ZU0JfRlVCQ1UfeHdHVXJXYEF-CHgCAHZHfVNJZnl-SXt-AgN5ZFFJBgEEWUZhUn1EYWpFYR9UUURRHwhGdlVZY3Nkc3hJWWRWBwQGXXlGXltKVEhFVUoEXHhjXlF-V1JEc1NkZXU",
                "dataScale": [
                    8.777463145724749,
                    8.777463145724749,
                    8.777463145724749
                ],
                "fileName": "/chicken_rig.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/chicken_rig.glb",
                "rotation": [
                    0,
                    0.5435921042371591,
                    0,
                    -0.8393495244598748
                ],
                "scale": [
                    0.14141536703580285,
                    0.14141536703580285,
                    0.14141536703580285
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    -21.161309924321376,
                    -1.5232141182080852,
                    -42.189406881552046
                ],
                "type": "3d"
            },
            "id": "0018"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Wall-Image-10.jpg",
                "fullBright": true,
                "layers": [
                    "pointer"
                ],
                "modelType": "img",
                "name": "/Wall-Image-10.jpg",
                "rotation": [
                    0,
                    0.14604291131629205,
                    0,
                    0.9892782561313382
                ],
                "scale": [
                    9.786125553048334,
                    9.786125553048334,
                    9.786125553048334
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "3gHvax7Ygqr9_qfnNdZ24CUXInqenmcnlcN4qkh8D6NIDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJICQ4oFSwhUVJVDykgMgk0VRcJEyxRIzY1VS4WVUgECApJEgsTDhQOCkkLDgkDBkkFAhUJBhUDSQoOBBUIEQIVFAJIDBY_UyJTFQkqVyUJFw0IJBULAV8LVR44ACAzLVFeBSo_FhAWEhFWPl5UAEgDBhMGSEovAEotHlQxFFMCJVISMCJULwAzAQkTIwRfVTQKKSQAADEkEzAGMBBTBSI",
                "textureType": "image",
                "translation": [
                    13.862569627122062,
                    3.2257489221859066,
                    -19.62103289275166
                ],
                "type": "2d"
            },
            "id": "0019"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Wall-Image-11.jpg",
                "fullBright": true,
                "layers": [
                    "pointer"
                ],
                "modelType": "img",
                "name": "/Wall-Image-11.jpg",
                "rotation": [
                    0,
                    0.3283527860024361,
                    0,
                    -0.944555158751694
                ],
                "scale": [
                    9.534400529352249,
                    9.534400529352249,
                    9.534400529352249
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "3MJ41qBq2skmOV4-eIk00UpkH-SR_iofcWuhtxD7GqyQJTk5PT53YmIrJCEoPmM4PmMuPyI8OCg5YyQiYjhiIyQCPwYLe3h_JQMKGCMefz0jOQZ7CRwffwQ8f2IuIiBjOCE5JD4kIGMhJCMpLGMvKD8jLD8pYyAkLj8iOyg_PihiJjwVeQh5PyMAfQ8jPSciDj8hK3UhfzQSKgoZB3t0LwAVPDo8ODt8FHR-KmIpLDksYg49Cw8aex4KCxc7DB91HBI3NRpgCxsgI3p6IyMdJQR-GAMAeQIiKR55dCI",
                "textureType": "image",
                "translation": [
                    22.48846833809396,
                    3.0437933225078635,
                    -18.261764014514554
                ],
                "type": "2d"
            },
            "id": "0020"
        },
        {
            "card": {
                "dataLocation": "3JNO_M2_cRyzImmuyrv43j3C43knyAqdr4I1zje8zOMEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lITsSfg9-OCQHeggkOiAlCTgmLHImeDMVLQ0eAHxzKAcSOz07Pzx7E3N5LWUuKz4rZSYuGC8kPhsIOQY-DgZ-Jw9nDHIrMBAyPwIrLh8EPg0oej0BMBp4chxzDhs",
                "dataScale": [
                    0.01913807166136353,
                    0.01913807166136353,
                    0.01913807166136353
                ],
                "fileName": "/old_awning.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/old_awning.glb",
                "rotation": [
                    0,
                    0.7034061744323674,
                    0,
                    -0.7107881215738077
                ],
                "scale": [
                    4.801864728627455,
                    4.801864728627455,
                    4.801864728627455
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    -17.702202401164463,
                    7.778872634672121,
                    -73.38542937111072
                ],
                "type": "3d"
            },
            "id": "0021"
        },
        {
            "card": {
                "dataLocation": "3JNO_M2_cRyzImmuyrv43j3C43knyAqdr4I1zje8zOMEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lITsSfg9-OCQHeggkOiAlCTgmLHImeDMVLQ0eAHxzKAcSOz07Pzx7E3N5LWUuKz4rZSYuGC8kPhsIOQY-DgZ-Jw9nDHIrMBAyPwIrLh8EPg0oej0BMBp4chxzDhs",
                "dataScale": [
                    0.01913807166136353,
                    0.01913807166136353,
                    0.01913807166136353
                ],
                "fileName": "/old_awning.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/old_awning.glb",
                "rotation": [
                    -0.10428584807522805,
                    0.9156761805049892,
                    0.043922421513172404,
                    -0.3856584178200243
                ],
                "scale": [
                    5.927843522442909,
                    5.927843522442909,
                    5.927843522442909
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    29.222157694493703,
                    10.569232499125006,
                    -12.7226845722668
                ],
                "type": "3d"
            },
            "id": "0022"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Wall-Image-11.jpg",
                "fullBright": true,
                "layers": [
                    "pointer", "walk"
                ],
                "modelType": "img",
                "name": "/Wall-Image-11.jpg",
                "rotation": [
                    0,
                    -0.017167360235783025,
                    0,
                    0.999852630012311
                ],
                "scale": [
                    20, 20, 20
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "3D8uoKbttvJm1pLoDoLg37kFzPkmj-lnE0kH-675-MmULDAwNDd-a2siLSghN2oxN2onNis1MSEwai0razFrKi0LNg8CcnF2LAoDESoXdjQqMA9yABUWdg01dmsnKylqMSgwLTctKWooLSogJWomITYqJTYgaiktJzYrMiE2NyFrEQYqDA0vJXIjKA11AAYuPBQAFzB3EQFyFmk-IAgHAhZ9JgE9NAYAEzYHfGsgJTAlawc-KAFwLHcBKwd2fSUwDw0sNyU1CXdwPgoKcAoSJT4JPAgOciI9LDUNaR0",
                "textureType": "image",
                "translation": [
                    1.8412525696837054, 8.241627523531172, 30.235154430804048
                ],
                "type": "2d"
            },
            "id": "0060"
        },
        {
            "card": {
                "cornerRadius": 0.02,
                "fileName": "/Wall-Image-3.jpg",
                "fullBright": true,
                "layers": [
                    "pointer", "walk"
                ],
                "modelType": "img",
                "name": "/Wall-Image-3.jpg",
                "rotation": [
                    0,
                    0.7192557397701013,
                    0,
                    -0.6947454071872405
                ],
                "scale": [
                    7.940132477389096,
                    7.940132477389096,
                    7.940132477389096
                ],
                "shadow": true,
                "singleSided": true,
                "textureLocation": "3LVsRzSvLvqljSPySlphOX_tuDFzKBSb7vdIGzl83jzIJDg4PD92Y2MqJSApP2I5P2IvPiM9OSk4YiUjYzljIiUDPgcKenl-JAILGSIffjwiOAd6CB0efgU9fmMvIyFiOSA4JT8lIWIgJSIoLWIuKT4iLT4oYiElLz4jOik-PyljJz0UeAl4PiIBfA4iPCYjDz4gKnQgfjUTKwsYBnp1LgEUPTs9OTp9FXV_K2MoLTgtYzklfx8qCno_FS4jKTUeDn8jdQoHBxYgJw16IQIPLSQ-Cj4-eioTIi4WLSM",
                "textureType": "image",
                translation: [-26.33320109510383, 3.0030865828582733, 28.886174788171374],
                scale: [8.567860505916038, 8.567860505916038, 8.567860505916038],
                rotation: [0, -0.9998895144854852, 0, 0.01486468371614715],
                "type": "2d"
            }
        },
        {
            card: {
                translation: [25.00798026457164, 2.3554169861040526, 28.49622473904319],
                scale: [7.814605398387085, 7.814605398387085, 7.814605398387085],
                rotation: [0.006787036196949385, 0.27979984302747263, -0.03792665952056163, 0.9592849172582015],
                layers: ["pointer", "walk"],
                name: "/Wall-Image-6.jpg",
                cornerRadius: 0.02,
                fileName: "/Wall-Image-6.jpg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3jssy0fBpgYd2Ye8wxVN6QJgBi587eO1cSEmTvRZaFMUAh4eGhlQRUUMAwYPGUQfGUQJGAUbHw8eRAMFRR9FBAMlGCEsXF9YAiQtPwQ5WBoEHiFcLjs4WCMbWEUJBQdEHwYeAxkDB0QGAwQOC0QIDxgECxgORAcDCRgFHA8YGQ9FARsyXi9eGAQnWigEGgAFKRgGDFIGWBM1DS0-IFxTCCcyGx0bHxxbM1NZDUUOCx4LRR8CKxMfCQYwBhspGyAaGj4HLS5TCRo6PlkwAjUOGhIfEwxaLC0FUwtaHAU",
                textureType: "image",
                type: "2d",
            }
        }
    ]
}