// animateOnApproach
// Copyright 2023 Ultisim and engageLively
// Croquet Microverse
// animate a card when an avatar approaches


class ShowSalesOnApproach {

    _setField(field, defaultValue) {
        const fieldSupplied = this._cardData[field];
        this[field] = fieldSupplied?this._cardData[field]:defaultValue;
        
        this.visited = [];
    }

    get avatarKeys() {
        return ['camel', 'saddle', 'guide', 'water skins', 'food', 'islamic book', 'glass bead', 'spices', 'sword']
    }
    

    setup() {
        this.proximate  = false; // start with no one around
        this._loadFields();
        console.log('Setup for card ' + this._cardData.name)
        this._dumpFields();
        this.salesCard = null;
        this.goods = [
            {item: "camel", quantity: 3, price: 20},
            {item: "saddle", quantity: 20, price: 5},
            {item: "guide", quantity: 50, price: 12}
        ]
        this.showing = false;
        this.avatarValue = {
            shells:150
        }
        this.avatarKeys.forEach(key => this.avatarValue[key] = 0)
        this.subscribe("global", "buy", "purchase")

        this.future(1000).step();
        // this.addEventListener('pointerDown', 'showDistance')
    }

    purchase(name) {
        const purchased = this.goods[0]
        this.goodsIndex = this.goods.indexOf(purchased)
        purchased.quantity--;
        this.avatarValue.camel++;
        this.avatarValue.shells -= purchased.price
        this.updateDisplay()
    }

    _loadFields() {
        // set up the configuration from the card
        const fields = [
            {name: 'showSalesProximateDistance', defaultValue: 3},
            {name: 'showSalesCheckInterval', defaultValue: 20}
        ]

        fields.forEach(field => {
            this._setField(field.name, field.defaultValue)
        })

    }

    _dumpFields() {
        const fields = ['showSalesProximateDistance', 'showSalesCheckInterval']
        console.log('Fields for ' + this._cardData.name);
        fields.forEach(field => {
            console.log(field + ': ' + this[field])
        })
    }

    _distanceSquare(avatar) {
        const xDist = avatar.translation[0] - this.translation[0]
        const zDist = avatar.translation[2] - this.translation[2]
        return xDist*xDist + zDist*zDist

    }

    // used for debugging only

    _showDistance() {
        const avatars = this._avatars();
        const dist = avatars.map(av => this._distanceSquare(av));
        console.log(`Distance is ${dist}`)
        return;

    }

    // get all of the avatars

    _avatars() {

        const cards = this.queryCards();
        if (cards.length == 0) {
            console.log("In ShowSalesOnApproach: no cards found")
            return []
        }
        const avatars = cards.filter(a => a.playerId)
        if (avatars.length == 0) {
            console.log(`In ShowSalesOnApproach: ${cards.length} cards found, but no avatars}`)
        }
        return avatars;

    }


    showCards() {
        if (this.showing) {
            return; // nothing to do
        }
        this.popupCards = [
            this.createCard({
                name: "avatarCard",
                translation: [-19.322626016340624, -0.00941893210761106, -72.84095522150123],
                behaviorModules: ["Canvas", "Buy"],
                layers: ["pointer", "walk"],
                rotation:[ 0, -0.02717047631159505, 0, 0.9996308144595188],
                scale: [3, 3, 3],
                type: "2d",
                textureType: "canvas",
                textureWidth: 503,
                textureHeight: 697,
                depth: 0.05,
                cornerRadius: 0.1,

            })
        ]

        
        this.showing = true;
        this.future(100).updateDisplay();

    }

    displayCardValues() {
        if (this.showing) { 
            this.future(5000).displayCardValues();
        }

    }

    _makeLine(product, key) {
        return `${key}: ${product[key]}`;
    }

    _convertToLines(product) {
         
        return [product.item, this._makeLine(product, 'quantity'), this._makeLine(product, 'price')]
    }

    updateDisplay() {
        
        // this.cardsByName.avatarCard._cardData.text = keys.map(key =>  this._makeLine(this.avatarValue, key)).join('\n')
        this.publish("global", "drawTextActor", {
            name: "avatarCard",
            lines: this.avatarKeys.map(key => /* this._makeLine(this.avatarValue, key) */ this.avatarValue[key]),
            shells: this.avatarValue.shells
        })
       // this.say('updateShape')

    }

    removeCards() {
        if (this.showing) {
            this.showing = false;
            if (this.popupCards) {
                this.popupCards.forEach(card => card.destroy())
            }
        }
    }

    step() {
        this._loadFields();
        const avatars = this._avatars();
        if (avatars.length > 0) {
            const distances = avatars.map(avatar => this._distanceSquare(avatar))
            const minDistance = distances.slice(1).reduce((prev, cur) => Math.min(prev, cur), distances[0])
            // console.log(minDistance)
            if (minDistance < this.showSalesProximateDistance){
                this.showCards();
                //console.log(`showSalesOnApproach, avatars nearby, publishing (global, startMusic)`)
                this.publish("global", "startMusic");
            } else {
                this.removeCards()
                // console.log(`showSalesOnApproach, no avatars nearby, publishing  (global, stopMusic )`)
                this.publish("global", "stopMusic");
                
            }
            this.future(this.showSalesCheckInterval).step();

            
        } else {
            this._cardData.animationClipIndex = this.animationDistantAnimationClip;
            // this.publish("global", "stopMusic");
           
        }
    }

    setFinal() {
        this._cardData.animationClipIndex = this.animationDistantAnimationClip;
        this.translateTo( this._cardData.translationAfterJump);
    }

   
    teardown() {
        
    }
}

export default {
    modules: [
        {
            name: "ShowSalesOnApproach",
            actorBehaviors: [ShowSalesOnApproach],
        }
    ]
}
