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
    basic.showNumber(steps)
})
let steps = 0
for (let index = 0; index <= 9; index++) {
    let milestones: number[] = []
    milestones.push(0 + 0)
}
