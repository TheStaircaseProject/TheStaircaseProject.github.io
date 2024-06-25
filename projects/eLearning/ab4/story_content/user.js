window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script2 = function()
{
  const p = GetPlayer();
let tmpVol = window.DS.appState.currentVolume();
p.SetVar("tmpVolume", tmpVol);
console.log("The course loads with a volume of " + tmpVol + ".");
}

window.Script3 = function()
{
  const appState = window.DS.appState
let currentVol = appState.currentVolume();

if ( currentVol > 0.1 ) {
	let targetVol = currentVol - 0.1;
	appState.setVolume(targetVol);
	GetPlayer().SetVar("tmpVolume", targetVol);
}
}

window.Script4 = function()
{
  const appState = window.DS.appState
let currentVol = appState.currentVolume();

if ( currentVol < 1 ) {
	let targetVol = currentVol + 0.1;
	appState.setVolume(targetVol);
	GetPlayer().SetVar("tmpVolume", targetVol);
}
}

window.Script5 = function()
{
  const appState = window.DS.appState
let currentVol = appState.currentVolume();

if ( currentVol > 0.1 ) {
	let targetVol = currentVol - 0.1;
	appState.setVolume(targetVol);
	GetPlayer().SetVar("tmpVolume", targetVol);
}
}

window.Script6 = function()
{
  const appState = window.DS.appState
let currentVol = appState.currentVolume();

if ( currentVol < 1 ) {
	let targetVol = currentVol + 0.1;
	appState.setVolume(targetVol);
	GetPlayer().SetVar("tmpVolume", targetVol);
}
}

};
