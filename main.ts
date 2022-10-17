let popoy = game.createSprite(0, 2)
let villain = game.createSprite(randint(1, 4), randint(0, 4))
let villain2 = game.createSprite(randint(1, 4), randint(0, 4))
let villain3 = game.createSprite(randint(1, 4), randint(0, 4))
popoy.set(LedSpriteProperty.Brightness, 120)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        popoy.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        popoy.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        popoy.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        popoy.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (popoy.isTouching(villain)) {
        basic.showIcon(IconNames.Yes)
        game.gameOver()
        music.playMelody("G E F G E F C C ", 120)
    }
    if (popoy.isTouching(villain)) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.OnceInBackground)
        villain.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
    }
})
