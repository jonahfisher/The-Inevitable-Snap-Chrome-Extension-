
disintegrate.init()


chrome.runtime.onMessage.addListener(function () {
    // Loop through all images on the page and make array of their srcs
    var imgs = document.getElementsByTagName("img");
    //imgs[i].data-dis-type = "simultaneous"
    // var imgSrcs = [];
    // for (var i = 0; i < imgs.length; i++) {
    //     imgSrcs.push(imgs[i].src);
    // }
    // function snapImages (images) {
        // if (imgs = undefined){
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("data-dis-type", "simultaneous")
        const disImg = disintegrate.getDisObj(imgs[i])
        disintegrate.createSimultaneousParticles(disImg)
    //             //imgs[i].remove()
    //         }
    }
       
    // }

    //sendResponse({images: imgs})
    
})