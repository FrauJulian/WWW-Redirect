var hostname = window.location.host;
var urlWithoutPort = `https://${hostname}`;
window.location.replace("https://www."+hostname);
console.log(urlWithoutPort);