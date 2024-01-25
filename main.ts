function check () {
    OLED.drawLoading(0)
    normies = Players - (Imposters + Whiteboards)
    OLED.drawLoading(10)
    if (normies > Imposters + Whiteboards) {
        OLED.drawLoading(20)
    } else {
        OLED.clear()
        OLED.writeStringNewLine("No. of imposters and No. of whiteboards can't be greater than the No. of normies")
        OLED.newLine()
        OLED.writeStringNewLine("Press A+B")
        while (!(input.buttonIsPressed(Button.AB))) {
        	
        }
        config = 1
        Config_update_oled()
    }
}
input.onButtonPressed(Button.A, function () {
    if (config == 1) {
        if (selected == 1) {
            Players += -1
            if (Players < 3) {
                Players = 3
            }
        } else if (selected == 2) {
            Imposters += -1
            if (Imposters < 1) {
                Imposters = 1
            }
        } else if (selected == 3) {
            Whiteboards += -1
            if (Whiteboards < 0) {
                Whiteboards = 0
            }
        } else if (selected == 4) {
            config = 0
            check()
        }
        Config_update_oled()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (config == 1) {
        selected += 1
        if (selected >= 5) {
            selected = 1
        }
        Config_update_oled()
    }
})
input.onButtonPressed(Button.B, function () {
    if (config == 1) {
        if (selected == 1) {
            Players += 1
        } else if (selected == 2) {
            Imposters += 1
        } else if (selected == 3) {
            Whiteboards += 1
        } else if (selected == 4) {
            config = 0
            check()
        }
        Config_update_oled()
    }
})
function Config_update_oled () {
    OLED.clear()
    if (selected == 1) {
        OLED.writeString("> ")
    } else {
        OLED.writeString("- ")
    }
    OLED.writeStringNewLine("No. of players")
    OLED.writeString("| ")
    OLED.writeNumNewLine(Players)
    if (selected == 2) {
        OLED.writeString("> ")
    } else {
        OLED.writeString("- ")
    }
    OLED.writeStringNewLine("No. of imposters")
    OLED.writeString("| ")
    OLED.writeNumNewLine(Imposters)
    if (selected == 3) {
        OLED.writeString("> ")
    } else {
        OLED.writeString("- ")
    }
    OLED.writeStringNewLine("No. of whiteboards")
    OLED.writeString("| ")
    OLED.writeNumNewLine(Whiteboards)
    if (selected == 4) {
        OLED.writeString("> ")
    } else {
        OLED.writeString("- ")
    }
    OLED.writeStringNewLine("Start game")
}
let normies = 0
let Whiteboards = 0
let Imposters = 0
let Players = 0
let selected = 0
let config = 0
OLED.init(128, 64)
config = 1
selected = 1
Players = 3
Imposters = 1
Whiteboards = 0
Config_update_oled()
basic.forever(function () {
    if (config == 1) {
    	
    }
})
