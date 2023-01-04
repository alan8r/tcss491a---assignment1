class Wario{
    constructor(game) {
        this.game = game;

        let walkSheet = ASSET_MANAGER.getAsset("./wario walk sprites.png");
        this.walkAnimator = new Animator(walkSheet, 0, 0, 29, 32, 4, 0.12, true);
        let bumpSheet = ASSET_MANAGER.getAsset("./wario bump sprites.png");
        this.bumpAnimator = new Animator(bumpSheet, 0, 0, 29, 32, 4, 0.09, true);

        this.x = 0;
        this.speed = 1;

        this.state = 1;     // 1 = walking, 2 = bouncing backwards
    };

    update() {
        this.x += this.speed;

        if (this.x < 0) {   // left edge of screen trigger
            this.speed = 1;
            this.state = 1;
        } else if (this.x > 1024 - (29*4)) {    // right edge of screen trigger
            this.speed = -6;
            this.state = 2;
        }
    };

    draw(ctx) {
        if (this.state == 1) this.walkAnimator.drawFrame(this.game.clockTick, ctx, this.x, 8, 4);
        else if (this.state == 2) this.bumpAnimator.drawFrame(this.game.clockTick, ctx, this.x, 0, 4);
    };

}