// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io



class CanvasActor{
    setup() {
        this.listen("drawPointActor", "drawPoint")
        this.subscribe("global", "drawTextActor", "drawText")
        // this.future(1000).drawText();
        
        // this.future(1000).step()
    }

    drawText(data) {
        let {name} = data;
        if (name != this._name) {
            // not for us, return
            return
        }
        this.say("drawTextPawn", data)
    }

    step() {
        console.log('CanvasActor step')
        this.say("drawAll");
        this.future(50).step()

    }

    drawPoint(data) {
        let {viewId, x, y} = data;
        this.say("drawPointPawn", data)
    }
}

class CanvasPawn {

    setup() {
        this.listen("drawAll", "drawAll")
        this.listen("drawPointPawn", "drawPoint")
        this.listen("drawTextPawn", "drawText")
        this.index = 0;
        this.angle = 0;
        // this.addEventListener('pointerDown', 'pointerDown')
        this.imageLoaded = false;
        this.linesWaiting = null;

        this.image = new Image(503, 697)
        this.image.src = 'https://matt.engagelively.com/assets/ITF/click-to-buy-new.png'
        this.image.crossOrigin = 'Anonymous'
        this.image.onload =  _ => {
            // flag that the image has been loaded, and if ws have lines
            // waiting to be drawn, draw them (this will also draw the background).
            // Otherwise just draw the background
            this.imageLoaded = true;
            if (this.dataWaiting) {
                this.drawText(this.dataWaiting)
            } else {
                this.drawBackground();
            }
        }
        // this.texture.needsUpdate = true;
    }

  

    /* pointerDown(evt) {
        this.say("drawPointActor", {viewId: this.viewId, x: evt.xy[0], y:evt.xy[1]})
    } */

    drawPoint(data) {
        let {viewId, x, y} = data;
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(x, y, 5, 5);
        ctx.fillStyle = ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        this.texture.needsUpdate = true;
    }

    _drawText(data) {
        this.drawBackground();
        this.future(20).writeText(data); // make sure we write the text on top of the background

    }

    drawText(data) {
        let {lines, shells, flash} = data
        if (this.imageLoaded) {
            if (flash) {
                this.drawAll();
                this.future(50)._drawText(data)
            } else {
                this._drawText(data)
            }
            
        } else {
            this.dataWaiting = {lines: lines, shells: shells, flash: false}; // hold onto the lines until the image is loaded
        }
    }

    writeText(data) {
        let {lines, shells} = data
        let ctx = this.canvas.getContext("2d");
        ctx.font = "bold 20px Garamond";
        ctx.fillStyle = 'brown'
        let lineHeight = 60, firstLine = 140;
        lines.forEach((line, i) => {
            ctx.fillText(line, 100,  firstLine + i * lineHeight)
        })
        ctx.fillText(shells, 375, 105)
        this.texture.needsUpdate = true;

    }


    _drawSpiral(angle) {
        const colors = ['red', 'green', 'blue'];
        let ctx = this.canvas.getContext("2d");
        for (let i = 0; i < 500; i++) {
            const color = colors[i % colors.length];
            const theta = 0.1 * i + angle;
            let x = i * Math.cos(theta) + this.canvas.width/2;
            let y = i * Math.sin(theta) + this.canvas.height/2;
            ctx.beginPath();
            ctx.moveTo(x + 5, y);
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = ctx.strokeStyle = color;
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            
        }

    }

    drawBackground(color = 'brown') {
        const ctx = this.canvas.getContext("2d");
        this.clear(color)
       
        ctx.drawImage(this.image, 0, 0);
        this.texture.needsUpdate = true;
    }

    

    clear(fill) {
        let ctx = this.canvas.getContext("2d");
        // console.log(ctx)
        ctx.fillStyle = fill;
        ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
        
    }

    drawAll() {
        console.log('CanvasPawn drawAll')
        const colors = ['#ff0000', '#00ff00', '#00ffff']
        this.clear('black')
        this._drawSpiral(this.angle)
        this.angle += 0.1;
        this.texture.needsUpdate = true;
    }

    
}

class BuyActor {
    setup() {
        this.listen('purchaseRequested', 'buy')
    }
    
    buy(name) {
        this.publish("global", "buy", this.name)
    }
}

class BuyPawn {
    setup() {
        this.addEventListener('pointerDown', 'pointerDown')
    }
    pointerDown() {
        this.say('purchaseRequested')
    }
}




export default {
    modules: [
        {
            name: "Canvas",
            actorBehaviors: [CanvasActor],
            pawnBehaviors: [CanvasPawn],
        },
        {
            name: 'Buy',
            actorBehaviors: [BuyActor],
            pawnBehaviors: [BuyPawn]
        }
    ]
}

/* globals Microverse */
