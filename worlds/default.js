// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

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
      xBounds: [-20, 20],
      zBounds: [-30, 2],
      behaviorModules: ["FezWalker"]
    }));
    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "ambientSound.js", "csmLights.js", "drawingCanvas.js", "fezWalker.js", "showSalesOnApproach.js", 'synchronousLoad.js', 'text3D.js'
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
             card: {
                layers: ['walk'],
                name: "world model",
                placeholder: true,
                placeholderColor: 8421504,
                placeholderOffset: [0, 0, 0],
                placeholderSize: [400, 0.1, 400],
                shadow: true,
                singleSided: true,
                translation: [0, -1.7, 0],
                type: "3d",
                timeout: 10000,
                behaviorModules: ['SynchronousCardLoader']
             }
          },
         {
             card: {
                behaviorModules: ['Light'],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                dataType: "jpg",
                fileName: "/abandoned_parking_4k.jpg",
                layers: ['light'],
                name: "light",
                type: "lighting",
             }
          },
        
         
         {
             card: {
                dataLocation: "3MVKI2VQcZ9P52kYFeDMei1_BmWvWzaEyIgNLvyFZg6kJTk5PT53YmIrJCEoPmM4PmMuPyI8OCg5YyQiYjhiIyQCPwYLe3h_JQMKGCMefz0jOQZ7CRwffwQ8f2IuIiBjOCE5JD4kIGMhJCMpLGMvKD8jLD8pYyAkLj8iOyg_PihiKAY-Iy4YKDsuHRcuLA41FHQeKBkFFCMrPxoKAjg4NAkiLh4uBgB0ISF7GGIpLDksYmA9Bz8MPwY1Aw8LfQ8MGx4hAAQ-AAodDj80Oho-Az44Pn9-fTw1fhgoGBg",
                dataScale: [0.00023605149481685224, 0.00023605149481685224, 0.00023605149481685224],
                fileName: "/arab-woman-in-long-robe-dress-3d-people (1).zip",
                layers: ['pointer'],
                modelType: "zip",
                name: "/arab-woman-in-long-robe-dress-3d-people (1).zip",
                rotation: [0, 0, 0, 1],
                scale: [0.6510999518631568, 0.6510999518631568, 0.6510999518631568],
                shadow: true,
                singleSided: true,
                translation: [-21.332813022216055, -1.5107886957222492, -73.221695370718183],
                type: "3d",
                behaviorModules: ['ShowSalesOnApproach'],
                showSalesProximateDistance: 40
             }
          },
          {
            card: {
                name: "ambient sound",
                type: "object",
                behaviorModules: ["AmbientSound"],
                dataType: "mp3",
                dataLocation: "./assets/sounds/FemaleCamelMerchant.mp3",
                // textureLocation: "./assets/images/mythos.png",
                loop: false,
                volume: 0.2,
                maxVolume: 0.3
            },
            id: "ambientSound"
         },
         {
            "card": {
                "dataLocation": "35AjAbkF6C6X8rYk7TjL2_8DrBG6To9jVBMg62v4C-_kXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaW1x6R35zAwAHXXtyYFtmB0VbQX4DcWRnB3xEBxpWWlgbQFlBXEZcWBtZXFtRVBtXUEdbVEdRG1hcVkdaQ1BHRlAaZWZ3AQZbZXtGRWdsXnRWUFtEVGwAWFBbXwZ2cE0YBn9jUgd0UERGDEV8XhpRVEFUGkFmUwQMdFpWe0RHA2QMAHNbWGB7d01CTHZvQXpBREAETEJGR3xlXQZvAnw",
                "dataScale": [
                    0.19868108653114877,
                    0.19868108653114877,
                    0.19868108653114877
                ],
                "fileName": "/Empty Market MAYBE FIXED.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/Empty Market MAYBE FIXED.glb",
                "rotation": [
                    0,
                    0.14824230588461984,
                    0,
                    0.9889510699453289
                ],
                "scale": [
                    72.43635389312594,
                    72.43635389312594,
                    72.43635389312594
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    112.40215309203437,
                    -31.315643911281814,
                    -35.167792348945376
                ],
                "type": "3d"
            }
        },
        {
         "card": {
             "cornerRadius": 0.02,
             "fileName": "/Nyasa_medieval_moroccan_bazaar_0c4dd814-f472-46db-bad7-3f1d073d44e8.png",
             "fullBright": true,
             "layers": [
                 "pointer"
             ],
             "modelType": "img",
             "name": "/Nyasa_medieval_moroccan_bazaar_0c4dd814-f472-46db-bad7-3f1d073d44e8.png",
             "rotation": [
                 0,
                 0.6980065759820843,
                 0,
                 0.7160913488415896
             ],
             "scale": [
                 7.824728178761962,
                 7.824728178761962,
                 7.824728178761962
             ],
             "shadow": true,
             "singleSided": true,
             "textureLocation": "3PRxCesURkJ-WcjKSGx2aaJV9PnPIqlZovXFI3lmykGsOCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_PjkfIhsWZmViOB4XBT4DYiA-JBtmFAECYhkhYn8zPz1-JTwkOSM5PX48OT40MX4yNSI-MSI0fj05MyI_JjUiIzV_AAMSZGM-AB4jIAIJOxEzNT4hMQllPTU-OmMTFSh9YxoGN2IRNSEjaSAZO380MSQxfxwpIQc5GjsDDzgVHWE8NBg5ZTUZKQgRASgACjsJEjMpMjtlOyQEGygBJGQ",
             "textureType": "image",
             "translation": [
                 -2.118743791707784,
                 2.004663349024055,
                 -43.51241672318485
             ],
             "type": "2d"
         },
        
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
                 0.7195402504792596,
                 0,
                 -0.6944507383106774
             ],
             "scale": [
                 9.637623341625837,
                 9.637623341625837,
                 9.637623341625837
             ],
             "shadow": true,
             "singleSided": true,
             "textureLocation": "3J8j_qxh5KaM_8A1B3gicGRs8U8baWzB2j9dg73SeMsUIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lGhkIfnkkGgQ5OhgTIQspLyQ7KxN_Jy8kIHkJDzJneQAcLXgLLzs5czoDIWUuKz4rZQ1-LDoQEgcHKRIECyc7HRJ7DAB7Ax4LIxAVPTkiHhkDGSB-GCcpLT4OfAc",
             "textureType": "image",
             "translation": [
                 -32.387208194998365,
                 2.6569463028167526,
                 -37.512476386385714
             ],
             "type": "2d"
         },
         
     },
     {
      "card": {
          "dataLocation": "33p3mF7LjdEhgbo8m4Wv9q6XLi3ASidJI7dVtBePLTBMW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcXVp8QXh1BQYBW310Zl1gAUNdR3gFd2JhAXpCARxQXF4dRl9HWkBaXh1fWl1XUh1RVkFdUkFXHV5aUEFcRVZBQFYcY2BxBwBdY31AQ2FqWHJQVl1CUmoGXlZdWQBwdkseAHllVAFyVkJACkN6WBxXUkdSHGMHHgZRUVtpdApsSWRyUntyeFhCAAJBdXJGVEdHaldCAXdeWUV0UloARlA",
          "dataScale": [
              2.423238326215673,
              2.423238326215673,
              2.423238326215673
          ],
          "fileName": "/little_fella.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/little_fella.glb",
          "rotation": [
              0,
              -0.0638561306331488,
              0,
              0.9979591146838442
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              4.20597571793004,
              -63.531754832250705,
              -59.437094232677495
          ],
          "type": "3d"
      },
      
  },
  {
      "card": {
          "cornerRadius": 0.02,
          "fileName": "/Wall-Image-1.jpg",
          "fullBright": true,
          "layers": [
              "pointer"
          ],
          "modelType": "img",
          "name": "/Wall-Image-1.jpg",
          "rotation": [
              0,
              0.661066731711111,
              0,
              0.750327112814664
          ],
          "scale": [
              11.259196732753614,
              11.259196732753614,
              11.259196732753614
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "30LukxWIL2-UZL6Y1Mf6yN7fSgppLHgwU__twm2jRXQsWEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfXll_Qnt2BgUCWH53ZV5jAkBeRHsGdGFiAnlBAh9TX10eRVxEWUNZXR5cWV5UUR5SVUJeUUJUHl1ZU0JfRlVCQ1UfZXJeeHlbUQZXXHkBdHJaSGB0Y0QDZXUGYh1KVHxzdmIJUnVJQHJ0Z0JzCB9UUURRH39xUnpWB39ZBEFkcmp3BGEGWERFfWZRSFhXQUdqR35cBnQIeURDA2hEdXk",
          "textureType": "image",
          "translation": [
              -1.1600758883968103,
              2.723198386275315,
              -78.88644801083115
          ],
          "type": "2d"
      },
     
  },
  {
      "card": {
          "cornerRadius": 0.02,
          "fileName": "/Nyasa_medieval_moroccan_bazaar_7199ce13-105c-47ce-bd35-bcf450993d91.jpg",
          "fullBright": true,
          "layers": [
              "pointer"
          ],
          "modelType": "img",
          "name": "/Nyasa_medieval_moroccan_bazaar_7199ce13-105c-47ce-bd35-bcf450993d91.jpg",
          "rotation": [
              0,
              0.6996580207596145,
              0,
              0.714477889081768
          ],
          "scale": [
              10.126874549515142,
              10.126874549515142,
              10.126874549515142
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "3Yj9EJKmBAOpDxZ8Y7U6YlhrKXHVn87zlSZWkV2otd5MMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2NzAWKxIfb2xrMRceDDcKayk3LRJvHQgLaxAoa3Y6NjR3LDUtMCowNHc1MDc9OHc7PCs3OCs9dzQwOis2LzwrKjx2DBs3ERAyOG8-NRBoHRszIQkdCi1qDBxvC3QjPRUaHwtgOxwgKRsdDisaYXY9OC04dhUtKhARLHQVIB5qOAgoLG4xPBcLBmw0MA4IDW09Bms3Hhw9dGttCDMxazY",
          "textureType": "image",
          "translation": [
              -33.472028066639815,
              3.1366891462352524,
              -25.984034583575635
          ],
          "type": "2d"
      },
     
  },
  {
      "card": {
          "cornerRadius": 0.02,
          "fileName": "/Wall-Image-5.jpg",
          "fullBright": true,
          "layers": [
              "pointer"
          ],
          "modelType": "img",
          "name": "/Wall-Image-5.jpg",
          "rotation": [
              0,
              0.7040873899719999,
              0,
              0.7101133341111239
          ],
          "scale": [
              10.64568368989869,
              10.64568368989869,
              10.64568368989869
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "3dolZQs4Z5tkb-z4XUpvQzItl_vSGt8Ohl2Ez5x_zYPMDBAQFBdeS0sCDQgBF0oRF0oHFgsVEQEQSg0LSxFLCg0rFi8iUlFWDCojMQo3VhQKEC9SIDU2Vi0VVksHCwlKEQgQDRcNCUoIDQoABUoGARYKBRYASgkNBxYLEgEWFwFLMSYKLC0PBVIDCC1VICYOHDQgNxBXMSFSNkkeACgnIjZdBiEdFCYgMxYnXEsABRAFSxYzKR1SBSU-IgseCA5dCzcoFQcWDg8WBi0tD11UOysgIwsxJi9RLjMKLik",
          "textureType": "image",
          "translation": [
              -36.20062971673447,
              2.7459957490108162,
              -14.147170614465288
          ],
          "type": "2d"
      },
      
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
              -0.6909455970642947,
              0,
              0.7229067587852984
          ],
          "scale": [
              9.017240355363962,
              9.017240355363962,
              9.017240355363962
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "3hLSqjsTttsE5F5g5B8_5c1oNVAa_O_Ek1dLFsqsQMHYABwcGBtSR0cOAQQNG0YdG0YLGgcZHQ0cRgEHRx1HBgEnGiMuXl1aACYvPQY7WhgGHCNeLDk6WiEZWkcLBwVGHQQcARsBBUYEAQYMCUYKDRoGCRoMRgUBCxoHHg0aGw1HPSoGICEDCV4PBCFZLCoCEDgsOxxbPS1eOkUSDCQrLjpRCi0RGCosPxorUEcMCRwJRwpRKxEtGDw5AykuLykOPCMeWh0KDlwfHgFfCj8DPQwwDz8vPyUaB1g8Xg8",
          "textureType": "image",
          "translation": [
              -33.21510285879002,
              2.8085719447183823,
              -14.283459867837417
          ],
          "type": "2d"
      },
     
  },
  {
      "card": {
          "cornerRadius": 0.02,
          "fileName": "/Wall-Image-10.jpg",
          "fullBright": true,
          "layers": [
              "pointer",
              "walk"
          ],
          "modelType": "img",
          "name": "/Wall-Image-10.jpg",
          "rotation": [
              0.0052856603603317715,
              -0.4974663842924843,
              0.0006670883316491816,
              0.867466894634415
          ],
          "scale": [
              13.695701720896057,
              13.695701720896057,
              13.695701720896057
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "33MEEFmsXW30XN7SnTfGc1-psan10pXpd9kdr_nAtmWUW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcXVp8QXh1BQYBW310Zl1gAUNdR3gFd2JhAXpCARxQXF4dRl9HWkBaXh1fWl1XUh1RVkFdUkFXHV5aUEFcRVZBQFYcZnFde3pYUgVUX3oCd3FZS2N3YEcAZnYFYR5JV39wdWEKUXZKQ3F3ZEFwCxxXUkdSHEB8VVV6YgFsfn4KAANaaUd5ZERxYwBjAXp0Y0VJdWZ5HltrfUdZV0B4Qn4",
          "textureType": "image",
          "translation": [
              26.88153480093431,
              4.7007605470232665,
              -27.563719836816617
          ],
          "type": "2d"
      },
      
  },
  {
      "card": {
          "cornerRadius": 0.02,
          "fileName": "/Wall-Image-11.jpg",
          "fullBright": true,
          "layers": [
              "pointer",
              "walk"
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
              15.496082733769747,
              15.496082733769747,
              15.496082733769747
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "3D8uoKbttvJm1pLoDoLg37kFzPkmj-lnE0kH-675-MmULDAwNDd-a2siLSghN2oxN2onNis1MSEwai0razFrKi0LNg8CcnF2LAoDESoXdjQqMA9yABUWdg01dmsnKylqMSgwLTctKWooLSogJWomITYqJTYgaiktJzYrMiE2NyFrEQYqDA0vJXIjKA11AAYuPBQAFzB3EQFyFmk-IAgHAhZ9JgE9NAYAEzYHfGsgJTAlawc-KAFwLHcBKwd2fSUwDw0sNyU1CXdwPgoKcAoSJT4JPAgOciI9LDUNaR0",
          "textureType": "image",
          "translation": [
              15.87301142777796,
              5.515024016217588,
              -34.08584426353626
          ],
          "type": "2d"
      },
  },
  {
      "card": {
          "cornerRadius": 0.02,
          "fileName": "/Wall-Image-25-LARGE.jpg",
          "fullBright": true,
          "layers": [
              "pointer"
          ],
          "modelType": "img",
          "name": "/Wall-Image-25-LARGE.jpg",
          "rotation": [
              0.01799102403104666,
              -0.6740751322825747,
              0.020827637344220544,
              0.7381498822158012
          ],
          "scale": [
              12.70847261691531,
              12.70847261691531,
              12.70847261691531
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "3hHhyioDZ-QSjFe_uyju6eBnarETsy3G39y39k7O-CBQABwcGBtSR0cOAQQNG0YdG0YLGgcZHQ0cRgEHRx1HBgEnGiMuXl1aACYvPQY7WhgGHCNeLDk6WiEZWkcLBwVGHQQcARsBBUYEAQYMCUYKDRoGCRoMRgUBCxoHHg0aGw1HPSoGICEDCV4PBCFZLCoCEDgsOxxbPS1eOkUSDCQrLjpRCi0RGCosPxorUEcMCRwJRwUgITAmPgNdJw5YL10hDDdePjxdEQ4OJhkuMRsLAiYAITADBTw6ATBcGgs",
          "textureType": "image",
          "translation": [
              35.87881285529373,
              1.9941643304883732,
              -72.71226207608834
          ],
          "type": "2d"
      }
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
              -0.00826720726230231,
              0,
              0.9999658260581118
          ],
          "scale": [
              11.48401057264525,
              11.48401057264525,
              11.48401057264525
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "3zvKiMrTXxtzEtjbmA82W6cNtgMhVNfI_OXUfPEeJAN0Eg4OCglAVVUcExYfCVQPCVQZCBULDx8OVBMVVQ9VFBM1CDE8TE9IEjQ9LxQpSAoUDjFMPisoSDMLSFUZFRdUDxYOEwkTF1QWExQeG1QYHwgUGwgeVBcTGQgVDB8ICR9VLzgUMjMRG0wdFjNLPjgQAio-KQ5JLz9MKFcAHjY5PChDGD8DCjg-LQg5QlUeGw4bVUM1HxJDSi49OSI1LyMjSB4REygAMgMfNggYPy8dET8ZNzsJABAUKig9EEo",
          "textureType": "image",
          "translation": [
              12.711927274309163,
              3.9568660588896756,
              -165.54337787501396
          ],
          "type": "2d"
      },
      "id": "0017"
  },
  {
      "card": {
          "cornerRadius": 0.02,
          "fileName": "/Wall-Image-13.jpg",
          "fullBright": true,
          "layers": [
              "pointer"
          ],
          "modelType": "img",
          "name": "/Wall-Image-13.jpg",
          "rotation": [
              0,
              0.014581056445678496,
              0,
              0.9998936907456352
          ],
          "scale": [
              11.854487815230327,
              11.854487815230327,
              11.854487815230327
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "3xQIp8aY09rbBoYfFUAn1fUhDB8hVU4owJTjQEZGtwmUEAwMCAtCV1ceERQdC1YNC1YbChcJDR0MVhEXVw1XFhE3CjM-Tk1KEDY_LRYrSggWDDNOPCkqSjEJSlcbFxVWDRQMEQsRFVYUERYcGVYaHQoWGQocVhURGwoXDh0KCx1XLToWMDETGU4fFDFJPDoSACg8KwxLLT1OKlUCHDQ7PipBGj0BCDo8Lwo7QFccGQwZVxcbGzRMFEkzSR5NMwgBSkFPDxUxLABMTQw9LlUnKgk6Sh0CLyI7TQwsCDE",
          "textureType": "image",
          "translation": [
              -9.916900142313576,
              4.282946920457727,
              -166.03706160322366
          ],
          "type": "2d"
      },
      "id": "0018"
  },
  {
      "card": {
          "cornerRadius": 0.02,
          "fileName": "/Screenshot 2023-06-19 at 1.47.53 PM (1).png",
          "fullBright": true,
          "layers": [
              "pointer"
          ],
          "modelType": "img",
          "name": "/Screenshot 2023-06-19 at 1.47.53 PM (1).png",
          "rotation": [
              0,
              0,
              0,
              1
          ],
          "scale": [
              16.0112366323676,
              16.0112366323676,
              16.0112366323676
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "32alWWEn8enuLZplnsx5DzcmV3ReS0d1I0jUChEs__MQWkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcdXFt9QHl0BAcAWnx1Z1xhAEJcRnkEdmNgAHtDAB1RXV8cR15GW0FbXxxeW1xWUxxQV0BcU0BWHF9bUUBdRFdAQVcdZ3BcentZUwRVXnsDdnBYSmJ2YUYBZ3cEYB9IVn5xdGALUHdLQnB2ZUBxCh1WU0ZTHURwWkVnRWhBanteXmprYh9fY2pYekJVY3dRAl0GcX8DV0BheXZzdX9qXmc",
          "textureType": "image",
          "translation": [
              -0.5110924854994041,
              3.0009171430288677,
              -22.96689164106524
          ],
          "type": "2d"
      },
      "id": "0019"
  },
  {
      "card": {
          "dataLocation": "3FzaQB1honvYS8FK-24mZT68u8fTjOVvfAQk0LrVxvRALjIyNjV8aWkgLyojNWgzNWglNCk3MyMyaC8paTNpKC8JNA0AcHN0LggBEygVdDYoMg1wAhcUdA83dGklKStoMyoyLzUvK2gqLygiJ2gkIzQoJzQiaCsvJTQpMCM0NSNpDgExIwQhFjcIfg50dgAxCyU_EA8IPw0IdHUPEic_cHdyLzAXJAsyFxwzF2kiJzInaSgRcjAzMXIvKC4EBCsSfw0idQp1DRkxMiAZHAo1cyoxLBA_KCJ-LxV2ciU",
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
              0.020085640337909584,
              0.0164236383016843,
              -0.0003299903982662527,
              0.9996633044497979
          ],
          "scale": [
              3.479817128973117,
              3.479817128973117,
              3.479817128973117
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -33.396833814559216,
              7.590759703187082,
              -26.313784977170734
          ],
          "type": "3d"
      },
      "id": "0020"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              0.44648160748472404,
              0,
              0.8947928107544545
          ],
          "scale": [
              0.5483529078535657,
              0.5483529078535657,
              0.5483529078535657
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -30.859149889267634,
              -1.5766737913894047,
              -26.826697885081476
          ],
          "type": "3d"
      },
      "id": "0021"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              0.251850421196808,
              0,
              0.9677661728656312
          ],
          "scale": [
              0.6545874502722072,
              0.6545874502722072,
              0.6545874502722072
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -20.70313218993002,
              -1.5548868707878416,
              -87.52893895772206
          ],
          "type": "3d"
      },
      "id": "0022"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              0.004126703787990927,
              -0.2720110129911378,
              0.008682221824099461,
              0.9622461214011613
          ],
          "scale": [
              0.5620022063004652,
              0.5620022063004652,
              0.5620022063004652
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -25.5855873766085,
              -1.579563123171919,
              -27.522846923445464
          ],
          "type": "3d"
      },
      "id": "0023"
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
              -0.0001307630029273258,
              0.7077459014339349,
              0.00013052672415733366,
              -0.7064670585860874
          ],
          "scale": [
              12.167237119685035,
              12.167237119685035,
              12.167237119685035
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              -10.494872389481188,
              -3.077736961092249,
              -29.085032242253188
          ],
          "type": "2d"
      },
      "id": "0024"
  },
  {
      "card": {
          "dataLocation": "3HXFO3TUEzXrmmKiSQjGvXh9xvAW6WI6NhlD81mNIjysIDw8ODtyZ2cuISQtO2Y9O2YrOic5PS08ZiEnZz1nJiEHOgMOfn16IAYPHSYbejgmPAN-DBkaegE5emcrJyVmPSQ8ITshJWYkISYsKWYqLTomKTosZiUhKzonPi06Oy1nAA8_LQovGDkGcAB6eA4_BSsxHgEGMQMGensBHCkxfnl8IT4ZKgU8GRI9GWcsKTwpZzAhJR4LLBghfAAyAjEOOzgtJik_KiIHHhgZJmV-ejsZfSZ9PAsjen0dPS8",
          "dataScale": [
              2.1323969820002877,
              2.1323969820002877,
              2.1323969820002877
          ],
          "fileName": "/persian_malayer_carpet.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/persian_malayer_carpet.glb",
          "rotation": [
              -0.7419031495268453,
              -0.11016722240017765,
              0.65793947842843,
              -0.06751697976141452
          ],
          "scale": [
              3.1983594386318783,
              3.1983594386318783,
              3.1983594386318783
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -29.616312324508385,
              6.538132200353611,
              -83.50490607115469
          ],
          "type": "3d"
      },
      "id": "0025"
  },
  {
      "card": {
          "dataLocation": "3kjNWt9wIkK5UE4AUVn4-kIvv1ruF8qKyDjUlfFTxlwEAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5EBQIkGSAtXV5ZAyUsPgU4WRsFHyBdLzo5WSIaWUQIBAZFHgcfAhgCBkUHAgUPCkUJDhkFChkPRQYCCBkEHQ4ZGA5EIywcDikMOxolUyNZWy0cJggSPSIlEiAlWVgiPwoSXVpfAh06CSYfOjEeOkQPCh8KRA8pCVsnMzNdOiMFJhoiXgksXiwtEl0COh4nPCobLF86LSwEWy4jAS4jDQw",
          "dataScale": [
              0.21079349120523178,
              0.21079349120523178,
              0.21079349120523178
          ],
          "fileName": "/Untitled.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/Untitled.glb",
          "rotation": [
              0,
              0.7025173405061601,
              0,
              0.7116666258074436
          ],
          "scale": [
              13.13435143535721,
              13.13435143535721,
              13.13435143535721
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              2675.1335043307267,
              -1.605747241696992,
              -35.39539454680717
          ],
          "type": "3d"
      },
      "id": "0026"
  },
  {
      "card": {
          "dataLocation": "3tRnzHQ94_37IhNm8hX6EpTMxyPNVa-GQOBTkRR5ik9AHAAABAdOW1sSHRgRB1oBB1oXBhsFAREAWh0bWwFbGh07Bj8yQkFGHDozIRonRgQaAD9CMCUmRj0FRlsXGxlaARgAHQcdGVoYHRoQFVoWEQYaFQYQWhkdFwYbAhEGBxFbITYaPD0fFUITGD1FMDYeDCQwJwBHITFCJlkOEDg3MiZNFjENBDYwIwY3TFsQFQAVW002BA0FJQQiPwZHLkNEIRwcRxMZIkw6Lh4zFzcaWRY1QyEWJy41JUUAMRc",
          "dataScale": [
              0.01017934610775697,
              0.01017934610775697,
              0.01017934610775697
          ],
          "fileName": "/grass_variations.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/grass_variations.glb",
          "rotation": [
              0.03665879463078321,
              -0.9990979022584995,
              -0.003553356071824776,
              -0.021139728936550195
          ],
          "scale": [
              0.9155023529820784,
              0.9155023529820784,
              0.9155023529820784
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -27.785299096560927,
              0.4957637738001429,
              -39.4723260498105
          ],
          "type": "3d"
      },
      "id": "0027"
  },
  {
      "card": {
          "dataLocation": "3VKIpmO6pFQHYXFWhs17y752eNIIkchpn-Ea1ItiEoAUPiIiJiVseXkwPzozJXgjJXg1JDknIzMieD85eSN5OD8ZJB0QYGNkPhgRAzgFZCY4Ih1gEgcEZB8nZHk1OTt4IzoiPyU_O3g6PzgyN3g0MyQ4NyQyeDs_NSQ5IDMkJTN5AxQ4Hh89N2AxOh9nEhQ8LgYSBSJlAxNgBHssMhoVEARvNBMvJhQSASQVbnkyNyI3eQElDhgJZQASDhsCYzgODhcEESxhYBM9ARABHmB7G2MFNxAiFy8bMxoyIiU",
          "dataScale": [
              0.01017934610775697,
              0.01017934610775697,
              0.01017934610775697
          ],
          "fileName": "/grass_variations.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/grass_variations.glb",
          "rotation": [
              0,
              -0.15987550613359688,
              0,
              0.9871371852678462
          ],
          "scale": [
              1.6991169144847382,
              1.6991169144847382,
              1.6991169144847382
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -27.363975759156936,
              0.4606550830724828,
              -39.97176215712393
          ],
          "type": "3d"
      },
      "id": "0028"
  },
  {
      "card": {
          "dataLocation": "3mfaLGu3DYFqrzogIhLVIFDqXk5yGdi5ybMRHDSnOu7wBRkZHR5XQkILBAEIHkMYHkMOHwIcGAgZQwQCQhhCAwQiHyYrW1hfBSMqOAM-Xx0DGSZbKTw_XyQcX0IOAgBDGAEZBB4EAEMBBAMJDEMPCB8DDB8JQwAEDh8CGwgfHghCCCYeAw44CBsOPTcODC4VNFQ-CDklNAMLHzoqIhgYFCkCDj4OJiBUAQFbOEIJDBkMQgA0KgcgPDQoKQFdNCMMARguOVs6XzlZBF8GKzw3GV4GCTUZXDk6PjwKQB4",
          "dataScale": [
              0.014301616678876375,
              0.014301616678876375,
              0.014301616678876375
          ],
          "fileName": "/fruit_veg_market.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/fruit_veg_market.glb",
          "rotation": [
              0.2647210255779624,
              0.9640359158711342,
              0.01964874842143442,
              0.013094205318653282
          ],
          "scale": [
              1.0779212390039712,
              1.0779212390039712,
              1.0779212390039712
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -30.83189670954051,
              -0.19576036357914184,
              -21.72991158381162
          ],
          "type": "3d"
      },
      "id": "0029"
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
              0.8703571650452068,
              0,
              0.49242096345958936
          ],
          "scale": [
              0.1457154880639272,
              0.1457154880639272,
              0.1457154880639272
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -22.80140676727416,
              -1.5636302636263952,
              -53.58782485277349
          ],
          "type": "3d"
      },
      "id": "0030"
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
              0.5195994599418458,
              0,
              0.8544099725706285
          ],
          "scale": [
              0.18275587165945398,
              0.18275587165945398,
              0.18275587165945398
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -24.68748612585904,
              -1.551408568306793,
              -55.556524981899315
          ],
          "type": "3d"
      },
      "id": "0031"
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
              -0.4371393330061262,
              0,
              0.8993937978099241
          ],
          "scale": [
              0.1719414924855295,
              0.1719414924855295,
              0.1719414924855295
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -20.69066098926505,
              -1.5421124950409677,
              -59.18384283553929
          ],
          "type": "3d"
      },
      "id": "0032"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0,
              0.004802268749924232,
              0,
              -0.9999884690409452
          ],
          "scale": [
              1.5473780796536376,
              1.5473780796536376,
              1.5473780796536376
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -7.386649374983165,
              -1.527104302947136,
              -46.34176898205709
          ],
          "type": "3d"
      },
      "id": "0033"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0,
              0.991760020832749,
              0,
              0.12810956669127216
          ],
          "scale": [
              1.4531108670680897,
              1.4531108670680897,
              1.4531108670680897
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -8.785719484183932,
              -1.54572276129615,
              -64.82628392736945
          ],
          "type": "3d"
      },
      "id": "0034"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0,
              0.08322297623883143,
              0,
              -0.9965309509623625
          ],
          "scale": [
              1.5064036691484979,
              1.5064036691484979,
              1.5064036691484979
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -27.412581585104416,
              -1.541161812795543,
              -74.62437876715735
          ],
          "type": "3d"
      },
      "id": "0035"
  },
  {
      "card": {
          "dataLocation": "3aQXZa4Lo9Bn6U9mR770FUbbKt7JxQ2NOq7NAo1J7yR8CRUVERJbTk4HCA0EEk8UEk8CEw4QFAQVTwgOThRODwguEyonV1RTCS8mNA8yUxEPFSpXJTAzUygQU04CDgxPFA0VCBIIDE8NCA8FAE8DBBMPABMFTwwIAhMOFwQTEgROBCoSDwI0BBcCMTsCACIZOFgyBDUpOA8HEzYmLhQUGCUOAjICKixYDQ1XNE4FABUATj4rVQgPAzQSFBQxETI3LQw5Vg0sIgUCVC0jOSI4FiUXCTkMIAdYLCoXNiw",
          "dataScale": [
              0.030384037956687388,
              0.030384037956687388,
              0.030384037956687388
          ],
          "fileName": "/Fez_Market Woman.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/Fez_Market Woman.glb",
          "rotation": [
              0,
              -0.3091324910422773,
              0,
              -0.9510189813994233
          ],
          "scale": [
              0.7323154162162623,
              0.7323154162162623,
              0.7323154162162623
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -24.22531435558835,
              -1.5785405381570028,
              -73.76088709500472
          ],
          "type": "3d"
      },
      "id": "0036"
  },
  {
      "card": {
          "dataLocation": "3xXNWwAjj42NuKzmfzIzF1e6alpmuZhXFuJgoPQkHHVsEAwMCAtCV1ceERQdC1YNC1YbChcJDR0MVhEXVw1XFhE3CjM-Tk1KEDY_LRYrSggWDDNOPCkqSjEJSlcbFxVWDRQMEQsRFVYUERYcGVYaHQoWGQocVhURGwoXDh0KCx1XHTMLFhstHQ4bKCIbGTsAIUErHSwwIRYeCi8_Nw0NATwXGysbMzVBFBROLVccGQwZVx5VAhNKTEtVL0oiIjIrTi4TSDA9Mgk7Fz0ZMxEMAAtAOSEtOUFMKztOAjU",
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
              -0.007439252175410813,
              -0.032852310554002305,
              -0.019098677972632202,
              -0.9992500306319898
          ],
          "scale": [
              2.8880350193655806,
              2.8880350193655806,
              2.8880350193655806
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -31.703489353638727,
              6.357543186489003,
              -70.96430061187544
          ],
          "type": "3d"
      },
      "id": "0037"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0,
              0.08322297623883143,
              0,
              -0.9965309509623625
          ],
          "scale": [
              1.3852360275181992,
              1.3852360275181992,
              1.3852360275181992
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -6.4554894879840035,
              -1.541161812795543,
              -69.47672959844512
          ],
          "type": "3d"
      },
      "id": "0038"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              -0.011110709603741704,
              -0.6003578272105407,
              0.0050720995271334255,
              -0.7996382339817965
          ],
          "scale": [
              1.4901983045671752,
              1.4901983045671752,
              1.4901983045671752
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -30.19694746709021,
              -1.5293399729785309,
              -68.86606286463363
          ],
          "type": "3d"
      },
      "id": "0039"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              -0.0015096489326241786,
              0.9593456508960654,
              0.005607279825458014,
              -0.2821740623797011
          ],
          "scale": [
              1.3159258332199817,
              1.3159258332199817,
              1.3159258332199817
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -29.623764186656466,
              -1.5463077319899867,
              -51.44217494000909
          ],
          "type": "3d"
      },
      "id": "0040"
  },
  {
      "card": {
          "dataLocation": "3eEiFnhhEXNSFIWvODol2SAoQjBoLXJJqtK0lQzQVbKgDRERFRZfSkoDDAkAFksQFksGFwoUEAARSwwKShBKCwwqFy4jU1BXDSsiMAs2VxULES5TITQ3VywUV0oGCghLEAkRDBYMCEsJDAsBBEsHABcLBBcBSwgMBhcKEwAXFgBKLSISACcCNRQrXS1XVSMSKAYcMywrHC4rV1YsMQQcU1RRDBM0BygRND8QNEoBBBEESgcyNBEwIAwXFFctUAAVCjVcMxc3ChYODC4ICCgNUDcdKCYSOj0QAQMUUiw",
          "dataScale": [
              1.0169014782746135,
              1.0169014782746135,
              1.0169014782746135
          ],
          "fileName": "/fine_persian_heriz_carpet.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/fine_persian_heriz_carpet.glb",
          "rotation": [
              0.00661996943690143,
              -0.11515231732680499,
              0.0007674270199187122,
              0.9933254909014922
          ],
          "scale": [
              1.9121833907804249,
              1.9121833907804249,
              1.9121833907804249
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -15.690616701236138,
              -1.4883784458838587,
              -66.25381853684974
          ],
          "type": "3d"
      },
      "id": "0041"
  },
  {
      "card": {
          "dataLocation": "3FzaQB1honvYS8FK-24mZT68u8fTjOVvfAQk0LrVxvRALjIyNjV8aWkgLyojNWgzNWglNCk3MyMyaC8paTNpKC8JNA0AcHN0LggBEygVdDYoMg1wAhcUdA83dGklKStoMyoyLzUvK2gqLygiJ2gkIzQoJzQiaCsvJTQpMCM0NSNpDgExIwQhFjcIfg50dgAxCyU_EA8IPw0IdHUPEic_cHdyLzAXJAsyFxwzF2kiJzInaSgRcjAzMXIvKC4EBCsSfw0idQp1DRkxMiAZHAo1cyoxLBA_KCJ-LxV2ciU",
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
              0.020085640337909584,
              0.0164236383016843,
              -0.0003299903982662527,
              0.9996633044497979
          ],
          "scale": [
              2.789683012069848,
              2.789683012069848,
              2.789683012069848
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -34.570959282369735,
              8.393345455366799,
              -14.140226719840577
          ],
          "type": "3d"
      },
      "id": "0042"
  },
  {
      "card": {
          "dataLocation": "3FzaQB1honvYS8FK-24mZT68u8fTjOVvfAQk0LrVxvRALjIyNjV8aWkgLyojNWgzNWglNCk3MyMyaC8paTNpKC8JNA0AcHN0LggBEygVdDYoMg1wAhcUdA83dGklKStoMyoyLzUvK2gqLygiJ2gkIzQoJzQiaCsvJTQpMCM0NSNpDgExIwQhFjcIfg50dgAxCyU_EA8IPw0IdHUPEic_cHdyLzAXJAsyFxwzF2kiJzInaSgRcjAzMXIvKC4EBCsSfw0idQp1DRkxMiAZHAo1cyoxLBA_KCJ-LxV2ciU",
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
              0.020085640337909584,
              0.0164236383016843,
              -0.0003299903982662527,
              0.9996633044497979
          ],
          "scale": [
              3.511409649985094,
              3.511409649985094,
              3.511409649985094
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -33.7744445675738,
              8.179643110009778,
              -38.424764463830066
          ],
          "type": "3d"
      },
      "id": "0043"
  },
  {
      "card": {
          "dataLocation": "3mfaLGu3DYFqrzogIhLVIFDqXk5yGdi5ybMRHDSnOu7wBRkZHR5XQkILBAEIHkMYHkMOHwIcGAgZQwQCQhhCAwQiHyYrW1hfBSMqOAM-Xx0DGSZbKTw_XyQcX0IOAgBDGAEZBB4EAEMBBAMJDEMPCB8DDB8JQwAEDh8CGwgfHghCCCYeAw44CBsOPTcODC4VNFQ-CDklNAMLHzoqIhgYFCkCDj4OJiBUAQFbOEIJDBkMQgA0KgcgPDQoKQFdNCMMARguOVs6XzlZBF8GKzw3GV4GCTUZXDk6PjwKQB4",
          "dataScale": [
              0.014301616678876375,
              0.014301616678876375,
              0.014301616678876375
          ],
          "fileName": "/fruit_veg_market.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/fruit_veg_market.glb",
          "rotation": [
              0.004690077606918142,
              -0.024826164487100535,
              -0.13128774974291013,
              0.9910222961650992
          ],
          "scale": [
              1.0779212390039712,
              1.0779212390039712,
              1.0779212390039712
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -31.46221361555781,
              -0.5793091449116917,
              -17.48449391776729
          ],
          "type": "3d"
      },
      "id": "0044"
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
              0.023475004908728152,
              0.004448707314939293,
              -0.009772547472618751,
              0.999666759707282
          ],
          "scale": [
              19.29828751792032,
              19.29828751792032,
              19.29828751792032
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "3EpkRQwDeERWtpD-S3iKohRropuAQFgLvUqC0sPeiv5cLTExNTZ_amojLCkgNmswNmsmNyo0MCAxaywqajBqKywKNw4Dc3B3LQsCECsWdzUrMQ5zARQXdww0d2omKihrMCkxLDYsKGspLCshJGsnIDcrJDchaygsJjcqMyA3NiBqEAcrDQwuJHMiKQx0AQcvPRUBFjF2EABzF2g_IQkGAxd8JwA8NQcBEjcGfWohJDEkaic2MTQNCSM_ISMBdCQ8dB0REHIwKHZ8HysxcC0cAQIqNjN3LQIiIxQXFn0",
          "textureType": "image",
          "translation": [
              -21.433521305730462,
              2.9130428095905443,
              -92.21098272519936
          ],
          "type": "2d"
      },
      "id": "0045"
  },
  {
      "card": {
          "dataLocation": "3xXNWwAjj42NuKzmfzIzF1e6alpmuZhXFuJgoPQkHHVsEAwMCAtCV1ceERQdC1YNC1YbChcJDR0MVhEXVw1XFhE3CjM-Tk1KEDY_LRYrSggWDDNOPCkqSjEJSlcbFxVWDRQMEQsRFVYUERYcGVYaHQoWGQocVhURGwoXDh0KCx1XHTMLFhstHQ4bKCIbGTsAIUErHSwwIRYeCi8_Nw0NATwXGysbMzVBFBROLVccGQwZVx5VAhNKTEtVL0oiIjIrTi4TSDA9Mgk7Fz0ZMxEMAAtAOSEtOUFMKztOAjU",
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
              0.10786157357679305,
              0.6620771633448492,
              -0.11282929538317338,
              -0.7330001779168362
          ],
          "scale": [
              5.36050883953745,
              5.36050883953745,
              5.36050883953745
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -21.654122833116848,
              9.229350072504603,
              -96.17467164751804
          ],
          "type": "3d"
      },
      "id": "0046"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0,
              0.9366628359123788,
              0,
              -0.35023239687467483
          ],
          "scale": [
              1.8544550070280044,
              1.8544550070280044,
              1.8544550070280044
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -27.819601490739988,
              -1.564289463823375,
              -87.92787103546483
          ],
          "type": "3d"
      },
      "id": "0047"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0.06588428079151187,
              0.9796515302363412,
              0.16271427208428152,
              -0.09729443206197362
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              17.337331269199645,
              -3.7840223500190655,
              -26.24417904636596
          ],
          "type": "3d"
      },
      "id": "0048"
  },
  {
      "card": {
          "dataLocation": "3wHAqMNPipFFywrDOWmPUkf1QvIsjvhJS6loKW3A-JqQHwMDBwRNWFgRHhsSBFkCBFkUBRgGAhIDWR4YWAJYGR44BTwxQUJFHzkwIhkkRQcZAzxBMyYlRT4GRVgUGBpZAhsDHgQeGlkbHhkTFlkVEgUZFgUTWRoeFAUYARIFBBJYIjUZPz4cFkEQGz5GMzUdDyczJANEIjJBJVoNEzs0MSVOFTIOBzUzIAU0T1gTFgMWWAUaHQQmDiUtHRYbQDYcJjwwKCEtOTwwEEIBIEYRLzJODUUlJDhPNh80JTY",
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
              -0.0026885452929609963,
              0.7660079067534598,
              -0.002256184153369138,
              0.6428215678930327
          ],
          "scale": [
              1.015338545845768,
              1.015338545845768,
              1.015338545845768
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -29.827978437888447,
              -1.5851951617842353,
              -46.84181490316138
          ],
          "type": "3d"
      },
      "id": "0049"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              -0.006865666812560145,
              0.8212624527750535,
              0.006728542128544478,
              0.570469607430533
          ],
          "scale": [
              0.5620022063004652,
              0.5620022063004652,
              0.5620022063004652
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -24.037805130176356,
              -1.579563123171919,
              -22.50270329474776
          ],
          "type": "3d"
      },
      "id": "0050"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              0.004126703787990927,
              -0.2720110129911378,
              0.008682221824099461,
              0.9622461214011613
          ],
          "scale": [
              0.5620022063004652,
              0.5620022063004652,
              0.5620022063004652
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -5.826274287205358,
              -1.579563123171919,
              -15.628239525884736
          ],
          "type": "3d"
      },
      "id": "0051"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              0.004126703787990927,
              -0.2720110129911378,
              0.008682221824099461,
              0.9622461214011613
          ],
          "scale": [
              0.5620022063004652,
              0.5620022063004652,
              0.5620022063004652
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -15.077911037736019,
              -1.579563123171919,
              -27.862081737087273
          ],
          "type": "3d"
      },
      "id": "0052"
  },
  {
      "card": {
          "dataLocation": "3wHAqMNPipFFywrDOWmPUkf1QvIsjvhJS6loKW3A-JqQHwMDBwRNWFgRHhsSBFkCBFkUBRgGAhIDWR4YWAJYGR44BTwxQUJFHzkwIhkkRQcZAzxBMyYlRT4GRVgUGBpZAhsDHgQeGlkbHhkTFlkVEgUZFgUTWRoeFAUYARIFBBJYIjUZPz4cFkEQGz5GMzUdDyczJANEIjJBJVoNEzs0MSVOFTIOBzUzIAU0T1gTFgMWWAUaHQQmDiUtHRYbQDYcJjwwKCEtOTwwEEIBIEYRLzJODUUlJDhPNh80JTY",
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
              -0.0003946531545942877,
              0.9980877926303064,
              -0.0034875337437486565,
              -0.06171255593180791
          ],
          "scale": [
              1.015338545845768,
              1.015338545845768,
              1.015338545845768
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -6.73508970174214,
              -1.5851951617842353,
              -60.71836504689524
          ],
          "type": "3d"
      },
      "id": "0053"
  },
  {
      "card": {
          "dataLocation": "3wHAqMNPipFFywrDOWmPUkf1QvIsjvhJS6loKW3A-JqQHwMDBwRNWFgRHhsSBFkCBFkUBRgGAhIDWR4YWAJYGR44BTwxQUJFHzkwIhkkRQcZAzxBMyYlRT4GRVgUGBpZAhsDHgQeGlkbHhkTFlkVEgUZFgUTWRoeFAUYARIFBBJYIjUZPz4cFkEQGz5GMzUdDyczJANEIjJBJVoNEzs0MSVOFTIOBzUzIAU0T1gTFgMWWAUaHQQmDiUtHRYbQDYcJjwwKCEtOTwwEEIBIEYRLzJODUUlJDhPNh80JTY",
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
              -0.0026885452929609963,
              0.7660079067534598,
              -0.002256184153369138,
              0.6428215678930327
          ],
          "scale": [
              1.015338545845768,
              1.015338545845768,
              1.015338545845768
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -4.947920179571681,
              -1.369424301105056,
              -51.88989800956178
          ],
          "type": "3d"
      },
      "id": "0054"
  },
  {
      "card": {
          "dataLocation": "3wHAqMNPipFFywrDOWmPUkf1QvIsjvhJS6loKW3A-JqQHwMDBwRNWFgRHhsSBFkCBFkUBRgGAhIDWR4YWAJYGR44BTwxQUJFHzkwIhkkRQcZAzxBMyYlRT4GRVgUGBpZAhsDHgQeGlkbHhkTFlkVEgUZFgUTWRoeFAUYARIFBBJYIjUZPz4cFkEQGz5GMzUdDyczJANEIjJBJVoNEzs0MSVOFTIOBzUzIAU0T1gTFgMWWAUaHQQmDiUtHRYbQDYcJjwwKCEtOTwwEEIBIEYRLzJODUUlJDhPNh80JTY",
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
              -0.0007826668444975873,
              0.9987214146055283,
              -0.003421414230510672,
              0.05043032188679658
          ],
          "scale": [
              1.015338545845768,
              1.015338545845768,
              1.015338545845768
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -28.553314513532918,
              -1.5851951617842353,
              -50.5210243187148
          ],
          "type": "3d"
      },
      "id": "0055"
  },
  {
      "card": {
          "dataLocation": "3FzaQB1honvYS8FK-24mZT68u8fTjOVvfAQk0LrVxvRALjIyNjV8aWkgLyojNWgzNWglNCk3MyMyaC8paTNpKC8JNA0AcHN0LggBEygVdDYoMg1wAhcUdA83dGklKStoMyoyLzUvK2gqLygiJ2gkIzQoJzQiaCsvJTQpMCM0NSNpDgExIwQhFjcIfg50dgAxCyU_EA8IPw0IdHUPEic_cHdyLzAXJAsyFxwzF2kiJzInaSgRcjAzMXIvKC4EBCsSfw0idQp1DRkxMiAZHAo1cyoxLBA_KCJ-LxV2ciU",
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
              -0.08366055235470622,
              -0.9516453363794758,
              0.04415271415993456,
              0.29227145525899634
          ],
          "scale": [
              4.776481916216921,
              4.776481916216921,
              4.776481916216921
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              28.726870872206398,
              12.765891959233935,
              -28.7404766995505
          ],
          "type": "3d"
      },
      "id": "0056"
  },
  {
      "card": {
          "dataLocation": "3HXFO3TUEzXrmmKiSQjGvXh9xvAW6WI6NhlD81mNIjysIDw8ODtyZ2cuISQtO2Y9O2YrOic5PS08ZiEnZz1nJiEHOgMOfn16IAYPHSYbejgmPAN-DBkaegE5emcrJyVmPSQ8ITshJWYkISYsKWYqLTomKTosZiUhKzonPi06Oy1nAA8_LQovGDkGcAB6eA4_BSsxHgEGMQMGensBHCkxfnl8IT4ZKgU8GRI9GWcsKTwpZzAhJR4LLBghfAAyAjEOOzgtJik_KiIHHhgZJmV-ejsZfSZ9PAsjen0dPS8",
          "dataScale": [
              2.1323969820002877,
              2.1323969820002877,
              2.1323969820002877
          ],
          "fileName": "/persian_malayer_carpet.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/persian_malayer_carpet.glb",
          "rotation": [
              -0.0611680301953063,
              0.6938378908467767,
              -0.05960736624591642,
              -0.7150485404478129
          ],
          "scale": [
              2.1314567075166932,
              2.1314567075166932,
              2.1314567075166932
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -30.662450904531564,
              3.830352178280031,
              -49.44357281416757
          ],
          "type": "3d"
      },
      "id": "0057"
  },
  {
      "card": {
          "dataLocation": "3HXFO3TUEzXrmmKiSQjGvXh9xvAW6WI6NhlD81mNIjysIDw8ODtyZ2cuISQtO2Y9O2YrOic5PS08ZiEnZz1nJiEHOgMOfn16IAYPHSYbejgmPAN-DBkaegE5emcrJyVmPSQ8ITshJWYkISYsKWYqLTomKTosZiUhKzonPi06Oy1nAA8_LQovGDkGcAB6eA4_BSsxHgEGMQMGensBHCkxfnl8IT4ZKgU8GRI9GWcsKTwpZzAhJR4LLBghfAAyAjEOOzgtJik_KiIHHhgZJmV-ejsZfSZ9PAsjen0dPS8",
          "dataScale": [
              2.1323969820002877,
              2.1323969820002877,
              2.1323969820002877
          ],
          "fileName": "/persian_malayer_carpet.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/persian_malayer_carpet.glb",
          "rotation": [
              -0.2885600358761642,
              0.31673806452399944,
              -0.6297188246674932,
              0.6479693712175977
          ],
          "scale": [
              1.8609429955355783,
              1.8609429955355783,
              1.8609429955355783
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -11.349579898100263,
              3.0878788287058128,
              -89.9804767750152
          ],
          "type": "3d"
      },
      "id": "0058"
  },
  {
      "card": {
          "dataLocation": "3mfaLGu3DYFqrzogIhLVIFDqXk5yGdi5ybMRHDSnOu7wBRkZHR5XQkILBAEIHkMYHkMOHwIcGAgZQwQCQhhCAwQiHyYrW1hfBSMqOAM-Xx0DGSZbKTw_XyQcX0IOAgBDGAEZBB4EAEMBBAMJDEMPCB8DDB8JQwAEDh8CGwgfHghCCCYeAw44CBsOPTcODC4VNFQ-CDklNAMLHzoqIhgYFCkCDj4OJiBUAQFbOEIJDBkMQgA0KgcgPDQoKQFdNCMMARguOVs6XzlZBF8GKzw3GV4GCTUZXDk6PjwKQB4",
          "dataScale": [
              0.014301616678876375,
              0.014301616678876375,
              0.014301616678876375
          ],
          "fileName": "/fruit_veg_market.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/fruit_veg_market.glb",
          "rotation": [
              0.03321666329283491,
              0.9462525306872904,
              -0.07458837819520131,
              0.3129526725973121
          ],
          "scale": [
              1.3676723887358817,
              1.3676723887358817,
              1.3676723887358817
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -31.69483324372969,
              -0.7447160958061887,
              -10.513227612432194
          ],
          "type": "3d"
      },
      "id": "0059"
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
            1.8412525696837054, 8.241627523531172, 26.256841764963156
          ],
          "type": "2d"
      },
      "id": "0060"
  },
  {
      "card": {
          "dataLocation": "3FzaQB1honvYS8FK-24mZT68u8fTjOVvfAQk0LrVxvRALjIyNjV8aWkgLyojNWgzNWglNCk3MyMyaC8paTNpKC8JNA0AcHN0LggBEygVdDYoMg1wAhcUdA83dGklKStoMyoyLzUvK2gqLygiJ2gkIzQoJzQiaCsvJTQpMCM0NSNpDgExIwQhFjcIfg50dgAxCyU_EA8IPw0IdHUPEic_cHdyLzAXJAsyFxwzF2kiJzInaSgRcjAzMXIvKC4EBCsSfw0idQp1DRkxMiAZHAo1cyoxLBA_KCJ-LxV2ciU",
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
              -0.08159421445198733,
              -0.7217973265827562,
              0.07477831879872236,
              0.6831977799609613
          ],
          "scale": [
              4.626868691480497,
              4.626868691480497,
              4.626868691480497
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              16.950392491455933,
              12.85963101270942,
              -36.14917254951243
          ],
          "type": "3d"
      },
      "id": "0061"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0.03598274015159516,
              0.9750718067512445,
              0.07430268254596369,
              0.20595952383058166
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              25.8820867530075,
              -3.9792046404373407,
              -25.012830651610017
          ],
          "type": "3d"
      },
      "id": "0062"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              -0.09103341846369227,
              0.8301055561019449,
              -0.17551527513813325,
              -0.5213751726393192
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              28.128498718734214,
              -3.710337612301415,
              -20.544215411612235
          ],
          "type": "3d"
      },
      "id": "0063"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0.011115770350669067,
              0.3433798260338885,
              -0.021642245132645184,
              -0.9388814344463661
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              9.339634833984654,
              -1.460025044020923,
              -19.746992760295946
          ],
          "type": "3d"
      },
      "id": "0064"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer",
              "walk"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0.007875432065907961,
              0.4753057411856812,
              -0.02302009328055789,
              -0.879484226846087
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              19.630197829006896,
              -1.600493158293197,
              -26.101778885533435
          ],
          "type": "3d"
      },
      "id": "0065"
  },
  {
      "card": {
          "dataLocation": "3q3r_RMmo4x9DhAT7RK37ZyfuTriTXPl1MPXN7CgmRC0GQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReHxg-Azo3R0RDGT82JB8iQwEfBTpHNSAjQzgAQ14SHhxfBB0FGAIYHF8dGB8VEF8TFAMfEAMVXxwYEgMeBxQDAhReJDMfOTgaEEcWHThANTMbCSE1IgVCJDRHI1wLFT0yNyNIEzQIATM1JgMySV4VEAUQXkclAR1CRgg1XDgoBkASHQE2Jxk7Ez9BCDgeNyY9QRcHFAkeKzkTLgs6IjA",
          "dataScale": [
              0.0167393641463029,
              0.0167393641463029,
              0.0167393641463029
          ],
          "fileName": "/wood_crates.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/wood_crates.glb",
          "rotation": [
              0,
              0.04243918733482466,
              0,
              0.9990990518353823
          ],
          "scale": [
              1.0633042558494799,
              1.0633042558494799,
              1.0633042558494799
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              20.686903411249872,
              -1.3555799447764643,
              -31.739331953181964
          ],
          "type": "3d"
      },
      "id": "0066"
  },
  {
      "card": {
          "dataLocation": "3q3r_RMmo4x9DhAT7RK37ZyfuTriTXPl1MPXN7CgmRC0GQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReHxg-Azo3R0RDGT82JB8iQwEfBTpHNSAjQzgAQ14SHhxfBB0FGAIYHF8dGB8VEF8TFAMfEAMVXxwYEgMeBxQDAhReJDMfOTgaEEcWHThANTMbCSE1IgVCJDRHI1wLFT0yNyNIEzQIATM1JgMySV4VEAUQXkclAR1CRgg1XDgoBkASHQE2Jxk7Ez9BCDgeNyY9QRcHFAkeKzkTLgs6IjA",
          "dataScale": [
              0.0167393641463029,
              0.0167393641463029,
              0.0167393641463029
          ],
          "fileName": "/wood_crates.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/wood_crates.glb",
          "rotation": [
              0,
              0.7049016591748434,
              0,
              0.70930504784088
          ],
          "scale": [
              1.297525939617375,
              1.297525939617375,
              1.297525939617375
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              10.518245471632296,
              -1.600701712904974,
              -30.94527591382721
          ],
          "type": "3d"
      },
      "id": "0067"
  },
  {
      "card": {
          "dataLocation": "3kjNWt9wIkK5UE4AUVn4-kIvv1ruF8qKyDjUlfFTxlwEAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5EBQIkGSAtXV5ZAyUsPgU4WRsFHyBdLzo5WSIaWUQIBAZFHgcfAhgCBkUHAgUPCkUJDhkFChkPRQYCCBkEHQ4ZGA5EIywcDikMOxolUyNZWy0cJggSPSIlEiAlWVgiPwoSXVpfAh06CSYfOjEeOkQPCh8KRA8pCVsnMzNdOiMFJhoiXgksXiwtEl0COh4nPCobLF86LSwEWy4jAS4jDQw",
          "dataScale": [
              0.21079349120523178,
              0.21079349120523178,
              0.21079349120523178
          ],
          "fileName": "/Untitled.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/Untitled.glb",
          "rotation": [
              0,
              0.7025173405061601,
              0,
              0.7116666258074436
          ],
          "scale": [
              13.13435143535721,
              13.13435143535721,
              13.13435143535721
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -12.787736467647267,
              -1.605747241696992,
              -53.65777521938498
          ],
          "type": "3d"
      },
      "id": "0068"
  },
  {
      "card": {
          "dataLocation": "3leyirqMmSe8x-pAwtSUG3bOA5n2SN1HzM8cukGdE0hEBBgYHB9WQ0MKBQAJH0IZH0IPHgMdGQkYQgUDQxlDAgUjHicqWlleBCIrOQI_XhwCGCdaKD0-XiUdXkMPAwFCGQAYBR8FAUIABQIIDUIOCR4CDR4IQgEFDx4DGgkeHwlDOS4CJCUHDVoLACVdKC4GFDwoPxhfOSlaPkEWCCAvKj5VDikVHC4oOx4vVEMIDRgNQzwZNhRYDQBcPRQ0Ij82AVo-WThaI11bBFwzPT01XCkkFVwbJloADyInXD0",
          "dataScale": [
              0.0985960414748485,
              0.0985960414748485,
              0.0985960414748485
          ],
          "fileName": "/hay_bale.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/hay_bale.glb",
          "rotation": [
              0,
              -0.38468021507050976,
              0,
              0.9230499077153447
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              13.985549876486896,
              -0.011999999254941773,
              -19.052975977588176
          ],
          "type": "3d"
      },
      "id": "0069"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              -0.0029286772856383517,
              -0.47103823300991937,
              0.026822566797775647,
              0.8817000373157688
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              20.18342859485428,
              -0.881650347249272,
              -0.4204197462841819
          ],
          "type": "3d"
      },
      "id": "0070"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.2623218400205213,
              0,
              0.9649804413811962
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              24.557691136963086,
              -0.881650347249272,
              -1.1469207506984178
          ],
          "type": "3d"
      },
      "id": "0071"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.8843534747749435,
              0,
              0.46681787846384326
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              27.473671597812146,
              -0.8509921111565918,
              1.1888964449129986
          ],
          "type": "3d"
      },
      "id": "0072"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              0.1496536658038174,
              0,
              0.9887384792307213
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              18.83441654742811,
              -0.881255761095515,
              -4.718501413201588
          ],
          "type": "3d"
      },
      "id": "0073"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.8843534747749435,
              0,
              0.46681787846384326
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              28.30446301295099,
              -0.881650347249272,
              2.8030688384389855
          ],
          "type": "3d"
      },
      "id": "0074"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.8843534747749435,
              0,
              0.46681787846384326
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              29.692159209856108,
              -0.881650347249272,
              9.472621795755444
          ],
          "type": "3d"
      },
      "id": "0075"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.42630465412168556,
              0,
              0.9045796492704168
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              30.307638534181496,
              -0.881650347249272,
              16.424861784589744
          ],
          "type": "3d"
      },
      "id": "0076"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.9908059543299792,
              0,
              0.135290653277524
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              25.567778956422668,
              -0.881650347249272,
              4.308105861955999
          ],
          "type": "3d"
      },
      "id": "0077"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.8843534747749435,
              0,
              0.46681787846384326
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              24.404229818185588,
              -0.881650347249272,
              4.5064817406694635
          ],
          "type": "3d"
      },
      "id": "0078"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.8843534747749435,
              0,
              0.46681787846384326
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              29.692159209856108,
              -0.881650347249272,
              4.520602115227135
          ],
          "type": "3d"
      },
      "id": "0079"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.8843534747749435,
              0,
              0.46681787846384326
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              27.29542308247348,
              -0.881650347249272,
              12.092404396810227
          ],
          "type": "3d"
      },
      "id": "0080"
  },
  {
      "card": {
          "dataLocation": "38Pj1e1ViYcTgjOSLVQQOHlHXCy0u99-M7H_EOJVv_tsUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XVlF3SnN-Dg0KUHZ_bVZrCkhWTHMOfGlqCnFJChdbV1UWTVRMUUtRVRZUUVZcWRZaXUpWWUpcFlVRW0pXTl1KS10XbXpWcHFTWQ5fVHEJfHpSQGh8a0wLbX0OahVCXHR7fmoBWn1BSHp8b0p7ABdcWUxZFw5_UUhSVWtWDnkMVmt0QhV1XF5yCH5xfGtfFX5yTwp3alV3AHsJAEAND2E",
          "dataScale": [
              3.4649802341500924,
              3.4649802341500924,
              3.4649802341500924
          ],
          "fileName": "/sheep-ver2.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/sheep-ver2.glb",
          "rotation": [
              0,
              -0.8843534747749435,
              0,
              0.46681787846384326
          ],
          "scale": [
              0.4679701186652997,
              0.4679701186652997,
              0.4679701186652997
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              19.570700487767255,
              -0.881650347249272,
              -8.369050510049995
          ],
          "type": "3d"
      },
      "id": "0081"
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
              -0.4217662556069558,
              0,
              0.9067045966748418
          ],
          "scale": [
              0.14542689433658945,
              0.14542689433658945,
              0.14542689433658945
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -17.51890275337088,
              -1.5636302636263952,
              -24.546424763766638
          ],
          "type": "3d"
      },
      "id": "0082"
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
              0.20539302930158293,
              0,
              0.9786795714197363
          ],
          "scale": [
              0.14141536703580285,
              0.14141536703580285,
              0.14141536703580285
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -16.948234687450213,
              -1.5636302636263952,
              -46.76139185947075
          ],
          "type": "3d"
      },
      "id": "0083"
  },
  {
      "card": {
          "dataLocation": "3mfaLGu3DYFqrzogIhLVIFDqXk5yGdi5ybMRHDSnOu7wBRkZHR5XQkILBAEIHkMYHkMOHwIcGAgZQwQCQhhCAwQiHyYrW1hfBSMqOAM-Xx0DGSZbKTw_XyQcX0IOAgBDGAEZBB4EAEMBBAMJDEMPCB8DDB8JQwAEDh8CGwgfHghCCCYeAw44CBsOPTcODC4VNFQ-CDklNAMLHzoqIhgYFCkCDj4OJiBUAQFbOEIJDBkMQgA0KgcgPDQoKQFdNCMMARguOVs6XzlZBF8GKzw3GV4GCTUZXDk6PjwKQB4",
          "dataScale": [
              0.014301616678876375,
              0.014301616678876375,
              0.014301616678876375
          ],
          "fileName": "/fruit_veg_market.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/fruit_veg_market.glb",
          "rotation": [
              -0.20429710946731927,
              0.8836435605312021,
              0.08878273256864495,
              -0.41176980874352953
          ],
          "scale": [
              1.3483809690675757,
              1.3483809690675757,
              1.3483809690675757
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -13.987579130787203,
              -0.19576036357914184,
              -89.40936115994673
          ],
          "type": "3d"
      },
      "id": "0084"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              0.251850421196808,
              0,
              0.9677661728656312
          ],
          "scale": [
              0.6545874502722072,
              0.6545874502722072,
              0.6545874502722072
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -18.430033755692676,
              -1.5548868707878416,
              -91.07761975692246
          ],
          "type": "3d"
      },
      "id": "0085"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              -0.11557863490824638,
              0,
              0.9932983334088236
          ],
          "scale": [
              0.6545874502722072,
              0.6545874502722072,
              0.6545874502722072
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -24.670544013138723,
              -1.5548868707878416,
              -90.75861669991458
          ],
          "type": "3d"
      },
      "id": "0086"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              -0.02298472631261914,
              0.8815961459865658,
              -0.007978062496891787,
              0.4713770128641864
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              26.98023577690437,
              -1.4705306856834182,
              -15.58061781244016
          ],
          "type": "3d"
      },
      "id": "0087"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              -0.022530454987294626,
              0.35092866683906215,
              0.009182903840061096,
              0.9360860663772794
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              17.02659545095906,
              -1.523724375211767,
              -15.482460473527611
          ],
          "type": "3d"
      },
      "id": "0088"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              -0.02298472631261914,
              0.8815961459865658,
              -0.007978062496891787,
              0.4713770128641864
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              26.98023577690437,
              -1.5181449295012095,
              -11.061403918254967
          ],
          "type": "3d"
      },
      "id": "0089"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              -0.023159656191723547,
              0.8706851599462473,
              -0.007455028501050756,
              0.4912386437613671
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              25.00217436519589,
              -1.4267866997458425,
              1.6831240193285795
          ],
          "type": "3d"
      },
      "id": "0090"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              -0.010405292559157196,
              0.9539309973422363,
              -0.02199265813012756,
              -0.29903796612600203
          ],
          "scale": [
              1.357627783077763,
              1.357627783077763,
              1.357627783077763
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              25.00217436519589,
              -1.517940307920731,
              -6.705787355424446
          ],
          "type": "3d"
      },
      "id": "0091"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              -0.003676996675089629,
              0.5317572619156747,
              0.008882024285491875,
              0.8468422543425592
          ],
          "scale": [
              0.5620022063004652,
              0.5620022063004652,
              0.5620022063004652
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -11.163498305565792,
              -1.579563123171919,
              -22.50270329474776
          ],
          "type": "3d"
      },
      "id": "0092"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              -0.004894037711184871,
              0.6459796553624543,
              0.008273998721186025,
              0.7632940941719961
          ],
          "scale": [
              0.6093672678622275,
              0.6093672678622275,
              0.6093672678622275
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -27.990212693455632,
              -1.579563123171919,
              -34.329389698379806
          ],
          "type": "3d"
      },
      "id": "0093"
  },
  {
      "card": {
          "dataLocation": "3mfaLGu3DYFqrzogIhLVIFDqXk5yGdi5ybMRHDSnOu7wBRkZHR5XQkILBAEIHkMYHkMOHwIcGAgZQwQCQhhCAwQiHyYrW1hfBSMqOAM-Xx0DGSZbKTw_XyQcX0IOAgBDGAEZBB4EAEMBBAMJDEMPCB8DDB8JQwAEDh8CGwgfHghCCCYeAw44CBsOPTcODC4VNFQ-CDklNAMLHzoqIhgYFCkCDj4OJiBUAQFbOEIJDBkMQgA0KgcgPDQoKQFdNCMMARguOVs6XzlZBF8GKzw3GV4GCTUZXDk6PjwKQB4",
          "dataScale": [
              0.014301616678876375,
              0.014301616678876375,
              0.014301616678876375
          ],
          "fileName": "/fruit_veg_market.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/fruit_veg_market.glb",
          "rotation": [
              0.06311442248565682,
              0.9978386891927669,
              -0.010273458946117343,
              0.015131955116446993
          ],
          "scale": [
              1.0779212390039712,
              1.0779212390039712,
              1.0779212390039712
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -31.85549811235287,
              -0.8576218457913825,
              -23.943004519281768
          ],
          "type": "3d"
      },
      "id": "0094"
  },
  {
      "card": {
          "dataLocation": "3SHpVMuIcwGyFZ1376n3AUM-8u2MQlUGd3uaaScwxhXoOycnIyBpfHw1Oj82IH0mIH0wITwiJjYnfTo8fCZ8PTocIRgVZWZhOx0UBj0AYSM9JxhlFwIBYRoiYXwwPD59Jj8nOiA6Pn0_Oj03Mn0xNiE9MiE3fT46MCE8JTYhIDZ8BhE9Gxo4MmU0PxpiFxE5KwMXACdgBhZlAX4pNx8QFQFqMRYqIxEXBCEQa3w3MicyfD5hHhAVNDUxJDs3JAs1I2YqYCEeHGEiHxYpJWUYBjcWNxk2JgwSCiAECiA",
          "dataScale": [
              1.9514944516857142,
              1.9514944516857142,
              1.9514944516857142
          ],
          "fileName": "/fishing_rod (1).glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/fishing_rod (1).glb",
          "rotation": [
              0,
              0.6851767637889464,
              0,
              0.7283768271737551
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -24.313478991417163,
              -0.011999999254941773,
              -47.652544413071865
          ],
          "type": "3d"
      },
      "id": "0095"
  },
  {
      "card": {
          "dataLocation": "3iCIckgIfQGZVuphg_fCpbzBEXODW87v2-pkPzLlkiHMAR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGBwAmGyIvX1xbAScuPAc6WxkHHSJfLTg7WyAYW0YKBgRHHAUdABoABEcFAAcNCEcLDBsHCBsNRwQAChsGHwwbGgxGPCsHISACCF8OBSBYLSsDETktOh1aPCxfO0QTDSUqLztQCywQGSstPhsqUUYNCB0IRlswDT8jGUQgPTM-HjkFP14uKAxeEz0dIR9dATAoJQsnUCIFICQ6OhwtXAI",
          "dataScale": [
              0.02500156110586974,
              0.02500156110586974,
              0.02500156110586974
          ],
          "fileName": "/broom.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/broom.glb",
          "rotation": [
              0,
              0.09975543010428214,
              0,
              -0.9950119869452375
          ],
          "scale": [
              2.191161503788361,
              2.191161503788361,
              2.191161503788361
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -26.71759404349671,
              -2.34996226496092,
              -78.19424559731645
          ],
          "type": "3d"
      },
      "id": "0096"
  },
  {
      "card": {
          "dataLocation": "3iCIckgIfQGZVuphg_fCpbzBEXODW87v2-pkPzLlkiHMAR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGBwAmGyIvX1xbAScuPAc6WxkHHSJfLTg7WyAYW0YKBgRHHAUdABoABEcFAAcNCEcLDBsHCBsNRwQAChsGHwwbGgxGPCsHISACCF8OBSBYLSsDETktOh1aPCxfO0QTDSUqLztQCywQGSstPhsqUUYNCB0IRlswDT8jGUQgPTM-HjkFP14uKAxeEz0dIR9dATAoJQsnUCIFICQ6OhwtXAI",
          "dataScale": [
              0.02500156110586974,
              0.02500156110586974,
              0.02500156110586974
          ],
          "fileName": "/broom.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/broom.glb",
          "rotation": [
              0,
              0.09975543010428214,
              0,
              -0.9950119869452375
          ],
          "scale": [
              2.496569040673442,
              2.496569040673442,
              2.496569040673442
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -26.019630075867788,
              -2.7170856528586316,
              -86.89539340821304
          ],
          "type": "3d"
      },
      "id": "0097"
  },
  {
      "card": {
          "dataLocation": "3iCIckgIfQGZVuphg_fCpbzBEXODW87v2-pkPzLlkiHMAR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGBwAmGyIvX1xbAScuPAc6WxkHHSJfLTg7WyAYW0YKBgRHHAUdABoABEcFAAcNCEcLDBsHCBsNRwQAChsGHwwbGgxGPCsHISACCF8OBSBYLSsDETktOh1aPCxfO0QTDSUqLztQCywQGSstPhsqUUYNCB0IRlswDT8jGUQgPTM-HjkFP14uKAxeEz0dIR9dATAoJQsnUCIFICQ6OhwtXAI",
          "dataScale": [
              0.02500156110586974,
              0.02500156110586974,
              0.02500156110586974
          ],
          "fileName": "/broom.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/broom.glb",
          "rotation": [
              0,
              0.09975543010428214,
              0,
              -0.9950119869452375
          ],
          "scale": [
              2.496569040673442,
              2.496569040673442,
              2.496569040673442
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -28.764447849854907,
              -5.872038670336981,
              -53.15154106155327
          ],
          "type": "3d"
      },
      "id": "0098"
  },
  {
      "card": {
          "dataLocation": "3iCIckgIfQGZVuphg_fCpbzBEXODW87v2-pkPzLlkiHMAR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGBwAmGyIvX1xbAScuPAc6WxkHHSJfLTg7WyAYW0YKBgRHHAUdABoABEcFAAcNCEcLDBsHCBsNRwQAChsGHwwbGgxGPCsHISACCF8OBSBYLSsDETktOh1aPCxfO0QTDSUqLztQCywQGSstPhsqUUYNCB0IRlswDT8jGUQgPTM-HjkFP14uKAxeEz0dIR9dATAoJQsnUCIFICQ6OhwtXAI",
          "dataScale": [
              0.02500156110586974,
              0.02500156110586974,
              0.02500156110586974
          ],
          "fileName": "/broom.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/broom.glb",
          "rotation": [
              0,
              0.09975543010428214,
              0,
              -0.9950119869452375
          ],
          "scale": [
              2.496569040673442,
              2.496569040673442,
              2.496569040673442
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -28.39473526171878,
              -5.70558876003313,
              -46.630670490335675
          ],
          "type": "3d"
      },
      "id": "0099"
  },
  {
      "card": {
          "dataLocation": "3JJighlDYhEtrRBhrgi3UhQPAoDyblQQ3KYrK308oea8Ij4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lAg09LwgtGjsEcgJ4egw9BykzHAMEMwEEeHkDHiszfHt-IzwbKAc-GxA_G2UuKz4rZTsyPTJ5H3IfIQEnPhsFDS8mDSg6FSITeAcPeQlzLQggJRMNKyksDicMLno",
          "dataScale": [
              1.4007759631899461,
              1.4007759631899461,
              1.4007759631899461
          ],
          "fileName": "/camel.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/camel.glb",
          "rotation": [
              0,
              0.9994617914796635,
              0,
              -0.03280438038221839
          ],
          "scale": [
              1.751382990255854,
              1.751382990255854,
              1.751382990255854
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -27.67009295904291,
              -1.564289463823375,
              -80.36825517655676
          ],
          "type": "3d"
      },
      "id": "0100"
  },
  {
      "card": {
          "dataLocation": "3ZcorMJ3iBsK9h6FyGUxd-lzCbrWcQMe1UB17-1uBwsEMi4uKilgdXU8MzY_KXQvKXQ5KDUrLz8udDM1dS91NDMVKBEcbG9oMhQdDzQJaCo0LhFsHgsIaBMraHU5NTd0LzYuMykzN3Q2MzQ-O3Q4Pyg0Oyg-dDczOSg1LD8oKT91Dxg0EhMxO2w9NhNrHhgwIgoeCS5pDx9sCHcgPhYZHAhjOB8jKhgeDSgZYnU-Oy47dRkfEzMvGDgRYhdqNGpjbDUsO3d3FmMPADkdDyAxECILDmMPGT4OGAUCMB8",
          "dataScale": [
              1.7878314511374183,
              1.7878314511374183,
              1.7878314511374183
          ],
          "fileName": "/3_legged_wooden_stool_low_poly.glb",
          "layers": [
              "pointer"
          ],
          "modelType": "glb",
          "name": "/3_legged_wooden_stool_low_poly.glb",
          "rotation": [
              0,
              0.2468617784476319,
              0,
              0.9690507016362312
          ],
          "scale": [
              0.23206657809591366,
              0.23206657809591366,
              0.23206657809591366
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -24.55634031410659,
              -1.4695256934322298,
              -73.92508646966934
          ],
          "type": "3d"
      },
      "id": "0101"
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
              0.8703571650452068,
              0,
              0.49242096345958936
          ],
          "scale": [
              0.13717198397851688,
              0.13717198397851688,
              0.13717198397851688
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -20.55010033708264,
              -1.5636302636263952,
              -53.58782485277349
          ],
          "type": "3d"
      },
      "id": "0102"
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
              0.8703571650452068,
              0,
              0.49242096345958936
          ],
          "scale": [
              0.14354469678455983,
              0.14354469678455983,
              0.14354469678455983
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -2.5169835479815137,
              -1.5636302636263952,
              -6.251288298446201
          ],
          "type": "3d"
      },
      "id": "0103"
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
              -0.18909387919724507,
              0,
              0.9819590138341505
          ],
          "scale": [
              0.14354469678455983,
              0.14354469678455983,
              0.14354469678455983
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              -3.479023785507323,
              -1.5636302636263952,
              -12.470606971348099
          ],
          "type": "3d"
      },
      "id": "0104"
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
              0.7210838529317077,
              0,
              -0.692847802220057
          ],
          "scale": [
              0.8475541534550648,
              0.8475541534550648,
              0.8475541534550648
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              184.18677053550806,
              0.3593902953192085,
              -27.659308070436854
          ],
          "type": "2d"
      },
      "id": "0105"
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
              0.7210838529317077,
              0,
              -0.692847802220057
          ],
          "scale": [
              9.362651438087052,
              9.362651438087052,
              9.362651438087052
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              9.683715061667028,
              -0.8879730781450204,
              -28.060646870487115
          ],
          "type": "2d"
      },
      "id": "0106"
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
              0.7210838529317077,
              0,
              -0.692847802220057
          ],
          "scale": [
              9.362651438087052,
              9.362651438087052,
              9.362651438087052
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              30.900829732262576,
              -2.8851317821520333,
              5.372906013170769
          ],
          "type": "2d"
      },
      "id": "0107"
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
              0.0011889035815543722,
              0.7435111102025941,
              0.017410881147475465,
              -0.6684958314987821
          ],
          "scale": [
              7.498470319582242,
              7.498470319582242,
              7.498470319582242
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              -32.52823866884114,
              -2.8675282333526093,
              -32.80058171825599
          ],
          "type": "2d"
      },
      "id": "0108"
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
              0.7210838529317077,
              0,
              -0.692847802220057
          ],
          "scale": [
              9.362651438087052,
              9.362651438087052,
              9.362651438087052
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              31.15810061552418,
              -2.860476761236139,
              -13.089900231087167
          ],
          "type": "2d"
      },
      "id": "0109"
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
              0.7210838529317077,
              0,
              -0.692847802220057
          ],
          "scale": [
              9.362651438087052,
              9.362651438087052,
              9.362651438087052
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              32.109798765651355,
              -0.7113009576437097,
              -15.164693690897828
          ],
          "type": "2d"
      },
      "id": "0110"
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
              0.7210838529317077,
              0,
              -0.692847802220057
          ],
          "scale": [
              9.362651438087052,
              9.362651438087052,
              9.362651438087052
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              30.972886752326882,
              -2.860476761236139,
              -3.9745218857368867
          ],
          "type": "2d"
      },
      "id": "0111"
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
              -0.7188302054975829,
              0.0034820911684099705,
              -0.6951700572467298,
              -0.003098743773885933
          ],
          "scale": [
              9.048099130618356,
              9.048099130618356,
              9.048099130618356
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              -32.717067110581134,
              -2.672919409988096,
              -71.91850139141187
          ],
          "type": "2d"
      },
      "id": "0112"
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
              -0.7062986507545735,
              0.0034261870131904026,
              -0.7078986430064601,
              -0.0031604452901388717
          ],
          "scale": [
              8.587054400400314,
              8.587054400400314,
              8.587054400400314
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              -29.480704456170784,
              -2.6479762270283453,
              -60.393278279801244
          ],
          "type": "2d"
      },
      "id": "0113"
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
              -0.7188302054975829,
              0.0034820911684099705,
              -0.6951700572467298,
              -0.003098743773885933
          ],
          "scale": [
              9.048099130618356,
              9.048099130618356,
              9.048099130618356
          ],
          "shadow": true,
          "singleSided": true,
          "textureLocation": "315U8-oDxgBXk_0rSmGnNH34TZYqxQ8CHFaoyNX-t1FYWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeX1h-Q3p3BwQDWX92ZF9iA0FfRXoHdWBjA3hAAx5SXlwfRF1FWEJYXB9dWF9VUB9TVENfUENVH1xYUkNeR1RDQlQeVHpCX1JkVEdSYWtSUHJJaAhiVGV5aF9XQ2Z2fkRESHVeUmJSenwIXV0HZB5VUEVQHgl2HFdbCQEASEJ1VUR-fEBaAl5nS3dQfHx6WHtuaUlLAllnfldYB3xUawU",
          "textureType": "image",
          "translation": [
              -32.35585099965297,
              -2.672919409988096,
              -83.40150869041595
          ],
          "type": "2d"
      },
      "id": "0114"
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
              -0.18909387919724507,
              0,
              0.9819590138341505
          ],
          "scale": [
              0.14354469678455983,
              0.14354469678455983,
              0.14354469678455983
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              13.234495941701041,
              -1.5636302636263952,
              -16.076106827476103
          ],
          "type": "3d"
      },
      "id": "0115"
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
              0.5044500023904274,
              0,
              0.8634409042246594
          ],
          "scale": [
              0.14354469678455983,
              0.14354469678455983,
              0.14354469678455983
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              15.234495941701041,
              -1.5636302636263952,
              -12.470606971348099
          ],
          "type": "3d"
      },
      "id": "0116"
  },
  {
      "card": {
          "dataLocation": "3JMt5yQdno-lJ4K04_znead9ZOte4_LZ7UaKlkZ3_anEIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lLwE5JCkfLzwpGhApKwkyE3MZLx4CEyQsOB0NBT8_Mw4lKRkpAQdzJiZ8H2UuKz4rZX4neT4eeh47fSklKQd4HCIIEyUEMgEpKGcGJ34Ae30vMiQ6CwAMPXIlJyU",
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
              0.005602180090313652,
              -0.43848010709721524,
              0.007811929223462085,
              0.8986894819792085
          ],
          "scale": [
              0.5620022063004652,
              0.5620022063004652,
              0.5620022063004652
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              16.59916267350745,
              -1.579563123171919,
              -31.372420261910726
          ],
          "type": "3d"
      },
      "id": "0117"
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
              -0.7672658892262858,
              0,
              0.6413291317488989
          ],
          "scale": [
              0.14354469678455983,
              0.14354469678455983,
              0.14354469678455983
          ],
          "shadow": true,
          "singleSided": true,
          "translation": [
              8.53545620175311,
              -1.5636302636263952,
              -12.901107301479446
          ],
          "type": "3d"
      },
      "id": "0118"
  }
   ]
}
