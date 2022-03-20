var fullUserId = null;

browser.runtime.sendMessage("get").then(res => {
    document.getElementById("lbl_userName").innerText = res.userName;
    fullUserId = res.userId;
    document.getElementById("lbl_userId").innerText = fullUserId;
    if(res.tags.length > 0)
        res.tags.forEach(tag => {
            document.getElementById("content_body").innerHTML += "<div class='tag'>"+tag+"<div class='btn_del'></div></div>";
        });
}).catch(e => document.getElementById("lbl_userId").innerText = e);

document.getElementById("btn_tag").addEventListener("click", () => {
    const text = document.getElementById("tbx_tag").value;
    if(text == "")
        return;
    document.getElementById("content_body").innerHTML += "<div class='tag'>"+text+"<div class='btn_del'></div></div>";
    browser.runtime.sendMessage({"tag": text});
    document.getElementById("tbx_tag").value = "";
});

document.getElementById("btn_del").addEventListener("click", () => {
    //TODO
});