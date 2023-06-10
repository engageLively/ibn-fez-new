// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

/*

This module manages a list of recent values from a bitcoin position
server. It is used with the Elected module, so that one of
participants is chosen to fetch values.

*/

/*

BitcoinTrackerActor's history is a list of {date<milliseconds>, and amount<dollar>}

*/

class PlaceholderPawn{
    setup() {
        const card = {
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
        };
        if (this.card) {
            this.destroyCard();
        }
        this.card = this.actor.createCard(card);
        const delay = this.actor._cardData.timeout?this.actor._cardData.timeout:10000
        future(delay).destroyCard();
    }

    destroyCard() {
        this.card.destroy();
        this.card = null;
    }
    
}

export default {
    modules: [
        {
            name: "PlaceholderPawn",
            pawnBehaviors: [PlaceholderPawn],
        }
    ]
}

/* globals Microverse */
