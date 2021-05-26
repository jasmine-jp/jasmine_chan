input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let count = 0
    let hoge = ""
    for (let c of s) {
        if (base.indexOf(c) >= 0) {
            if (c != "n") {
                if (c == hoge) {
                    led.enable(false)
                    basic.pause(400)
                    led.enable(true)
                }
                
                mouth[base.indexOf(c)].showImage(0)
                music.playTone(hz[base.indexOf(c)], 100)
                hoge = c
            } else if (base.indexOf(s[count + 1]) > 0 && count != s.length - 1) {
                
            } else {
                mouth[0].showImage(0)
                music.playTone(hz[base.indexOf(c)], 100)
                hoge = c
            }
            
        }
        
        count += 1
    }
    basic.pause(200)
    mouth[0].showImage(0)
})
let base = "naiueo"
let s = "konnitiwa"
let hz = [311, 349, 330, 312, 294, 262]
let mouth = [images.createImage(`
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `), images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `), images.createImage(`
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    . . . . .
    `), images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `), images.createImage(`
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    . . . . .
    `), images.createImage(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)]
mouth[0].showImage(0)
