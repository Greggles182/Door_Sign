input.onButtonPressed(Button.A, function () {
    Mode += 1
})
let Mode = 0
let myImage = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
myImage.showImage(0)
basic.pause(1000)
myImage = images.createImage(`
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    # # # # #
    `)
myImage.showImage(0)
basic.pause(1000)
myImage = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
myImage.showImage(0)
basic.pause(1000)
basic.forever(function () {
    if (4 <= Mode) {
        Mode = 0
    }
    if (0 == Mode) {
        basic.showString("Come In.")
    }
    if (1 == Mode) {
        basic.showString("Please Knock")
    }
    if (2 == Mode) {
        basic.showString("Go Away")
    }
    if (3 == Mode) {
        basic.showString("Playing Darts")
    }
})
