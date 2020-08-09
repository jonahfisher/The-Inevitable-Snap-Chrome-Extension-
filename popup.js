
disintegrate.init()

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#snap-btn').addEventListener('click', onclick, false)
    function onclick () {
        // Call to chrome api to get current tab
        chrome.tabs.query({currentWindow: true, active: true},
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'snap')
            
        })

    }
}, false)
