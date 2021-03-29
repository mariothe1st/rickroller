bluetooth.onBluetoothConnected(function () {
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (input.buttonIsPressed(Button.B)) {
                if (input.buttonIsPressed(Button.A)) {
                    if (input.buttonIsPressed(Button.A)) {
                        if (input.buttonIsPressed(Button.B)) {
                            bluetooth.advertiseUrl(
                            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            7,
                            true
                            )
                        }
                    }
                }
            }
        }
    }
})
