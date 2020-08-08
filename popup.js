//const disintigrate = require("./disintigrate")
// disintigrate.init()

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#snap-btn').addEventListener('click', onclick, false)
    function onclick () {
        // Call to chrome api to get current tab
        chrome.tabs.query({currentWindow: true, active: true},
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'message', snapImages)
            
        })

    }

    function snapImages (images) {
        if (images != undefined){
            for (var i = 0; i < images.length; i++) {
                //images[i].data-dis-type = "simultaneous"
                // const disImg = disintigrate.getDisObj(images[i])
                // disintigrate.createSimultaneousParticles(disImg)
                images[i].remove()
            }
        }
       
    }
}, false)
