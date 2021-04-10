input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let hoge: string;
    
    for (let c of s) {
        if (base.indexOf(c) >= 0) {
            if (c != "n") {
                if (c == hoge && count > 0) {
                    led.enable(false)
                    basic.pause(400)
                    led.enable(true)
                }
                
                mouth[base.indexOf(c)].showImage(0)
                hoge = c
            } else if (base.slice(1).indexOf(s[count + 1]) >= 0 && count != s.length - 1) {
                continue
            } else {
                mouth[0].showImage(0)
            }
            
        }
        
        count += 1
    }
    basic.pause(200)
    mouth[0].showImage(0)
    count = 0
})
let count = 0
let mouth : Image[] = []
let s = ""
let base = ""
base = "naiueo"
s = "oosakakougyoudaigaku"
mouth = [images.createImage(`
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
