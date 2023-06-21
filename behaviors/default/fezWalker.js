class FezWalkerPawn {
    setup() {
        if (!this.isMyPlayerPawn) {return;}
        let walkManager = this.service("WalkManager");
        this.xBounds = this.actor._cardData.xBounds?this.actor._cardData.xBounds: [-10, 10]
        this.zBounds = this.actor._cardData.zBounds?this.actor._cardData.zBounds: [-20, 0]
        walkManager.removeAll();
        

        [
            ["BuiltinWalker", "WalkerPawn", "bvh"],
            ["FezWalker", "FezWalkerPawn", "checkBounds"]
        ].forEach((spec) => walkManager.append(spec));
    }

    checkBounds(vq, time, _delta) {
        return [vq, false]
        let v = [
            Math.max(this.xBounds[0], Math.min(vq.v[0], this.xBounds[1])),
            vq.v[1],
            Math.max(this.zBounds[0], Math.min(vq.v[2], this.zBounds[1]))
        ] 
        return [{v: v, q: vq.q}, false]

    }
}

export default {
    modules: [
        {
            name: "FezWalker",
            pawnBehaviors: [FezWalkerPawn],
        }
    ]
}