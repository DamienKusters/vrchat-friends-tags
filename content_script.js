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
window.addEventListener("click", () => {
    browser.runtime.sendMessage({"userName": document.getElementsByClassName("css-aqta49")[0].parentElement.innerHTML.split("</span>")[2]}).then((res) => console.log(res), (e) => console.log(e)).catch(e => console.log("ERROR"));
});

// browser.runtime.sendMessage({"url":"kaas"});
// console.log(this.browser);
// const getCurrentTab = browser.tabs.Tab.url;
// console.log(browser);
// getCurrentTab.then(onGot, onError);

// init().catch(e => console.error(e));