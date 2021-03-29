def on_forever():
    basic.show_string("" + str((input.acceleration(Dimension.X) * (input.running_time() / 1000) / 3.6)))
basic.forever(on_forever)
