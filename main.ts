namespace SpriteKind {
    export const Cherry = SpriteKind.create()
    export const butn = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    info.changeScoreBy(7)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    pause(100)
    Spawn_Cherries()
    firedrop = 500
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`water`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    garvity = mySprite.vy
    if (garvity != 0) {
        pause(200)
    } else {
        mySprite.vy = -145
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`prisoner 0`)
})
function Spawn_Cherries () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        pickup = sprites.create(assets.image`myImage`, SpriteKind.Cherry)
        tiles.placeOnTile(pickup, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`prisoner 01`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cherry, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(50)
    info.changeCountdownBy(1.5)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`water1`, function (sprite, location) {
    game.gameOver(false)
})
let projectile: Sprite = null
let pickup: Sprite = null
let garvity = 0
let firedrop = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff55555555555555555555fffffffff
    ffffffffffffffffffffff1fffffffff1ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555b555b55ffffffff55fffffffff
    ffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff5f5555b555f44444444f55ffffffff
    fffffffffffffffffffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f555555555fff444444f5ffffffff
    fffffffffffffffffffffffffffffffffffffffffcccccfffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff55fff555555555fff444f5ffffffff
    fffffffffffffffffffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff55555555ff5555555f44f5ffffffff
    fffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff1ffffffffffffffffff5555555555fffffff5f4f5ffffffff
    ffffffffffffffffffff1ffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555b55555555555ffffffffffff
    fffffff1fffffffffffffffffffffffffffffffffcccccfffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff555555555b5555555ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555b55b5555555555ffffffffffff
    fffffffffffffffffffffffffffffff1fffffffffcccccfffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff1fffffffffffffffff5555555555555fffffffffffff
    fffffffffffffffffffffffff1fffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555b55fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffcccccfffffffff1ffffffffffffffffff1fffff1ffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff1fffffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcccccccccccccccffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff1ffffffccccccccccccccccccccccccccccccccccccccffffffffffffffff
    fffffffff1ffffff1fffffffffffffffffffcccccccccccccccffffffffffffffffffffff1ffffffffff1ffffff1ffff1fffffffffccccccccccccccccccccccccccccccccccccccffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcccbbbbbbbbbcccfffffffffffffffffffffffffffffffffffff1fffffffffffffffffccccccccccccccccccccccccccccccccccccccffffffffffffffff
    ffff1fffffffffffffffffffffffffffffffcccbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffcccb8888888bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccc
    ffffffffffffffffffff1fffffffffffffffcccb8888888bcccfffffffffffffffffffffffff1fffffffffffffffffffffffffffffcccbb888888bb888888b888888bb888888bccccccccccccccccccc
    fffffffffff1fffffffffffffffff1ffffffcccb8989888bcccffffffffffffff1ffffffffffffffffff1fffffffffffffffffffffcccbb888988bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffffffffffffffffffcccb8888888bcccffffffffffffffffffffffffffffffffffffffffffffffffff1ffffcccbb888898bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffffffffffffffffffcccb8888888bcccfffffffffffffffffffff1fffff1ffffffffffffffffff1ffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffffffffffffffffffcccb8888898bcccffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffff1fffffffffffffcccb8898888bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffffffffffffffffffcccb8888888bcccfffffffffffffffffffffffffffffffffff1fffffffffffffffffffcccbb889888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffffffffffffffffffcccb8888888bcccfffffffffffffffffffffffffffffffffffffffffffffffffff1fffcccbb888898bb888988b888988bb888888bcccccbbbbbbbbbbbbcc
    fffffffffffff1ffffffffffffffffffffffcccb8888988bcccffffffffffff1fffff1ffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffffffffff1fffffffcccb8988888bcccfffffffffffffffffffffffffffff1ffffffffffff1ffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ffffffff1fffffffffffffffffffffffffffcccb8888888bcccfffffffffffffffffffffffff1fffffffffffffffffffffffffffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffffffffffffffffffcccb8888888bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbb988888bb888988b888888bb888888bcccccbbbbbbbbbbbbcc
    fffffffffffffffff1ffffffff1fffffffffcccb8889888bcccffffffffffffffffffffffffffffffffffff1fffffffffffff1ffffcccbb888898bb888888b889888bb888898bcccccbbbbbbbbbbbbcc
    ffffffffffffffffffffffffffffffffffffcccb8888888bcccffffffffffffffffff1ffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    cccccccccccccccccccccfffffffffffffffcccb8888888bcccffffffffffffffffffffffffffffffff1ffffffff1fffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    cccccccccccccccccccccfffffffffffffffcccb8988888bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbb888988bb888888b888888bb888988bcccccbbbbbbbbbbbbcc
    cccccccccccccccccccccfffffffffffffffcccb8888898bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbcccfffffffffffffffcccb8888888bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbb889888bb889888b898898bb898888bcccccbbbbbbbbbbbbcc
    ccb888888bb888888bcccfffffffffffffffcccb8889888bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bcccccccccccccccccccccb8888888bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb898888bb888888bcccccccccccccccccccccb8888888bcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbb888888bb888898b888888bb888898bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbcccccccccccccccccccccb8889888bcccfffccccccccccccccccccccccccccccccccccccccccccccccccffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccb8988898bcccfffccccccccccccccccccccccccccccccccccccccccccccccccffffcccbb888898bb888888b889888bb898888bcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccb8888888bcccfffccccccccccccccccccccccccccccccccccccccccccccccccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888988bccccbbbbbbbbbbbccccccb8888888bcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888888bb888889b888988bb888988bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb898888bb888888bb888988bbcccffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb889888bb888888bb888888bbcccffffcccbb888888bb888988b898898bb898888bcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888988bb888888bb888888bb888888bb888889bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb898888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb888898bb888888bbcccffffcccbb888888bb888888b898888bb889888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb888888bb888888bbcccffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb889888bb888898bb888888bb888888bb888898bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888888bb888988b888888bb888888bcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888988bb888988bb889888bb889888bbcccffffcccbb888888bb888889b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb888888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb898898bb898888bb898888bb888988bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888889bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888898bb888888b888888bb889888bcccccbbbbbbbbbbbbcc
    ccb888899bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888898bb888888bb888898bb888888bbcccffffcccbb888888bb888898b889888bb888898bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb988888bb888988bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb889888bb898888bb888888bb888888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb889888bb889888b889888bb889888bcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888888bb888888b888888bb888898bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888988bb888988bb888888bb888898bb888988bbcccffffcccbb888988bb888888b888988bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb889888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb898898bb898888bb888988bb888888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb898888bb888898bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888898bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccb889888bb888988bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb988888bb888988b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb888898bb888888bbcccffffcccbb888888bb888888b888988bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb898888bb889888bb888888bb888988bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb889888bb888888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888898bb888988b888988bb888888bcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb889888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb898888bb888988bbcccffffcccbb888888bb888888b888888bb889888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888988bb888888bb888888bb988888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888988bb888988bb888888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888898bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888898bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccb888988bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888988bb888988b888888bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888988bb888888bb888888bb888888bb888988bbcccffffcccbb888888bb889888b888988bb888888bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb888888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb889888bb889888bb888888bb888888bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb888888bb888888b888888bb888888bcccccbbbbbbbbbbbbcc
    ccb888888bb888888bccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffcccbb898888bb888888b898888bb888988bcccccbbbbbbbbbbbbcc
    ccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb898888bb889888bb888988bb888888bb888888bbcccffffcccbb888988bb988988b888988bb898888bcccccbbbbbbbbbbbbcc
    ccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888888bb888888bb898888bb888898bbcccffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcc
    ccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbcccfffcccbb888888bb888988bb898888bb889888bb888888bbcccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbccccccbbbbbbbbbcccbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbccccccbbbbbbbbbcccbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
mySprite = sprites.create(assets.image`prisoner 01`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level`)
mySprite.ay = 500
controller.moveSprite(mySprite, 125, 0)
Spawn_Cherries()
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
info.startCountdown(7)
info.setScore(0)
tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
firedrop = 600
game.onUpdateInterval(firedrop, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`fire drop`, null, 0, 40)
    tiles.placeOnRandomTile(projectile, assets.tile`crossbow`)
})
