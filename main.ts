let X = 0
let Y = 0
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        X = 4
        Y = 4
    }
    for (let index = 0; index < 5; index++) {
        led.plot(Y, X)
        X = X - 1
        basic.pause(100)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        X = 3
        Y = 0
    }
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        Y = Y + 1
        basic.pause(100)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        X = 2
        Y = 4
    }
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        Y = Y - 1
        basic.pause(100)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        X = 1
        Y = 0
    }
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        Y = Y + 1
        basic.pause(100)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        X = 0
        Y = 4
    }
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        Y = Y - 1
        basic.pause(100)
        basic.clearScreen()
    }
})
