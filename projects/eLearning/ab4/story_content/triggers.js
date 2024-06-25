function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69GifhWpc8q":
        Script1();
        break;
      case "5bCI0to0jDa":
        Script2();
        break;
      case "61x66NKFlk2":
        Script3();
        break;
      case "6o4IKeyWhFn":
        Script4();
        break;
      case "68ROV4FoMbo":
        Script5();
        break;
      case "6Rv3eAZbflk":
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
