

chrome.runtime.onMessage.addListener(function () {
    disintegrate.init()
    const imgs = document.querySelectorAll("img");

    // Randomly delete half of all images in view on the page
    for (let i = 0; i < imgs.length / 2; i++) {
        const indexToDelete = Math.floor(Math.random() * imgs.length)
        if (imgs[indexToDelete] !== undefined) {
            imgs[indexToDelete].setAttribute("data-dis-type", "simultaneous")
            const disImg = disintegrate.getDisObj(imgs[indexToDelete])
            disintegrate.createSimultaneousParticles(disImg)
            imgs[indexToDelete].remove()
        }
    }
})