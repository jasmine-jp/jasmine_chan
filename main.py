def on_button_pressed_a():
    global hoge, count
    for c in s:
        if base.index_of(c) >= 0:
            if c != "n":
                if c == hoge:
                    led.enable(False)
                    basic.pause(400)
                    led.enable(True)
                mouth[base.index_of(c)].show_image(0)
                hoge = c
            elif base.slice(1).index_of(s[count + 1]) >= 0 and count != len(s) - 1:
                count += 1
                continue
            else:
                mouth[0].show_image(0)
                hoge = c
        count += 1
    basic.pause(200)
    mouth[0].show_image(0)
    count = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

hoge = ""
count = 0
mouth: List[Image] = []
s = ""
base = ""
base = "naiueo"
s = "kyounogohanwanandesuka"
mouth = [images.create_image("""
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    """),
    images.create_image("""
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    """),
    images.create_image("""
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    . . . . .
    """),
    images.create_image("""
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    """),
    images.create_image("""
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    . . . . .
    """),
    images.create_image("""
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    """)]
mouth[0].show_image(0)