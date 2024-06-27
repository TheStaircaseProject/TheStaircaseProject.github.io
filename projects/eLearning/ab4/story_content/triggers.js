function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gs0ONYDWs1":
        Script1();
        break;
      case "5ZqwOXS1fP7":
        Script2();
        break;
      case "5WgA07thcRj":
        Script3();
        break;
      case "5gSwOTTFN3b":
        Script4();
        break;
      case "6cjfr1I7xy4":
        Script5();
        break;
      case "5mgHjCttWuH":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6ErFe0kEnwx');
const duration = 750;
const easing = 'ease-out';
const id = '6DDEsL6ilFe';
const pulseAmount = 0.07;
const delay = 37000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
