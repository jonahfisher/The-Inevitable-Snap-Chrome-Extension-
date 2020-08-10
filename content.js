

chrome.runtime.onMessage.addListener(function () {
    //disintegrate.init()
    
    const imgs = document.querySelectorAll("img");
    
    // Randomly delete half of all images in view on the page
    for (let i = 0; i < imgs.length / 2; i++) {
        const indexToDelete = Math.floor(Math.random() * imgs.length)
        // imgs[i].setAttribute("data-dis-type", "simultaneous")
        // const disImg = disintegrate.getDisObj(imgs[i])
        // disintegrate.createSimultaneousParticles(disImg)
        imgs[indexToDelete].remove()
    }
})