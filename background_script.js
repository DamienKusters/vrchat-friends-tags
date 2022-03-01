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
browser.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if(req?.userName != null)
    selectedUserName = req.userName;

  if(selectedUserId == null)
    return Promise.reject("No friend selected");
  return Promise.resolve(
    {
      "userName":selectedUserName,
      "userId":selectedUserId,
    }
  );
});

browser.tabs.onUpdated.addListener(tabUpdated);