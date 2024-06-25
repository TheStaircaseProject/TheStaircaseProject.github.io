function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DOzPKNci5f":
        Script1();
        break;
      case "6QQjjHYtq0j":
        Script2();
        break;
      case "6MasHwsTAWw":
        Script3();
        break;
      case "6KtQ3KAael9":
        Script4();
        break;
      case "5dYPT3RlYJ8":
        Script5();
        break;
      case "6FRWT3NDXI7":
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
