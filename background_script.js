// Put all the javascript code here, that you want to execute in background.
const urlSignature = "vrchat.com/home/user/";

let selectedUserName = null;
let selectedUserId = null;

async function tabUpdated()
{
    var tabs = await browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT});
    var tab = await browser.tabs.get(tabs[0].id);

    if(tab.url.includes(urlSignature))
    {
      selectedUserId = tab.url.split(urlSignature + "usr_")[1];
      console.info("Selected User: " + selectedUserId);
    }
}
  
/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
  if(req?.userName != null)
    selectedUserName = req.userName;

  if(selectedUserId == null)
    return Promise.reject("No friend selected");

  //https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
  var tags = [];
  await browser.storage.local.get(selectedUserId).then((obj) => {
    var t = obj[selectedUserId];
    if(t == null)
      return;
    else if(t.length > 0)
    {
      t.forEach(tag => {
        tags.push(tag);
      });
    }
  }, () => console.log("CANT GET"));
  if(req?.tag != null)
  {
    tags.push(req.tag);
    var key = selectedUserId;
    var obj = {};
    obj[key] = tags;
    await browser.storage.local.set(obj).then(() => console.log("OK"), () => console.log("NO-K"));
  }
  console.log("TAGS:");
  console.log(tags);
  return Promise.resolve(
    {
      "userName":selectedUserName,
      "userId":selectedUserId,
      "tags":tags,
    }
  );
});

browser.tabs.onUpdated.addListener(tabUpdated);