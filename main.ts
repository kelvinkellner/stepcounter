let steps = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showNumber(steps)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Wooh!")
    basic.showNumber(steps)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    if (steps % 1000 == 0) {
        music.playMelody("C E G B F A C5 C5 ", 200)
    }
    basic.showNumber(steps)
})
