let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
basic.forever(function () {
    haloDisplay.setZipLedColor(60 - Math.round(input.compassHeading() / 6), kitronik_halo_hd.colors(ZipLedColors.Red))
    haloDisplay.show()
    basic.pause(100)
    haloDisplay.clear()
})
