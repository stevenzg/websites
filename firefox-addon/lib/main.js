//search icon keywords: websites icon black

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "gyf1-websites",
  label: "Frontend Websites",
  icon: {
    "16": "./world-16.png",
    "32": "./world-32.png",
    "64": "./world-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://gyf1.com/websites");
}
