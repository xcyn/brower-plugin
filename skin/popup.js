window.onload = function(){
    // 绑定换肤
    var btnIds = ['black', 'red', 'blue', 'green', 'white'];
    for(var i = 0; i < btnIds.length; i++) {
        (function(i) {
            var btn = document.getElementById(btnIds[i]);
            var Bgc = btnIds[i];
            btn.addEventListener('click', function() {
                executeScriptToCurrentTab(`document.body.style.backgroundColor="${Bgc}";`)
            })
        })(i)
    }
}

// 向content-script注入JS片段
function executeScriptToCurrentTab(code)
{
	getCurrentTabId((tabId) =>
	{
        console.log('chrome.tabs', chrome.tabs, tabId)
		chrome.tabs.executeScript(tabId, {code: code});
	});
}

// 获取当前选项卡ID
function getCurrentTabId(callback)
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		if(callback) callback(tabs.length ? tabs[0].id: null);
	});
}