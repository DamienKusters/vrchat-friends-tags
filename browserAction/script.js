var fullUserId = null;

browser.runtime.sendMessage("get").then(res => {
    document.getElementById("lbl_userName").innerText = res.userName;
    fullUserId = res.userId;
    document.getElementById("lbl_userId").innerText = fullUserId.slice(0,8) + "...";
}).catch(e => document.getElementById("lbl_userId").innerText = e);

document.getElementById("btn_tag").addEventListener("click", () => {
    const text = document.getElementById("tbx_tag").value;
    document.getElementById("content_body").innerHTML += "<div class='tag'>"+text+"<div class='btn_del'></div></div>";
    browser.runtime.sendMessage({"tag": text});
});

document.getElementById("lbl_userId").addEventListener("mouseenter", () => {
    if(fullUserId != null)
        document.getElementById("lbl_userId").innerText = fullUserId;
});

document.getElementById("lbl_userId").addEventListener("mouseleave", () => {
    if(fullUserId != null)
        document.getElementById("lbl_userId").innerText = fullUserId.slice(0,8) + "...";
});