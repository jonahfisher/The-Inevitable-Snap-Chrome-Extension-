disintegrate.init()


chrome.runtime.onMessage.addListener(function (sendResponse) {
    // Loop through all images on the page and make array of their srcs
    var imgs = document.getElementsByTagName("img");
    //imgs[i].data-dis-type = "simultaneous"
    // var imgSrcs = [];
    // for (var i = 0; i < imgs.length; i++) {
    //     imgSrcs.push(imgs[i].src);
    // }

    sendResponse({images: imgs})
    
})