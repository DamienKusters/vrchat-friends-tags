// Put all the javascript code here, that you want to execute after page load.
console.log("[EXTENSION] VR Chat Friends Tags is functioning on this page.");
// browser.storage.local.get('value')

// console.log(document.getElementsByClassName("user-info")[0].innerHTML);

// function onGot(tabInfo)
// {
//     console.log(tabInfo);
// }

// function onError(errorInfo)
// {
//     console.log(errorInfo);
// }

//document.getElementsByClassName("css-1u1s9ta")[0]

window.addEventListener("click", async (event) => {
    var el = event.target;
    if(el.classList.toString().includes("css-1u1s9ta e176ivn28"))
    {
        console.log(el.innerHTML);
        browser.runtime.sendMessage({"userName": el.innerHTML}).then((res) => console.log(res), (e) => console.log(e)).catch(e => console.log("ERROR"));
    }
    else if (el.classList.toString().includes("css-106697k e176ivn218"))
    {
        var newEl = el.parentElement.parentElement.childNodes[1].childNodes[0].childNodes[1];
        browser.runtime.sendMessage({"userName": newEl.innerHTML}).then((res) => console.log(res), (e) => console.log(e)).catch(e => console.log("ERROR"));
    }
});

// var oldHref = document.location.href;
// console.log(oldHref);

// window.onload = function() {
//     var bodyList = document.querySelector("body")

//     var observer = new MutationObserver(function(mutations) {
//         mutations.forEach(function(mutation) {
//             if (oldHref != document.location.href) {
//                 oldHref = document.location.href;
//             }
//         });
//     });
    
//     var config = {
//         childList: true,
//         subtree: true
//     };
    
//     observer.observe(bodyList, config);
// };

// browser.runtime.sendMessage({"url":"kaas"});
// console.log(this.browser);
// const getCurrentTab = browser.tabs.Tab.url;
// console.log(browser);
// getCurrentTab.then(onGot, onError);

// init().catch(e => console.error(e));