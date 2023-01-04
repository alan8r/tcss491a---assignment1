class Wario{
    constructor(game) {
        this.game = game;
        let sheet = ASSET_MANAGER.getAsset("./wario walk sprites.png");
        this.animator = new Animator(sheet, 0, 0, 29, 32, 4, 0.12, true);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 0, 0, 4);
    };


}