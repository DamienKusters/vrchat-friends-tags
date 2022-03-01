browser.runtime.sendMessage("get").then(res => {
    document.getElementById("lbl_userName").innerText = res.userName;
    document.getElementById("lbl_userId").innerText = res.userId.slice(0,8) + "...";
}).catch(e => document.getElementById("lbl_userId").innerText = e);