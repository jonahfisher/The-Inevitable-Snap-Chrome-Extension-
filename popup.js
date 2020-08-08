document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick () {
        // Call to chrome api
        chrome.tabs.query({currentWindow: true, active: true},
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'hi')
        })

    }

    function setCount (res) {
        const div = document.createElement('div')
        div.textContent = '${res.count}'
        document.body.appendChild(div)
    }
}, false)