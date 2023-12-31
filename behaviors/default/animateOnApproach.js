// animateOnApproach
// Copyright 2023 Ultisim and engageLively
// Croquet Microverse
// animate a card when an avatar approaches


class AnimateOnApproachActor {

    _setField(field, defaultValue) {
        const fieldSupplied = this._cardData[field];
        this[field] = fieldSupplied?this._cardData[field]:defaultValue;
    }
    

    setup() {
        this.proximate  = false; // start with no one around
        this._loadFields();
        console.log('Setup for card ' + this._cardData.name)
        this._dumpFields();
        this.addEventListener('pointerDown', 'reset')
        this._cardData.animationClipIndex = this.animationDistantAnimationClip;
        this._cardData.jumped = false;

        this.future(1000).step();
        // this.addEventListener('pointerDown', 'showDistance')
    }

    reset() {
        this.translateTo(this._cardData.translationBeforeJump)
        this.future(this.animationCheckInterval).step()

    }

    _loadFields() {
        // set up the configuration from the card
        const fields = [
            {name: 'animationProximateDistance', defaultValue: 10},
            {name: 'animationCheckInterval', defaultValue: 20},
            {name: 'animationProximateAnimationClip', defaultValue: 0},
            {name: 'animationDistantAnimationClip', defaultValue: 0}
        ]

        fields.forEach(field => {
            this._setField(field.name, field.defaultValue)
        })

    }

    _dumpFields() {
        const fields = ['animationProximateDistance', 'animationCheckInterval',  'animationProximateAnimationClip', 'animationDistantAnimationClip']
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
            console.log("In AnimateOnApproach: no cards found")
            return []
        }
        const avatars = cards.filter(a => a.playerId)
        if (avatars.length == 0) {
            console.log(`In AnimateOnApproach: ${cards.length} cards found, but no avatars}`)
        }
        return avatars;

    }

    step() {
        this._loadFields();
        const avatars = this._avatars();
        if (avatars.length > 0) {
            const distances = avatars.map(avatar => this._distanceSquare(avatar))
            const minDistance = distances.slice(1).reduce((prev, cur) => Math.min(prev, cur), distances[0])
            // console.log(minDistance)
            if (minDistance < this.animationProximateDistance){
                this._cardData.animationClipIndex = this.animationProximateAnimationClip;
            } else {
                this._cardData.animationClipIndex = this.animationDistantAnimationClip;
               
            }

            
        } else {
            this._cardData.animationClipIndex = this.animationDistantAnimationClip;
        }
        this.future(this.animationCheckInterval).step();
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
            name: "AnimateOnApproach",
            actorBehaviors: [AnimateOnApproachActor],
        }
    ]
}
