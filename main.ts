controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
`, MyShip, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    projectile.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    MyShip.setPosition(69, 105)
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
    music.powerDown.play()
})
let Alien: Sprite = null
let projectile: Sprite = null
let MyShip: Sprite = null
MyShip = sprites.create(img`
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c b . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . c 6 . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . 8 6 . . . . . . . 
. . . . . . 8 8 9 8 . . . . . . 
. . . . . . 8 6 9 8 . . . . . . 
. . . . . c c c 8 8 8 . . . . . 
. . . . 8 8 6 6 6 9 8 8 . . . . 
. . 8 f f f c c e e f f 8 8 . . 
. 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
`, SpriteKind.Player)
MyShip.setPosition(69, 105)
info.setScore(0)
info.setLife(3)
let Wave = 1
game.onUpdate(function () {
    controller.moveSprite(MyShip)
})
game.onUpdateInterval(500, function () {
    Alien = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . 7 . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d d d 1 1 1 1 d d d f f . . . . . 
. . . 7 7 . f b d b f d d f b d b f c f . . . . 
. . . 7 7 7 f c d c f 1 1 f c d c f b f . . . . 
. . . . 7 7 f f f b d b 1 b d f f c f . . . . . 
. . . . f c b 1 b c f f f f f f . . . . . . . . 
. . . . f 1 c 1 c 1 f f f f f f . . . . . . . . 
. . . . f d f d f d f f f f f . . . . . . . . . 
. . . . . f . f . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Alien.setPosition(Math.randomRange(0, 120), 0)
    Alien.vy = 50
    Wave += 1
    if (10 < Wave) {
        Alien.follow(MyShip, 50)
    }
})
