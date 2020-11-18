class Drop {
    constructor(x, y, r) {
        this.body = Bodies.circle(x, y, r);
        this.x = x;
        this.y = y
        this.radius = r;
        this.image = loadImage("images/drop.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
} 