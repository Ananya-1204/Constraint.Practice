class Chain{
    constructor(bodyA, bodyB) {
        var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length: 10
        }
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }
    display(){
        line(this.constraint.bodyA.position.x, this.constraint.bodyA.position.y, this.constraint.bodyB.position.x, this.constraint.bodyB.position.y);
    }
}
